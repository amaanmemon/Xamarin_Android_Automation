
var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    "VM_Login_Click": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/user_displayname")
    },
    "VM_Login_Verify": function() {
        return common_functions.txtVerify("ConferenceAppDroid.ConferenceAppDroid:id/user_displayname", "Login")
    },
    "VM_Enter_Valid_Credentials_username": function() {
        return common_functions.keyboardvalue("ConferenceAppDroid.ConferenceAppDroid:id/userNameEditText","nikhil.jain")
    },
    "VM_Enter_Valid_Credentials_password": function() {
        return common_functions.keyboardvalue("ConferenceAppDroid.ConferenceAppDroid:id/passwordEditText","raw123")
    },
    "VM_Click_LoginPage": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/loginButton")
    },
    "VM_Logout": function() {
        return common_functions.clickfunction("android:id/button1")
    },
    "VM_1": function() {
        return common_functions.clickfunction_name("What's Happening")
    },
    "VM_2": function() {
        return common_functions.clickfunction_name("Social Media")
    },
    "VM_3": function() {
        return common_functions.clickfunction_name("Daily Highlights")
    },
    "VM_4": function() {
        return common_functions.clickfunction_name("Sessions")
    },
    "VM_5": function() {
        return common_functions.clickfunction_name("Agenda-at-a-Glance")
    },
    "VM_6": function() {
        return common_functions.clickfunction_name("Sponsors/Exhibitors")
    },
    "VM_7": function() {
        return common_functions.clickfunction_name("Programs/FAQ")
    },
    "VM_8": function() {
        return common_functions.clickfunction_name("Moscone Center")
    },
    "VM_9": function() {
        return common_functions.clickfunction_name("San Francisco")
    },
    "VM_Schedule": function() {
        return common_functions.clickfunction_name("Schedule")
    },
    "VM_Scroll_Sessions_Social": function() {
        return common_functions.scrollings('Name',"Sessions","Social Media")
    },
     "VM_Notes": function() {
        return common_functions.clickfunction_name("Notes")
    },
};
