import "./styles.css";
import home from "./home";
/*import "xximagexx" from "./xxx.jpg";

const image = document.createElement("img");
image.src=xximagexx;*/

const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");
const takeoutBtn = document.getElementById("takeoutBtn");

const contentArea = document.getElementById("content");

function clearArea(){
    contentArea.innerHTML = "";
    return 1;
} 

homeBtn.addEventListener("click", ()=>{
    clearArea();
    home();
});