player1 = localStorage.getItem("p1n");
player2 = localStorage.getItem("p2n");
score1 = 0;
score2 = 0;

document.getElementById("p1n").innerHTML = player1 + ":";
document.getElementById("p2n").innerHTML = player2 + ":";
document.getElementById("p1s").innerHTML = score1;
document.getElementById("p2s").innerHTML = score2;
document.getElementById("question").innerHTML = "Question turn : " + player1;
document.getElementById("answer").innerHTML = "Answer turn : " + player2;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value
    answer = parseInt(number1) * parseInt(number2);

question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input = "<br> answer : <input id  = 'I' type = 'text'> </input>";
check = "<br> <br> <button class='btn btn-info' onclick = 'checking()' > Check </button>";
row =  question_number + input + check ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}

qT = "player1"
aT = "player2"

 function checking(){
     ga = document.getElementById("I").value;
     lga = ga.toLowerCase();

     if (lga == answer) {
         if (aT == "player1"){
             score1 = score1 + 1;
             document.getElementById("p1s").innerHTML = score1;
         }
         else 
         {
             score2 = score2 + 1;
             document.getElementById("p2s").innerHTML = score2;
         }
     }
      if (qT == "player1"){
          qT = "player2"
          document.getElementById("question").innerHTML = "Question turn : " + player2;
        
      }
      else {
          qT = "player1"
      document.getElementById("question").innerHTML = "Question turn : " + player1; }

      if (aT == "player1"){
        aT = "player2"
        document.getElementById("answer").innerHTML = "Answer turn : " + player2;
      
    }
    else {
        aT = "player1"
    document.getElementById("answer").innerHTML = "Answer turn : " + player1; }

    document.getElementById("output").innerHTML = "";


 }


