let numberOfVictories = getVictories (40, 10)
//let playerRank = getPlayerRank()
console.log("O Herói tem de saldo de " + numberOfVictories + " e está no nível de " + getPlayerRank())


function getVictories (victories, defeats) {
    let totalWins = victories - defeats
    return totalWins
}

function getPlayerRank () {
    let level
    if (numberOfVictories <= 10) {
        level = "Ferro" 
    } else if (numberOfVictories > 10 && numberOfVictories <= 20) {
        level = "Bronze" 
    } else if (numberOfVictories > 20 && numberOfVictories <= 50) {
        level = "Prata" 
    } else if (numberOfVictories > 50 && numberOfVictories <= 80) {
        level = "Ouro" 
    } else if (numberOfVictories > 80 && numberOfVictories <= 90) {
        level = "Diamante" 
    } else if (numberOfVictories > 90 && numberOfVictories <= 100) {
        level = "Lendário" 
    } else {
        level = "Imortal" 
    }

    return level;
}