import { notFound } from "next/navigation";

// Disabled route: Always return 404. We leave a minimal stub to avoid build issues.
export default function DisabledBlogSlugRoute() {
  notFound();
}
