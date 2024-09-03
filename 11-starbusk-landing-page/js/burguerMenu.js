const burguerMenu = document.getElementById("burguerMenu");
const menuHeader = document.getElementById("menuHeader");
const body = document.querySelector("body");
const exitMenuBurger= document.getElementById("exitMenuBurger");

burguerMenu.addEventListener("click",()=>{
    
    menuHeader.classList.add("cm-header-nav-imgBurguer-active")
    body.classList.add("body-disable-scroll")
    exitMenuBurger.classList.add("cm-header-nav-imgExitBurguer-active")
})

exitMenuBurger.addEventListener("click",()=>{
    if( menuHeader.classList.contains("cm-header-nav-imgBurguer-active")){
        menuHeader.classList.remove("cm-header-nav-imgBurguer-active")
        exitMenuBurger.classList.remove("cm-header-nav-imgExitBurguer-active")
        body.classList.remove("body-disable-scroll")
    }
})