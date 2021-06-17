from funcoes import  verificaGanhador

token = ["X", "O"]

def movimentoIA(board, jogador):
    possibilidades = getPosicoes(board)
    melhor_valor = None
    melhor_movimento = None
    for t in possibilidades:
        board[t[0]][t[1]] = token[jogador]
        valor = minimax(board, jogador)
        board[t[0]][t[1]] = " "
        if(melhor_valor is None):
            melhor_valor = valor
            melhor_movimento = t
        elif(jogador == 0):
            if(valor > melhor_valor):
                melhor_valor = valor
                melhor_movimento = t
        elif(jogador == 1):
            if(valor < melhor_valor):
                melhor_valor = valor
                melhor_movimento = t

    return melhor_movimento[0], melhor_movimento[1]

def getPosicoes(board):
    posicoes = []
    for i in range(3):
        for j in range(3):
            if(board[i][j] == " "):
                posicoes.append([i, j])
    
    return posicoes

score = {
    "Velha": 0,
    "X": 1,
    "O": -1
}

def minimax(board, jogador):
    ganhador = verificaGanhador(board)
    if(ganhador):
        return score[ganhador]
    jogador = (jogador + 1)%2
    
    possibilidades = getPosicoes(board)
    melhor_valor = None
    for t in possibilidades:
        board[t[0]][t[1]] = token[jogador]
        valor = minimax(board, jogador)
        board[t[0]][t[1]] = " "

        if(melhor_valor is None):
            melhor_valor = valor
        elif(jogador == 0):
            if(valor > melhor_valor):
                melhor_valor = valor
        elif(jogador == 1):
            if(valor < melhor_valor):
                melhor_valor = valor

    return melhor_valor