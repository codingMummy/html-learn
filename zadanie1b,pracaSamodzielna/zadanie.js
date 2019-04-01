const btm = document.querySelector("button"); //1.
let number = 1; //5.


btm.addEventListener('click', function () { //2.

    const li = document.createElement("li"); //3.
    li.textContent = number; //4.
    if (number % 3 == 0) { //9. 
        li.classList.add("big") //10. dodajemy "big"
    }

    const list = document.querySelector("ul"); //6.
    list.appendChild(li); //7. odwołujemy sie do zmiennej 

    number += 2 // 8. drugi sposób zapisu: number = number + 2; element zwiększa swoją wartość co dwa
});