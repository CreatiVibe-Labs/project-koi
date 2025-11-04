import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { getBlogBySlug } from "@/constant/ContentApi";

// Ensure the page always renders per-request so language changes via cookie apply instantly
export const dynamic = "force-dynamic";
export const revalidate = 0;

function formatDate(input) {
  if (!input) return "--";
  // Try to parse various formats and output dd-mm-yyyy
  const d = new Date(input);
  if (!isNaN(d)) {
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  }
  return input; // fallback if already formatted
}

const CalendarIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <path
      d="M7 2v3M17 2v3M3 9h18M5 6h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const UserIcon = (props) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden {...props}>
    <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5zm0 2c-5 0-8 2.5-8 5v1h16v-1c0-2.5-3-5-8-5z" fill="currentColor" />
  </svg>
);

function normalizeLang(lang) {
  if (!lang) return "en";
  const l = String(lang).toLowerCase();
  if (l === "jp") return "ja"; // normalize jp->ja
  if (l.startsWith("zh")) return "zh"; // zh, zh-cn, zh_hans -> zh
  return l;
}

function pickLocalized(post, base, lang) {
  const code = normalizeLang(lang);
  const candidates = [
    `${base}_${code}`,
    `${base}_${code.replace("-", "_")}`,
    // sometimes projects use 'ch' instead of 'zh'
    ...(code === "zh" ? [`${base}_ch`] : []),
    `${base}_en`,
    base,
  ];
  for (const key of candidates) {
    const val = post?.[key];
    if (typeof val === "string" && val.trim()) return val;
  }
  return "";
}

export async function generateMetadata({ params, searchParams }) {
  const { slug } = params;
  try {
    const cookieStore = await cookies();
    const cookieLang = cookieStore.get("lang")?.value;
    const lang = searchParams?.lang || cookieLang || "en";
    const res = await getBlogBySlug(slug);
    const post = res?.data ?? res; // handle both shapes
    if (!post) return { title: "Article" };
    const title = pickLocalized(post, "title", lang) || "Article";
    const hero = post.featured_image || post.image || undefined;
    return {
      title,
      description: title,
      openGraph: { title, description: title, images: hero ? [hero] : [] },
    };
  } catch {
    return { title: "Article" };
  }
}

export default async function ResourceArticlePage({ params, searchParams }) {
  const { slug } = params;
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("lang")?.value;
  const lang = cookieStore.get("lang")?.value ?? 'en';

  const res = await getBlogBySlug(slug);
  const post = res?.data ?? res;
  if (!post) return notFound();

  const title = pickLocalized(post, "title", lang) || "";
  const body =
    post[`content_${normalizeLang(lang)}`] ||
    post[`content_${normalizeLang(lang).replace("-", "_")}`] ||
    pickLocalized(post, "content", lang) ||
    pickLocalized(post, "description", lang) ||
    pickLocalized(post, "long_description", lang) ||
    pickLocalized(post, "body", lang) ||
    "";
  const hero = post.featured_image || post.image || null;
  const date = formatDate(post.published_at || post.created_at || post.date);
  const siteName = "Aerialink Inc";

  return (
    <main className="relative w-full bg-transparent text-white xl:mb-[-50px] lg:mb-[-50px] md:mb-[-30px] sm:[-30px] xs:mb-[-20px] xl:mt-[-50px] lg:mt-[-50px] md:mt-[-30px] sm:mt-[-30px] xs:mt-[-20px]">
      <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Container with transparent bg and 15px backdrop blur */}
        <div className="rounded-2xl border border-white/40 backdrop-blur-[15px] shadow-lg px-4 sm:px-6 md:px-10 py-6 md:py-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">{title}</h1>

        {/* Meta row */}
        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/90">
          <span className="inline-flex items-center gap-2">
            <CalendarIcon className="text-white" />
            <span>{date}</span>
          </span>
          <span className="h-1 w-1 rounded-full bg-white/70" />
          <span className="inline-flex items-center gap-2">
            <UserIcon className="text-white" />
            <span className="truncate">{siteName}</span>
          </span>
        </div>

        {/* Hero image */}
        <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-white/10">
          {hero ? (
            <img src={hero} alt={title} className="h-auto w-full object-cover" />
          ) : (
            <div className="aspect-[16/7] w-full bg-gradient-to-b from-teal-700/40 to-teal-900/40" />
          )}
        </div>

        {/* Content */}
        {typeof body === "string" ? (
          body.trim().startsWith("<") ? (
            // If API returns HTML, render it directly
            <article
              className="mt-8 prose prose-invert max-w-none text-white"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          ) : (
            <article className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-white">
              {body
                .split(/\n\n+/)
                .filter(Boolean)
                .map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
            </article>
          )
        ) : (
          <article className="mt-8 text-base sm:text-lg leading-relaxed text-white">
            {/* If API returns structured blocks later, render accordingly */}
          </article>
        )}
        </div>
      </div>
    </main>
  );
}
