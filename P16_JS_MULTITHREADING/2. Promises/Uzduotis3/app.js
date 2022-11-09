let nIntervId;
function startTimer() {
    let min = 0;
    let t = [0, 0, 0, 0];
    nIntervId = setInterval(() => {
        document.getElementById("timer").innerHTML = `${t[1]}:${t[2]}${t[3]}`;
        ++t[3];
        if (t[3] > 9) {
            t[3] = 0;
            ++t[2];
        }
        if (t[2] > 5){
            t[2] = 0;
            ++t[1];
        }
        if (t[1] > 9){
            t[1] = 0;
        }

    }, 1000);
}

const stopTimer = () =>{
    clearInterval(nIntervId)
    //nIntervId = null
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);