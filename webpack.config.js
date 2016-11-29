/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const path = require('path');

module.exports={
    entry: './src/app.js',
    
    output: {
        path:       './public_html',
        filename:   'application.js',
    },
    module: {      
        loaders: [
            {
                test:       /\.less$/,
                loader:     "style-loader!css-loader!less-loader"
            }
        ],
    },
    resolve: {
        alias: {'less': path.resolve('less')},
    }
};