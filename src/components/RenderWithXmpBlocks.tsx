import dynamic from "next/dynamic";
import { JSX } from "react";

const CodeBlock = dynamic(
  () => import("react-code-blocks").then((mod) => mod.CodeBlock),
  { ssr: false }
);

export default function RenderWithXmpBlocks({ html }: { html: string }) {
  const regex = /<xmp>([\s\S]*?)<\/xmp>/g;

  const elements: JSX.Element[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(html)) !== null) {
    const codeText = match[1].trim();
    const start = match.index;

    const before = html.slice(lastIndex, start);

    const cleanBefore = before
      .replace(/<p>(&nbsp;|\s)*<\/p>/gi, "")
      .replace(/<br\s*\/?>/gi, "");

    if (cleanBefore.trim() !== "") {
      elements.push(
        <div
          key={`html-${lastIndex}`}
          dangerouslySetInnerHTML={{ __html: cleanBefore.trim() }}
        />
      );
    }

    elements.push(
      <div key={`code-${start}`} className="mt-[-15px] mb-[20px]">
        <CodeBlock language="javascript" text={codeText} showLineNumbers />
      </div>
    );

    lastIndex = regex.lastIndex;
  }

  const after = html.slice(lastIndex);
  if (after.trim() !== "") {
    elements.push(
      <div key="html-end" dangerouslySetInnerHTML={{ __html: after.trim() }} />
    );
  }

  return (
    <div className="text-[1em] [&_h2]:text-[1.5em] [&_h3]:text-[1.2em] [&_ul]:list-disc">
      {elements}
    </div>
  );
}
