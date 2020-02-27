//'use strict';

// TODO: Вынести в отдельный конфиг shot part
var grid = [
          { id: 13, player: 1, cntChip: 5 },
          { id: 14, player: 0, cntChip: 0 },
          { id: 15, player: 0, cntChip: 0 },
          { id: 16, player: 0, cntChip: 0 },
          { id: 17, player: 2, cntChip: 3 },
          { id: 18, player: 0, cntChip: 0 },
          { id: 19, player: 2, cntChip: 5 },
          { id: 20, player: 0, cntChip: 0 },
          { id: 21, player: 0, cntChip: 0 },
          { id: 22, player: 0, cntChip: 0 },
          { id: 23, player: 0, cntChip: 0 },
          { id: 24, player: 1, cntChip: 2 },
          { id: 12, player: 2, cntChip: 5 },
          { id: 11, player: 0, cntChip: 0 },
          { id: 10, player: 0, cntChip: 0 },
          { id:  9, player: 0, cntChip: 0 },
          { id:  8, player: 1, cntChip: 3 },
          { id:  7, player: 0, cntChip: 0 },
          { id:  6, player: 1, cntChip: 5 },
          { id:  5, player: 0, cntChip: 0 },
          { id:  4, player: 0, cntChip: 0 },
          { id:  3, player: 0, cntChip: 0 },
          { id:  2, player: 0, cntChip: 0 },
          { id:  1, player: 2, cntChip: 2 }];

class Dice {
     constructor() {
         this.first  = null;
         this.second = null;
     }

     getRandomInt(min, max) {
         return Math.floor(Math.random() * (max - min)) + min;
     }

     do_throw() {
         this.first  = this.getRandomInt(1, 7);
         this.second = this.getRandomInt(1, 7);
     }

     render(namePlayer) {
         let div = document.getElementById(namePlayer + "-player");
         div.innerHTML = this.first + " " + this.second;
     }
}

var dice =  new Dice;
dice.do_throw();
dice.render('first')
//dice.do_throw();
//dice.render('second')


class Game {

  constructor(dice) {
     this.dice = dice;
     this.root = document.querySelector("#root");
     this.matrix = grid;
     this.colorPlayer = [" ", "white", "black"];
     this.activePosition = null;
     this.currentPlayer = 'black';
  }

  setActivePosition(numPosition) {
     this.activePosition = numPosition;
  }

  render() {
    //  debugger;
      var table = document.createElement('table');
      var tr = document.createElement('tr');
      for ( var obj in this.matrix )
      {
          var td = document.createElement('td');
          console.log(obj);
          td.setAttribute("id", this.matrix[obj].id );

          if ( 0   <  this.matrix[obj].cntChip ) {
            td.setAttribute("class", "chips-"+ this.colorPlayer[this.matrix[obj].player] );
            td.setAttribute("player", this.colorPlayer[this.matrix[obj].player]);
            td.innerHTML = this.matrix[obj].cntChip;
          }
          tr.appendChild(td);
      }
          table.appendChild(tr);
          this.root.appendChild(table);
  }

  checkStep(numCurrentPosition) {
     let stepOne = this.activePosition + this.dice.first;
     let stepTwo = this.activePosition + this.dice.second;
      console.log('this.dice.first ' + this.dice.first);
     console.log('activePosition ' + this.activePosition);

     console.log('Проверка поля ' + numCurrentPosition);
     console.log('stepOne ' + stepOne);
     if ( (numCurrentPosition == stepOne) || (numCurrentPosition == stepTwo)   ){
       // to-do: Меняем матрицу и делаем рендер.
       // С активной позиции снимаем 1 и добавляем 1 на поле.
       console.log("Ход разрешен")
     }
  }

  listener() {
      var root = document.getElementById("root");
      const CNT = this;

      root.addEventListener('click', function (cell) {
          //console.log(cnt);
          let elm = cell.target;
          //console.log(elm.getAttribute('player'));
          if ( elm.getAttribute('player') == CNT.currentPlayer &&  !CNT.activePosition || CNT.activePosition == elm.id)  {
              // проверяем можем ли выделить

              console.log(elm.className.indexOf('active'));
              let  result = elm.className.indexOf('active');
              if (result != -1 ) {
                // снимаем выделение
                 elm.className = elm.className.slice(0, result)
                 CNT.setActivePosition(null);
              } else {

                // устанавливаем выделение
                elm.setAttribute("class", elm.className + " active");
                CNT.setActivePosition(+elm.id);
              }
          }   else {
                if ( CNT.activePosition ) {
                     CNT.checkStep(+elm.id);
                     //console.log('Проверка поля' + elm.id);

                   }
          }
      }
    )
  }
}

var game = new Game(dice);
game.render();
game.listener();
