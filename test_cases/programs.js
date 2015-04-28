var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    "VM_World_push": function() {
        return common_functions.clickfunction_name("No")
    },
    "VM_world_leftmenu": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/left_menu_textview")
    },
    "Vmworld_left_login": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/user_displayname")
    },
     "VM_World_Username": function() {
        return common_functions.keyboardvalue("ConferenceAppDroid.ConferenceAppDroid:id/userNameEditText", "shweta")
    },
    "VM_World_Password": function() {
        return common_functions.keyboardvalue("ConferenceAppDroid.ConferenceAppDroid:id/passwordEditText","")
    },
    "VM_World_Click_LoginButton": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/loginButton")
    },
   "VM_World_sponsors": function() {
        return common_functions.clickfunction_name("Sponsors/Exhibitors")
    },
    "VM_World_sponsors_vmware": function() {
        return common_functions.txtVerify_name("VMware","VMware")
    },
    "VM_World_sponsors_Dell": function() {
        return common_functions.txtVerify_name("Dell","Dell")
    },
    "VM_World_sponsors_vmware_click": function() {
        return common_functions.clickfunction_name("VMware")
    },
    "VM_World_sponsors_vmware_type": function() {
        return common_functions.txtVerify_name("Type: Event Sponsor","Type: Event Sponsor")
    },
    "VM_World_sponsors_twitter": function() {
        return common_functions.clickfunction_index_id("ConferenceAppDroid.ConferenceAppDroid:id/twitterImageView", "4")
    },
    "VM_World_sponsors_search_button": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/searchTextView")
    },
    "VM_World_sponsors_search_type": function() {
        return common_functions.keyboardvalue("ConferenceAppDroid.ConferenceAppDroid:id/sponsor_search_edit_text","Lenovo")
    },
    "VM_World_MosconeCenter": function() {
        return common_functions.clickfunction_name("Moscone Center")
    },
    "VM_World_MosconeCenter_CAMPUSMAP": function() {
        return common_functions.txtVerify_name("CAMPUS MAP", "CAMPUS MAP")
    },
    "VM_World_MosconeCenter_CAMPUSMAP_Click": function() {
        return common_functions.clickfunction_index_id("ConferenceAppDroid.ConferenceAppDroid:id/moscone_row_title", "0")
    },
      "VM_World_MosconeCenter_CAMPUSMAP_Click1": function() {
        return common_functions.clickfunction_index_id("ConferenceAppDroid.ConferenceAppDroid:id/moscone_row_title", "1")
    },
      "VM_World_MosconeCenter_CAMPUSMAP_Click2": function() {
        return common_functions.clickfunction_index_id("ConferenceAppDroid.ConferenceAppDroid:id/moscone_row_title", "2")
    },
      "VM_World_MosconeCenter_CAMPUSMAP_Click3": function() {
        return common_functions.clickfunction_index_id("ConferenceAppDroid.ConferenceAppDroid:id/moscone_row_title", "3")
    },
    "VM_World_MosconeCenter_CAMPUSMAP_loctionname": function() {
        return common_functions.txtVerify_name("MOSCONE WEST - LEVEL 1", "MOSCONE WEST - LEVEL 1")
    },
    "VM_World_MosconeCenter_CAMPUSMAP_loctionname_details": function() {
        return common_functions.txtVerify_name("MOSCONE WEST, Level 1", "MOSCONE WEST, Level 1")
    },
    "VM_World_MosconeCenter_CAMPUSMAP_loctionname_click": function() {
        return common_functions.clickfunction_name("MOSCONE WEST - LEVEL 1")
    },
    "VM_World_MosconeCenter_CAMPUSMAP_loctionname_image_click": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/mosconeImageView")
    },
    "VM_World_MosconeCenter_CAMPUSMAP_loctionname_dimage_verify": function() {
        return common_functions.txtVerify_name("MOSCONE WEST - LEVEL 2", "MOSCONE WEST - LEVEL 2")
    },
    "VM_World_Scroll_Program": function() {
        return common_functions.scrollings("Name", "Social Media", "Sessions")
    },
    "VM_World_Scroll_Element": function() {
        return common_functions.scrollings("Id", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView","0","2")
    }
    ,
    "VM_World_Scroll_Element1": function() {
        return common_functions.scrollings("Id", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView","2","4")
    }
    ,
    "VM_World_Scroll_Element2": function() {
        return common_functions.scrollings("Id", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView","4","6")
    }
    ,
    "VM_World_Scroll_Element3": function() {
        return common_functions.scrollings("Id", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView","6","8")
    }
    ,
    "VM_World_Scroll_Element4": function() {
        return common_functions.scrollings("Id", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView","8","10")
    }
    ,
    "VM_World_Scroll_Element5": function() {
        return common_functions.scrollings("Id", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView","10","12")
    }
    ,
    "VM_World_Scroll_Element6": function() {
        return common_functions.scrollings("Id", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView","12","14")
    }
    ,
    "VM_World_Scroll_Element7": function() {
        return common_functions.scrollings("Id", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView","14","16")
    }
    ,
    "VM_World_Scroll_Element8": function() {
        return common_functions.scrollings("Id", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView", "ConferenceAppDroid.ConferenceAppDroid:id/sponsorsImageView","16","18")
    }
};
