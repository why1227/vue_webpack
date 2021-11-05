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

// 使用node.js中的导出语法，向外导出一个webpack的配置对象
module.exports = {
    // 代表webpack运行的模式。可选： development 和 production
    mode: 'production',
    entry: path.join(__dirname, './src/index1.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'why.js'
    },

    // 插件的数组，将来webpack在运行时，会加载并调用这些插件
    plugins: [htmlPlugin],
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
                use: 'url-loader?limit=22229'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}