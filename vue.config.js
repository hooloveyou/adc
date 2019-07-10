const path = require('path');
module.exports ={
    devServer:{
        proxy:{
            '/api':{
                target:"https://m.douyu.com",
                changOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
            "@":path.resolve(__dirname,"./src"),
            "api":path.resolve(__dirname,"./src/api"),
            "common":path.resolve(__dirname,"./src/common"),
            "components":path.resolve(__dirname,"./src/components"),
            "router":path.resolve(__dirname,"./src/router"),
            "store":path.resolve(__dirname,"./src/store"),
            "utils":path.resolve(__dirname,"./src/utils"),
            "views":path.resolve(__dirname,"./src/views")
        }
    }
    }
}
//https://m.douyu.com/api/room/list?page=1&type=