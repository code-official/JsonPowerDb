/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function validateAndGetFormData() {
    var empIdInput = $("#empId").val();
    if (empIdInput === "") {
        alert("Employee ID is required");
        $("#empId").focus();
        return "";
    }
    var empNameInput = $("#empName").val();
    var empEmailInput = $("#empEmail").val();

    if (empNameInput === "" && empEmailInput === "") {
        alert("Enter email or name");
        $("#empId").focus();
        return "";
    }
    var jsonStrObj = {
        empId: empIdInput,
        empName: empNameInput,
        empEmail: empEmailInput,
    };
    return JSON.stringify(jsonStrObj);
}


function updateRecord() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }

    var RemoveVar = createUPDATERecordRequest(
            "90937414|-31949292190497296|90943440",
            jsonStr,
            "FORM",
            "FORM-REL",
            parseInt(document.getElementById("empId").value)
            );
    alert(RemoveVar);
    jQuery.ajaxSetup({async: false});
    var getResult = executeCommandAtGivenBaseUrl(
            RemoveVar,
            "http://api.login2explore.com:5577",
            "/api/iml"
            );
    alert(JSON.stringify(getResult));
    jQuery.ajaxSetup({async: true});
}

