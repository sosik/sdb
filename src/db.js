//var process = require("process");
var extend = require("extend");

var db = module.exports = {};

var defaults = {
    "dataPath" : process.cwd() + "/data",
    "tlogPath" : process.cwd() + "/data"
}

db.Db = function(options) {

}