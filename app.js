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





document.querySelectorAll(".img-menu").forEach((btn) => {
    btn.addEventListener("click", () => {
      viewList();
    });
  });
  }

  document.querySelectorAll(".img-menu").forEach((btn) => {
    btn.addEventListener("click", () => {
      viewList();
    });
  });
  
  function viewList() {
    document.querySelectorAll(".iten-of-list").forEach((elemento) => {
      elemento.onclick
        if (elemento.classList.contains("hidden")) {
          elemento.classList.remove("hidden");
          viewItenList()
        } else {
          elemento.classList.add("hidden");
        }
      });
      
    }

  function viewItenList(){

    var existingData = localStorage.getItem("MyItens");

    var existingItens = existingData ? JSON.parse(existingData) : [];
    
   
    const listAll = document.querySelector(".itens-list-style")
   
    listAll.innerHTML = "";

    if(existingItens.length > 0){
      listAll.innerHTML = `<ul class="itens-in-list-Grocery-store"> Grocery Store <img src="imagens/menu.png" alt="image for a menu" class="img-menu">`;
    }
      existingItens.forEach(function(item){
      if(item.Category === "meat"){
      var listItem = document.createElement("li");
      listItem.textContent = `Name: ${item.Name},
      Units: ${item.Units} Importance:${item.Importance} Brand:${item.Brand || "N/A"}`
      listAll.appendChild(listItem)
    }}) 
   if(existingItens.length > 0){
    listAll.innerHTML += "</ul>";
   }
  }