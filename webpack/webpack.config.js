const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

module.exports={
  entry:'./src/index.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        // use:["style-loader","css-loader"]
        use:ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:"css-loader",
            options:{
              importLoaders:1
            }
          },"postcss-loader"],
          publicPath:"../"
        })
      },{
        test:/\.scss$/,
        use:ExtractTextPlugin.extract({
            fallback:'style-loader',
            use:['css-loader','sass-loader']
        })
        },{
        test:/\.(jpg|png|gif)$/,
        use:[{
          loader:"file-loader",
          options:{
            limit:5000,
            outputPath:"images/"
          }
        }]
      },{
        test:/\.(html|htm)$/,
        loader:'html-withimg-loader'
      },{
        test:/\.js$/,
        use:{
          loader:"babel-loader",
          options:{presets:'env'}
        }
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin("./css/main.css"),
    new HtmlWebpackPlugin({
      title:"fellow23",
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      template:'./src/index.html'
    }),
    new PurifyCSSPlugin({
      paths:glob.sync(path.join(__dirname,'./src/*.html'))
    }),
  ],
  devServer:{
    contentBase:path.resolve(__dirname,'dist'),
    host:'127.0.0.1',
    port:'8081',
    compress:true
  },
  watchOptions:{
      poll:1000,
      aggregateTimeout:500,
      ignored:/node_modules/
  }
}