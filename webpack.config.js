const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        app: './in.js',
    },
    //      {
    //     main: './main.js'//文件入口
    // },
    output: {
        filename: "build.js",//文件名
        path: path.resolve(__dirname, 'dist')//路径
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-loader',
                    'style-loader'
                ]

            },
            //     {
            //         test: /\.(js|jsx)$/,
            //         use: 'babel-loader'
            //     }
        ]
    }
}