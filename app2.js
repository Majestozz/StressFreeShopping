function menuBakeryView(){
  const menuBakery = document.querySelector(".itens-in-list-bakery")
  const buttonBakery = document.querySelector(".bakery-list")
  if (menuBakery) {
    menuBakery.addEventListener("click", () => {
      if(menuBakery.classList.contains("active")){
        menuBakery.classList.remove("active")
        desviewListBakery()
      }else{
      menuBakery.classList.add("active")
      viewListBakery()
  }
    })
    };
  }
  function desviewListBakery(){
    const buttonBakery = document.querySelectorAll(".bakery-list")
    buttonBakery.forEach(function(btn){
      btn.classList.add("hidden")
    })
  }
  function viewListBakery() {
   const buttonBakery = document.querySelectorAll(".bakery-list")
   buttonBakery.forEach(function(btn){
   if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden")
      viewItenListBakery();
   }
})
  }
  document.addEventListener("DOMContentLoaded", menuBakeryView)