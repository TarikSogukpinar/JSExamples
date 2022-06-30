let firstParagraph = document.getElementById("intro1");
let message = document.getElementById("message");
message.innerHtml = "Message : " + firstParagraph.innerHTML;


let allUnorderedList = document.getElementsByTagName("ul");
let unorederedList = allUnorderedList[0];

let allListItems = unorederedList.getElementsByTagName("li");

for (let i = 0; i < allListItems.length; i++) {
    console.log(allListItems[i].firstChild.data);
};

let allItemsWithClassName = document.getElementsByClassName("intro1")
console.log(allItemsWithClassName[0].innerHTML);


document.getElementById("tryIt").addEventListener("click", changeColor);

function changeColor() {
    document.getElementById("intro1").style.color = "blue";
}



