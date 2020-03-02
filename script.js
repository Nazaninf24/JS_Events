// Fonctionnalité 1

var footer = document.querySelector('footer');
	count = 0;

footer.addEventListener('click', onFooterClick);

function onFooterClick(){
	count += 1 ;
	console.log('clique n°' + count);
};


// Fonctionnalité 2

// let menuBtn = document.getElementById("navbar-toggle");
// let menu = document.getElementById("navbarHeader");
// var navBtn = doc

// 	menuBtn.classList.toggle("collapse") ;
// }

// menu.addEventListener('click', menuBtnToggle);
// function menuToggle() {
// 	if (menuStatus == false) {
// 		menuBtn.classList.toggle("collapse");
// 		menuStatus = true;
// 	};
// 	else if (menuStatus == true) {
// 		menuBtn.classList.remove("collapse");
// 		menuStatus = false ;
// 	};

// menuBtn.onclick = menuToggle;

var navbarHeader = document.getElementById("navbarHeader");
var navBtn = document.querySelector(".navbar-toggler-icon");
navBtn.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse");
});


// Fonctionnalité 3

// var card = document.getElementsByClassName('card')[0];
// var buttonEdit = document.getElementsByTagName('button')[1]
// buttonEdit.addEventListener('click', changeText);

// function changeText(){
// 	if(buttonEdit.onclick == true){
// 	document.getElementsByClassName('card-text')[0].style.color='red';};
// };


var textCard = document.querySelectorAll(".card-body p")
var editBtn = document.querySelectorAll(".card .btn")
editBtn[1].addEventListener('click', function() {
	textCard[0].style.color='red'
})


// var caard = document.getElementsByClassName('card-text')[0];
// console.log (caard)
// var buutom = document.getElementsByTagName('button')[2];
// console.log (buutom)
// document.getElementsByClassName('card-text')[0].style.color = "#ff0000";
// function changeColor () {
// };


// Fonctionnalité 4

textCard[1].style.color = "rgb(33, 37, 41)";
editBtn[3].addEventListener("click", function() {
      if (textCard[1].style.color == "rgb(33, 37, 41)") {
       textCard[1].style.color = "green";
     } else {
       textCard[1].style.color = "rgb(33, 37, 41)";
     }
   });


// Fonctionnalité 5

// const navbar = document.querySelector('navbarHeader');

// navbar.addEventListener('dblclick', onNavbarDblClick);

// function onNavbarDblClick(){
//   document.getElementById("myLink").disabled = true;
// };

var header = document.getElementsByTagName('header')[0];
var onHeaderDoubleCLick = function() {
    if (document.styleSheets[0].disabled == false) {
        document.styleSheets[0].disabled = true
    } else {
        document.styleSheets[0].disabled == false
    }
}
header.addEventListener('dblclick', onHeaderDoubleCLick)
