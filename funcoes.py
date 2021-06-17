
token = ["X", "O"]

def criarBoard():
    board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ]
    return board


def printBoard(board):
    for i in range(3):
        print("|".join(board[i]))
        if(i < 2):
            print("------")


def getImputValido(mensagem):
    try:
        n = int(input(mensagem))
        if(n >= 1 and n <= 3):
            return n - 1
        else:
            print(">1 e <3")
            return getImputValido(mensagem)
    except:
        print("nao valido")
        return getImputValido(mensagem)


def verificaMovimento(board, i , j):
    if(board[i][j] == " "):
        return True
    else:
        return False


def fazMovimento(board, i, j, jogador):
    board[i][j] = token[jogador]


def verificaGanhador(board):
    # linhas 
    for i in range(3):
        if(board[i][0] == board[i][1] and board[i][1] == board[i][2] and board[i][0] != " "):
            return board[i][0]
    
    # coluna
    for i in range(3):
        if(board[0][i] == board[1][i] and board[1][i] == board[2][i] and board[0][i] != " "):
            return board[0][i]

    # diagonal principal
    if(board[0][0] != " " and board[0][0] == board[1][1] and board[1][1] == board[2][2]):
        return board[0][0]

    # diagonal secundaria
    if(board[0][2] != " " and board[0][2] == board[1][1] and board[1][1] == board[2][0]):
        return board[0][2]

    for i in range(3):
        for j in range(3):
            if(board[i][j] == " "):
                return False

    return "Velha"