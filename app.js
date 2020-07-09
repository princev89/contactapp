const phone = document.getElementById('phone');
const name = document.getElementById('name');
const btn = document.getElementById('btn');

btn.onclick = function (){
    const key = phone.value;
    const value = name.value;
    console.log(key);
    console.log(value);
    if(key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
};
var contactlist = document.getElementById('contactlist');


for(let i= 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    var div = document.createElement("div");
    div.style.display = "grid";
    div.style.gridTemplateRows = "50px 20px";
    div.style.gridTemplateColumns = "80px auto";

    var img = document.createElement("img");
    img.src = "./call.png";
    img.style.width = "55%";
    img.style.margin = "10px";
    img.style.gridColumn = "1/2";
    img.style.gridRow = "1/3";
    img.style.borderRadius = "30px";
    div.append(img);
    div.innerHTML += "<h2>" + value  + " </h2>" + "<h3>" + key + "</h3>";
    div.style.border = "0.1px solid black";
    contactlist.appendChild(div);
};

