var op = ["0","X"]

export const criarBoard = () => {
    var board = [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "],
    ]

    return board;
}

export const printBoard = (board) => {
    for(var i=0; i<3;i++){
        var j = 0
        console.log(board[i][j++]+"|"+board[i][j++]+"|"+board[i][j]) 
        if(i<2)
         console.log("------")
    }
}

export const getImputValido = (mensagem) => {
    try{
        var n = prompt(mensagem)
        if(n>=1 && n<=3){
            return n-1
        }

        else{
            alert(">1 e <3")
            getImputValido(mensagem)
        }
    }
    catch{
        alert("Numero nao valido")
        getImputValido(mensagem)
    }
}

export const verificaMovimento = (board, i, j) => {
    if(board[i][j] == " "){
        return true;
    }
    else{
        return false;
    }
}

export const fazMovimento = (board, i, j, jogador) => {
    board[i][j]=op[jogador]
}

export const verificaGanhador = (board) => {

    for(var i=0; i<3; i++){
        if(board[i][0] !=" " && board[i][0] == board[i][1] && board[i][1] == board[i][2]){
         return board[i][0];
        }
    }

    for(var i=0; i<3; i++){
        if(board[0][i] !=" " && board[0][i] == board[1][i] && board[1][i] == board[2][i]){
         return board[0][i];
        }
    }

    if(board[0][0] != " " && board[0][0] == board[1][1] && board[1][1] == board[2][2]){
        return board[0][0];
    }

    if(board[0][2] != " " && board[0][2] == board[1][1] && board[1][1] == board[2][0]){
        return board[0][2];
    }

    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            if(board[i][j]==" "){
                return false
            }
        }
    }

    return "Velha"

}

