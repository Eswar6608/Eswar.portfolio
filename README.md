This is a Next.js portfolio project with Tailwind and a project-specific Stitch MCP workflow.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Core files:

- `src/app/page.tsx` - portfolio page sections
- `src/app/globals.css` - design tokens and shared styling
- `src/app/layout.tsx` - metadata and fonts
- `opencode.json` - Stitch MCP configuration
- `docs/stitch-workflow.md` - project-specific Stitch workflow
- `src/content/portfolio-brief.ts` - reusable portfolio brief and prompt seeds

## Stitch MCP workflow

This project includes a dedicated Stitch workflow for:

- portfolio content planning
- section copy refinement
- visual direction prompts
- case study rewriting

See `docs/stitch-workflow.md` for the recommended flow.

## Quality checks

Run these before shipping changes:

```bash
npm run lint
npm run build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
