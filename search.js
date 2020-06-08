  window.onload = function () {
    var SearchButton = getElementById("SB");
    var bSearchButton = getElementById("bilibiliseb");
    SearchButton.onclick = function (){
      var bsv = getElementById("Search").value;
      var searchurl = "https://www.baidu.com/s?ie=UTF-8&wd=" + bsv;
      window.open(searchurl);
    } bSearchButton.onclick = function (){
      var bilisv = getElementById("bilise").value;
      var searchurl = "https://search.bilibili.com/all?keyword=" + bilisv;
      window.open(searchurl)
    }
  }
