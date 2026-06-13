module.exports = function(api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo',
      'nativewind/babel'    // dipindahkan ke presets
    ],
    plugins: [
      'react-native-reanimated/plugin' // tetap jadi plugin terakhir
    ],
  };
};
