let jugador = 0;
let min = 1;
let max = 3;
let pc = 0;
let puntosPc = 0;
let puntosJugador = 0;

pc = aleatorio();
combate();1

function aleatorio(){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//1 piedra, 2 papel, 3 tijeras
// 1 gana a 3 - 2 gana a 1 - 3 gana a 2
function combate(){
    let pcTexto = "";
    let jugadorTexto = "";
    while(puntosJugador <= 3 && puntosPc <= 3){
        if(puntosJugador == 3 || puntosPc == 3){
            alert("Resultados finales:\nUsted = " + puntosJugador + "\nIA = " + puntosPc);
            break;
        }
        console.log(puntosJugador);
        console.log(puntosPc);
        jugador = prompt("Escriba: \n1 - Piedra✊🏻\n2 - Papel✋🏻\n3 - Tijeras✌🏻");
        pc = aleatorio();
        if(jugador == 1){
            jugadorTexto = "Piedra";
        } else if(jugador == 2){
            jugadorTexto = "Papel";
        } else if(jugador == 3){
            jugadorTexto = "Tijera";
        }
        if(pc == 1){
            pcTexto = "Piedra";
        } else if(pc == 2){
            pcTexto = "Papel";
        } else if(pc == 3){
            pcTexto = "Tijera";
        }
        alert("Usted eligió " + jugadorTexto + "\nLa IA elige " + pcTexto);
        if(jugador == pc){
            alert("Empate");
        } else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 1){
            alert("Ganaste!");
            puntosJugador++;
        } else{
            alert("Perdiste");
            puntosPc++;
        }
        alert("Usted = " + puntosJugador + "\nIA = " + puntosPc);
    }
}