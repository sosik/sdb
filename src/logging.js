var logging = module.exports = {};
var util = require("util");

logging.INFO = "INFO";

logging.Logger = function(name) {
    this.name = name || "unknown";
}
logging.Logger.prototype.INFO = "INFO";

logging.Logger.prototype.log = function(level, message) {
    var lev = level;
    Array.prototype.shift.apply(arguments);
    var date = new Date();
    process.stdout.write(date.toLocaleTimeString() + "." + date.getSeconds() + date.getMilliseconds() + " " + lev + " " + this.name + " " + util.format.apply(util, arguments) + "\n");
    
}

logging.getLogger = function(name) {
    return new logging.Logger(name);
}

