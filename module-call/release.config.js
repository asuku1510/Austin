module.exports = {
    branches: "dev",
    repositoryUrl: "https://github.com/asuku1510/Austin.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
}