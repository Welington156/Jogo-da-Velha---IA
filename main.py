from funcoes import criarBoard, fazMovimento,  getImputValido, printBoard, verificaGanhador,  verificaMovimento

from minimax import movimentoIA

jogador = 0 # jogador 1
board = criarBoard()
ganhador = verificaGanhador(board)
while(not ganhador):
    printBoard(board)
    print("------------")
    if(jogador == 0):
        i = getImputValido("Digite a linha: ")
        j = getImputValido("Digite a coluna: ")
        #i,j = movimentoIA(board, jogador)
    else:
         i,j = movimentoIA(board, jogador)
            #i = getImputValido("Digite a linha: ")
            #j = getImputValido("Digite a coluna: ")
    
    if(verificaMovimento(board, i, j)):
        fazMovimento(board, i, j, jogador)
        jogador = (jogador + 1)%2
    else:
        print("Esta ocupada")
    
    ganhador = verificaGanhador(board)

print("-----------------")
print(ganhador)
printBoard(board)

