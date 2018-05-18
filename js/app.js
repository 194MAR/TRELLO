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
    var listTitle = document.getElementById("listTitle");
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
    var listTitle = document.getElementById("listTitle");
    listTitle.focus();

}

var saveCardButton = document.getElementById("saveCardButton");
saveCardButton.addEventListener("click",addNewCard);
function addNewCard(){
    var cardsValue = document.getElementById("cardsValue").value;
    var card = document.getElementById("card");
    card.innerHTML=cardsValue;
    card.style.display="block";

}