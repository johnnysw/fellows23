const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const webpack = require('webpack');

module.exports = {
  entry:"./src/index.js",
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            //use:'css-loader',
            use:[{ 
                loader:'css-loader',
                options:{importLoaders:1}
            },'postcss-loader'],
            publicPath:"../"
        })
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[{
            loader:'file-loader',
            options:{
                limit:85,
                outputPath:'images/'
            }
        }]
      },{
        test:/\.(html|htm)$/i,
        loader:'html-withimg-loader'
      },{
        test:/\.scss$/,
        // use:['style-loader','css-loader','sass-loader']
        use:ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:['css-loader','sass-loader']
        })
      },{
        test:/\.js$/,
        use:{
          loader:'babel-loader',
          options:{presets:'env'}
        }
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin('./css/main.css'),
    new HtmlWebpackPlugin({
      title:"Output Management",
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      template:'./src/index.html'
    }),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    }),
    new webpack.ProvidePlugin({
      $:'jQuery'
    })
  ],
  devServer:{
    contentBase: path.resolve(__dirname, 'dist'),
    host: '127.0.0.1',
    port: '8081',
    compress: true
  },
  mode:"development"
}