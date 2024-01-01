function viewItenListGrocery(){//function for view list

    var existingData = localStorage.getItem("MyItens");

    var existingItens = existingData ? JSON.parse(existingData) : [];
    
   
    const listAll = document.querySelector(".itens-in-list-Grocery-store")
   
    

    if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
      listAll.innerHTML = `<class="itens-in-list-Grocery ">Grocery<img src="imagens/menu.png" alt="image for a menu" class="img-menu-Grocery">`;
    }
      existingItens.forEach(function(item){
      if(item.Category === "Grocery"){//compare if category is equal a Grocery
      var listItem = document.createElement("li");
      listItem.classList.add("Grocery-list")
      listItem.textContent = `Name: ${item.Name},
      Units: ${item.Units} Importance:${item.Importance} Brand:${item.Brand || "N/A"}`
      listAll.appendChild(listItem)
    }}) 
   }
   

  function menuGroceryView(){
  const menuGrocery = document.querySelector(".itens-in-list-Grocery-store")
  const buttonGrocery = document.querySelector(".grocery-list")
  if (menuGrocery) {
    menuGrocery.addEventListener("click", () => {
      if(menuGrocery.classList.contains("active")){
        menuGrocery.classList.remove("active")
        desviewList()
      }else{
      menuGrocery.classList.add("active")
      viewList()
  }
    })
    };
  }
  function desviewListGrocery(){
    const buttonGrocery = document.querySelectorAll(".grocery-list")
    buttonGrocery.forEach(function(btn){
      btn.classList.add("hidden")
    })
  }
  function viewListGrocery() {
   const buttonGrocery = document.querySelectorAll(".grocery-list")
   buttonGrocery.forEach(function(btn){
   if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden")
      viewItenList();
   }
})
  }