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
  addNameStorage();//call function addNameStorage
})

function addNameStorage(){//function to add inputs in localStorage
const inputNameIten = document.getElementById("inputName").value//recover input field
const selectElement = document.getElementById("selectCategory");
const selectValueCategory = selectElement.options[selectElement.selectedIndex].value;
if(inputNameIten.trim()!== "" && selectValueCategory.trim()!== ""){//conditional for Input is different from void add iten

  var data = {
    Name: inputNameIten,
    Category: selectValueCategory
  };

  localStorage.setItem("My itens", JSON.stringify(data));//add item in LocalStorage

  document.getElementById("inputName").value = "";//refresh input field

}





document.querySelectorAll(".img-menu").forEach((btn) => {
    btn.addEventListener("click", () => {
      viewList();
    });
  });
  }


  function viewList() {
    document.querySelectorAll(".iten-of-list").forEach((elemento) => {
      elemento.onclick
        if (elemento.classList.contains("hidden")) {
          elemento.classList.remove("hidden");
        } else {
          elemento.classList.add("hidden");
        }
      });
    }
    
  
