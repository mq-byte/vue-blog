console.log(process.env.NODE_ENV)
module.exports = {
    
    baseUrl:process.env.NODE_ENV === "production" ? "/public/blogshow/" : "/",
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