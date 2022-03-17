const path = require("path");
const webpack = require("webpack");
const sass = require("sass");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer")({
  overrideBrowserslist: ["> 1%", "last 2 versions", "Firefox ESR"],
  remove: false
});

module.exports = (env, argv) => {
  // Settings
  // --mode ... --devtool  ...
  console.log(`
Build started with following configuration:
===========================================
→ mode: ${argv.mode}
→ devtool: ${argv.devtool}
`);

  const publicPath = "/assets/";
  const limit = 1024;

  return {

    performance: {
          maxEntrypointSize: 850000,
          maxAssetSize: 850000
        },

    entry: {
      app: [
        path.resolve(__dirname, "scripts", "app.ts")
      ]
    },
    output: {
      path: path.resolve(__dirname, "..", "themes", "bootique-theme", "static", "assets"),
      filename: "[name].js?[contenthash]",
      publicPath
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    bail: false,
    module: {
      rules: [{
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }, {
        test: /\.s[ac]ss$/,
        use: [
            argv.mode === 'production' ? "style-loader" : MiniCssExtractPlugin.loader,
            { loader: "css-loader",
                options: {
                    sourceMap: true,
                }
            },
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [[function () {
                                       return [
                                           autoprefixer
                                       ];
                                    }
                                ],
                        ],
                    },
                    sourceMap: true,
                },
            },
            {
                loader: "sass-loader",
                options: {
                    implementation: sass,
                    sourceMap: true,
                }
            }
        ]
      }, {
        test: /\.css$/,
        use: [
            argv.mode === 'production' ? "style-loader" : MiniCssExtractPlugin.loader,
            { loader: "css-loader",
                options: {
                    sourceMap: true,
                },
            },
            {
                loader: "postcss-loader",
                options: {
                    postcssOptions: {
                        plugins: [[function () {
                                       return [
                                           autoprefixer
                                       ];
                                    },
                                ],
                        ],
                    },
                    sourceMap: true,
                },
            }]
      }, {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
        use: [
            {
                loader: "url-loader",
                options: {
                    limit,
                    publicPath,
                    name: "/images/[name].[ext]?[contenthash]"
                },
            },
        ],
      }, {
        test: /\.svg$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
        use: [
            {
                loader: "url-loader",
                options: {
                    limit,
                    mimetype: "image/svg+xml",
                    publicPath,
                    name: "fonts/[name].[ext]?[contenthash]"
                },
            },
        ],
      }, {
        test: /\.woff$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
        use: [
            {
                loader: "url-loader",
                options: {
                    limit,
                    mimetype: "application/font-woff",
                    publicPath,
                    name: "fonts/[name].[ext]?[hash]"
                },
            },
        ],
      }, {
        test: /\.woff2$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
        use: [
            {
                loader: "url-loader",
                options: {
                    limit,
                    mimetype: "application/font-woff2",
                    publicPath,
                    name: "fonts/[name].[ext]?[hash]"
                },
            },
        ],
      }, {
        test: /\.[ot]tf$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
        use: [
            {
                loader: "url-loader",
                options: {
                    limit,
                    mimetype: "application/octet-stream",
                    publicPath,
                    name: "fonts/[name].[ext]?[contenthash]"
                },
            },
        ],
      }, {
        test: /\.eot$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
        use: [
            {
                loader: "url-loader",
                options: {
                    limit,
                    mimetype: "application/vnd.ms-fontobject",
                    publicPath,
                    name: "fonts/[name].[ext]?[contenthash]"
                },
            },
        ],
      }]
    },
    plugins: [
        new MiniCssExtractPlugin({
                   filename: "app.css?[contenthash]",
                   chunkFilename: "[id].css?[contenthash]",
                 }),
        new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery",
         Popper: ['popper.js', 'default'],
         Util: "exports-loader?Util!bootstrap/js/dist/util"
        }),
        new HtmlWebpackPlugin({
         filename: "../../layouts/partials/assets.html",
         template: "assets.ejs",
         inject: false
        })
        ]
  };
};
