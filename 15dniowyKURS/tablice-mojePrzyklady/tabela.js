const polishUsers = ["Adam", "Anna", "Wiktor", "Weronika", "Gaja", "Bartek"];
//console.log(polishUsers);


// push - dodaje element na koncu tablicy

//polishUsers.push("Aleksandra");
//console.log(polishUsers);


//unshift - dodaje element na początku listy

//polishUsers.unshift("Robert");
//console.log(polishUsers);

//pop - usuwa ostatni element; usunięcie wartości i indeksu (nie tylko wartości!) 

//polishUsers.pop();
//console.log(polishUsers);

//const deletedUser = polishUsers.pop();
//console.log(polishUsers);


//shift - usówa pierwszy element

//polishUsers.shift();
//console.log(polishUsers);

//powyższe metody oprócz tego, że dodają czy usówają element również zwracają element

//const removedLastElement = polishUsers.pop();
//console.log(polishUsers);


//const removedLastElement = polishUsers.shift();
//console.log(polishUsers);

//zwraca "Adam" <- removedLastElement


//const lengthArrayAfterPush = polishUsers.push("Maja");
//console.log(polishUsers);
//metoda zwraca długość tablicy po jej wykonaniu (length-długość)

//const lengthArrayAfterUnsfift = polishUsers.unshift("Robert");
//console.log(polishUsers);
//metoda zwraca długość tablicy po jej wykonaniu (length-długość)

/*...........*/


// metoda concat - łączenie tablic - w istocie nie łączy tablic (dwóch czy więcej) a tworzy nową //#endregion

//const redColor = ["czerwony", "purpura", "bordo"];
//const greenColor = ["zielony", "turkus", "zieleń butelkowa"];

//const redAndGreenColors = redColor.concat(greenColor);
//console.log(redAndGreenColors);

//const redGreenBlueColors = redColor.concat(greenColor, ["morski niebieski"]);
//console.log(redGreenBlueColors);
//można dodawać elementy na bierząco tworzone - "morski niebieski" stworzony na bierząco 


//kolejny sposób dodawania tablic, nowy (od ES6) to operator spread ... - operator rozwijania, operator trzech kropek

//const colorsCollections = [...redColor, ...greenColor];
//console.log(colorsCollections);

//const colorsCollections2 = [...redColor, ...greenColor, ...`morski niebieski`];
//console.log(colorsCollections2);

//metoda slice
//metoda slice zwraca nową tablicę, która składa się z części tablicy na której jest wykonywana. Jeśli damy tylko jeden argument, to będzie zwracał od tego elementu (od tego indexu) do końca.

const items = ["kwiat", "donica", "ziemia", "woda", "nawóz", "grabki", "łopatka"];

//items.slice(3);
//console.log(items);

// items.slice(3); - od 3 indexu zostaje wycięty

//items.slice(2, 3);
//items.slice(2, 3); - 2 mówi od którego elementu (indexu) zostaje wycięty a 3 do którego alementu ale już bez niego (bez 3) //#endregion

//items.slice(2, 4);
// wynik - "ziemia", "woda"

//items.slice(-1);
//items.slice(-1); (-1) oznacza wyświetl element pierwszy od końca 

//items.slice(-3);
// (-3) oznacza wycięcie elementów trzech od końca - "nawóz", "grabki", "łopatka"

//const newItems = items.slice(0, 3);
//console.log(newItems);
//przypisujemy indeksy do nowej tabeli newItems

//metoda splice   splice-złącze, splot
//przykład metody destrukcyjnej (destructive method, mutating method - metoda ta zmienia tablicę na której jest wykonywana); metoda splice zmienia tablice - modyfikuje - na której jest wykonywana


const animals = ["dog", "cat", "canary", "mouse"];

//animals.splice(1, 2);
//console.log(animals); //animals.splice(1, 2); od indexu pierwszego usuniemy dwa (2) elementy

//animals.splice(0, 3);
//console.log(animals); //wynik będzie "mouse"

//animals.splice(0, 1);
//console.log(animals); // nie pojawi się "dog"

//animals.splice(2);
//console.log(animals); //zostaną usunięte wszystkie elementy od indexu 2 "canary", włącznie z nim - zostanie zmniejszona długość tablicy


//animals.splice(0);
//console.log(animals);

//Metoda splice umożliwia nam też zastąpienie usuniętych elementów

//animals.splice(3, 1, "hamster");
//console.log(animals);
//"mouse" został zastępiony przez "hamster"

//animals.splice(0, 2, "fisher", "snake");
//console.log(animals); 
//liczymy od indexu 0 czyli "dog" i zastępujemy dwa kolejne indeksy czyli "dog" i "cat" nowymi nazwami czyli powstanie nowa tablica: ["fisher", "snake", "canary", "mouse"]

//animals.splice(0, 1, "fisher", "snake");
//console.log(animals);
//powstanie nowa tablica z 5 elementami 

//animals.splice(2, 0, "fisher", "snake");
//console.log(animals);
// 0 czyli nic nie uwuwamy jedynie dodajemy po drugim indexie //#endregion

//animals.splice(0, 0, "pig", "horse", "donkey");
//console.log(animals);
//wynikiem będzie 7 elementów w tabeli, nic nie usuneliśmy jedynie dodaliśmy trzy elementy na początku

//animals.splice(2, 0, "rat");
//console.log(animals);
//"rat" został jedynie dodany po drugim (2) indexie

//unshift 
//animals.unshift("parrot");
//console.log(animals);
//został dodany jeden element 

//metoda splice !! BARDZO WAŻNE informacje - nie tylko wykonuje operacje na tablicy (zmienia ją), ale też zwraca wartości, które usuwa w formie tablicy, czyli to co usuniemy możemy wykorzystać.

//const pets = animals.splice(0, 3);
//console.log(pets);

/*---------------------*/

//metoda sort
//metoda destrukcyjna


//["kanapa", "szafa", "stół"].sort();
//animals.sort();
//metoda sortuje indexy alfabetycznie czyli zmienia tablice

/*----------------- */

//metoda indexof
//szuka czy dany element wystepuje w danej tablicy, zwraca indeks a jeśli go nie znajdzie zwraca -1

//["arek", 22, null, 22].indexOf(22);
//wynik 1 - ponieważ metoda szuka danego elementu od początku tabeli i jeśli go znajdzie to przestaje szukać 

//["arek", 22, null, 22].indexOf("art"); //wynik -1 

//metoda lastindexof

//["arek", 22, null, 22].lastIndexOf(22);

/*--------------------- */

//metoda includes

animals.includes("rat"); //false
animals.includes('cat'); //true
[10, 8, 120, 120].includes(8); //true
[10, 8, 120, 120].includes("8"); //false
[10, 8, 120, 120].includes(121); //false

/*--------------------- */

//metoda join
//nie wpływamy na tablice
//tworzy string z elementów, domyślnie oddzilonymi przecinkami. 

items.join(); //elementy domyślnie będą rozdzielone przecinkiem
items.join("---"); //elementy będą oddzielone ---
items.join("- zaczynamy pracę w kwietniu; \n "); //po ostatnim elemencie nie pojawi się inf. ponieważ ona rozdziela elementy (po ost. elemencie nie ma kolejnego)

/*------------------------- */

//metoda reverse 
//metoda destrukcyjna
//odwraca kolejność

["a", 3, "z", "koniec"].reverse();


/*------------------------------- */

//metoda split
//metoda którą można wykonać na string, a tworzy tablicę

" Marja Katarzyna Anna Kajetan".split('');
" Marja Katarzyna Anna Kajetan".split(' ');