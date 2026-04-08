export type NavItem = {
  href: string;
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  label?: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  accent?: "primary" | "secondary" | "tertiary";
  href?: string;
  repoHref?: string;
  layout?: "feature" | "square" | "standard" | "split";
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const githubProfileHref = "https://github.com/Eswar6608";

export const featuredProjects: Project[] = [
  {
    slug: "rio-business-solutions-website",
    title: "Rio Business Solutions Website",
    category: "Corporate",
    label: "Major Project",
    year: "2024",
    description:
      "Developed the official corporate website with a responsive UI and modular React components. I integrated backend APIs to dynamically display company services and solutions while implementing reusable layouts and optimizing page performance for faster loading, ensuring full mobile responsiveness and cross-browser compatibility.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBGdQ158-h3j0CvyMiQjkdLyc2aoUue1g1Bw_tjMDcnTGljIN6-aICJplqiQ-iopLT1__03xh6b9Mu3M7Cgr4hfgujX4H1BMBYirDgMWbi_nCjb71M5PSH3qaI5zpYifX-VLxfQcOkYhCrVQFS5WS1i7Qx9YcqhgYL94f3aDaC2jd3O6lYNUQwrzDU-2ap5sU1Rikh4ZroPFPj39JhCUbpgKbVuPpdEn5Xao-Hs1TJWMx9akPaKruBeoGsaIxbyxr1loihbj2GDBvM",
    tags: ["React.js", "Node.js", "Express.js"],
    accent: "primary",
    href: githubProfileHref,
    repoHref: githubProfileHref,
    layout: "feature",
  },
  {
    slug: "interior-design-website",
    title: "Interior Design Website",
    category: "Service Platform",
    label: "Major",
    year: "2024",
    description:
      "Built a full-stack interior service platform with dynamic content rendering and reusable components for service listings, contact forms, and galleries. I integrated REST APIs to manage service data and user interactions, significantly improving the user experience with responsive layouts and smooth, intuitive navigation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnq7InD8cnWbyCxtDm0ktBMts2Y6cd0SjIpeRDYhS-VhzBSzqGFX6AE1YsYTNQRCdOZKJNpqbrm_mRKAEOqKsLxbWdWwk-sdB6dqK7JLmcVGyqMaxpZqeuiWtQsutMyHwZ3g3F0niMl8NmzwrnixbprSWmPDu227GOF2si44sv8tOTq9klKfmnHhsEpdnOK8knzkf2bGBNLJz-MlFVcCj9aTQd8Dr9gDJ0cDMAFzIx1uqZEm_kHIv14VrE7dveIyRNBLg-qO6Fx4I",
    tags: ["React.js", "Node.js", "Express.js"],
    accent: "tertiary",
    href: githubProfileHref,
    repoHref: githubProfileHref,
    layout: "square",
  },
  {
    slug: "google-form-clone",
    title: "Google Form Clone",
    category: "Productivity",
    label: "Demo",
    year: "2024",
    description:
      "Developed a dynamic form application with input validation and controlled components. I implemented robust state management for handling form submissions and user responses, designing a clean UI structure to replicate real-world form usability with reusable form fields and validation logic.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAptMEoiSwIDLZonglGNOKBB7G_K9-moIgkZIzWlp8rYUXhLT-NJFLiKQEmQOwBp4Zsbm6oHrxdwem0fzzOAxUapczo9f1cUZO_bOnZ0cS0T1M7L9kVBBAohUA2qYMO1x5UO-OtKpDrC8-fJ9aflMxDJ9c1gkDCGM2WxXWb0Wm0Q5dQ5NX-ik8zmIxN6Z6UC70F_Y8m-0_vcnGzGBaQJMFIeL52Y1qb62IDOxCw4kgbHCWZ4uRWKKgkteQKQEPjfcK-aZnI9A-fNM",
    tags: ["Live Demo", "Source"],
    accent: "secondary",
    href: githubProfileHref,
    repoHref: githubProfileHref,
    layout: "standard",
  },
  {
    slug: "ev-solution-website",
    title: "EV Solution Website",
    category: "Sustainability",
    label: "Demo",
    year: "2024",
    description:
      "Built a responsive product and service website focused on clean UI and high performance. I structured the pages using reusable React components and routing, optimizing the navigation flow and ensuring consistent UI styling across all pages for a professional finish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD6xYo2UjVqN-VRXy6HaGZtjJQyrra0-fKafNzjjzX7qDPmCbND4cdpmgsAjbVzkhs7SHlgdVg3X7GCpSW_nmbDp4JPBYQ2sZ1wqHWLbkl1PJJ7U0E9jjl2phLDHpPhoUzo7cuBWT5rZJxDnUubcIb8ZWx1zjpQCUpf5PW9CtTojYYuNgwuK5ZoNU0iqkKwWN_NcZ7__xtWtAPWAZ-sywlyZtaqT6EWo02yRHtIepPaKGiB9wZGKaIguVaMvkHZDNTSl2ZhQVzG7sw",
    tags: ["Live Demo", "Source"],
    accent: "primary",
    href: githubProfileHref,
    repoHref: githubProfileHref,
    layout: "standard",
  },
  {
    slug: "tesla-landing-page-clone",
    title: "Tesla Landing Page Clone",
    category: "UI Replication",
    label: "Demo",
    year: "2024",
    description:
      "Recreated the Tesla homepage layout with a pixel-accurate design approach. I applied a responsive grid system and optimized images for faster load times, demonstrating proficiency in core web technologies and high-fidelity UI replication.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBo048z4l6KKfj1K3ZnYetliGTAw86pfQcNXbpSXcgndzHgRaxktNtDaSmdprPs3nWFx7w3u84QCiL0i1PBDUgSdQeBAqIq0AwuqR8ufNmBDXUVduOTCX4FARMTIZJlqME9uZsAMsxwcSK8A7qhyNOiOrQpX0lltVjr1uUIjBJve4MZ69N_Rn1zOdNwjl2kEQ3E_mOpBq1zlr-si_jdh5YhL0KUNKKi4f_50m4TpOxCAdVpAnhRHO42sWk2aO1Ka8py30jPSKf1WSU",
    tags: ["HTML", "CSS", "Bootstrap"],
    accent: "primary",
    href: githubProfileHref,
    repoHref: githubProfileHref,
    layout: "split",
  },
];

export const blogPosts: Post[] = [
  {
    slug: "future-of-full-stack",
    title: "The Case for Functional Minimalism in Enterprise Software",
    category: "Engineering",
    date: "March 12, 2024",
    readTime: "8 min read",
    excerpt:
      "Exploring why removing features often results in higher utility for core users...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcez933rfT-6nEm4t_WAMFtvlZ6oM04x9MifAexpqb7-Kkdu8qZdSM-FNmi1PyBIRbrUXdCsEXtwIzBI9YRyyBsZqwbKfZRjsUa669r3bWNO4OqcG1V47kAcQzVdvfA0YdiHwxuKlPpjB399dwLVScWV9bxvBNUYEmi1UUSlniXjQnPmI7hUJcbXajNQIjAjALpOsneqi-h0Mm0yIDE1F97xkVE8-VVFzChxMpkr9CxKFABZ4ZN_Pil_n7BRCpNbTDLmk2tJYbWl4",
  },
  {
    slug: "micro-frontends",
    title: "Rust vs. Go for Microservices: A 2024 Retrospective",
    category: "Tech",
    date: "Feb 28, 2024",
    readTime: "12 min read",
    excerpt:
      "Benchmarking throughput and memory safety in distributed architectural patterns...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBswjXoFZ1ZHhOBu53r5-4qJP527mc7NZ0aFzIfOYNkaLtS5VKSlTw-ieu7VJktUgdTXBImXAiuvynFROuONHOpWDv0wVwckueKTMMEEGIuFPHy7GsCtnBetW8t7xVwUF1H4mC-jG1Ng6eknNR_SPDy2yFloMaaRfBeFHn-sHd5uYEQBKOEUICx7Yx9L_uJwuZebheLhm0WPgMrElTwrWuapMSR4xswUeMQSMqihShX7qyq6PpgY4sJHjh2JHzcmfOMBmLJqXCtHcE",
  },
  {
    slug: "dark-ui-surfaces",
    title: "Micro-interactions: The Secret to Perceived Performance",
    category: "Guides",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    excerpt:
      "How subtle visual feedback masks latency and improves user retention rates...",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCK01xhw0WGrPwGlUeF5JLkPQUhOCwu09g5-C68V83M8as10iFWeecOZWYYxWexho9xUiiOVZY4MFsDGG2HSVViAM5f8al2tlDMX21HwggTastFJxAEohEJbqDtAXCfYIA8MyV98OA9xrr1LcGlx6TiPvJBurgH_OFcY2ClCZphi2if7IC3LUzIf2LHd8Wx-YUSoqMR9_RLLGclpCiYVq4M_gOteC57Gicbb06Pp2lVe9VauGWo-VrQ8jGpsFTyGJQp9mizkpOQJfk",
  },
  {
    slug: "nextjs-14-review",
    title: "Next.js 14: Radical Efficiency?",
    category: "Reviews",
    date: "Jan 12, 2024",
    readTime: "9 min read",
    excerpt:
      "An architect's review of server components, shifting rendering models, and practical production trade-offs.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB99ePRme7qXcrhroT3BZyeCEBFBD3ppu_gCe53j4KsDrG4jC9qFgmuQZRAC8_-cJ8u-gzzdT5ioG9ew1x9D-CUC7C0GKzYMohZX84zJ3Tgg5n6pcXQYkbLj0ckY2QH6UREld7aixKumgbpKB2ZoxDC7U0QwbEg7R1abqXwx7o7ZOudcGEL0HM0WV5F8eYVxnDCgu3c8Ls1Y6vYdxnmrlo3ENX030sP66ax66l6Wwo62mR0wGgmUfDWfwRDqnl3epNVp76qbpbM6OA",
  },
  {
    slug: "rust-beyond-hype",
    title: "Rust for Web Devs: Beyond the Hype",
    category: "Tech",
    date: "Jan 05, 2024",
    readTime: "5 min read",
    excerpt:
      "A pragmatic read on memory safety, steep learning curves, and when Rust truly earns its place in web stacks.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8SOFNlQpL3pDNZwRKOwSKeLLA4NuPzM1oQEfr6aOdnFYGK6z4GZlmAeXpnspmx6H7yAThvnFCTc7tFHkRNKZ9c6dLxTr_pjixQVLe-khp_ltPAI5qHE0buvpP69Zx_7t90Ch2c24XEJC5CDPGZR9Ac-LUFi66JWEUIXzhAtu267Eq9hKv9wtuGOCrWqLcfx2334h2dbP5TzgEpASBPWzzHDDR1GNKWIUn-ZdxrpQcpq-gE3vssZNxgFlXvY1bEzd9X2EubecEb0w",
  },
  {
    slug: "tailwind-configuration",
    title: "Mastering Tailwind Configuration",
    category: "Guides",
    date: "Dec 20, 2023",
    readTime: "10 min read",
    excerpt:
      "How to build a custom design language in Tailwind without bloating CSS or losing utility-driven speed.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjCJjfIGsdNVb5JDmS1heAFrKUmX1bcIp723LUuQH8KUpx_FFfjvvFvHhsd_9HfbcXC0Dd1BEHJwI2fPq7t0Iq3r49NBW8rwrbxsB_Up2lspPcvRUW6nssPQbL31g0Jkw5UZFnOrR224rFRPGvSDjcRiCPOrEwo7eXrYKEIpDMwni5TRm7CCqCLcYGm74-zq8F_Y5FjHI8sPTRSJURBhHrnS9n8W2_3ONN8l_lh_yiWPVcyMnygUnyIX1RHfdEdQOm5R2zs7xQg9o",
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eswar07/" },
  { label: "GitHub", href: "https://github.com/Eswar6608" },
  // { label: "Twitter", href: "#" },
  // { label: "Dribbble", href: "#" },
];
