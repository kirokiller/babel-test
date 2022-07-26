const presets = [
  "@babel/env",
  "@babel/preset-react",
  // 需要core-js 指定版本
  // [
  //   "@babel/preset-env",
  //   {
  //     targets: {
  //       edge: "17",
  //       firefox: "60",
  //       chrome: "67",
  //       safari: "11.1",
  //     },
  //     useBuiltIns: "usage",
  //   },
  // ],
];
const plugins = [
  [
    "@babel/plugin-transform-runtime",
    {
      absoluteRuntime: false,
      corejs: false,
      helpers: true,
      regenerator: true,
    },
  ],
];
module.exports = { presets, plugins };
