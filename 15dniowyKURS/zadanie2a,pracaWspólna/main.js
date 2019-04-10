const square = document.createElement('div');


document.body.appendChild(square); //dodajemy 'square' do body

let size = 100; //wielkość kwadratu 

square.style.width = size + "px";
//100 + "px" -> "100" + "px" -> konkatenacja -> "100px"

square.style.height = size + "px";
square.style.backgroundColor = "black";

//maksymalna wielkość kwadratu 
//window.innerWidth * 0.5; window.innerWidth - spr. w console

window.addEventListener("scroll", function () {
    if (size < window.innerWidth / 2) {

        size += 5; //size = size + 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

})