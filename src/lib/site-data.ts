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
  author: string;
  authorRole: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
    }[];
  };
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
      "Why disciplined scope, clear workflows, and fewer moving parts usually create stronger enterprise products.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcez933rfT-6nEm4t_WAMFtvlZ6oM04x9MifAexpqb7-Kkdu8qZdSM-FNmi1PyBIRbrUXdCsEXtwIzBI9YRyyBsZqwbKfZRjsUa669r3bWNO4OqcG1V47kAcQzVdvfA0YdiHwxuKlPpjB399dwLVScWV9bxvBNUYEmi1UUSlniXjQnPmI7hUJcbXajNQIjAjALpOsneqi-h0Mm0yIDE1F97xkVE8-VVFzChxMpkr9CxKFABZ4ZN_Pil_n7BRCpNbTDLmk2tJYbWl4",
    author: "Eswaran A",
    authorRole: "Full-Stack Developer",
    content: {
      intro:
        "Enterprise software becomes expensive when every release adds another layer of exception handling, permissions, configuration, and UI noise. The teams that scale well are usually the ones that keep removing friction instead of celebrating complexity.",
      sections: [
        {
          heading: "Start with the core workflow",
          paragraphs: [
            "A production product should make the primary task feel obvious within seconds. When a dashboard, form, or reporting screen tries to serve every stakeholder at once, the most common user journey gets buried.",
            "Functional minimalism is not about making the interface empty. It is about identifying the few actions that matter most and letting those actions drive layout, copy, and engineering priorities.",
          ],
        },
        {
          heading: "Complexity should stay behind the boundary",
          paragraphs: [
            "The system behind the UI may still be sophisticated, but production quality means shielding users from that internal complexity. Good architecture keeps edge cases, retries, integrations, and policy rules inside reliable service boundaries.",
            "That separation helps teams test faster, onboard new developers more easily, and reduce the number of regressions introduced by unrelated changes.",
          ],
        },
        {
          heading: "Measure usefulness, not feature count",
          paragraphs: [
            "The strongest enterprise products rarely win because they have the most features. They win because users can complete work faster, with fewer decisions and less training.",
            "Before adding another panel, filter, or automation, ask whether it shortens the path to value. If it does not, it is usually maintenance debt in disguise.",
          ],
        },
      ],
    },
  },
  {
    slug: "micro-frontends",
    title: "When a Frontend Is Ready to Split Into Micro-Frontends",
    category: "Engineering",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    excerpt:
      "A practical guide to knowing when modular frontends solve real delivery problems and when they only increase surface area.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBswjXoFZ1ZHhOBu53r5-4qJP527mc7NZ0aFzIfOYNkaLtS5VKSlTw-ieu7VJktUgdTXBImXAiuvynFROuONHOpWDv0wVwckueKTMMEEGIuFPHy7GsCtnBetW8t7xVwUF1H4mC-jG1Ng6eknNR_SPDy2yFloMaaRfBeFHn-sHd5uYEQBKOEUICx7Yx9L_uJwuZebheLhm0WPgMrElTwrWuapMSR4xswUeMQSMqihShX7qyq6PpgY4sJHjh2JHzcmfOMBmLJqXCtHcE",
    author: "Eswaran A",
    authorRole: "Full-Stack Developer",
    content: {
      intro:
        "Micro-frontends can improve team autonomy, but they are not a shortcut to better architecture. If the product does not already have clear domain boundaries, splitting the frontend usually moves coordination problems into runtime.",
      sections: [
        {
          heading: "Use team boundaries as the first signal",
          paragraphs: [
            "A modular frontend starts making sense when different teams own different business domains, deploy on different cadences, and need to evolve without waiting on a shared release train.",
            "If one small team still owns everything, a well-structured monorepo with strong component boundaries is often the simpler and safer choice.",
          ],
        },
        {
          heading: "Shared standards matter more than shared code",
          paragraphs: [
            "Production micro-frontends need conventions for accessibility, routing, analytics, observability, and design tokens. Without those standards, users experience a collection of screens instead of one product.",
            "The success metric is not whether each domain can ship independently. It is whether the product still feels cohesive after many independent releases.",
          ],
        },
        {
          heading: "Optimize for operational clarity",
          paragraphs: [
            "Every split adds new deployment paths, version compatibility rules, and failure modes. Teams should be able to answer who owns what, how incidents are traced, and how shared dependencies are upgraded.",
            "If those answers are unclear, the architecture is probably splitting too early.",
          ],
        },
      ],
    },
  },
  {
    slug: "dark-ui-surfaces",
    title: "Micro-interactions: The Secret to Perceived Performance",
    category: "Guides",
    date: "Jan 15, 2024",
    readTime: "5 min read",
    excerpt:
      "How timely motion, feedback states, and loading cues make web products feel faster and more trustworthy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCK01xhw0WGrPwGlUeF5JLkPQUhOCwu09g5-C68V83M8as10iFWeecOZWYYxWexho9xUiiOVZY4MFsDGG2HSVViAM5f8al2tlDMX21HwggTastFJxAEohEJbqDtAXCfYIA8MyV98OA9xrr1LcGlx6TiPvJBurgH_OFcY2ClCZphi2if7IC3LUzIf2LHd8Wx-YUSoqMR9_RLLGclpCiYVq4M_gOteC57Gicbb06Pp2lVe9VauGWo-VrQ8jGpsFTyGJQp9mizkpOQJfk",
    author: "Eswaran A",
    authorRole: "Full-Stack Developer",
    content: {
      intro:
        "Users do not experience performance as a chart. They experience it through confidence. Clear feedback, stable layouts, and responsive transitions tell people the interface is working even before the network request finishes.",
      sections: [
        {
          heading: "Feedback should confirm intent immediately",
          paragraphs: [
            "Buttons, forms, and filters should acknowledge user input the moment an action begins. Even a subtle state change reduces uncertainty and prevents duplicate submissions.",
            "The goal is not decorative animation. The goal is to answer the silent question every user asks: did the system receive my action?",
          ],
        },
        {
          heading: "Motion should support the mental model",
          paragraphs: [
            "Transitions work best when they explain spatial relationships between states. Expanding a panel, replacing content, or revealing new data should feel connected to the previous screen, not abrupt.",
            "That continuity lowers cognitive load and helps the product feel more polished under real-world latency.",
          ],
        },
        {
          heading: "Small delays need intentional design",
          paragraphs: [
            "Loading skeletons, optimistic updates, and progressive disclosure are often more valuable than raw animation. They help users stay oriented while asynchronous work finishes in the background.",
            "Perceived performance improves when the interface keeps communicating instead of freezing between state changes.",
          ],
        },
      ],
    },
  },
  {
    slug: "nextjs-14-review",
    title: "Shipping Production Features With the App Router",
    category: "Guides",
    date: "Jan 12, 2024",
    readTime: "9 min read",
    excerpt:
      "A grounded look at how to structure App Router projects so routing, metadata, and server work stay maintainable as the codebase grows.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB99ePRme7qXcrhroT3BZyeCEBFBD3ppu_gCe53j4KsDrG4jC9qFgmuQZRAC8_-cJ8u-gzzdT5ioG9ew1x9D-CUC7C0GKzYMohZX84zJ3Tgg5n6pcXQYkbLj0ckY2QH6UREld7aixKumgbpKB2ZoxDC7U0QwbEg7R1abqXwx7o7ZOudcGEL0HM0WV5F8eYVxnDCgu3c8Ls1Y6vYdxnmrlo3ENX030sP66ax66l6Wwo62mR0wGgmUfDWfwRDqnl3epNVp76qbpbM6OA",
    author: "Eswaran A",
    authorRole: "Full-Stack Developer",
    content: {
      intro:
        "The App Router is powerful when teams use it to separate concerns cleanly. It becomes hard to maintain when every route mixes data loading, UI composition, metadata, and business logic in one place.",
      sections: [
        {
          heading: "Keep route files thin",
          paragraphs: [
            "A route should primarily compose data and presentation. The more helper logic, transformation rules, and side effects you move into dedicated modules, the easier the route becomes to test and reason about.",
            "Thin route files also make metadata, loading states, and error boundaries easier to manage as the project expands.",
          ],
        },
        {
          heading: "Choose rendering mode intentionally",
          paragraphs: [
            "Not every page needs dynamic rendering. Static pages with well-scoped dynamic islands often give the best mix of speed, SEO, and operational simplicity.",
            "Teams get into trouble when they treat dynamic rendering as a default instead of a trade-off.",
          ],
        },
        {
          heading: "Production polish lives in the details",
          paragraphs: [
            "Metadata, Open Graph assets, error states, and empty states matter as much as the main layout. These are the pieces that shape how the product behaves outside the happy path.",
            "A production-ready App Router project feels complete because every route handles both success and failure with intention.",
          ],
        },
      ],
    },
  },
  {
    slug: "rust-beyond-hype",
    title: "What Makes a Portfolio Project Feel Senior",
    category: "Career",
    date: "Jan 05, 2024",
    readTime: "6 min read",
    excerpt:
      "The difference between a tutorial clone and a portfolio piece that communicates judgment, ownership, and production awareness.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA8SOFNlQpL3pDNZwRKOwSKeLLA4NuPzM1oQEfr6aOdnFYGK6z4GZlmAeXpnspmx6H7yAThvnFCTc7tFHkRNKZ9c6dLxTr_pjixQVLe-khp_ltPAI5qHE0buvpP69Zx_7t90Ch2c24XEJC5CDPGZR9Ac-LUFi66JWEUIXzhAtu267Eq9hKv9wtuGOCrWqLcfx2334h2dbP5TzgEpASBPWzzHDDR1GNKWIUn-ZdxrpQcpq-gE3vssZNxgFlXvY1bEzd9X2EubecEb0w",
    author: "Eswaran A",
    authorRole: "Full-Stack Developer",
    content: {
      intro:
        "A strong portfolio project is more than a nice UI. It should show how you think through scope, architecture, trade-offs, and the details that make software dependable in production.",
      sections: [
        {
          heading: "Tell the story behind the build",
          paragraphs: [
            "Hiring teams want to understand the problem, not just the stack. Explain why the project exists, what constraints shaped it, and what decisions were made to balance delivery speed with code quality.",
            "That context turns a project from a gallery piece into evidence of real engineering judgment.",
          ],
        },
        {
          heading: "Show operational thinking",
          paragraphs: [
            "A production-minded project includes validation, accessibility, loading states, metadata, and deployment considerations. These details signal that you understand what happens after the first demo.",
            "Even a small project feels more senior when it handles edge cases with care.",
          ],
        },
        {
          heading: "Polish the final ten percent",
          paragraphs: [
            "Consistency in copy, spacing, responsive behavior, and component structure has a bigger impact than adding another feature. Recruiters notice when the experience feels complete.",
            "The final layer of polish communicates ownership, and ownership is what makes a portfolio memorable.",
          ],
        },
      ],
    },
  },
  {
    slug: "tailwind-configuration",
    title: "Mastering Tailwind Configuration",
    category: "Guides",
    date: "Dec 20, 2023",
    readTime: "10 min read",
    excerpt:
      "How to shape Tailwind into a maintainable design system with tokens, constraints, and scalable component patterns.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjCJjfIGsdNVb5JDmS1heAFrKUmX1bcIp723LUuQH8KUpx_FFfjvvFvHhsd_9HfbcXC0Dd1BEHJwI2fPq7t0Iq3r49NBW8rwrbxsB_Up2lspPcvRUW6nssPQbL31g0Jkw5UZFnOrR224rFRPGvSDjcRiCPOrEwo7eXrYKEIpDMwni5TRm7CCqCLcYGm74-zq8F_Y5FjHI8sPTRSJURBhHrnS9n8W2_3ONN8l_lh_yiWPVcyMnygUnyIX1RHfdEdQOm5R2zs7xQg9o",
    author: "Eswaran A",
    authorRole: "Full-Stack Developer",
    content: {
      intro:
        "Tailwind moves quickly when it reflects a clear system. Without shared tokens and component conventions, utility classes slowly become another form of inconsistency.",
      sections: [
        {
          heading: "Start with design decisions, not utilities",
          paragraphs: [
            "Teams should define spacing, typography, color usage, and surface behavior before composing large pages. Those decisions become the backbone of reusable classes and components.",
            "When tokens are deliberate, Tailwind speeds up development instead of multiplying visual exceptions.",
          ],
        },
        {
          heading: "Build components around repeatable patterns",
          paragraphs: [
            "Buttons, cards, forms, and layout shells should encode the most common product patterns. This keeps product work focused on content and behavior rather than repeating low-level decisions on every page.",
            "A mature Tailwind codebase is recognizable because repeated interfaces are built the same way every time.",
          ],
        },
        {
          heading: "Protect the system as the product grows",
          paragraphs: [
            "Production teams benefit from review rules that catch one-off color values, inconsistent spacing, and deeply nested class strings before they spread. Small deviations add up quickly in growing frontends.",
            "The goal is not to restrict creativity. It is to make high-quality decisions easier to repeat.",
          ],
        },
      ],
    },
  },
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/eswar07/" },
  { label: "GitHub", href: "https://github.com/Eswar6608" },
  // { label: "Twitter", href: "#" },
  // { label: "Dribbble", href: "#" },
];
