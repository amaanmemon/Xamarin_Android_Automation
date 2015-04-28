var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    "VM_Agenda_Click": function() {
        return common_functions.clickfunction_name("Agenda-at-a-Glance")
    },
    "VM_Agenda_Next": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/btnNext")
    },
    "VM_Agenda_Previous": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/btnPrevious")
    }
};