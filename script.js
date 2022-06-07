const d = new Date();
let t = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
console.log(t);
document.getElementById("t").innerHTML = t;
var time;

function count() {

    var mil = parseInt(document.getElementById("ml").innerHTML);
    var sec = parseInt(document.getElementById("s").innerHTML);
    var min = parseInt(document.getElementById("mis").innerHTML);
    var hour = parseInt(document.getElementById("hr").innerHTML);
    console.log(min);

    //when miilli scconds get to 100  increment seconds
    if (mil == 100) {
        mil = 0;
        sec = sec + 1;
        document.getElementById("s").innerHTML = sec;
    }
    //when seconds get to 60  increment minutes
    if (sec == 59) {
        document.getElementById("s").innerHTML = 00;
        min = min + 1;
        document.getElementById("mis").innerHTML = min;
    }


    //when when get to 60  increment Hours
    if (min == 59) {
        document.getElementById("mis").innerHTML = 00;
        hour = hour + 1;
        document.getElementById("hr").innerHTML = hour;
    }
    mil = mil + 1;
    document.getElementById("ml").innerHTML = mil;
    time = setTimeout(count, 10)


}

function pause() {
    clearTimeout(time);
}

function stop() {
    document.getElementById("mis").innerHTML = (00).toString();
    document.getElementById("s").innerHTML = (00).toString();
    document.getElementById("ml").innerHTML = (00).toString();
    document.getElementById("hr").innerHTML = (00).toString();
    clearTimeout(time);
}












function start() {
    var sec = setSec.value;
    var min = setMin.value;
    var hour = setHr.value;

    var mild = parseInt(document.getElementById("sml").innerHTML);

    document.getElementById("ssec").innerHTML = sec;
    var secd = parseInt(document.getElementById("ssec").innerHTML);

    document.getElementById("smis").innerHTML = min;
    var mind = parseInt(document.getElementById("smis").innerHTML);

    document.getElementById("shr").innerHTML = hour;
    var hourd = parseInt(document.getElementById("shr").innerHTML);


    if (mild == 0) {
        mild = 100;
        sec = sec - 1
        setSec.value = sec;
        document.getElementById("ssec").innerHTML = sec;
    }

    if (sec == 0 && min == 0 && hour == 0) {
        document.getElementById("ssec").innerHTML = 0;
        document.getElementById("sml").innerHTML = 100;
        clearTimeout(time);
        setSec.value = 0;
        alert("Time up 🔥");
    }

    if (sec == 0 && min != 0) {
        setSec.value = 59;
        sec = 59;
        min = min - 1;
        setMin.value = min;
        document.getElementById("smis").innerHTML = min;
    }

    if (hour != 0 && sec == 0 && min == 0) {
        setSec.value = 59;
        sec = 59;
        setMin.value = 59;
        min = 59;
        hourd = hourd - 1;
        setHr.value = hourd;
        document.getElementById("shr").innerHTML = hourd;
    }

    if (sec != 0) {
        mild = mild - 1;
        document.getElementById("sml").innerHTML = mild;
        time = setTimeout(start, 1)
    }

}


function paus() {
    clearTimeout(time);
}

function quit() {
    document.getElementById("sml").innerHTML = 100;
    document.getElementById("ssec").innerHTML = (00).toString();
    document.getElementById("smis").innerHTML = (00).toString();
    document.getElementById("shr").innerHTML = (00).toString();
    setSec.value = 0;
    setMin.value = 0;
    setHr.value = 0;

    clearTimeout(time);
}