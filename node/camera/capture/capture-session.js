var spawn = require('child_process').spawn;
var Util = require('util');
var EventEmitter = require('events').EventEmitter;
var _ = require("underscore");

var CaptureSession = module.exports = function(options) {
	// setup options
	this.o = {};
	_.extend(this.o, options);
};

CaptureSession.prototype = Object.create(EventEmitter.prototype, {

	start: {
		value: function() {
			this._running = true;
			this.__capture();
		}
	},

	stop: {
		value: function() {
			this._running = false;
		}
	},

	__capture: {
		value: function() {

			if(!this._running) return;

			Util.log("capture");

			var delegate = this;
			var options = ["-t", "250", "-o", "~/Desktop/image.jpg", "-e", "jpg", "-w", "400", "-h", "300", "-q", "75", "-n"];
			var capture = spawn("ls", options);

			capture.stdout.on('data', function(data) {
				// ...
			});

			capture.stderr.on('data', function(data) {
				// ...
			});

			capture.on('close', function(code) {
				// basically we're calling this a complete call
				delegate.__handleCapture();
			});
		}
	},

	__handleCapture: {
		value: function(capture) {
			// timeout is for debugging purposes
			var delegate = this;
			setTimeout(function() {
				delegate.__capture();
			}, 1000);
		}
	}

});