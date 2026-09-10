# Design Lever MVP

Standalone launch site for the three live pages:

- `/`
- `/practice`
- `/about`

All booking calls-to-action lead to the configured Conectr booking page. The
remaining Design Lever lines are presented as coming soon, with no dead links.

## Deploy to Vercel

Import this directory as its own Vercel project, or set the Vercel **Root
Directory** to `design-lever-mvp` if the parent folder is in a repository.
Vercel will use `npm run build` and deploy the static `out/` export.
