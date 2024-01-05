function viewItenListMeat(){//function for view list

    var existingData = localStorage.getItem("MyItens");

    var existingItens = existingData ? JSON.parse(existingData) : [];
    
   
    const listAll = document.querySelector(".itens-in-list-meat")
   
    

    if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
      listAll.innerHTML = `<class="itens-in-list-meat ">Meat<img src="imagens/menu.png" alt="image for a menu" class="img-menu-meat">`;
    }
      existingItens.forEach(function(item){
      if(item.Category === "meat"){//compare if category is equal a meat
      var listItem = document.createElement("li");
      listItem.classList.add("meat-list")
      listItem.classList.add("iten-of-list-green")
      listItem.innerHTML = `<span class="name-span">Name:</span><span class="name-span-item"> ${item.Name}</span>
      <span class = "unit-style">Units: </span><span class="unit-number">${item.Units}</span>
      <span class="importance-span">Importance:</span><span class = "importance-span-item">${item.Importance}</span>
       <span class="brand-span">Brand:</span><span class="brand-span-item">${item.Brand || ""}</span>`
      
      listAll.appendChild(listItem)
    }}) 
   if(existingItens.length > 0){
    listAll.innerHTML += "</ul>";
   }
  }
  
   
//Meat List
  function menuMeatView(){
  const menuMeat = document.querySelector(".itens-in-list-meat")
  const buttonMeat = document.querySelector(".meat-list")
  if (menuMeat) {
    menuMeat.addEventListener("click", () => {
      if(menuMeat.classList.contains("active")){
        menuMeat.classList.remove("active")
        desviewListMeat()
      }else{
      menuMeat.classList.add("active")
      viewListMeat()
  }
    })
    };
  }
  function desviewListMeat(){
    const buttonMeat = document.querySelectorAll(".meat-list")
    buttonMeat.forEach(function(btn){
      btn.classList.add("hidden")
    })
  }
  function viewListMeat() {
   const buttonMeat = document.querySelectorAll(".meat-list")
   buttonMeat.forEach(function(btn){
   if (btn.classList.contains("hidden")) {
      btn.classList.toggle("view")
      viewItenListMeat();
   }
})
  }

  function viewItenListGrocery(){//function for view list
    var existingData = localStorage.getItem("MyItens");
    var existingItens = existingData ? JSON.parse(existingData) : [];
    const listAll = document.querySelector(".itens-in-list-Grocery-store")  
    if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
      listAll.innerHTML = `<class="itens-in-list-Grocery ">Grocery Store<img src="imagens/menu.png" alt="image for a menu" class="img-menu-Grocery">`;
    }
      existingItens.forEach(function(item){
      if(item.Category === "grocery-store"){//compare if category is equal a Grocery
      var listItem = document.createElement("li");
      listItem.classList.add("grocery-list")
      listItem.classList.add("iten-of-list-green2")
      listItem.innerHTML = `<span class="name-span">Name:</span><span class="name-span-item"> ${item.Name}</span>
      <span class = "unit-style">Units: </span><span class="unit-number">${item.Units}</span>
      <span class="importance-span">Importance:</span><span class = "importance-span-item">${item.Importance}</span>
       <span class="brand-span">Brand:</span><span class="brand-span-item">${item.Brand || ""}</span>`
      listAll.appendChild(listItem)
    }}) 
    if(existingItens.length > 0){
    listAll.innerHTML += "</ul>";
   }
  }

   

  function menuGroceryView(){
  const menuGrocery = document.querySelector(".itens-in-list-Grocery-store")
  const buttonGrocery = document.querySelector(".grocery-list")
  if (menuGrocery) {
    menuGrocery.addEventListener("click", () => {
      if(menuGrocery.classList.contains("active")){
        menuGrocery.classList.remove("active")
        desviewListGrocery()
      }else{
      menuGrocery.classList.add("active")
      viewListGrocery()
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
      viewItenListGrocery();
   }
})
  }

  function viewItenListBakery(){//function for view list

    var existingData = localStorage.getItem("MyItens");
    var existingItens = existingData ? JSON.parse(existingData) : [];
    const listAll = document.querySelector(".itens-in-list-bakery")
   
    

    if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
      listAll.innerHTML = `<class="itens-in-list-bakery">Bakery<img src="imagens/menu.png" alt="image for a menu" class="img-menu-bakery">`;
    }
      existingItens.forEach(function(item){
      if(item.Category === "bakery"){//compare if category is equal a bakery
      var listItem = document.createElement("li");
      listItem.classList.add("bakery-list")
      listItem.classList.add("iten-of-list-green")
      listItem.innerHTML = `<span class="name-span">Name:</span><span class="name-span-item"> ${item.Name}</span>
      <span class = "unit-style">Units: </span><span class="unit-number">${item.Units}</span>
      <span class="importance-span">Importance:</span><span class = "importance-span-item">${item.Importance}</span>
       <span class="brand-span">Brand:</span><span class="brand-span-item">${item.Brand || ""}</span>`
      listAll.appendChild(listItem)
    }}) 
   }
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

    function viewItenListColds(){//function for view list

      var existingData = localStorage.getItem("MyItens");
      var existingItens = existingData ? JSON.parse(existingData) : [];
      const listAll = document.querySelector(".itens-in-list-colds")
     
      
    
      if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
        listAll.innerHTML = `<class="itens-in-list-colds">Colds<img src="imagens/menu.png" alt="image for a menu" class="img-menu-colds">`;
      }
        existingItens.forEach(function(item){
        if(item.Category === "colds"){//compare if category is equal a Colds
        var listItem = document.createElement("li");
        listItem.classList.add("colds-list")
        listItem.classList.add("iten-of-list-green")
        listItem.innerHTML = `<span class="name-span">Name:</span><span class="name-span-item"> ${item.Name}</span>
        <span class = "unit-style">Units: </span><span class="unit-number">${item.Units}</span>
        <span class="importance-span">Importance:</span><span class = "importance-span-item">${item.Importance}</span>
         <span class="brand-span">Brand:</span><span class="brand-span-item">${item.Brand || ""}</span>`
        listAll.appendChild(listItem)
      }}) 
     }
     function menuColdsView(){
      const menuColds = document.querySelector(".itens-in-list-colds")
      const buttonColds = document.querySelector(".colds-list")
      if (menuColds) {
        menuColds.addEventListener("click", () => {
          if(menuColds.classList.contains("active")){
            menuColds.classList.remove("active")
            desviewListColds()
          }else{
          menuColds.classList.add("active")
          viewListColds()
      }
        })
        };
      }
      function desviewListColds(){
        const buttonColds = document.querySelectorAll(".colds-list")
        buttonColds.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListColds() {
       const buttonColds = document.querySelectorAll(".colds-list")
       buttonColds.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.remove("hidden")
          viewItenListColds();
       }
    })
      }

      function viewItenListFruits(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-fruits")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-fruits ">Fruits<img src="imagens/menu.png" alt="image for a menu" class="img-menu-fruits">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "fruits"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("fruits-list")
          listItem.classList.add("iten-of-list-green")
          listItem.innerHTML = `<span class="name-span">Name:</span><span class="name-span-item"> ${item.Name}</span>
          <span class = "unit-style">Units: </span><span class="unit-number">${item.Units}</span>
          <span class="importance-span">Importance:</span><span class = "importance-span-item">${item.Importance}</span>
           <span class="brand-span">Brand:</span><span class="brand-span-item">${item.Brand || ""}</span>`
          
          listAll.appendChild(listItem)
        }}) 
       if(existingItens.length > 0){
        listAll.innerHTML += "</ul>";
       }
      }
      
       
      //Meat List
      function menuFruitsView(){
      const menuFruits = document.querySelector(".itens-in-list-fruits")
      const buttonFruits = document.querySelector(".fruits-list")
      if (menuFruits) {
        menuFruits.addEventListener("click", () => {
          if(menuFruits.classList.contains("active")){
            menuFruits.classList.remove("active")
            desviewListFruits()
          }else{
          menuFruits.classList.add("active")
          viewListFruits()
      }
        })
        };
      }
      function desviewListFruits(){
        const buttonFruits = document.querySelectorAll(".fruits-list")
        buttonFruits.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListFruits() {
       const buttonFruits = document.querySelectorAll(".fruits-list")
       buttonFruits.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListFruits();
       }
      })
      }

      function viewItenListVegetables(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-vegetables")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-vegetables">Vegetables<img src="imagens/menu.png" alt="image for a menu" class="img-menu-vegetables">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "vegetables"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("vegetables-list")
          listItem.classList.add("iten-of-list-green")
          listItem.innerHTML = `<span class="name-span">Name:</span><span class="name-span-item"> ${item.Name}</span>
          <span class = "unit-style">Units: </span><span class="unit-number">${item.Units}</span>
          <span class="importance-span">Importance:</span><span class = "importance-span-item">${item.Importance}</span>
           <span class="brand-span">Brand:</span><span class="brand-span-item">${item.Brand || ""}</span>`
          
          listAll.appendChild(listItem)
        }}) 
       if(existingItens.length > 0){
        listAll.innerHTML += "</ul>";
       }
      }
      
       
      //Meat List
      function menuVegetablesView(){
      const menuVegetables = document.querySelector(".itens-in-list-vegetables")
      const buttonVegetables = document.querySelector(".vegetables-list")
      if (menuVegetables) {
        menuVegetables.addEventListener("click", () => {
          if(menuVegetables.classList.contains("active")){
            menuVegetables.classList.remove("active")
            desviewListVegetables()
          }else{
          menuVegetables.classList.add("active")
          viewListVegetables()
      }
        })
        };
      }
      function desviewListVegetables(){
        const buttonVegetables = document.querySelectorAll(".vegetables-list")
        buttonVegetables.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListVegetables() {
       const buttonVegetables = document.querySelectorAll(".vegetables-list")
       buttonVegetables.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListVegetables();
       }
      })
      }

      function viewItenListFrozen(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-frozen")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-frozen ">Frozen<img src="imagens/menu.png" alt="image for a menu" class="img-menu-frozen">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "frozen"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("frozen-list")
          listItem.classList.add("iten-of-list-green")
          listItem.innerHTML = `<span class="name-span">Name:</span><span class="name-span-item"> ${item.Name}</span>
          <span class = "unit-style">Units: </span><span class="unit-number">${item.Units}</span>
          <span class="importance-span">Importance:</span><span class = "importance-span-item">${item.Importance}</span>
           <span class="brand-span">Brand:</span><span class="brand-span-item">${item.Brand || ""}</span>`
          
          listAll.appendChild(listItem)
        }}) 
       if(existingItens.length > 0){
        listAll.innerHTML += "</ul>";
       }
      }
      
       
      //Meat List
      function menuFrozenView(){
      const menuFrozen = document.querySelector(".itens-in-list-frozen")
      const buttonFrozen = document.querySelector(".frozen-list")
      if (menuFrozen) {
        menuFrozen.addEventListener("click", () => {
          if(menuFrozen.classList.contains("active")){
            menuFrozen.classList.remove("active")
            desviewListFrozen()
          }else{
          menuFrozen.classList.add("active")
          viewListFrozen()
      }
        })
        };
      }
      function desviewListFrozen(){
        const buttonFrozen = document.querySelectorAll(".frozen-list")
        buttonFrozen.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListFrozen() {
       const buttonFrozen = document.querySelectorAll(".frozen-list")
       buttonFrozen.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListFrozen();
       }
      })
      }

      function viewItenListDrinks(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-drinks")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-drinks ">Drinks<img src="imagens/menu.png" alt="image for a menu" class="img-menu-drinks">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "drinks"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("drinks-list")
          listItem.classList.add("iten-of-list-green")
          listItem.innerHTML = `<span class="name-span">Name:</span><span class="name-span-item"> ${item.Name}</span>
          <span class = "unit-style">Units: </span><span class="unit-number">${item.Units}</span>
          <span class="importance-span">Importance:</span><span class = "importance-span-item">${item.Importance}</span>
           <span class="brand-span">Brand:</span><span class="brand-span-item">${item.Brand || ""}</span>`
          
          listAll.appendChild(listItem)
        }}) 
       if(existingItens.length > 0){
        listAll.innerHTML += "</ul>";
       }
      }
      
       
      //Meat List
      function menuDrinksView(){
      const menuDrinks = document.querySelector(".itens-in-list-drinks")
      const buttonDrinks = document.querySelector(".drinks-list")
      if (menuDrinks) {
        menuDrinks.addEventListener("click", () => {
          if(menuDrinks.classList.contains("active")){
            menuDrinks.classList.remove("active")
            desviewListDrinks()
          }else{
          menuDrinks.classList.add("active")
          viewListDrinks()
      }
        })
        };
      }
      function desviewListDrinks(){
        const buttonDrinks = document.querySelectorAll(".drinks-list")
        buttonDrinks.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListDrinks() {
       const buttonDrinks = document.querySelectorAll(".drinks-list")
       buttonDrinks.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListDrinks();
       }
      })
      }

document.addEventListener("DOMContentLoaded", menuDrinksView)
document.addEventListener("DOMContentLoaded", menuFrozenView)
document.addEventListener("DOMContentLoaded", menuVegetablesView)
document.addEventListener("DOMContentLoaded", menuFruitsView)
document.addEventListener("DOMContentLoaded", menuColdsView)
document.addEventListener("DOMContentLoaded", menuGroceryView)
document.addEventListener("DOMContentLoaded", menuBakeryView)
document.addEventListener("DOMContentLoaded", menuMeatView)