const chips = document.getElementById('chips')
const field = document.getElementById('field')
var num = Number(chips.innerHTML)
document.getElementById('chips').innerHTML = Number(chips.innerHTML)


function chipsTwist (num) {
    if (0 < num < 16) {
        chips.addEventListener('click', function () {
            let div = document.createElement('div');
            field.appendChild(div);
            div.setAttribute("id", "chips-inner")
            div.setAttribute("class", "chips-inner")
    
            function substractFromStack() {
                num = num - 1
                chips.innerHTML = num
            }
            substractFromStack()
        })
        field.addEventListener('click', function (el) {
            let e = el.target
            if (e.id == 'chips-inner') e.remove();
    
            function addToStack() {
                if (e.id == 'chips-inner') {
                    num = num + 1
                    chips.innerHTML = num
                }
            }
            addToStack()
        })
    } else {
        return console.log('Max 15 chips')
    }
}
chipsTwist()




// chips.addEventListener ('click', function (e){
//     let chipsStack = e.target
//     chipsStack.appendChild(newChips)
//     newChips.setAttribute("id", "chips-inner")
//     newChips.setAttribute("class", "chips")
//     newChips.setAttribute("draggable", "true")

//     newChips.innerHTML = 1
// })


// document.addEventListener("drag", function( event ) {
// }, false);

// document.addEventListener("dragstart", function( event ) {
//     // store a ref. on the dragged elem
//     dragged = event.target;
//     // make it half transparent
//     event.target.style.opacity = .5;
// }, false);

// document.addEventListener("dragend", function( event ) {
//     // reset the transparency
//     event.target.style.opacity = "";
// }, false);

// /* events fired on the drop targets */
// document.addEventListener("dragover", function( event ) {
//     // prevent default to allow drop
//     event.preventDefault();
// }, false);

// document.addEventListener("dragenter", function( event ) {
//     // highlight potential drop target when the draggable element enters it
//     if ( event.target.className == "field" ) {
//         event.target.style.background = "";
//     }

// }, false);

// document.addEventListener("dragleave", function( event ) {
//     // reset background of potential drop target when the draggable element leaves it
//     if ( event.target.className == "field" ) {
//         event.target.style.background = "";
//     }

// }, false);

// document.addEventListener("drop", function( event ) {
//     // prevent default action (open as link for some elements)
//     event.preventDefault();
//     // move dragged elem to the selected drop target
//     if ( event.target.className == "field" ) {
//         event.target.style.background = "";
//         dragged.parentNode.removeChild( dragged );
//         event.target.appendChild( dragged );
//     }

// }, false);
// chips.innerHTML = n;
// console.log("added")
