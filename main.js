import * as funcoes from './funcoes.js'
import * as minimax from './minimax.js'

/*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
 
var board = funcoes.criarBoard()
var ganhador = funcoes.verificaGanhador(board)

var jogador = 0
var i,j

while(!ganhador){

    funcoes.printBoard(board);

    if(jogador == 0){
        var p = []
        p = minimax.movimentoIA(board,jogador)
        i=p[0]
        j=p[1]
    }
    else{ /*
        var p = []
        p = minimax.movimentoIA(board,jogador)
        i=p[0]
        j=p[1]
       */
        i = funcoes.getImputValido("Jogador "+jogador+" - Digite a linha");
        j = funcoes.getImputValido("Jogador "+jogador+" - Digite a coluna");
        
    }
    
    
    if (funcoes.verificaMovimento(board, i, j)){
        funcoes.fazMovimento(board, i, j, jogador)
        jogador = (jogador + 1)%2
    }
    else{
       alert("Espaço ocupado")
    }

    ganhador = funcoes.verificaGanhador(board)
    console.log("---------------")
}
console.log(ganhador)
funcoes.printBoard(board);

