const but_inactive=document.querySelector(".but_inactive")
const card_footer_share=document.querySelector(".card--footer-share")
const but_active=document.getElementById("but_active")


but_inactive.addEventListener("click",()=>{
    card_footer_share.style.zIndex=2

    card_footer_share.classList.toggle("show-net")
    
    but_inactive.classList.toggle("but_but")
})
but_active.addEventListener("click",()=>{
    card_footer_share.style.zIndex=-1

   
    

})

