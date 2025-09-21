
var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.publicKey,
    privateKey : process.env.privateKey,
    urlEndpoint : process.env.urlEndpoint
});

async function uploadImage(file,filename){
    const response = await imagekit.upload({
        file:file,
        fileName:filename,
        folder:"burger_web"
    })

    return response
}

module.exports = uploadImage