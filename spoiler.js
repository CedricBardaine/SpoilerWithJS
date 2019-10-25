// /**
//  * click on the button .spoiler 
//  * then 
//  *  add class .visible to the next element 
//  */

//  var button = document.getElementById("buttonDisplaySpoil") ;
//  var button = document.querySelector('.spoiler button') ;  

//  button.addEventListener('click', function() {
//      this.nextElementSibling.classList.add('visible') ;
//      this.parentNode.removeChild(this) ; 
//  })

var elements = document.querySelectorAll('.spoiler') ; 
/**
 * 
 * @param {Element} element la var elements = document.querySelectorAll() parsée
 */
var createSpoilerButton = function (element) {
    // Creation de la span.spoiler-content
    var span = document.createElement('span') ; 
    span.className = 'spoiler-content' ; 
    span.innerHTML = element.innerHTML ; 

    // Creation du bouton
    var button = document.createElement('button') ; 
    button.textContent ='Afficher le spoiler';
    button.addEventListener('click' , function() {
        span.className ='spoiler-content visible' ; 
        button.outerHTML = '' ; 
    })
    //Ajout des elements au DOM
    element.innerHTML = '';
    element.appendChild(button) ; 
    element.appendChild(span);

}
for (var i = 0; i < elements.length; i++) {
    createSpoilerButton(elements[i]);
}