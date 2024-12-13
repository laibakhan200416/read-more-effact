const readmorelink = document.getElementById("readmorelink");
const hide = document.getElementById("hide");
const readmorelink1 = document.getElementById("readmorelink1");
const hide1 = document.getElementById("hide1");
const readmorelink2 = document.getElementById("readmorelink2");
const hide2 = document.getElementById("hide2");
const readmorelink3 = document.getElementById("readmorelink3");
const hide3 = document.getElementById("hide3");

readmorelink.onclick = () => {
    if(hide.style.display === "none"){
        hide. style.display  = "inline";
        readmorelink.textContent = "Read Less";

    } else {
    hide.style.display = "none";
readmorelink.textContent = "Read More"
    }
}


readmorelink1.onclick = () => {
    if(hide1.style.display === "none"){
        hide1. style.display  = "inline";
        readmorelink1.textContent = "Read Less";

    } else {
    hide1.style.display = "none";
readmorelink1.textContent = "Read More"
    }
}

readmorelink2.onclick = () => {
    if(hide2.style.display === "none"){
        hide2. style.display  = "inline";
        readmorelink2.textContent = "Read Less";

    } else {
    hide2.style.display = "none";
readmorelink2.textContent = "Read More"
    }
}

readmorelink3.onclick = () => {
    if(hide3.style.display === "none"){
        hide3. style.display  = "inline";
        readmorelink3.textContent = "Read Less";

    } else {
    hide3.style.display = "none";
readmorelink3.textContent = "Read More"
    }
}