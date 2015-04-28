var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    "VM_Speaker_Scroll": function() {
        return common_functions.scrollings('Name',"Abhimanyu Poddar","Adam Fore")
    },
    "VM_Sessions_Click_Icon": function() {
         return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/schedule_tab_icon")
    },
    "VM_Sessions_Live": function() {
         return common_functions.clickfunction_index_id("ConferenceAppDroid.ConferenceAppDroid:id/session_section_container","2")
    },
    "VM_Sessions_Star": function() {
         return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/starUnstarImageView")
    }
};