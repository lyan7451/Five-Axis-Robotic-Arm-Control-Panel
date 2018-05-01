var express = require('express');
var router = express.Router();
var path = require('path');
var bluepath =  path.resolve( __dirname, "../bluetooth/bluetooth_service" );
var message;
var BluetoothService = require(bluepath);


//Axis1
router.post('/turnleft1', function(req, res, next) {
  console.log("/turnleft1 post");
  BluetoothService.SentData("l1");
  res.end();
});
router.post('/turnright1', function(req, res, next) {
  console.log("/turnright1 post");
  BluetoothService.SentData("r1");
  res.end();
});
//Axis2
router.post('/up2', function(req, res, next) {
  console.log("/up2 post");
  BluetoothService.SentData("u2");
  res.end();
});
router.post('/down2', function(req, res, next) {
  console.log("/down2 post");
  BluetoothService.SentData("d2");
  res.end();
});
//Axis3
router.post('/up3', function(req, res, next) {
  console.log("/up3 post");
  BluetoothService.SentData("u3");
  res.end();
});
router.post('/down3', function(req, res, next) {
  
  console.log("/down3 post");
  BluetoothService.SentData("d3");
  res.end();
});
//Axis4
router.post('/up4', function(req, res, next) {
  /*左*/
  console.log("/up4 post");
  BluetoothService.SentData("u4");
  res.end();
});
router.post('/down4', function(req, res, next) {
  /*右*/
  console.log("/down4 post");
  BluetoothService.SentData("d4");
  res.end();
});
//Axis5 Grasp
router.post('/Grasp', function(req, res, next) {
  console.log("/Grasp post");
  BluetoothService.SentData("G");
  res.end();
});
router.post('/Loosen', function(req, res, next) {
  console.log("/Loosen post");
  BluetoothService.SentData("L");
  res.end();
});
//Macro Function
router.post('/MacroFun', function(req, res, next) {
  console.log("/MacroFun post");
  BluetoothService.SentData("M");
  res.end();
});
//reset
router.post('/reset', function(req, res, next){
  console.log("/reset post");
  BluetoothService.SentData("re");
  res.end();
})



module.exports = router;
