// Babel is used to enable TypeScript in tests.
// It is NOT part of the actual build process of the application.
module.exports = {
  presets: [
    [ '@babel/preset-env', { targets: { node: 'current' }}],
    '@babel/preset-typescript',
  ],
}