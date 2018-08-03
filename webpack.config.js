const path = require('path');
const os = require('os');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin')
let cleanOptions = {
  root: __dirname,
  exclude: ['images'],
  verbose: true, //将log写到 console.
  dry: true, //true不要删除任何东西，主要用于测试.
};
console.log('__dirname', __dirname);
if (process.env.NODE_ENV == 'production') {
  cleanOptions.dry = false;
  cleanOptions.exclude[0] = '';
}
const config = {
  devtool: process.env.NODE_ENV == 'production' ? '' : '#source-map',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        // options: {
        //     loaders: {
        //         css: ExtractTextPlugin.extract({
        //             use: 'css-loader?minimize',
        //             fallback: 'vue-style-loader'
        //         }),
        //         sass: ExtractTextPlugin.extract({
        //             use: 'css-loader?minimize!sass-loader?indentedSyntax',
        //             fallback: 'vue-style-loader'
        //         }),
        //         stylus: ExtractTextPlugin.extract({
        //             use: 'css-loader?minimize!stylus-loader',
        //             fallback: 'vue-style-loader'
        //         }),
        //         styl: ExtractTextPlugin.extract({
        //             use: 'css-loader?minimize!stylus-loader',
        //             fallback: 'vue-style-loader'
        //         })
        //     }
        // }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: "css-loader",
          fallback: "style-loader"
        })
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-hot-loader', 'less-loader'],
          fallback: 'style-loader'
        }),
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'file-loader',
        options: {
          regExp: /\/([a-z0-9]+)\/[a-z0-9]+\.(gif|jpg|png|woff|svg|eot|ttf)$/,
          name: 'dyr-[name].[ext]',
          outputPath: 'images/'
        }
      },
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: {
          enforce: true,
          priority: 1
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 2,
          name: 'vendors',
          enforce: true,
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './src/static/images',
      to: 'images/[name].[ext]'
    }]),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: '95-100'
      }
    }),
    new CleanWebpackPlugin('dist/', cleanOptions),
    new OptimizeCssAssetsPlugin(),
    new ExtractTextPlugin("styles.css"),
    // new ExtractTextPlugin({
    //     filename: 'aa.css',
    //     allChunks: true // 有分离文件的样式也会全部压缩到一个css文件上
    // }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      inject: true,
      filename: "./index.html"
    }),
    // new webpack.optimize.CommonsChunkPlugin('common.js'),  
   /*  new webpack.ProvidePlugin({  
      jQuery: "jquery",  
      $: "jquery"  
    }) */  

  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    host: 'localhost',
    port: 8899,
    proxy: {
      '/admin/*': {
        // target: 'http://xiaoceshi.tunnel.qydev.com',
        // target: 'http://59.110.169.175:8080',
            target: 'http://test.bjyishubiyeji.com:8080',
        //  target: 'https://yddwechat.bjyishubiyeji.com:8443',

        changeOrigin: true,
        secure: false
      } ,  
      '/mall/*': {
          target: 'http://test.bjyishubiyeji.com',
          // target:'http://yddwechat.bjyishubiyeji.com',
        changeOrigin: true,
        secure: false
      } ,
      '/admin/*': {
        // target: 'http://test.bjyishubiyeji.com',
        target:'http://songzhan.tunnel.qydev.com',
      changeOrigin: true,
      secure: false
    } 
  
    }
  }

  }
  

module.exports = config;