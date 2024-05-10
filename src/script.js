let heroName = "Nestor";
let heroXp = 30;
let heroLevel = "Desconhecido";

if (heroXp < 1000) {
    nivel = "Ferro";
} else if (heroXp >= 1001 && heroXp <= 2000) {
    nivel = "Bronze";
} else if (heroXp >= 2001 && heroXp <= 5000) {
    nivel = "Prata";
} else if (heroXp >= 5001 && heroXp <= 7000) {
    nivel = "Ouro";
} else if (heroXp >= 7001 && heroXp <= 8000) {
    nivel = "Platina";
} else if (heroXp >= 8001 && heroXp <= 9000) {
    nivel = "Ascendente";
} else if (heroXp >= 9001 && heroXp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O herói de nome " + heroName + " está no nível " + heroLevel)