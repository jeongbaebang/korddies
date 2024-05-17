module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        safe: true,
        allowUndefined: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@shared': './src/shared',
          '@navigation': './src/navigation',
          '@modules': './src/modules',
        },
      },
    ],
  ],
};
