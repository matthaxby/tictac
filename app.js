var boxes = document.getElementsByClassName('box')
var button = document.getElementById('button')
var player = 'o'
var counter = 0

var objX = {'player': 'X'}
var objO = {'player': 'O'}


var testarr = [['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3'], ['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'], ['a1', 'b2', 'c3'], ['c1', 'b2', 'a3']]

var check = function (obj) {
  testarr.forEach(function(val) {
    var counter1 = 0
    val.forEach(function(val) {
      if(obj.hasOwnProperty(val)) {
        counter1++
        if(counter1 === 3) {
          alert(obj['player'] + ' wins!')
          clearBoard()
        }
      }
    })
  })
}

var clearBoard = function() {
  counter = 0
  objX = {player: 'X'}
  objO = {player: 'O'}
  Array.prototype.forEach.call(boxes, function(val) {
    val.style.backgroundColor = 'rgba(92,	119,	130, 1)'
    val.innerHTML = ''
  })
}

var play = function(arr) {
  Array.prototype.forEach.call(boxes, function(val) {
    val.addEventListener('click', function() {
      if(player === 'x' && !objO.hasOwnProperty(val.id)) {
      val.innerHTML = '<p>' + 'X' + '</p>'
      objX[val.id] = 'x';
      player = 'o'
      check(objX)
      counter++
      console.log(counter)
      if(counter >= 9) {
        alert ('draw')
        clearBoard()
      }
      }
      else if (player === 'o' && !objX.hasOwnProperty(val.id)) {
        val.innerHTML = '<p>' + 'O' + '</p>'
        objO[val.id] = 'o';
        player = 'x'
        check(objO)
        counter++
        console.log(counter)
        if(counter >= 9) {
          alert ('draw')
          clearBoard()
        }
      }
    })
  })
}

console.log(play(boxes))
