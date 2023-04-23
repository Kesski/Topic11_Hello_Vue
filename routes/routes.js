let express = require('express')
let router = express.Router()

router.get('/', function(req, res, next){
    res.json( { 'message': 'Hello. This is an Azure app.'} )
})

module.exports = router