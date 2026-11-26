/** The executive bench: one source for every page that shows bench members
 *  (/bench and the Network hero). Images live in /public/images/people. */
export const BENCH_ROSTER = [
  { category: "cdo", name: "Adaeze Okafor", role: "Fractional CDO", country: "Nigeria", image: "adaeze-okafor.webp", bio: "Fifteen years across payments and banking. Builds design organisations that defend their budget with numbers." },
  { category: "cdo", name: "Tunde Bakare", role: "Fractional CDO", country: "Nigeria · United Kingdom", image: "tunde-bakare.webp", bio: "Led design at two unicorns. Specialises in zero-to-one design leadership installs." },
  { category: "vp", name: "Zainab Mohammed", role: "VP Design", country: "Nigeria", image: "zainab-mohammed.webp", bio: "Runs design where the stakes are clinical, across digital products and physical care." },
  { category: "vp", name: "Kwame Mensah", role: "VP Design", country: "Ghana", image: "kwame-mensah.webp", bio: "A design systems operator who makes output faster, more consistent and less expensive to maintain." },
  { category: "head", name: "Amara Diallo", role: "Head of Design", country: "Senegal", image: "amara-diallo.webp", bio: "A consumer growth designer turned leader who ties brand work directly to acquisition cost." },
  { category: "head", name: "Femi Adeyemi", role: "Head of Design", country: "Nigeria", image: "femi-adeyemi.webp", bio: "Designs for operators, not just users: dashboards, dispatch and the messy middle of logistics." },
  { category: "cdo", name: "Nadia Hassan", role: "Fractional CDO", country: "Egypt", image: "nadia-hassan.webp", bio: "Leads enterprise design transformation across procurement, compliance and complex organisations." },
  { category: "head", name: "Sipho Ndlovu", role: "Head of Design", country: "South Africa", image: "sipho-ndlovu.webp", bio: "Research-led design for regulated industries, turning compliance constraints into design advantages." },
] as const;

/** Distinct countries on the bench ("Nigeria · United Kingdom" counts both). */
export const BENCH_COUNTRIES = new Set(BENCH_ROSTER.flatMap((p) => p.country.split(" · ")));
