var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    "whats_happening_text": function() {
        return common_functions.txtVerify("ConferenceAppDroid.ConferenceAppDroid:id/exploreIntro_textview_intro","Welcome to VMware Partner Exchange 2015 starting on 31st January 2015 at Moscone center !!! Be Ready !!!")  
    },
    "Sponsors_text": function() {
        return common_functions.txtVerify("ConferenceAppDroid.ConferenceAppDroid:id/sponsorslabelTextView","SPONSORS")  
    },
    "Scroll_1": function() {
      return common_functions.scrollings('Name',"Event Sponsor","Bronze")
    },
    "Scroll_2": function() {
      return common_functions.scrollings('Name',"Bronze","Exhibitor")
    },
    "Scroll_3": function() {
      return common_functions.scrollings('Name',"Exhibitor","Ancillary Event")
    },
    "Scroll_4": function() {
      return common_functions.scrollings('Name',"Ancillary Event","Silver")
    },
    "Scroll_5": function() {
      return common_functions.scrollings('Name',"Silver","Global Platinum")
    },
    "Scroll_6": function() {
      return common_functions.scrollings('Name',"Global Platinum","Cloud Pavilion")
    },
    "Scroll_7": function() {
      return common_functions.scrollings('Name',"Cloud Pavilion","Platinum")
    },
    "Scroll_8": function() {
      return common_functions.scrollings('Name',"Platinum","Global Diamond")
    },
    "Scroll_9": function() {
      return common_functions.scrollings('Name',"Global Diamond","Gold")
    },
    "Scroll_10": function() {
      return common_functions.scrollings('Name',"Gold","Distributor")
    },
    "Scroll_11": function() {
      return common_functions.scrollings('Name',"Distributor","Select Distributor")
    },
    "Scroll_12": function() {
      return common_functions.scrollings('Name',"Select Distributor","Premier Distributor")
    },
    "Tracks_text": function() {
        return common_functions.txtVerify("ConferenceAppDroid.ConferenceAppDroid:id/trackslabelTextView","TRACKS")  
    },
    "VM_WH_Click": function() {
        return common_functions.clickfunction_name("What's Happening")
    }
};
