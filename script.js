const chips = document.getElementById('chips')
const field = document.getElementById('field')

chips.addEventListener('click', function () {
    let i = Number(chips.innerHTML)
    do {
        i = i - 1
        let div = document.createElement('div');
        field.appendChild(div);
        div.setAttribute("id", "chips-inner")
        div.setAttribute("class", "chips-inner")
    }
    while (
        i < 15
    )
})

field.addEventListener('click', function (el) {
    let e = el.target
    if (e.id == 'chips-inner') e.remove() && chips.innerHTML + 1;
})
