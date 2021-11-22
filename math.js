var points = null;
var totalPoints = null;
function printValues(){
    document.getElementById("answer").innerText = "Percent: " + (points/totalPoints)*100 + " Grade: " + getGrade((points/totalPoints)*100) 
}
function setPoints(element){
    points = element.value
}
function setTotalPoints(element){
    totalPoints = element.value
}
function getGrade(percent){
    if( percent >= 98){
        return "6"
    }
    if( percent >= 95){
        return "6-"
    }
    if( percent >= 94){
        return "6/5"
    }
    if( percent >= 92){
        return "5/6"
    }
    if( percent >= 88){
        return "5+"
    }
    if( percent >= 83){
        return "5"
    }
    if( percent >= 81){
        return "5-"
    }
    if( percent >= 79){
        return "5/4"
    }
    if( percent >= 77){
        return "4/5"
    }
    if( percent >= 73){
        return "4+"
    }
    if( percent >= 68){
        return "4"
    }
    if( percent >= 64){
        return "4-"
    }
    if( percent >= 62){
        return "4/3"
    }
    if( percent >= 60){
        return "3/4"
    }
    if( percent >= 57){
        return "3+"
    }
    if( percent >= 52){
        return "3"
    }
    if( percent >= 48){
        return "3-"
    }
    if( percent >= 46){
        return "3/2"
    }
    if( percent >= 44){
        return "2/3"
    }
    if( percent >= 41){
        return "2+"
    }
    if( percent >= 33){
        return "2"
    }
    if( percent >= 29){
        return "2-"
    }
    if( percent >= 26.5){
        return "2/1"
    }
    if( percent >= 25){
        return "1/2"
    }
    if( percent >= 22){
        return "1+"
    }
    if( percent >= 17){
        return "1"
    }
    if( percent >= 4){
        return "1-"
    }
    return "0"
}

function setTasks(title,content) {
    document.getElementById("taskList").innerHTML = title;
    content.forEach(element=>{
    document.getElementById("taskList").appendChild(element);
    })
}
var MasterTasks = [];
var AllStudents = []
class task{
    maxPoints = null;
    createNewTaskElement() {
        var box = document.createElement("div");
        var namePlate = document.createElement("p");
        var taskElement = document.createElement("input");
        namePlate.innerText = "Task "+MasterTasks.length
        taskElement.type = "number"
        taskElement.onchange = _=>{this.maxPoints = taskElement.value;};
        box.appendChild(namePlate);
        box.appendChild(taskElement);
        document.getElementById("taskList").appendChild(box);

    }
    constructor(){
        MasterTasks.push(this);
        this.createNewTaskElement()        
    }
}
class student{
    points;
    isCorrected = false;
    constructor(name){
        this.name = name;
        this.tasks = this.createTasks();
        this.studentButton = document.createElement("button")
        this.studentButton.textContent = name;
        this.studentButton.className = "studentButton";
        this.studentButton.onclick = val=>{this.buttonFunction()};
        document.getElementById("students").appendChild(this.studentButton);
        AllStudents.push(this)
    }
    buttonFunction(){
        setTasks(this.name,this.tasks)
        AllStudents.forEach(student=>{
            student.setCorrected()
        })
    }
    setCorrected(){
        if(this.isAllTasksDone()){
            this.isCorrected = true
            this.studentButton.style.backgroundColor = "green"
        }else{
            this.isCorrected = false;
            this.studentButton.style.backgroundColor = "red"
        }
    }

    isAllTasksDone(){
        var theReturn = true;
        this.tasks.forEach(boxElement=>{
            var value = boxElement.getElementsByClassName("taskBox").item(0).value;
            if(value == ""){
                theReturn = false}
        })

        return theReturn;
    }

    createTasks(){
        var returnItems = []
        MasterTasks.forEach(instance=>{
            var box = document.createElement("div");
            var namePlate = document.createElement("p");
            var maxPlate = document.createElement("p");
            var taskElement = document.createElement("input");
            namePlate.innerText = "Task "+(returnItems.length +1);
            maxPlate.innerText = "Max points: "+(instance.maxPoints);
            taskElement.type = "number"
            taskElement.max = instance.maxPoints;
            taskElement.className = "taskBox"
            taskElement.onchange = _=>{this.points = taskElement.value;this.setCorrected()};
            box.appendChild(namePlate);
            box.appendChild(maxPlate);
            box.appendChild(taskElement);
            returnItems.push(box);
        })
        return returnItems;

    }
}
function AllStudentsDone() {
    var theReturn = true;
        AllStudents.forEach(student=>{
            if(!student.isCorrected){
                theReturn = false}
        })
        return theReturn;
}
function checkIfDone(button) {
    if(AllStudentsDone()){
        button.style.backgroundColor = "green"
    }else{
        button.style.backgroundColor = "red"
    }
}
function newTask() {
    new task();
}
function finalizeTasks(){
    var theReturn = true;
    if(MasterTasks.length == 0){alert("You need at least 1 task");return}
    this.MasterTasks.forEach(task=>{
        var value = task.maxPoints;
        if(value == null){
            theReturn = false}
    })
    if(!theReturn){alert("Some of your tasks max points has not been set");return}
    setTasks("No student selected",[])
    document.getElementById("taskSetter").hidden = true
    document.getElementById("studentSetter").hidden = false
}

function newStudent() {
    if(document.getElementById("student_name").value == ""){alert("You cant have a student with no name");return}
    new student(document.getElementById("student_name").value);
    document.getElementById("student_name").value = ""
}
