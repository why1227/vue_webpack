const path = require('path')
// 导入插件，得到插件的构造函数
const HtmlPlugin = require('html-webpack-plugin')
// 创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
    // 指定要复制哪个页面
    template: './src/index.html',
    // 指定复制出来的文件的存放路径
    filename: './index.html'
});

// 左侧的花括号是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 使用node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    // 代表webpack运行的模式。可选： development 和 production
    mode: 'development',

    // "运行时报错的的行数"与"源代码的行数"保持一致
    // 在开发调试阶段，建议都把devtool的值设置为eval-source-map
    // devtool:"eval-source-map",
    // 在实际发布的时候建议把devtool的值设置为 nosources-source-map，或直接关闭
    devtool:"nosources-source-map",
    // 不建议 定位行数且暴露源码
    // devtool:"source-map",

    entry: path.join(__dirname, './src/index1.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/why.js'
    },

    // 插件的数组，将来webpack在运行时，会加载并调用这些插件
    plugins: [
        htmlPlugin,
        new CleanWebpackPlugin(),
    ],
    devServer: {
        open: true,
        host: '127.0.0.1',
        port: 80 // 在http协议中，端口号80可以被省略
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.jpg|png|gif$/,
                //如果只有一个，则只传递一个字符串也行
                // 多个参数之间使用&符号进行分隔
                use: 'url-loader?limit=470&outputPath=images'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'./src/')
        }
    }
}