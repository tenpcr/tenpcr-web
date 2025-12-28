import "@/styles/globals.css";
import "@/styles/fonts.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Providers from "./providers";


export const metadata = {
  title: {
    default: "Pachara Peerakentanet | TenPCR",
    template: "%s | TenPCR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
