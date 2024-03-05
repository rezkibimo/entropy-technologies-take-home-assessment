This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Explanation

For this project, I'm utilizing the latest version of Next.js for its numerous features, including client-side rendering and Incremental Static Regeneration (ISR), which are native in the latest version if Nextjs. For this project I have gone with native first approach meaning I wont be using any dependencies or repos. 

For the styling, to make sure it have consistent styling and breakpoints, I'm using TailwindCSS to quickly bootstrap the project. 

For unit testing, I've chosen Playwright due to its seamless integration with GitHub Actions (CI/CD) and VSCODE, which simplifies setup and configuration (featuring a native GUI tool for creating playwright tests using VSCODE plugins). ]

For deployment I'm using Vercel, since it got native integration with Github CI/CD for quick deployment. 

## Checklists

- [x] Nextjs project with TS support
- [x] Responsive design with Tailwindcss
- [x] Working todo list with localStorage
- [x] Weather widget with openweathermap
- [ ] Articles with newsapi
- [x] Deployed on Vercel
- [x] Quotes of the day using dummyjson
- [x] All APIs loaded using ENV
- [x] ESLint config
- [x] Unit testing with Playwright

Note: Unfortunately, NewsAPI requires a paid plan to use it outside of localhost COR, which also applies to alternative APIs. I attempted to create a basic RSS feed, but many popular news sites have started blocking RSS feed usage outside the intended use or deprecating RSS feeds. As a result, I've developed a simple article layout using JSONPlaceholder.