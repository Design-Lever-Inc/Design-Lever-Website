import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SiteShell } from "@/components/SiteShell";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const preview = (await draftMode()).isEnabled;
  return (
    <SiteShell>
      {children}
      {/* Only in preview: lets editors click any text to jump to it in the Studio. */}
      {preview && (
        <>
          <VisualEditing />
          <a href="/api/draft-mode/disable" className="dl-preview-exit">
            Previewing unpublished changes · Exit preview
          </a>
        </>
      )}
    </SiteShell>
  );
}
