/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


//getEmployee data with name =====================================================

function showData() {

    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }

//    var jsonStr = {
//        empId: "11"
//    };
    var getReqStr = createGETRequest("90937414|-31949292190497296|90943440",
            "FORM", "FORM-REL", jsonStr);
//            JSON.stringify(jsonStr)
    alert(getReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(getReqStr,
            "http://api.login2explore.com:5577", "/api/irl");


    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});

    var data = JSON.stringify(resultObj);
    alert(data);
    console.log(data);
    var res = data.split("\"");
    var mainContainer = document.getElementById("show");
    mainContainer.innerHTML = "Name : " + res[10].replace("\\", "") + "       Email : " + res[14].replace("\\", "") + "     Status : " + res[22].replace("\\", "");

}


function validateAndGetFormData() {
    empNameInput = document.getElementById("empN").value;
    console.log(empNameInput);
    if (empNameInput === "") {
        alert("Employee Name is a required");
        return "";
    }
    var jsonStrObj = {
        empName: empNameInput
    };
    return JSON.stringify(jsonStrObj);
}