const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const defaultConfig = getDefaultConfig(__dirname);

  // SVG 설정 추가
  const { transformer, resolver } = defaultConfig;
  defaultConfig.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  defaultConfig.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  // resolverMainFields 설정 추가
  defaultConfig.resolver.resolverMainFields = [
    "sbmodern",
    ...defaultConfig.resolver.resolverMainFields,
  ];

  return defaultConfig;
})();
