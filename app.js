const mobile = document.querySelector('.menu-toggle');
const mobileLink = documnet.querySelector('.sidebar');

mobile.addEventListener("click", function() {
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector("is-active");
    if(window.innerWidth<=768 && menubar){
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

