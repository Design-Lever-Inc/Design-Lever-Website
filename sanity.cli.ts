import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity/env";

/** Settings for the `sanity` command (migrations, CORS, tokens). The Studio
 *  itself is served by Next.js at /studio, so there is no separate deploy. */
export default defineCliConfig({ api: { projectId, dataset } });
