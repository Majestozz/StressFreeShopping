const buttonPlusForm = document.querySelector(".plus-add-iten");
const formAddIten = document.querySelector(".form-add-iten-container")
const buttonSubmitForm = document.querySelector(".button-to-add")


let nameOfIten = JSON.parse(localStorage.getItem("nameIten")) || []//convert JSON

buttonPlusForm.addEventListener("click", ()=>{

    if(formAddIten.classList.contains("hidden")){
        formAddIten.classList.remove("hidden")
        buttonPlusForm.setAttribute("src","imagens/cancel-button.png")
    }else{
        formAddIten.classList.add("hidden")
        buttonPlusForm.setAttribute("src", "imagens/plus.png")
    }
})


buttonSubmitForm.addEventListener("click", (evento)=>{//event to submit form
  evento.preventDefault();//do not refresh the page
  addLocalStorage();//call function addLocalStorage
})

function addLocalStorage(){//function to add inputs in localStorage
const inputNameIten = document.getElementById("inputName").value//recover input field
const selectElement = document.getElementById("selectCategory");//recover select field
const selectValueCategory = selectElement.options[selectElement.selectedIndex].value;//recover value select field
const inputUnitsIten = document.getElementById("inputUnits").value//recover input field
const selectElementImportance = document.getElementById("importanceId");
const selectValueImportance = selectElementImportance.options[selectElementImportance.selectedIndex].value;
const inputBrand = document.getElementById("inputBrand").value;
if(inputNameIten.trim()!== "" && selectValueCategory.trim()!== "" && inputUnitsIten.trim()!==""
&& selectValueImportance.trim()!=="" ){//conditional for Input is different from void add iten

  var existingData = localStorage.getItem("MyItens");
  var existingItens = existingData ? JSON.parse(existingData) : [];

  var newIten = {//save all infos in var
    Name: inputNameIten,
    Category: selectValueCategory,
    Units: inputUnitsIten,
    Importance: selectValueImportance,
    Brand: inputBrand.trim()!== "" ? inputBrand : null
  };

  existingItens.push(newIten)//add item in LocalStorage

  localStorage.setItem("MyItens", JSON.stringify(existingItens));//save the list

  document.getElementById("inputName").value = "";//refresh input field
  document.getElementById("selectCategory").value = "";
  document.getElementById("inputUnits").value = "";
  document.getElementById("importanceId").value = "";
  document.getElementById("inputBrand").value = "";

}
}


  function viewItenListMeat(){//function for view list

    var existingData = localStorage.getItem("MyItens");//create localStorage

    var existingItens = existingData ? JSON.parse(existingData) : [];
    
   
    const listAll = document.querySelector(".itens-in-list-meat")//Create Const
   
    

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
       <span class="brand-span">Brand:</span><span class="brand-span-item">${item.Brand || ""}</span>`//creating html element li and inserted value
      
      listAll.appendChild(listItem)//joining list with html
    }}) 
   if(existingItens.length > 0){
    listAll.innerHTML += "</ul>";
   }
  }
  
   
//Meat List
  function menuMeatView(){//list view in screen
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
  function desviewListMeat(){//devisualization of the list
    const buttonMeat = document.querySelectorAll(".meat-list")
    buttonMeat.forEach(function(btn){
      btn.classList.add("hidden")
    })
  }
  function viewListMeat() {//view list
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

      function viewItenListCanned(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-canned")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-canned ">Canned<img src="imagens/menu.png" alt="image for a menu" class="img-menu-canned">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "canned"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("canned-list")
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
      function menuCannedView(){
      const menuCanned = document.querySelector(".itens-in-list-canned")
      const buttonCanned = document.querySelector(".canned-list")
      if (menuCanned) {
        menuCanned.addEventListener("click", () => {
          if(menuCanned.classList.contains("active")){
            menuCanned.classList.remove("active")
            desviewListCanned()
          }else{
          menuCanned.classList.add("active")
          viewListCanned()
      }
        })
        };
      }
      function desviewListCanned(){
        const buttonCanned = document.querySelectorAll(".canned-list")
        buttonCanned.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListCanned() {
       const buttonCanned = document.querySelectorAll(".canned-list")
       buttonCanned.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListCanned();
       }
      })
      }

      function viewItenListTreats(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-treats")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-treats ">Treats<img src="imagens/menu.png" alt="image for a menu" class="img-menu-treats">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "treats"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("treats-list")
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
      function menuTreatsView(){
      const menuTreats = document.querySelector(".itens-in-list-treats")
      const buttonTreats = document.querySelector(".treats-list")
      if (menuTreats) {
        menuTreats.addEventListener("click", () => {
          if(menuTreats.classList.contains("active")){
            menuTreats.classList.remove("active")
            desviewListTreats()
          }else{
          menuTreats.classList.add("active")
          viewListTreats()
      }
        })
        };
      }
      function desviewListTreats(){
        const buttonTreats = document.querySelectorAll(".treats-list")
        buttonTreats.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListTreats() {
       const buttonTreats = document.querySelectorAll(".treats-list")
       buttonTreats.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListTreats();
       }
      })
      }
      function viewItenListPreparations(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-preparations")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-preparations ">Preparations<img src="imagens/menu.png" alt="image for a menu" class="img-menu-preparations">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "preparations"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("preparations-list")
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
      function menuPreparationsView(){
      const menuPreparations = document.querySelector(".itens-in-list-preparations")
      const buttonPreparations = document.querySelector(".preparations-list")
      if (menuPreparations) {
        menuPreparations.addEventListener("click", () => {
          if(menuPreparations.classList.contains("active")){
            menuPreparations.classList.remove("active")
            desviewListPreparations()
          }else{
          menuPreparations.classList.add("active")
          viewListPreparations()
      }
        })
        };
      }
      function desviewListPreparations(){
        const buttonPreparations = document.querySelectorAll(".preparations-list")
        buttonPreparations.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListPreparations() {
       const buttonPreparations = document.querySelectorAll(".preparations-list")
       buttonPreparations.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListPreparations();
       }
      })
      }
      function viewItenListSauces(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-sauces")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-sauces ">Sauces<img src="imagens/menu.png" alt="image for a menu" class="img-menu-sauces">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "sauces"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("sauces-list")
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
      function menuSaucesView(){
      const menuSauces = document.querySelector(".itens-in-list-sauces")
      const buttonSauces = document.querySelector(".sauces-list")
      if (menuSauces) {
        menuSauces.addEventListener("click", () => {
          if(menuSauces.classList.contains("active")){
            menuSauces.classList.remove("active")
            desviewListSauces()
          }else{
          menuSauces.classList.add("active")
          viewListSauces()
      }
        })
        };
      }
      function desviewListSauces(){
        const buttonSauces = document.querySelectorAll(".sauces-list")
        buttonSauces.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListSauces() {
       const buttonSauces = document.querySelectorAll(".sauces-list")
       buttonSauces.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListSauces();
       }
      })
      }
      function viewItenListUtilities(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-utilities")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-utilities ">Utilities<img src="imagens/menu.png" alt="image for a menu" class="img-menu-utilities">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "utilities"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("utilities-list")
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
      function menuUtilitiesView(){
      const menuUtilities = document.querySelector(".itens-in-list-utilities")
      const buttonUtilities = document.querySelector(".utilities-list")
      if (menuUtilities) {
        menuUtilities.addEventListener("click", () => {
          if(menuUtilities.classList.contains("active")){
            menuUtilities.classList.remove("active")
            desviewListUtilities()
          }else{
          menuUtilities.classList.add("active")
          viewListUtilities()
      }
        })
        };
      }
      function desviewListUtilities(){
        const buttonUtilities = document.querySelectorAll(".utilities-list")
        buttonUtilities.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListUtilities() {
       const buttonUtilities = document.querySelectorAll(".utilities-list")
       buttonUtilities.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListUtilities();
       }
      })
      }
      function viewItenListCleaning(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-cleaning")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-cleaning ">Cleaning<img src="imagens/menu.png" alt="image for a menu" class="img-menu-cleaning">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "cleaning"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("cleaning-list")
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
      function menuCleaningView(){
      const menuCleaning = document.querySelector(".itens-in-list-cleaning")
      const buttonCleaning = document.querySelector(".cleaning-list")
      if (menuCleaning) {
        menuCleaning.addEventListener("click", () => {
          if(menuCleaning.classList.contains("active")){
            menuCleaning.classList.remove("active")
            desviewListCleaning()
          }else{
          menuCleaning.classList.add("active")
          viewListCleaning()
      }
        })
        };
      }
      function desviewListCleaning(){
        const buttonCleaning = document.querySelectorAll(".cleaning-list")
        buttonCleaning.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListCleaning() {
       const buttonCleaning = document.querySelectorAll(".cleaning-list")
       buttonCleaning.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListCleaning();
       }
      })
      }
      function viewItenListHygiene(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-hygiene")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-hygiene ">Hygiene<img src="imagens/menu.png" alt="image for a menu" class="img-menu-hygiene">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "hygiene"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("hygiene-list")
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
      function menuHygieneView(){
      const menuHygiene = document.querySelector(".itens-in-list-hygiene")
      const buttonHygiene = document.querySelector(".hygiene-list")
      if (menuHygiene) {
        menuHygiene.addEventListener("click", () => {
          if(menuHygiene.classList.contains("active")){
            menuHygiene.classList.remove("active")
            desviewListHygiene()
          }else{
          menuHygiene.classList.add("active")
          viewListHygiene()
      }
        })
        };
      }
      function desviewListHygiene(){
        const buttonHygiene = document.querySelectorAll(".hygiene-list")
        buttonHygiene.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListHygiene() {
       const buttonHygiene = document.querySelectorAll(".hygiene-list")
       buttonHygiene.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListHygiene();
       }
      })
      }

      function viewItenListPharmacy(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-pharmacy")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-pharmacy ">Pharmacy<img src="imagens/menu.png" alt="image for a menu" class="img-menu-pharmacy">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "pharmacy"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("pharmacy-list")
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
      function menuPharmacyView(){
      const menuPharmacy = document.querySelector(".itens-in-list-pharmacy")
      const buttonPharmacy = document.querySelector(".pharmacy-list")
      if (menuPharmacy) {
        menuPharmacy.addEventListener("click", () => {
          if(menuPharmacy.classList.contains("active")){
            menuPharmacy.classList.remove("active")
            desviewListPharmacy()
          }else{
          menuPharmacy.classList.add("active")
          viewListPharmacy()
      }
        })
        };
      }
      function desviewListPharmacy(){
        const buttonPharmacy = document.querySelectorAll(".pharmacy-list")
        buttonPharmacy.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListPharmacy() {
       const buttonPharmacy = document.querySelectorAll(".pharmacy-list")
       buttonPharmacy.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListPharmacy();
       }
      })
      }

      function viewItenListPets(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-pets")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-pets ">Pets<img src="imagens/menu.png" alt="image for a menu" class="img-menu-pets">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "pets"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("pets-list")
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
      function menuPetsView(){
      const menuPets = document.querySelector(".itens-in-list-pets")
      const buttonPets = document.querySelector(".pets-list")
      if (menuPets) {
        menuPets.addEventListener("click", () => {
          if(menuPets.classList.contains("active")){
            menuPets.classList.remove("active")
            desviewListPets()
          }else{
          menuPets.classList.add("active")
          viewListPets()
      }
        })
        };
      }
      function desviewListPets(){
        const buttonPets = document.querySelectorAll(".pets-list")
        buttonPets.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListPets() {
       const buttonPets = document.querySelectorAll(".pets-list")
       buttonPets.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListPets();
       }
      })
      }
      function viewItenListHome(){//function for view list

        var existingData = localStorage.getItem("MyItens");
      
        var existingItens = existingData ? JSON.parse(existingData) : [];
        
       
        const listAll = document.querySelector(".itens-in-list-home-appliances")
       
        
      
        if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
          listAll.innerHTML = `<class="itens-in-list-home-appliances ">Home<img src="imagens/menu.png" alt="image for a menu" class="img-menu-home">`;
        }
          existingItens.forEach(function(item){
          if(item.Category === "home-appliances"){//compare if category is equal a meat
          var listItem = document.createElement("li");
          listItem.classList.add("home-appliances-list")
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
      function menuHomeView(){
      const menuHome = document.querySelector(".itens-in-list-home-appliances")
      const buttonHome = document.querySelector(".home-appliances-list")
      if (menuHome) {
        menuHome.addEventListener("click", () => {
          if(menuHome.classList.contains("active")){
            menuHome.classList.remove("active")
            desviewListHome()
          }else{
          menuHome.classList.add("active")
          viewListHome()
      }
        })
        };
      }
      function desviewListHome(){
        const buttonHome = document.querySelectorAll(".home-appliances-list")
        buttonHome.forEach(function(btn){
          btn.classList.add("hidden")
        })
      }
      function viewListHome() {
       const buttonHome = document.querySelectorAll(".home-appliances-list")
       buttonHome.forEach(function(btn){
       if (btn.classList.contains("hidden")) {
          btn.classList.toggle("view")
          viewItenListHome();
       }
      })
      }
function menuView(){
  menuBakeryView(), menuCannedView(), menuCleaningView(), menuColdsView(), menuDrinksView(), menuFrozenView(), menuFruitsView()
  menuGroceryView(), menuHomeView(), menuHygieneView(), menuMeatView(), menuPetsView(), menuPharmacyView(), menuPreparationsView()
  menuSaucesView(), menuTreatsView(), menuUtilitiesView(), menuVegetablesView()
}

document.addEventListener("DOMContentLoaded", menuView)
