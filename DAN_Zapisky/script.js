//BigINT je promena ktera pojme větší čísla
const bigINT = 6165465431644654n;
//Big int nejde míchat s ostatnímy typy nubmer = 1;
let nubmer = 1;
//string
let str = "Ahoj";
console.log(typeof str);
let str2 = 'Ahoj'
console.log(typeof str);
let str3 = `Hodnota const bigInt je: ${bigINT}`;
console.log(str3);
// Veta: "Jsem řekl"ahpj""
let veta = 'Jsem řek: "Ahoj"'
//Jiné stringy používáme, baychom mohli používat přímou řeč
//zpětné lomítko před znakem, říká chci použít tento znak bez funkce


//Interakce
async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (!response.ok) {
            throw new Error('Chyba při získávání IP adresy');
        }
        const data = await response.json();
        console.log('Vaše IP adresa:', data.ip);
        return data.ip; // Vrací IP adresu
    } catch (error) {
        console.error('Nastala chyba:', error);
        return null; // Vrací null v případě chyby
    }
}



// Hlavní logika
alert("Stránka je přístupná od 18 let");

let age = prompt("Kolik je ti let?");
age = Number(age); // Převod na číslo


if (age >= 18) {
    alert("Ahoj");
    alert(`Je ti ${age} let (${typeof age})`);
}

else {
    alert("Jdi do prdele!");
    alert("Lokalizuji tvoji adresu!!!");
    
    // Zpožděná výstraha
    setTimeout(() => {
        alert("Mám tě ty hajzle, policie je na cestě!");
    }, 10000); // 15 sekund
    setTimeout (() => {
        getUserIP().then((ip) => {
            if (ip) {
                alert(`IP adresa lokalizována: ${ip}`);
            } else {
                alert("Nepodařilo se získat IP adresu.");
            }
        });
    }, 10000)

    alter(2^2);
} 

let allowed = (age >= 18) ? true:false;