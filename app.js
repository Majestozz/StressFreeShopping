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


  function viewItenList(){//function for view list

    var existingData = localStorage.getItem("MyItens");

    var existingItens = existingData ? JSON.parse(existingData) : [];
    
   
    const listAll = document.querySelector(".itens-in-list-meat")
   
    

    if(existingItens.length > 0){//adds the initial structure of the list(if there are items)
      listAll.innerHTML = `<class="itens-in-list-meat ">Meat<img src="imagens/menu.png" alt="image for a menu" class="img-menu-meat">`;
    }
      existingItens.forEach(function(item){
      if(item.Category === "meat"){//compare if category is equal a meat
      var listItem = document.createElement("li");
      listItem.innerHTML = `<class="iten-of-list meat-list shopping hidden"> <img src="imagens/car-shopping.png" alt="image for a car" class="car-shopping-button">`
      listItem.textContent = `Name: ${item.Name},
      Units: ${item.Units} Importance:${item.Importance} Brand:${item.Brand || "N/A"}`
      listAll.appendChild(listItem)
    }}) 
    //close the list (if there are items)
   if(existingItens.length > 0){
    listAll.innerHTML += "</ul>";
   }
  }

  function menuMeatView(){
  const menuMeat = document.querySelector(".itens-in-list-meat")
  if (menuMeat) {
    menuMeat.addEventListener("click", () => {
      if(menuMeat.classList.contains("active")){
        listHidden()
      }else{
      menuMeat.classList.add("active")
        viewList();
  }
    })
    };
  }
function listHidden(){
   const menuMeat = document.querySelector(".itens-in-list-meat")
   if (menuMeat) {
    menuMeat.classList.remove("active")
      desviewList()
   }
    }

  
  function viewList() {
   const buttonMeat = document.querySelector(".meat-list")
   if( buttonMeat &&buttonMeat.classList.contains("hidden")){
      buttonMeat.classList.remove("hidden")
      viewItenList();
    }
  }
  function desviewList(){
    const buttonMeat = document.querySelector(".meat-list")
    if(buttonMeat && !buttonMeat.classList.contains("hidden")){
    buttonMeat.classList.add("hidden")
    }
  }

document.addEventListener("DOMContentLoaded", menuMeatView)
