function addLoadListener(func){
  var oldonload = window.onload;
  if(typeof window.onload != 'function'){
    console.log("Window.Onload");
    window.onload = func;
  } else{
    console.log("Window.Onload");
    window.onload = function(){
      oldonload();
      func();
    }
  }
} function cssSetting(obj, CssCode){
  obj.style.cssText = Csscode;
} function cssSettingStyle(obj, ariable, CssAttribute){
  obj.style[ariable] = CssAttribute
} function ImportDebugFile(){
    function log(LogValue){console.log(LogValue)}
    document.write("<script src="https://js.fundebug.cn/fundebug.2.0.0.min.js" apikey="41e1530775553b556d805ff48baf295a29f9a53d711243f4a325cc13862d644b" crossorigin="anonymous"></script>")
    document.write("<script src="https://js.fundebug.cn/fundebug.revideo.0.6.0.min.js"></script>")
}
  
