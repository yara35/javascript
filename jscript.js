//1
let myWindow = open("", "myWindow", "width=500,height=200");
myWindow.close();
myWindow.document.write("Yara Mohamed");
myWindow.scrollTo(0, myWindow.document.body.scrollHeight);

//2
//a
let img = document.getElementsByTagName("img");
console.log(img);
let imgg = document.images;
console.log(imgg);

//b
let cityOptions = document.getElementById("city");
for (let i = 0; i < cityOptions.length; i++) {
    console.log(cityOptions[i].value);
  }
//c
window.onload = function () {
    let secondTable = document.getElementById("table");
    let allTDs = secondTable.getElementsByTagName("td");
    console.log(allTDs);
  };

// 4
setInterval(() => {
    let now = new Date();
    document.title = now.toLocaleString();
  }, 1000);


let str = location.search;
let search = str.substring(1);
let arr = search.split("&"); 
let obj = {};
arr.forEach((elem) => {
  let keyValue = elem.split("="); 
  obj[keyValue[0]] = keyValue[1];
});
console.log(arr);



