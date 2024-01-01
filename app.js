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
      listItem.textContent = `Name: ${item.Name},
      Units: ${item.Units} Importance:${item.Importance} Brand:${item.Brand || "N/A"}`
      listAll.appendChild(listItem)
    }}) 
   }
   if(existingItens.length > 0){
    listAll.innerHTML += "</ul>";
   }
  
   

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
      btn.classList.remove("hidden")
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
      listItem.textContent = `Name: ${item.Name},
      Units: ${item.Units} Importance:${item.Importance} Brand:${item.Brand || "N/A"}`
      listAll.appendChild(listItem)
    }}) 
   }
   if(existingItens.length > 0){
    listAll.innerHTML += "</ul>";
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

  document.addEventListener("DOMContentLoaded", menuGroceryView)
document.addEventListener("DOMContentLoaded", menuMeatView)
