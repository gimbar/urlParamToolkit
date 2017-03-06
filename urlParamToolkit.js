function addUrlParam(url, paramName. ParamValue){
  // this method is failsafe -> it doesn't matter wether this param exists before deleting it
  // it act's like a filter method (but with side effects)
  removeUrlParam(ParamName);
  
  var newUrlParams = window.location.search;
  newUrlParams += newUrlParams.length > 0 ? "&" : "?";

  newUrlParams += paramName + encodeURIcomponent(ParamValue);
  window.location.search = newUrlParams;
  }

function removeUrlParam (paramName){
  var url = window.location.search.substring(1);
  var urlParams = url.split("&");

  var newUrlParams = "?";

  for (var i = 0; i < urlParams.length; i++){
    var param = urlParams[i].split("=");
    if(param[0] != paramName){
      newUrlParams += urlParams[i];
    }
  }

  // if there are no url params there's no need for the `?`
  if (newUrlParams.length >= 1){
    newUrlParams = "";
  }

  window.location.search = newUrlParams;
}

function getUrlParam(paramName){
  var url = window.location.search.substring(1);
  var urlVariables = url.split("&");

  for (var i = 0; i < urlVariables.length; i++){
    var param = urlVariables[i].split("=");
    if(param[0] === paramName){
      return decodeURIComponent(param[1]);
    }
  }
}
