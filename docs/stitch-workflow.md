# Stitch MCP Workflow

This project uses a dedicated Stitch MCP setup to guide portfolio planning, copy iteration, and section expansion while keeping the Next.js app structure simple.

## Configuration

- MCP config lives in `opencode.json`
- Server name is `stitch`
- The workflow assumes the remote Stitch endpoint is available before AI-assisted tasks are run

## Project workflow

### 1. Define portfolio intent

Use Stitch to shape the content before editing code.

- Clarify the portfolio owner, audience, and positioning
- Decide which sections the landing page needs
- Draft the tone for headlines, project descriptions, and call-to-action text

Recommended content model for this project:

- `hero`: title, intro, primary CTA, secondary CTA
- `about`: short brand or personal statement
- `work`: 3 to 6 featured case studies
- `contact`: email, social links, booking CTA

### 2. Convert content into page structure

After content is agreed, map it into `src/app/page.tsx`.

- Keep each section as a clear block in the page
- Store repeatable project content in arrays or plain objects
- Prefer server-rendered static content unless interactivity is necessary

### 3. Apply visual direction

Use Stitch outputs to refine visual language, then implement in `src/app/globals.css` and `src/app/page.tsx`.

- Keep the warm editorial theme unless the portfolio brand changes
- Use `layout.tsx` for metadata and font decisions
- Use CSS variables in `globals.css` for colors, surfaces, and typography tokens

### 4. Validate implementation

After each meaningful change:

- Run `npm run lint`
- Run `npm run build`
- Check responsive behavior in local dev with `npm run dev`

## Suggested Stitch task prompts

Use prompts like these with the configured Stitch MCP server:

### Portfolio strategy

```text
Create a concise personal portfolio content strategy for a creative frontend developer. Include hero copy, an about paragraph, 3 featured project summaries, and a contact CTA.
```

### Visual refinement

```text
Refine this portfolio direction into an editorial, warm, premium web experience. Suggest typography mood, color palette, section pacing, and CTA style.
```

### Case study rewrite

```text
Rewrite these project descriptions to sound sharper, more premium, and portfolio-ready without becoming overly corporate.
```

## File responsibilities

- `opencode.json`: Stitch MCP connection
- `src/app/page.tsx`: portfolio content and section composition
- `src/app/globals.css`: design tokens and shared visual styling
- `src/app/layout.tsx`: metadata and global font setup

## Expansion path

When extending this project, follow this order:

1. Generate or refine content with Stitch
2. Update section structure in `src/app/page.tsx`
3. Adjust design tokens or layout in `src/app/globals.css`
4. Re-run lint and build
