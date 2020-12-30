const path = require('path');

module.exports = { 
    entry: './src/index.js',
    Output: { 
        path: path.resolve('public'),
        filename: 'bundle.js',
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                },
            },
        ],
    },
};