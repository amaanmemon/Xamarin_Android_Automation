var fs = require('fs');
var sys = require('sys');
var exec = require('child_process').exec;
var when = require('when');
var wd = require("wd");

var nodemailer = require('nodemailer');

var common_functions = require('../helpers/common_functions.js');

var list = exports.list = {
    // The below are the cases
	"Switch_Tab": function() {  
        return common_functions.switchTab("2"); // It will switch to 2nd Tab of the browser
    },
    "Web_Chrome": function() { 
      return common_functions.clickByxpath("//i[@class='fa fa-bars']")
    },
    "Desktop_Chrome1": function() { 
     return common_functions.keyboardvalue_desktop_chrome("q","I am Very Simple Programmer")
    },
    "Desktop_Chrome2": function() { 
     return common_functions.clickfunction_desktop_chrome("btnG")
    },
    "VM_DontAllow_Push_Notifications": function() {
           debugger;
        return common_functions.clickfunction("android:id/button2")
    },
    "VM_Left_Menu_Click": function() {
        return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/left_menu_textview")
    },
    "Reset_App": function() {
      return driver.resetApp().then(function(){
        console.log("reset app call back");
        return "Pass";
      });
    },
    // below case is used to send the report as mail
     "VM_Send_Mail": function() {
        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "Gmail",
            auth: {
                user: "amaan.memon@raweng.com",
                pass: "*******"
            }
        });

        var mailOptions = {
            from: "Amaan Memon <amaan.memon@raweng.com>",
            to: "amaan.memon@gmail.com",
            subject: "Testing Report",
            html: "<b>Hi Team,</b><br><br>PFA Report<br><br>Thanks,<br>Amaan",
            attachments: [{
                filename: common_functions.fileName(),
                path: "./result/" + common_functions.fileName(),
                contentType: "text/plain",
                streamSource: fs.createReadStream("./result/" + common_functions.fileName())

            }]
        }
        var promise = when.promise(function(resolve, reject, notify) {
            smtpTransport.sendMail(mailOptions,
                function(err) {
                    if (!err) {
                        resolve('Email send ...');
                    } else reject(sys.inspect(err));
                });
        });
        promise.then(function(res) {
            console.log('P', res);
        }).catch(function(err)
        {
            return err;
        })
    },
    "VM_Back": function() {
        return driver.back().then(function()
        {
            return "Pass"
        });
    },
    "VM_Sleep": function() {
        return driver.sleep(4000).then(function()
        {
            return "Pass";
        })
    },
    "VM_Sleep_D": function() {
        return GLOBAL.desktopdriver.sleep(4000).then(function()
        {
            return "Pass";
        })
    },

    // below case is used to make result html file
    "VM_Final_Result": function(callback)
     {
      return common_functions.finalResult(callback);
    },
    // below case is used to transfer video recording from SD card to the local machine
    "Tranfer_Video": function() {
            var callback = function (error, stdout, stderr) {
            sys.print('stdout: ' + stdout);
            sys.print('stderr: ' + stderr);
            if (error !== null) {
                console.log('exec error: ' + error);
            }
        };
        when.try(exec, "adb pull /sdcard/PEX2015.mp4 ./result/PEX2015.mp4", callback);
        return "Pass";
    },
    "Scroll_13": function() {
      return common_functions.scrollings('Name',"Sessions","Programs/FAQ")
    },
    "Days_Click": function() {
      return common_functions.clickfunction_index_classname("android.widget.RadioButton","2")
    },
    "Speakers_Click_Icon": function() {
      return common_functions.clickfunction("ConferenceAppDroid.ConferenceAppDroid:id/speakers_tab_icon")
    } 
 };  

