let heroName = "Nestor";
let heroLevel = "Desconhecido";

// promt para botar a quantidade de XP
let heroXp = prompt("Por favor, insira sua experiência do herói:");

// Converte XP para número
heroXp = parseInt(heroXp);

// Verifica se é número mesmo
if (!isNaN(heroXp)) {
    console.log("Experiência do herói:", heroXp);
} else {
    console.log("Por favor, insira um número válido.");
}

//  Compara os numeros para ver
if (heroXp < 1000) {
    heroLevel = "Ferro";
} else if (heroXp >= 1001 && heroXp <= 2000) {
    heroLevel = "Bronze";
} else if (heroXp >= 2001 && heroXp <= 5000) {
    heroLevel = "Prata";
} else if (heroXp >= 5001 && heroXp <= 7000) {
    heroLevel = "Ouro";
} else if (heroXp >= 7001 && heroXp <= 8000) {
    heroLevel = "Platina";
} else if (heroXp >= 8001 && heroXp <= 9000) {
    heroLevel = "Ascendente";
} else if (heroXp >= 9001 && heroXp <= 10000) {
    heroLevel = "Imortal";
} else if (heroXp > 10000) {
    heroLevel = "Radiante";
} else {
    heroLevel = "Desconhecido";
}

console.log("O herói de nome " + heroName + " está no nível " + heroLevel)
