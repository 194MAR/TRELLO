/*var list = document.getElementsByClassName("add-list");
list.addEventListener('click',hiddig)
function hiddig(event){
    list.style.display='none';
};*/
/*var addList = document.getElementById("anadir-lista");
function hiddig(event){
var cuadroGris = document.getElementById("cuadro-gris");
}*/

var buttonList = document.getElementById("agregar-lista");
buttonList.addEventListener("click", showGreySquare);
function showGreySquare(){
    var greySquare = document.getElementById("cuadro-gris");
    var addList = document.getElementById("anadir-lista");
    greySquare.style.visibility="visible";
    addList.style.visibility="hidden";
} 
var saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click",newList);
function newList(){
    var newListInputValue = document.getElementById("newListInput").value;
    var listTitle = document.getElementById("list-title");
    listTitle.value = newListInputValue;
    document.getElementById("newListInput").value=" ";
    var cardColum = document.getElementById("cardColum");
    cardColum.style.display="block";
}
var newCardButton = document.getElementById("newCardButton");
newCardButton.addEventListener("click",showContet);
function showContet(){
    newCardButton.style.display="none";
    var addCardForm= document.getElementById("cuadroGris2")
    addCardForm.style.display="block";
    



}