import { breadcrumbJsonLd } from "./seo";

/** Renders structured data. `<` is escaped so that text coming from the
 * agenda sheet can never close the script tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return <JsonLd data={breadcrumbJsonLd(items)} />;
}
