

const Player1 = (function (){
  const move = "X"
  const name = "abhay"
  return {name, move}
})()

const Player2 = (function(){
  const move = "O";
  const name = "a.i"
  return {name, move}
})()

const GameBoard = (function(){
  const gameboard = [null, null, null, null, null, null, null, null, null]

  return {gameboard, Player1, Player2}
})()



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomMove(){
  for(let i = 0; i<40; i++){
    let i = getRandomInt(0, 8)
    let emptyCount = 0
    console.log(i)
      
    if(!document.querySelector(`.a${i}`).textContent){

      document.querySelector(`.a${i}`).textContent = Player2.move
      GameBoard.gameboard[i] = Player2.move
      break

    }   
    
  }
}
//getRandomMove()
//



function emptyGameboard(){
  const game = Game()
  for(let i = 0; i<9; i++){
    document.querySelector(`.a${i}`).textContent = null
    
  }
  document.querySelector(".winner").textContent = ""

  GameBoard.gameboard = [null, null, null, null, null, null, null, null, null]
  console.log(GameBoard.gameboard)

}

document.querySelector(".clear").addEventListener("click", emptyGameboard)

document.querySelector(".X").addEventListener("click", ()=>{
  Player1.move = "X"
  Player2.move = "O"
})

document.querySelector(".O").addEventListener("click", ()=>{
  Player1.move = "O"
  Player2.move = "X"
})


function generateArray(){
  

  const a0 = document.querySelector(".a0")
  a0.addEventListener("click", () =>{

    if(!document.querySelector(`.a${0}`).textContent){
      a0.textContent = Player1.move
      GameBoard.gameboard[0] = Player1.move;
      getRandomMove()
    }
   
    const game = Game();
    console.log(game)
    console.log(game.result)
    if(game.result){
      document.querySelector(".winner").textContent = game.result

    }
    
    

  })

  const a1 = document.querySelector(".a1")
  a1.addEventListener("click", () =>{
    if(!document.querySelector(`.a${1}`).textContent){
      a1.textContent = Player1.move
      GameBoard.gameboard[1] = Player1.move
     
      getRandomMove()
    }


    const game = Game();
    console.log(game)
    console.log(game.result)
    if(game.result){
      document.querySelector(".winner").textContent = game.result

    }
    

  })

  const a2 = document.querySelector(".a2")
  a2.addEventListener("click", () =>{
    if(!document.querySelector(`.a${2}`).textContent){
      a2.textContent = Player1.move
      GameBoard.gameboard[2] = Player1.move
     
      getRandomMove()
    }
    

    const game = Game();
    console.log(game)
    console.log(game.result)
    if(game.result){
      document.querySelector(".winner").textContent = game.result

    }
    

  })

  const a3 = document.querySelector(".a3")
  a3.addEventListener("click", () =>{
    if(!document.querySelector(`.a${3}`).textContent){
      a3.textContent = Player1.move
      GameBoard.gameboard[3] = Player1.move
     
      getRandomMove()
    }
    
    const game = Game();
    console.log(game)
    console.log(game.result)
    if(game.result){
      document.querySelector(".winner").textContent = game.result

    }
   

  })

  const a4 = document.querySelector(".a4")
  a4.addEventListener("click", () =>{
    if(!document.querySelector(`.a${4}`).textContent){
      a4.textContent = Player1.move
      GameBoard.gameboard[4] = Player1.move
     
      getRandomMove()
    }

    const game = Game();
    console.log(game)
    console.log(game.result)
    if(game.result){
      document.querySelector(".winner").textContent = game.result

    }
    

  })

  const a5 = document.querySelector(".a5")
  a5.addEventListener("click", () =>{
    if(!document.querySelector(`.a${5}`).textContent){
      a5.textContent = Player1.move
      GameBoard.gameboard[5] = Player1.move
     
      getRandomMove()
    }
    

    const game = Game();
    console.log(game)
    console.log(game.result)
    if(game.result){
      document.querySelector(".winner").textContent = game.result

    }
   

  })

  const a6 = document.querySelector(".a6")
  a6.addEventListener("click", () =>{
    if(!document.querySelector(`.a${6}`).textContent){
      a6.textContent = Player1.move
      GameBoard.gameboard[6] = Player1.move
     
      getRandomMove()
    }
    

    const game = Game();
    console.log(game)
    console.log(game.result)
    if(game.result){
      document.querySelector(".winner").textContent = game.result

    }
  

  })

  const a7 = document.querySelector(".a7")
  a7.addEventListener("click", () =>{
    if(!document.querySelector(`.a${7}`).textContent){
      a7.textContent = Player1.move
      GameBoard.gameboard[7] = Player1.move
     
      getRandomMove()
    }
    

    const game = Game();
    console.log(game)
    console.log(game.result)
    if(game.result){
      document.querySelector(".winner").textContent = game.result

    }
    

  })

  const a8 = document.querySelector(".a8")
  a8.addEventListener("click", () =>{
    if(!document.querySelector(`.a${8}`).textContent){
      a8.textContent = Player1.move
      GameBoard.gameboard[8] = Player1.move
     
      getRandomMove()
    }

    const game = Game();
    console.log(game)
    console.log(game.result)
    if(game.result){
      document.querySelector(".winner").textContent = game.result
    }
    

  })


}

