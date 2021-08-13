function login(){
    var player1 = document.getElementById("p1n").value;
    var player2 = document.getElementById("p2n").value;
    localStorage.setItem("p1n", player1);
    localStorage.setItem("p2n", player2);
    window.location = "game_page.html";
    
}