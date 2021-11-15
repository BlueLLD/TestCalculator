var points = null;
var totalPoints = null;
function printValues(){
    document.getElementById("answer").innerText = "Percent: " + (points.value/totalPoints.value)*100
}
function setPoints(element){
    points = element
}
function setTotalPoints(element){
    totalPoints = element
}