generateArray()



const Game = function(){
  let Player2Score = 0
  let Player1Score = 0
  let result;
  let array = GameBoard.gameboard
  
  console.log(array)

  if(array[0] == Player1.move && array[4] == Player1.move && array[8] == Player1.move){
    Player1Score++
    result = "You Win"
  }else if(array[0] == Player1.move && array[1] == Player1.move && array[2] == Player1.move){
    Player1Score++
    result = "You Win"
  }else if(array[0] == Player1.move && array[3] == Player1.move && array[6] == Player1.move){
    Player1Score++
    result = "You Win"
  }else if(array[2] == Player1.move && array[5] == Player1.move && array[8] == Player1.move){
    Player1Score++
    result = "You Win"
  }else if(array[6] == Player1.move && array[7] == Player1.move && array[8] == Player1.move){
    Player1Score++
    result = "You Win"
  }else if(array[2] == Player1.move && array[4] == Player1.move && array[6] == Player1.move){
    Player1Score++
    result = "You Win"
  }else if(array[3] == Player1.move && array[4] == Player1.move && array[5] == Player1.move){
    Player1Score++
    result = "You Win"
  }else if(array[1] == Player1.move && array[4] == Player1.move && array[7] == Player1.move){
    Player1Score++
    result = "You Win"
  }


  if(array[0] == Player2.move && array[4] == Player2.move && array[8] == Player2.move){
    Player2Score++
    result = "Computer Wins"
  }else if(array[0] == Player2.move && array[1] == Player2.move && array[2] == Player2.move){
    Player2Score++
    result = "Computer Wins"
  }else if(array[0] == Player2.move && array[3] == Player2.move && array[6] == Player2.move){
    Player2Score++
    result = "Computer Wins"
  }else if(array[2] == Player2.move && array[5] == Player2.move && array[8] == Player2.move){
    Player2Score++
    result = "Computer Wins"
  }else if(array[6] == Player2.move && array[7] == Player2.move && array[8] == Player2.move){
    Player2Score++
    result = "Computer Wins"
  }else if(array[2] == Player2.move && array[4] == Player2.move && array[6] == Player2.move){
    Player2Score++
    result = "Computer Wins"
  }else if(array[3] == Player2.move && array[4] == Player2.move && array[5] == Player2.move){
    Player2Score++
    result = "Computer Wins"
  }else if(array[1] == Player2.move && array[4] == Player2.move && array[7] == Player2.move){
    Player2Score++
    result = "Computer Wins"
  }

  return {result, Player1Score}
  
}







