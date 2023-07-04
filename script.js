
// let list1 = [];
// let list2 = [];
// let list3 = [];
// let list4 = [];
// let list5 = [];
// let list6 = [];

// let n = 1;
// let x = 0;
// let k = 1;
// function AddRows(){

//     let AddRown = document.getElementById('show');
//     let NewRow = AddRown.insertRow(n);

//     list1[x] = k++;
//     list2[x] = document.getElementById("name").value;
//     list3[x] = document.getElementById("email").value;
//     list4[x] = document.getElementById("gpa").value;
//     list5[x] = document.getElementById("age").value;
//     list6[x] = document.getElementById("degree").value;

//     let cel1 = NewRow.insertCell(0);
//     let cel2 = NewRow.insertCell(1);
//     let cel3 = NewRow.insertCell(2);
//     let cel4 = NewRow.insertCell(3);
//     let cel5 = NewRow.insertCell(5);
//     let cel6 = NewRow.insertCell(6);


//     cel1.innerHTML = list1[x];
//     cel2.innerHTML = list2[x];
//     cel3.innerHTML = list3[x];
//     cel4.innerHTML = list4[x];
//     cel5.innerHTML = list5[x];
//     cel6.innerHTML = list6[x];

//     n++;
//     x++;
    
// }

let t_body = document.getElementById('tbody');
let input = document.getElementById('search');
const students = [];
let k=1;
function AddRows(){
    let id = k++;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let gpa = document.getElementById("gpa").value;
    let age = document.getElementById("age").value;
    let degree = document.getElementById("degree").value;

    students.push({"ID": id, "name": name, "gpa": gpa,"age": age, "degree": degree,"email": email });

    console.log(students);

    renderData(students);
}

//edit student info

async function editStudent(studentId){
      var editData = document.getElementById("submit");
      editData.onclick = "";
      console.log("Start Editing");
      let studentObj = "";
      let idInd = 0;
      for(let i=0;i<students.length;i++){
        let student = students[i];
        if(studentId == student.ID){
            studentObj = student;
            idInd = i;
        }
      }
      
      //setting value in UI
      document.getElementById("name").value = studentObj.name;
      document.getElementById("email").value = studentObj.email;
      document.getElementById("gpa").value = studentObj.gpa;
      document.getElementById("age").value = studentObj.age;
      document.getElementById("degree").value = studentObj.degree;
      
      const editButton = document.querySelector(".submit p");
      //
    //   const divEdit = document.getElementById("submit");
    //   divEdit.classList.add("changeBackgroundColor");
      editButton.innerHTML = "Edit";
      editButton.addEventListener("click", ()=>{
        //updating data start whenever you click
        studentObj.name = document.getElementById("name").value ;
        studentObj.email = document.getElementById("email").value ;
        studentObj.gpa = document.getElementById("gpa").value ;
        studentObj.age = document.getElementById("age").value ;
        studentObj.degree = document.getElementById("degree").value ;

        students[idInd] = studentObj;
        renderData(students);
      })
      editButton.removeEventListener("click", () => {});
}


//delete data 

function deleteStudent(studentId){
    console.log("delete student called");
    for(let i=0;i<students.length;i++){
        if(studentId == students[i].ID){
           students.splice(i,1);
        } 
    }
    renderData(students);
}

//search vala part

function searchData(){
    var inputValue = input.value.toLowerCase();

    let matchedSearch = [];

    for(let i=0;i<students.length;i++){
        if(students[i].name.toLowerCase().includes(inputValue)||students[i].email.toLowerCase().includes(inputValue)||students[i].degree.toLowerCase().includes(inputValue)){
            matchedSearch.push(students[i]);
        } 
    }
    renderData(matchedSearch);
}

//renderData

function renderData(students){
    t_body.innerHTML = "";

    students.forEach((student)=>{
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${student.ID}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.gpa}</td>
        <td>${student.age}</td>
        <td id="action-col" >
            ${student.degree}
            <img src="./edit 1.png" alt="edit" onclick="editStudent(${student.ID})">
            <img src="./trash-2 1.png" alt="delete" onclick="deleteStudent(${student.ID})">

        </td>
        ` ;
        
        t_body.appendChild(tr);
        
    });
}