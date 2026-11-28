import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId: projectId || "unset", dataset });

/** Sanity's image CDN resizes on request, so pages ask for the size they show. */
export const imageUrl = (source: SanityImageSource) => builder.image(source).auto("format");
