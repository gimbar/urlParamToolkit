function addUrlParam(urlParams, paramName, ParamValue){
  // removeUrlParam is failsafe -> it doesn't matter wether this param exists before deleting it
  // it act's like a filter method
  var newUrlParams = removeUrlParam(urlParams, ParamName);

  if(paramName && paramValue){
    newUrlParams += newUrlParams.length > 0 ? "&" : "?";
    newUrlParams += paramName + encodeURIcomponent(ParamValue);
  }
  return newUrlParams;
}

function removeUrlParam (urlParams, paramName){
  var params = urlParams.substring(1).split("&");

  var newUrlParams = "?";

  for (var i = 0; i < params.length; i++){
    var param = params[i].split("=");
    if(param[0] != paramName){
      newUrlParams += urlParams[i];
    }
  }

  // if there are no url params there's no need for the `?`
  if (newUrlParams.length <= 1){
    newUrlParams = "";
  }

  return newUrlParams;
}

function getUrlParam(urlParams, paramName){
  var params = urlParams.substring(1).split("&");
  for (var i = 0; i < params.length; i++){
    var param = params[i].split("=");
    if(param[0] === paramName){
      return decodeURIComponent(param[1]);
    }
  }
}
