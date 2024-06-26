const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { generate } = require('@storybook/react-native/scripts/generate');

generate({
  configPath: path.resolve(__dirname, './.storybook'),
});

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
  resolver: {
    resolveRequest: (context, moduleName, platform) => {
      const defaultResolveResult = context.resolveRequest(
        context,
        moduleName,
        platform,
      );

      if (
        process.env.STORYBOOK !== 'true' &&
        defaultResolveResult?.filePath?.includes?.('./.storybook')
      ) {
        return {
          type: 'empty',
        };
      }

      return defaultResolveResult;
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
