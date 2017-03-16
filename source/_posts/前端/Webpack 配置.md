title: Webpack 配置
date: 2016-03-11 15:02:40
tags: 前端, 前端工程
---


# Webpack 配置

### package.json
```javascript
cnpm install css-loader style-loader sass-loader node-sass --save-dev
cnpm install postcss-loader
cnpm install autoprefixer-loader
cnpm install precss-loader
cnpm install babel-loader --save-dev
cnpm install babel-preset-es2015 babel-preset-react --save-dev
cnpm install react react-dom --save
cnpm install bootstrap@4.0.0-alpha.2 --save-dev
cnpm install url-loader --save-dev
cnpm install extract-text-webpack-plugin --save
```
<!-- more -->

### webpack.config.js
```javascript
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");  //分离Style
var autoprefixer = require('autoprefixer');
var precss = require('precss');

//当前项目地址
var ROOT_PATH = path.resolve(__dirname);
//开发目录
var APP_PATH = path.resolve(ROOT_PATH, './src');
//生成目录
var BUILD_PATH = path.resolve(ROOT_PATH, './build');

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, './index.js')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devtool: "eval-source-map",
    module: {
        loaders:[{
                //处理SCSS
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader!postcss-loader"),
                include: APP_PATH
            },{
                //处理JSX
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015', 'react']
                }
            },{    
                test: /\.(png|jpg)$/,    
                loader: 'url?limit=400000'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss']
    },
    plugins: [new ExtractTextPlugin('css.css')]
}
```
### 运行webpack
```bash
sudo webpack
```

### 监控webpack
```bash
sudo webpack -w
```

### 压缩JavaScript
```bash
sudo webpack -p
```
