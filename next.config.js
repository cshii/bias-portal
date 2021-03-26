const path = require('path')

module.exports = {
    // TOOD: use cloudinary for photo API hosting
    // images: {
    //     loader: 'cloudinary', 
    // },
    webpack: config => {
        config.resolve.modules.push(path.resolve('./'))
        return config
    },
    
}