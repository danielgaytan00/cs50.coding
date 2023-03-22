

const show = document.getElementById("boxes");
const show2 = document.getElementById("boxes2");
const show3 = document.getElementById("boxes3");
const show4 = document.getElementById("boxes4");
const show5 = document.getElementById("boxes5");
const show6 = document.getElementById("boxes6");

show.addEventListener("mouseover", effect, false);
show.addEventListener("mouseout", effect2, false);
show2.addEventListener("mouseover", effect3, false);
show2.addEventListener("mouseout", effect4, false);
show3.addEventListener("mouseover", effect5, false);
show3.addEventListener("mouseout", effect6, false);
show4.addEventListener("mouseover", effect7, false);
show4.addEventListener("mouseout", effect8, false);
show5.addEventListener("mouseover", effect9, false);
show5.addEventListener("mouseout", effect10, false);
show6.addEventListener("mouseover", effect11, false);
show6.addEventListener("mouseout", effect12, false);

function effect() {
   show.setAttribute("style", "background-color:grey;")
}

function effect2() {
    show.setAttribute("style", "background-color:black; color:white;", )
}

function effect3() {
    show2.setAttribute("style", "background-color:gray;")
 }

 function effect4() {
     show2.setAttribute("style", "background-color:#171717; color:white;", )
 }

 function effect5() {
    show3.setAttribute("style", "background-color:grey;")
 }

 function effect6() {
     show3.setAttribute("style", "background-color:#212121; color:white;", )
 }

 function effect7() {
    show4.setAttribute("style", "background-color:grey;")
 }

 function effect8() {
     show4.setAttribute("style", "background-color:#302f2f; color:white;", )
 }

 function effect9() {
    show5.setAttribute("style", "background-color:grey;")
 }

 function effect10() {
     show5.setAttribute("style", "background-color:#4a4949; color:white;", )
 }

 function effect11() {
    show6.setAttribute("style", "background-color:grey;")
 }

 function effect12() {
     show6.setAttribute("style", "background-color:#6e6d6d; color:white;", )
 }

 
