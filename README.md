# vue_webpack
vue2.0 webpack基础
黑马pink

change-rows-color：初始化隔行变色案例
    npm init -y
    npm install jquery -S (--save：dependencies开发和上线)
    npm install webpack@5.42.1 webpack-cli@4.7.2 -D (--save-dev：devDependencies开发用到  webpack-cli兼容问题，改webpack-cli@4.9.0)
    npm i webpack-dev-server@3.11.2 -D (类似于nodemon)
    运行： npm run dev
    打开： http://localhost:8080/src/
    一进入8080就进入首页：根目录复制一份index.html： html-webpack-plugin 插件：
    npm install html-webpack-plugin@5.3.2 -D

    loader
        npm i style-loader@3.0.0 css-loader@5.2.6 -D
        npm i less-loader@10.0.1 less@4.1.1 -D
        npm i url-loader@4.1.1 file-loader@6.2.0 -D
        npm i babel-loader@8.2.2 @babel/core@7.14.6 @babel/plugin-proposal-decorators@7.14.5 -D
        npm install clean-webpack-plugin@3.0.0 -D
        (npm install --save-dev clean-webpack-plugin)