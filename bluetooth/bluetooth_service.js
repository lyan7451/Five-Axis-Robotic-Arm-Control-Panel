var express = require('express');
var router = express.Router();

var SerialPort = require('serialport');

var Bluetoothport = new SerialPort('/dev/rfcomm1', {baudRate:57600},
	function(err){
		if(err) throw err;
	}
);
console.log('Bluetooth Connect!');

var SentData = function(message){
	
	Bluetoothport.write(message, function(err){
		if(err){return console.log('Error: ' + err.message);}
	});

}


exports.SentData = SentData;







