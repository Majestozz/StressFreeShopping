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
const menuCanned = document.querySelector(".itens-in-list-Canned")
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