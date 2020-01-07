const HtmlwebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/main.js',
    output: {
        // path: path.resolve(__dirname, '/dist'),
        path:__dirname+'/dist',
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css', '.less', 'sass'],//引入文件时省略扩展名
        alias: {
            "vue$": 'vue/dist/vue.esm.js',//兼容vue的runtime与compile模式
            "@": path.join(__dirname, 'src'),//根路径使用别名
        }
    },
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' },//处理vue文件
            { test: /\.css$/, use: ['style-loader', 'vue-style-loader', 'css-loader'] },//处理css文件
            {
                test: /\.js$/, use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                        plugins: [
                            [require("@babel/plugin-proposal-decorators"), { "legacy": true }]
                        ]
                    }
                }],
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: 'url-loader',
                include: path.resolve(__dirname + '/src/'),
                exclude: /node_modules/
            }

        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),// vueLoader插件 允许你以一种名为单文件组件的格式撰写 Vue 组件
        new HtmlwebpackPlugin({
            template: './index.html',
            hash: true,
            inject: true
        }),
        
         
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        host: 'localhost',
        port: 5000,
        open: true,//  项目启动时,会默认帮你打开浏览器
       
    }

}