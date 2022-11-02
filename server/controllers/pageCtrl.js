const path = require('path')
// Helps using local paths eaiser


module.exports = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, "../../index.html"))
        //servers up your html file on deployment
    }
}
