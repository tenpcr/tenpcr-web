/* eslint-disable @typescript-eslint/no-explicit-any */
import Head from "next/head";

function SEO({
  title,
  metaTitle,
  metaOGUrl,
  description,
  keywords,
  thumbnail,
  canonical,
  stylesheets,
}: any) {
  return (
    <Head>
      <title>{title ? title : "Pricedays Money"}</title>
      <meta name="description" content={description ? description : ""} />
      {stylesheets?.length > 0 &&
        stylesheets?.map((stylesheet: any, index: number) => (
          <link rel="stylesheet" href={stylesheet} key={index} />
        ))}
      {keywords?.length > 0 && (
        <meta
          name="keywords"
          content={keywords?.map((keyword: any) => keyword)}
        />
      )}
      <meta property="og:type" content="website" />
      <meta
        name="og:title"
        property="og:title"
        content={ metaTitle ?  metaTitle : "Pricedays Money"}
      />
      <meta
        name="og:description"
        property="og:description"
        content={description ? description : ""}
      />
      <meta property="og:site_name" content="Pricedays Money" />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content={ metaTitle ?  metaTitle : "Pricedays Money"}
      />
      <meta
        name="twitter:description"
        content={description ? description : ""}
      />
      <meta name="twitter:site" content="Pricedays Money" />
      <meta name="twitter:creator" content="" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      <meta
        property="og:image"
        content={thumbnail ? thumbnail : "/images/pricedays-money-cover.webp"}
      />
      <meta
        name="twitter:image"
        content={thumbnail ? thumbnail : "/images/pricedays-money-cover.webp"}
      />

      {metaOGUrl&& <meta property="og:url" content={`${metaOGUrl}`} />}
      

      {canonical && <link rel="canonical" href={canonical || ""} />}
    </Head>
  );
}

export default SEO;
