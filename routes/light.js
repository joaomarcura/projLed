const Gpio = require('onoff').Gpio;

const LED = new Gpio (4,'out');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/on', function(req, res, next) {
   LED.writeSync(1);
  res.render({'status': 'OK','data':'LEd Aceso' });
});

router.post('/off', function(req, res, next) {
   LED.writeSync(2);
  res.render({'status': 'OK','data':'LEd Apagado' });
});



module.exports = router;


function acender(){
   
}

function apagar(){
   LED.writeSync(0);
}




   
        
   



