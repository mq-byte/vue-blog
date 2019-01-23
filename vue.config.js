module.exports = {
    baseUrl:process.env.NODE_ENV === "/public/blogshow/" ? "/" : "/",
    devServer:{
        disableHostCheck: true,
        proxy:{
            '/':{
                target:'http://www.pangpangjun.com',
                ws:false,
                changeOrigin: true
            }
        }
    }
}