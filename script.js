let a;
a = prompt("Įveskite pirmąosios kraštinės ilgį");
a = + a;

let b;
b = prompt("Įveskite antrosios kraštinės ilgį");
b = + b;

let c;
c = prompt("Įveskite trečiosiso kraštinės ilgį");
c = + c;

let pusperimetris = pusperimetrioSkaiciavimas(a, b, c);
pusperimetris = + pusperimetris;

let plotas = plotoSkaiciavimas(a, b, c, pusperimetris);
console.log("Trikampio plotas yra: " + plotas)


function plotoSkaiciavimas (krastine1, krastine2, krastine3, pusperimetrioSkaiciavimas){
    return Math.sqrt(pusperimetrioSkaiciavimas * (pusperimetrioSkaiciavimas - krastine1) * (pusperimetrioSkaiciavimas - krastine2) * (pusperimetrioSkaiciavimas - krastine3));
}

function pusperimetrioSkaiciavimas (krastine1, krastine2, krastine3){
    return (krastine1 + krastine2 + krastine3) / 2;
}
