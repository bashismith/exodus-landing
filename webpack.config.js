var path = require('path');


module.exports = {
    entry : './index.js',
    output : {       //outputs the 'bundle.js' to 'dist' folder
        path : path.resolve(__dirname , 'build'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {test : /.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                   presets: ['@babel/preset-env','@babel/preset-react']
                }
                }
            },
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }
              ]
            }
        ]
    },
    mode: process.env.NODE_ENV,
    devServer: {
        publicPath: '/build', // creates a virtual bundle.js in the folder /build , which is where index.html looks in order to find the script to run
        compress: true,
        port:8080,
  }
}

