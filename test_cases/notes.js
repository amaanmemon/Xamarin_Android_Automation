var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    "VM_New_Notes": function() {
         return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/newNotesButton")
    },
    "VM_Tags": function() {
        return common_functions.keyboardvalue("ConferenceAppDroid.ConferenceAppDroid:id/tag_edit_text","pops")
    },
    "VM_Title": function() {
        return common_functions.keyboardvalue("ConferenceAppDroid.ConferenceAppDroid:id/notesTitle_editText_title","pappu")
    },
    "VM_Description": function() {
        return common_functions.keyboardvalue("ConferenceAppDroid.ConferenceAppDroid:id/notesDetail_editText","pappu pass hogaya")
    },
    "VM_Save": function() {
         return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/doneTextView")
    },
    "VM_Add_Photo": function() {
         return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/imageView")
    }
};