var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
//http://localhost:3000/go?url=[URL]
router.get('/go', (req, res, next)=> {
  let x = 'https://123link.co/st?api=671277a48e917f3de5c2b1cd4bec64e89fb6844f&url=' + req.query.url;
  res.redirect(x);
  next()
});



module.exports = router;
