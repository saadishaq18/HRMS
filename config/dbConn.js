const mongoose = require('mongoose')

const handleDbToConnect = async (url) =>{
    return await mongoose.connect(url)
}

module.exports = {
    handleDbToConnect
}