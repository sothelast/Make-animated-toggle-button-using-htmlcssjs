function onnn() {

    var but = document.querySelector(".fa-power-off");
    let text = document.querySelector(".text");

    console.log("start");
    var a = document.querySelector(".remov");
    if (a.style.display == "block" || but.style.color == "rgba(63, 238, 238, .5)" && text.innerHTML == "Off") {
        a.style.display = "none";
        but.style.color = "red";
        but.style.textShadow = "none";
        text.innerHTML = "Off";
    } else {
        a.style.display = "block";
        but.style.color = "rgba(63, 238, 238, 1)";
        but.style.textShadow = "0px 0px 10px aqua";
        text.innerHTML = "On";
    }

}