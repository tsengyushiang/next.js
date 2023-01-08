const { i18n } = require('./next-i18next.config');
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
}

const githubPagesConfig = (github_repo_name) => {
  console.log(github_repo_name)
  if (process.env.NODE_ENV == 'production') {
    return {
      assetPrefix: `/${github_repo_name}`,
      basePath: `/${github_repo_name}`,
      images: {
        loader: "akamai",
        path: `/${github_repo_name}`
      }
    }
  }
  return {};
}

module.exports = {
  ...nextConfig,
  ...githubPagesConfig(`${process.env.NEXT_PUBLIC_REPO}`.split('/')[1])
}
