var logging = require("./src/logging");
var l = logging.getLogger("xxx");

l.log(l.INFO, "%s", "ddd", {dfdf:"ddd"});
l.debug("%s", "dd");
