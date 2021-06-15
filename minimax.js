var op = ["0","X"]
import * as funcoes from './funcoes.js'

export const movimentoIA = (board, jogador) => {
    var melhorValor = null
    var melhorMovimento = []
    getPosicoes(board).forEach((t) => {

        console.log(t)

        board[t[0]][t[1]] = op[jogador]
        var valor = minimax(board,jogador)

        console.log(t +" " + valor)

        board[t[0]][t[1]] = " "

        if(melhorValor== null){
            melhorValor=valor
            melhorMovimento=t
        }
        else if(jogador == 0){
            if(valor>melhorValor){
                melhorValor=valor
                melhorMovimento=t
            }
        }
        else if(jogador == 1){
            if(valor<melhorValor){
                melhorValor=valor
                melhorMovimento=t
            }
        }
    });
    return melhorMovimento
}

export const getPosicoes = (board) => {
    
    var posicoes = []
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(board[i][j]==" "){
                posicoes.push([i,j])
            }
        }   
    }
    return posicoes
}

var score = {
    "Velha":0,
    "X":1,
    "0":-1
}

export const minimax = (board,jogador) => {

    var winner = funcoes.verificaGanhador(board)  
    if(winner){
        return score[winner]
    }
    jogador = (jogador + 1)%2

    var melhorValor = null

    getPosicoes(board).forEach((t) => {
        
        board[t[0]][t[1]] = op[jogador]
        var valor = minimax(board,jogador)
       
        //console.log(t+" "+valor)
        board[t[0]][t[1]] = " "

        if(melhorValor== null){
            melhorValor=valor
        }
        else if(jogador == 0){
            if(valor>melhorValor){
                melhorValor=valor
            }
        }
        else if(jogador == 1){
            if(valor<melhorValor){
                melhorValor=valor
            }
        }
    });
    return melhorValor
}

