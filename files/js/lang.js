var lang = document.querySelector("#lang");
var option = document.querySelectorAll("#lang option")
var langchoosing;

lang.addEventListener("change",function(){
    var index = this.selectedIndex;
    langchoosing = option[index].value;
    window.location.href = `../${langchoosing}/index.html`;
});
