/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
//    var url = dbBaseUrl + apiEndPointUrl;
//    var jsonObj;
//    $.post(url, reqString, function (result) {
//        jsonObj = JSON.parse(result);
//    }).fail(function (result) {
//        var dataJsonObj = result.responseText;
//        jsonObj = JSON.parse(dataJsonObj);
//    });
//    return jsonObj;
//}
function deleteData() {
    var token = "90937414|-31949292190497296|90943440";
    var dbname = "FORM";
    var relationName = "FORM-REL";
    var indexs = parseInt(document.getElementById("inde").value);

    var reqString = createREMOVERecordRequest(token, dbname, relationName, indexs);
    alert(reqString);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(reqString,
            "http://api.login2explore.com:5577", "/api/iml");
    jQuery.ajaxSetup({async: true});
    alert(JSON.stringify(resultObj));

}

