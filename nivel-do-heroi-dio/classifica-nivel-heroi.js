let personagens = [
    { classe: "Guerreiro", xp: 1500 },
    { classe: "Mago", xp: 3500 },
    { classe: "Ladino", xp: 2300 },
    { classe: "Bruxo", xp: 6200 },
    { classe: "Caçador de Sangue", xp: 12000 },
    { classe: "Morto-Vivo", xp: 7200 },
    { classe: "Relbede", xp: 200 }
];


personagens.forEach(personagem => {
    if (personagem.xp < 1000) {
        personagem.classificacao = 'Ferro';
    } else if (personagem.xp >= 1000 && personagem.xp < 2000) {
        personagem.classificacao = 'Bronze';

    } else if (personagem.xp >= 2000 && personagem.xp < 5000) {
        personagem.classificacao = 'Prata';

    } else if (personagem.xp >= 5000 && personagem.xp < 7000){
        personagem.classificacao = 'Ouro';

    } else if (personagem.xp >= 7000 && personagem.xp < 8000){
        personagem.classificacao = 'Platina';

    }else if (personagem.xp >= 8000 && personagem.xp < 9000){
        personagem.classificacao = 'Ascendente';

    }else if (personagem.xp >= 9000 && personagem.xp < 10000){
        personagem.classificacao = 'Imortal';

    }else {
        personagem.classificacao = 'Radiante';
    }

    console.log(`Classe: ${personagem.classe}, XP: ${personagem.xp}, Classificação: ${personagem.classificacao}`);
});

