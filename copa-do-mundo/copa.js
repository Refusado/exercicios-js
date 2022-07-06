// var input = "2 0\n1 0\n2 1\n1 0\n1 0\n1 2\n1 2\n1 0\n2 1\n1 0\n0 1\n0 2\n2 1\n1 0\n2 1";
var input = "4 1\n1 0\n0 4\n3 1\n2 3\n1 2\n2 0\n0 2\n1 2\n4 3\n0 1\n3 2\n3 4\n1 4\n1 0";


const jogos = input.split('\n');
const times = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];

function result(j, t) {
    for (let i = 1; i <= 4; i++) {
        var timesRestantes = [];
        var seVenceu = [];

        j.map(function(value) {
          var timesAtuais = value.split(' ');
          
          var time1 = timesAtuais[0];
          var time2 = timesAtuais[1];
          
          if (time1 > time2) {
            seVenceu.push(1);
            seVenceu.push(0);
          }
          else {
            seVenceu.push(0);
            seVenceu.push(1);
          }
        });

        for (let i = 0; i <= seVenceu.length / 2; i++) {
          if (seVenceu[i]) {
            timesRestantes.push(t[i]);
          }
        }

        t = timesRestantes;
        j.splice(0, timesRestantes.length);
    }

  return timesRestantes[0];
}
console.log(result(jogos, times));