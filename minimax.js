var op = ["0","X"]
import * as funcoes from './funcoes.js'


export const movimentoIA = (board, jogador) => {// Recebe o tabuleiro antes da jogada e o jogador, no caso 0(ia), primeira a jogar
    
    var melhorValor = null
    var melhorMovimento = null

    getPosicoes(board).forEach((t) => { // foreach roda todas as possibilidades possiveis
                                         // t array(quantidade de possibilidades) de array(linha, coluna)

        console.log(t)

        board[t[0]][t[1]] = op[jogador]//simulo possibilidade por possibilidade e coloco no tabuleiro

        var valor = minimax(board,jogador)//chamo min max para calculo, mando tabuleiro e jogador 0(ia)

        console.log(t +" " + valor)

        board[t[0]][t[1]] = " "// retiro a simulação da jogada do tabuleiro

        if(valor>melhorValor){//apenas verificando a melhor possibilidade dentre apenas a q posso jogar no momento
            melhorValor=valor
            melhorMovimento=t
        }
    });
    return melhorMovimento// retorno o melhor movimento
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

/*
var score = {
    "Velha":0, //1
    "X":1, // -1
    "0":-1 //0
}*/

export const minimax = (board,jogador) => { // recebo tabuleiro e jogador

    var winner = funcoes.verificaGanhador(board) // chamo função pra ver se tem vencedor // return 0 , X , Velha , false
    
    if(winner == "0"){//se jogador 0(ia) ganhar retorno 1
        return 1;
    }
    if(winner == "X"){//se jogador x(eu) ganahr retorno -1
        return -1
    }
    if(winner=="Velha"){//se der velha retorno 0
        return 0
    }
    var melhorMovimento = null
    if(jogador=="0"){ //procuro max para jogada da ia

        var melhorValor = -Infinity
        
        getPosicoes(board).forEach((t) => {// foreach roda todas as possibilidades possiveis apartir de uma certa possbilidade
        
            board[t[0]][t[1]] = op[jogador]// simulo jogada
            var valor = minimax(board,jogador)// chamo minmax
            jogador = (jogador + 1)%2 // jogada do proximo player

            if(valor>melhorValor){// se eu tiver um valor maior, mudo o valor da jogada, a primeira vez sempre muda pq coloquei -inf
                melhorValor=valor
                melhorMovimento=t
            }

            board[t[0]][t[1]] = " "//tiro a simulação do tabuleiro

        });

        return melhorValor//retorno o valor da jogada
       
    }else{ //// procuro o min para jogada do X(eu)

        var melhorValor = Infinity
       
    
        getPosicoes(board).forEach((t) => {
            
            board[t[0]][t[1]] = op[jogador]
            
            var valor = minimax(board,jogador)
            jogador = (jogador + 1)%2 //troco player

            if(valor<melhorValor){// nesse caso é menor para ter jogada para cancelar a jogada do player x(eu)
                melhorValor=valor
                melhorMovimento=t
            }
    
            board[t[0]][t[1]] = " "
    
        });
           
        
    }
}

   
/*

    var melhorValor = Infinity

    getPosicoes(board).forEach((t) => {
        
        board[t[0]][t[1]] = op[jogador]
        
        var valor = minimax(board,jogador)
       // funcoes.printBoard(board)
       // console.log(t+" "+valor)
        board[t[0]][t[1]] = " "

        if(melhorValor== Infinity){
            melhorValor=valor
        }
        //board possiçao jogada adv
        else if(jogador == 0 && valor>melhorValor){
            melhorValor=valor
        }

        else if(jogador == 1 && valor<melhorValor){
            melhorValor=valor
        }
    });

    return melhorValor
}
*/
