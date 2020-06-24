import Link from "next/link";
import slugify from "slugify";

export default function ({location, is, firma, id}) {

  const slug = slugify(is, {
    lower: true
  });
  return (
    <Link href="/ilan/[id]/[slug]" as={`/ilan/${id}/${slug}`}>
      <a className="is_ilan_card">
        <header>
          <div className="yer">{location}</div>
          <h3>{is}</h3>
          <div className="is_tipi">
            <div className="name">{firma}</div>
          </div>
        </header>
      </a>
    </Link>
  );
}
