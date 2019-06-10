
// Scrolling - header
window.addEventListener('scroll',function(){
    var offSetHeader = document.querySelector('.title');
    if(window.pageYOffset > 50){
        offSetHeader.style.position = "fixed";
        offSetHeader.style.zIndex = "2";
        offSetHeader.style.backgroundColor = "#14151b";
        offSetHeader.style.height = "70px";
        offSetHeader.style.top = "-93%";
        offSetHeader.style.alignItems = "center";
        offSetHeader.style.transition = "all .5s linear";
        document.querySelector('.menu-transform').style.top = "105%";
        document.querySelector('.dot').style.top = "35%";
    }
    if(window.pageYOffset < 40){
        document.querySelector('.menu-transform').style = " ";
        document.querySelector('.dot').style = " ";
        offSetHeader.style = " ";
    }
})

// Scrolling - menu
window.addEventListener('scroll',function(){
    var offSetY = document.querySelector('nav .main-menu');
    if(window.pageYOffset > 750){
        offSetY.style.transition = "all .5s linear";
        offSetY.style.position = "fixed";
        offSetY.style.width = "100%";
        offSetY.style.top = "7%";
        offSetY.style.zIndex = "1";
    }
    else{
        offSetY.style = "";
    }
})

// Toggle - Content
function toggleScroll(){
    var toggle = document.querySelectorAll('.toggle')
    for(var i=0;i<toggle.length;i++){
        if(toggle[i].offsetTop < window.scrollY + 800){
            toggle[i].classList.add('visible');
        }
        else{
            toggle[i].classList.remove('visible');
        }
    }
}
window.addEventListener('scroll',toggleScroll);


// Toggle - Button Scroll Top
window.addEventListener('scroll',function(){
    var scrollBtn =  document.querySelector('.scrolltop');
    if(window.scrollY > 5000){
        scrollBtn.style.visibility = "visible";
    }
    else{
        scrollBtn.style = " ";
    }
})

//Scroll to Top

window.onload = function(){
    document.querySelector(".scrolltop").onclick = function(){
        var length = window.scrollY;
        var posY = length;
        function scrollToTop(){
          posY = (posY - length/1000).toFixed(0);
          if(posY>0){
            window.scrollTo(0,posY);
          }
          else{
            clearInterval(loop);
          }
        }
        var loop = setInterval(scrollToTop,1);
    }
}
