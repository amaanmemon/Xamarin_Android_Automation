var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    "VM_San_Click": function() {
        return common_functions.clickfunction_name("San Francisco")
    },
    "VM_San_Food_and_Drink": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/FoodNDrinks_tab_icon")
    },
    "VM_San_Coffee": function() {
        return common_functions.clickfunction_name("Coffee")
    },
    "VM_San_Food": function() {
        return common_functions.clickfunction_name("Food")
    },
    "VM_San_Nightlife": function() {
        return common_functions.clickfunction_name("Nightlife")
    },
};