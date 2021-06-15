window.onload = function(){
    var winHeight = 0;
    if (window.innerHeight){
        winHeight = window.innerHeight;
    }else if ((document.body) && (document.body.clientHeight)){
        winHeight = document.body.clientHeight;
    }
    var html = document.getElementsByTagName('html')[0];
    if(document.body.offsetHeight < windowHeight){
        html.style.height = windowHeight;
    }
};
window.onload=function (){
    var menu = document.getElementById("nav").getElementsByClassName('menu');
    for(i = 0;i<menu.length;i++){
        menu[i].onmouseover=function (){
            this.style.background="#fff"
            var lis=this.getElementsByTagName('ul')[0].getElementsByTagName('li');
            this.getElementsByTagName('ul')[0].style.display="block";
            this.getElementsByTagName('ul')[0].style.width="98px";
            this.getElementsByTagName('ul')[0].style.position="absolute";
            for(var i=0;i<lis.length;i++){
                lis[i].onmouseover=function (){
                    this.style.background="red";
                }
                lis[i].onmouseout=function (){
                    this.style.background='#fff';
                }
            }
        }
        menu[i].onmouseout=function (){
            this.style.background="#ee810d"
            this.getElementsByTagName('ul')[0].style.display="none";
        }
    }
}