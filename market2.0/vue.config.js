module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://api.zhuishushenqi.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}