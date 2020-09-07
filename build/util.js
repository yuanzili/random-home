const paths = require("./paths");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === "./";
const isDev = process.env.NODE_ENV === "development";
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [{
      loader: MiniCssExtractPlugin.loader,
      options: Object.assign({},
        shouldUseRelativeAssetPaths ? {
          publicPath: "../../",
        } :
        undefined
      ),
    },
    {
      loader: require.resolve("css-loader"),
      options: cssOptions,
    },
    {
      loader: require.resolve("postcss-loader"),
      options: {
        ident: "postcss",
        plugins: () => [
          require("postcss-flexbugs-fixes"),
          require("postcss-preset-env")({
            autoprefixer: {
              flexbox: "no-2009",
            },
            stage: 3,
          }),
        ],
      },
    },
  ];
  if (isDev) {
    loaders.unshift(require.resolve("css-hot-loader"));
  }
  if (preProcessor) {
    // 添加额外的loader
    if (preProcessor === "sass-loader") {
      loaders.push({
        loader: require.resolve("sass-loader"),
        options: {
          implementation: require("sass"),
        },
      });
    } else {
      loaders.push(require.resolve(preProcessor));
    }
  }
  console.log("loaders", loaders);
  return loaders;
};
module.exports = {
  getStyleLoaders,
};