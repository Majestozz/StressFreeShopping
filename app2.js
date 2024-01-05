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