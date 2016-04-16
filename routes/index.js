var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
       title: 'Express',
       array:[1,2,3,4]
       
     });
});


router.get('/u/:user',function (req,res,next) {
    res.render('user',{
        
    })
})
module.exports = router;


