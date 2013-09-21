var logging = module.exports = {};
var util = require("util");

logging.Logger = function(name, level) {
    this.name = name || "unknown";
    this.level = level || this.DEBUG;
}

logging.Logger.prototype.DEBUG = "TRACE";
logging.Logger.prototype.DEBUG = "DEBUG";
logging.Logger.prototype.INFO = "INFO";
logging.Logger.prototype.INFO = "WARN";
logging.Logger.prototype.INFO = "ERROR";

logging.Logger.prototype.log = function(level, message) {
    var lev = level;
    Array.prototype.shift.apply(arguments);
    var date = new Date();
    process.stdout.write(date.toLocaleTimeString() + "." + date.getSeconds() + date.getMilliseconds() + " " + lev + " " + this.name + " " + util.format.apply(util, arguments) + "\n");
    
}

logging.Logger.prototype.trace = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift(this.TRACE);
    logging.Logger.prototype.log.apply(this, args);
}

logging.Logger.prototype.debug = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift(this.DEBUG);
    logging.Logger.prototype.log.apply(this, args);
}

logging.Logger.prototype.info = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift(this.INFO);
    logging.Logger.prototype.log.apply(this, args);
}

logging.Logger.prototype.warn = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift(this.WARN);
    logging.Logger.prototype.log.apply(this, args);
}

logging.Logger.prototype.error = function() {
    var args = Array.prototype.slice.call(arguments, 0);
    args.unshift(this.ERROR);
    logging.Logger.prototype.log.apply(this, args);
}

logging.getLogger = function(name) {
    return new logging.Logger(name);
}

