var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    "VM_Daily_Click": function() {
        return common_functions.clickfunction_name("Daily Highlights")
    },
    "VM_Daily_Element": function() {
        return common_functions.clickfunction_classname("android.widget.RelativeLayout","0")
    }
};