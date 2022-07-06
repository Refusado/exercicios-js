// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8");

// let A = parseInt(input.split("\n")[0]);
// let B = parseInt(input.split("\n")[1]);

/* INPUT
4 1
1 0
0 4
3 1
2 3
1 2
2 0
0 2
1 2
4 3
0 1
3 2
3 4
1 4
1 0

"4 1\n1 0\n0 4\n3 1\n2 3\n1 2\n2 0\n0 2\n1 2\n4 3\n0 1\n3 2\n3 4\n1 4\n1 0\n"


2 0
1 0
2 1
1 0
1 0
1 2
1 2
1 0
2 1
1 0
0 1
0 2
2 1
1 0
2 1

'2 0\n1 0\n2 1\n1 0\n1 0\n1 2\n1 2\n1 0\n2 1\n1 0\n0 1\n0 2\n2 1\n1 0\n2 1';

*/

var input = "2 0\n1 0\n2 1\n1 0\n1 0\n1 2\n1 2\n1 0\n2 1\n1 0\n0 1\n0 2\n2 1\n1 0\n2 1";
// var input = "4 1\n1 0\n0 4\n3 1\n2 3\n1 2\n2 0\n0 2\n1 2\n4 3\n0 1\n3 2\n3 4\n1 4\n1 0";


const jogos = input.split('\n');
const times = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];

var oitavas = [];
var quartas = [];
var semi = [];
var final = [];

var timesQuartas = [];
var timesSemi = [];
var timesFinal = [];

var vencedor;

function result(j, t) {

  j.map(function(value) {
    var timesAtuais = value.split(' ');
    
    var time1 = timesAtuais[0];
    var time2 = timesAtuais[1];
    
    if (time1 > time2) {
      oitavas.push(1);
      oitavas.push(0);
    }
    else {
      oitavas.push(0);
      oitavas.push(1);
    }
  });

  for (let i = 0; i < 16; i++) {
    if (oitavas[i]) {
      timesQuartas.push(t[i]);
    }
  }

  j.splice(0, 8);


  j.map(function(value) {
    var timesAtuais = value.split(' ');
    
    var time1 = timesAtuais[0];
    var time2 = timesAtuais[1];
    
    if (time1 > time2) {
      quartas.push(1);
      quartas.push(0);
    }
    else {
      quartas.push(0);
      quartas.push(1);
    }
  });

  for (let i = 0; i < 8; i++) {
    if (quartas[i]) {
      timesSemi.push(timesQuartas[i]);
    }
  }

  j.splice(0, 4);


  j.map(function(value) {
    var timesAtuais = value.split(' ');
    
    var time1 = timesAtuais[0];
    var time2 = timesAtuais[1];
    
    if (time1 > time2) {
      semi.push(1);
      semi.push(0);
    }
    else {
      semi.push(0);
      semi.push(1);
    }
  });

  for (let i = 0; i < 4; i++) {
    if (semi[i]) {;
      timesFinal.push(timesSemi[i]);
    }
  }

  j.splice(0, 2);


  j.map(function(value) {
    var timesAtuais = value.split(' ');
    
    var time1 = timesAtuais[0];
    var time2 = timesAtuais[1];
    
    if (time1 > time2) {
      final.push(1);
      final.push(0);
    }
    else {
      final.push(0);
      final.push(1);
    }
  });

  for (let i = 0; i < 4; i++) {
    if (final[i]) {
      vencedor = timesFinal[i];
    }
  }

  return vencedor;
  
}
console.log(result(jogos, times));
