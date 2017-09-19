module.exports = {
    type: 'app',
    webpack: {
        entry: {
            bundle: './src/index.js',
        },
    },
    webpackDevServer:{
    	contentBase: __dirname,
    	publicPath: "/public/"
    }
}
