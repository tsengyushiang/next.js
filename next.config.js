const nextConfig = {
  reactStrictMode: true,
};

const githubPagesConfig = (githubConfig) => {
  if (githubConfig) {
    console.log(`Build with process.env.NEXT_PUBLIC_REPO=${githubConfig}.`);
    const repoName = githubConfig.split("/")[1];
    return {
      assetPrefix: `/${repoName}`,
      basePath: `/${repoName}`,
      images: {
        loader: "akamai",
        path: `/${repoName}`,
      },
    };
  }
  return {};
};

module.exports = {
  ...nextConfig,
  ...githubPagesConfig(process.env.NEXT_PUBLIC_REPO),
};
