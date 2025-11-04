// Lightweight mock blog data to power the dynamic blog detail page
// Replace with your API later; shapes are kept simple and predictable.

export const BLOGS = [
  {
    slug: "the-future-of-blogging",
    title: "The Future of Blogging",
    publishedAt: "12-10-2025",
    siteName: "Project Koi",
    hero:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1400&auto=format&fit=crop",
    // Keep content as an array of paragraphs so it's easy to render and swap with API HTML/MD later.
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vehicula arcu ac laoreet sollicitudin. Etiam aliquet ante ac mi scelerisque, at commodo erat dapibus.",
      "Pellentesque non magna non nunc accumsan posuere. Integer lorem orci, malesuada non justo in, suscipit dignissim sapien. Praesent cursus, risus at vulputate ultricies, ex nisi ultrices lorem, at tristique turpis nibh et odio.",
      "Suspendisse potenti. Donec suscipit, eros id laoreet venenatis, sapien erat faucibus nisl, id varius nunc arcu ut risus. Cras ac diam non urna fermentum porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
      "Nunc dapibus, odio vitae ullamcorper suscipit, mi velit luctus dui, id placerat lectus metus at risus. Praesent ultricies risus a elit fringilla, et imperdiet est mattis.",
    ],
  },
  {
    slug: "designing-accessible-content",
    title: "Designing Accessible Content",
    publishedAt: "09-28-2025",
    siteName: "Project Koi",
    hero:
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1400&auto=format&fit=crop",
    content: [
      "Accessibility isn't a feature; it's a foundation. In this post, we explore practical patterns to make your content readable and inclusive.",
      "From color contrast to keyboard navigation and semantic HTML, these small choices compound into a great experience for everyone.",
    ],
  },
];

export function findBlogBySlug(slug) {
  return BLOGS.find((b) => b.slug === slug);
}
