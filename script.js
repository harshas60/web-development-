let slider = document.getElementById("slider");

if(slider){

let next = document.getElementById("nextBtn");
let prev = document.getElementById("prevBtn");

let index = 0;
let total = document.querySelectorAll(".graph-card").length;

function updateSlider(){
slider.style.transform=`translateX(-${index*100}%)`;
}

next.onclick=function(){
if(index < total-1){
index++;
updateSlider();
}
}

prev.onclick=function(){
if(index > 0){
index--;
updateSlider();
}
}

/* Charts */

new Chart(document.getElementById("chart1"),{
type:"line",
data:{
labels:["Jan","Feb","Mar","Apr"],
datasets:[{
label:"Performance",
data:[30,50,40,60],
borderColor:"#ff3cac"
}]
}
});

new Chart(document.getElementById("chart2"),{
type:"bar",
data:{
labels:["USA","UK","India"],
datasets:[{
data:[12,19,7],
backgroundColor:"#36a2eb"
}]
}
});

new Chart(document.getElementById("chart3"),{
type:"doughnut",
data:{
labels:["Completed","Pending"],
datasets:[{
data:[60,40],
backgroundColor:["green","orange"]
}]
}
});

}