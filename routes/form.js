var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var path = require('path');
var bluepath =  path.resolve( __dirname, "../bluetooth/bluetooth_service" );
var message;
var BluetoothService = require(bluepath);


/* post home page. */
router.post('/angle1', function(req, res, next) {
  console.log('/angle1 post');
  var angle1 = req.body.a1;
  console.log("angle1 = " + angle1);
  BluetoothService.SentData("1#" + angle1);
  res.end();
});

router.post('/angle2', function(req, res, next) {
  console.log('angle2 post');
  var angle2 = req.body.a2;
  console.log("angle2 = " + angle2);
  BluetoothService.SentData("2#" + angle2);
  res.end();
});
router.post('/angle3', function(req, res, next) {
  console.log('angle3 post');
  var angle3 = req.body.a3;
  console.log("angle3 = " + angle3);
  BluetoothService.SentData("3#" + angle3);
  res.end();
});
router.post('/angle4', function(req, res, next) {
  console.log('angle4 post');
  var angle4 = req.body.a4;
  console.log("angle4 = " + angle4);  
  BluetoothService.SentData("4#" + angle4);
  res.end();
});


module.exports = router;
