//part1.
// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.

//part2.
// delete 버튼을 누르면 할일이 삭제된다.
// chech 버튼을 누르면 할일이 끝나면서 밑줄이 간다.
    //1. check 버튼을 클릭하면, true false
    //2. true이면 끝난걸로 간주, 밑줄 보여주기
    //3. false이면 안 끝난걸로 간주하고 그대로
// 진행중 끝남 탭을 누르면, 언더바가 이동한다.
// 끌남탭은 끝난 아이템만, 진행중 탭은 진행중 아이템만
// 전체탭을 누르면 다시 전체아이템으로 돌아옴

//part 1&&2 240210

let userInput = document.getElementById("user-input");
let inputButton = document.getElementById("input-button");
let taskList = []

inputButton.addEventListener("click",addTask)

function addTask (){
    let task = {
        id : makeId(),
        taskContent : userInput.value,
        isDone : false
    }
    taskList.push(task);
    console.log(taskList);
    render();
}

function render(){
    let resultHTML = '';
    for(let i = 0; i<taskList.length;i++){
        if(taskList[i].isDone == true){
            resultHTML += `<div class="task">
        <div class="checked">${taskList[i].taskContent}</div>
        <div>                
            <img src="/images/return.png" alt="Check" onclick="toggleDone('${taskList[i].id}')" class="task-icon">
            <img src="/images/delete.png" alt="Delete" onclick="deleteTask('${taskList[i].id}')" style="cursor: pointer;" class="task-icon">
            </div>
            </div>`
        }else{
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>                
            <img src="/images/check.png" alt="Check" onclick="toggleDone('${taskList[i].id}')"  class="task-icon">
            <img src="/images/delete.png" alt="Delete" onclick="deleteTask('${taskList[i].id}')" style="cursor: pointer;" class="task-icon">
        </div>
    </div>`
        }
    }
    document.getElementById("task-board").innerHTML = resultHTML;
}


function makeId(){
    return Math.random().toString(36).substr(2, 16);
}

function deleteTask(id){
    for(let i=0; i<taskList.length;i++){
        if(id == taskList[i].id){
            taskList.splice(i,1);
            break;
        }
    }
    render();
    console.log(taskList)
}

function toggleDone(id){
    for(let i=0; i<taskList.length;i++){
        if(id == taskList[i].id){
            taskList[i].isDone = !taskList[i].isDone
            break;
        }
    }
    render();
    console.log(taskList)
}