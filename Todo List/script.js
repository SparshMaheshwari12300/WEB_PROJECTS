const inputbox=document.getElementById("inputbox");
const addbtn=document.getElementById("addbtn");
const todolist=document.getElementById("todolist");


let edittodo=null;

const addtodo=()=>{
    const inputtext=inputbox.value.trim();
    if(inputtext.length<=0){
        alert("you must write something in the todo...");
        return false;
    }

    if(addbtn.value=="Edit"){
        edittodo.target.previousElementSibling.innerHTML=inputtext;
        addbtn.value="Add";
        inputbox.value="";
    }

    else{

    

    const li=document.createElement('li');
    const p=document.createElement('p');
    p.innerHTML=inputtext;
    li.appendChild(p);
    todolist.appendChild(li);
    inputbox.value="";


   

    const editbtn= document.createElement("button");
    editbtn.innerHTML="Edit";
    editbtn.classList.add("btn","editbtn");
    li.appendChild(editbtn);

    const delbtn= document.createElement("button");
    delbtn.innerHTML="Remove"
    delbtn.classList.add("btn","delbtn");
    li.appendChild(delbtn);

    savelocaltodo(inputtext);
    }
}

const updatetodo=(e)=>{  

    if(e.target.innerHTML=="Remove"){
        todolist.removeChild(e.target.parentElement);
    }

    if(e.target.innerHTML=="Edit"){
        inputbox.value=e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value="Edit";
        edittodo=e;
    }
}

const savelocaltodo=(todo)=>{
    let todos;
    if(localStorage.getItem("todos")==null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));


}
addbtn.addEventListener('click',addtodo);
todolist.addEventListener('click',updatetodo)