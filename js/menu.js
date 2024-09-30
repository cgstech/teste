


window.addEventListener("scroll", function(){
    let boxHeader = document.querySelector('#header');

    boxHeader.classList.toggle('rolagem', window.scrollY > 0)
})