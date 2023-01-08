
## Github Page CI/CD Setup

1. Create PAT at [Personal access tokens (classic) page](https://github.com/settings/tokens)
     - Check `repo`, `workflow` and copy token.

2. Add PAT at `Repo > settings > Secrets > Actions > New repository secret`
      - Named `PAT` and paste token from step1.
      - If you can't find the setting page, try https://github.com/${username}/${reponame}/settings/secrets/actions.

3. Finally, push your code to branch `preparing-ghpage`.

4. Github page only support static page, server-side function will not work properly, such as [next-i18n](https://github.com/tsengyushiang/next.js/pull/4#issue-1524353939).

## Verce; CI/CD Setup

1. Create token at [Vercel Perconal Account Setting page](https://vercel.com/account/tokens)

2. Add PAT at `Repo > settings > Secrets > Actions > New repository secret`
      - Named `VERCEL_TOEKN` and paste token from step1.
      - If you can't find the setting page, try https://github.com/${username}/${reponame}/settings/secrets/actions.

3. Finally, push your code to branch `preparing-vercel`.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
