//for scroll behavior
document.addEventListener("DOMContentLoaded",function(){
    const navlinks = document.querySelector('.nav-link')

    navlinks.forEach(function(navlink){
        event.preventDefault()

        const targetId = this.getAttribute('href').substirng(1)
        const targetElement = document.getElementById(targetId)

        if(targetElement){
            targetElement.scrollIntoView({
                behavior: 'smooth'
            })
        }
    })
})

//navbar toggle
function toggleNavbar(){
    const navbar = document.getElementById("navbar-hamburger");
    navbar.classList.toggle("hidden");
}