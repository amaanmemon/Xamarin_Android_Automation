var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    "VM_Interest": function() {
         return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/optionTitle")
    },
    "VM_Interest_Elements": function() {
         return common_functions.clickfunction_index_id("ConferenceAppDroid.ConferenceAppDroid:id/session_section_container","0")
    },
     "VM_Interest_Unstar": function() {
         return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/starUnstarImageView")
    }
};