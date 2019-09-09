function getQuerystring(paramName){ 

    let _tempUrl = window.location.search.substring(1); 
    let _tempArray = _tempUrl.split('&');

    for(let i = 0; _tempArray.length; i++) 
    {
        let _keyValuePair = _tempArray[i].split('='); 

        if(_keyValuePair[0] == paramName)
            return _keyValuePair[1];
    }
}

$(function(){
    let mode = getQuerystring("userId");
    let language = getQuerystring("userPwd");

    alert(mode + " : " + language);
    
});
