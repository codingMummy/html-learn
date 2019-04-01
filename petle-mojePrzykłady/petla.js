//przykład 1 wyświetlamy wiek użytkownika

/*const usersAge = [19, 18, 15, 45, 33, 25];

for (let i = 0; i < usersAge.length; i++) {
    console.log(`użytkownik o indeksie  ${i} tojest w wieku ${usersAge[i]}`);
}*/

//przykład 2 obliczamy wiek uzytkownika

//dwie zmienne które bedziemy porównywać
//musimy odjąć od obecnego roku date urodzenia uzytkownika

/*const usersDateBirth = [2000, 1992, 1932, 1980];
const currentYear = 2018;

for (i = 0; i < usersDateBirth.length; i++) {
    const userAge = currentYear - usersDateBirth[i];
    //console.log(userAge);
    console.log(`wiek uzytkownika numer ${i} to  ${userAge}`);
}*/

//przykład 3 - for + instrukcja warunkowa + alert

//zakładamy, że program bedzie witał gości wchodzących na naszą strone, po zawodzie jaki wykonują - programistów i polityków nie zapraszamy

const guest = ["piłkarz", "kucharz", "murarz", "programista", "polityk", "pisarz", "magazynier", "emeryt"];

for (let i = 0; i < guest.length; i++) {
    if (guest[i] === "programista") {
        console.log("przepraszamy nie ma już miejsca (nie zapraszać)")
    } else if (guest[i] === "polityk") {
        console.log("przepraszamy nie ma już miejsc (nie wpuszczać!!!");
    } else {
        console.log(' Witamy ' + guest[i] + " zapraszamy! ");
    }
}