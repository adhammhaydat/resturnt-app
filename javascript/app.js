let formUser = document.getElementById('formuser');
let selsctOp = document.getElementById('selsctOp');
let quintity = document.getElementById('quintity');
let submit = document.getElementById('submit');
let userTabel=document.getElementById('userTabel');

function Foode(types ,quantity){
  this.type=types;
  this.qua=quantity;
  Foode.all.push(this);
}
Foode.all=[];

function render(){
  let data = JSON.parse(localStorage.getItem('userInput'));
  if(data){
    Foode.all=data;
    for (let i = 0; i < data.length; i++) {
      let tr =document.createElement('tr');
      userTabel.appendChild(tr);
      let td1 =document.createElement('td');
      tr.appendChild(td1);
      td1.textContent=data[i].type;
      let td2 =document.createElement('td');
      tr.appendChild(td2);
      td2.textContent=data[i].qua;

    }
  }

}

render();
function getData(e){
  e.preventDefault();
  let type =e.target.selsctOp.value;
  let qua= parseInt(e.target.quintity.value);
  
  new Foode(type,qua);
  localStorage.setItem('userInput',JSON.stringify(Foode.all));
  let tr =document.createElement('tr');
  userTabel.appendChild(tr);
  let td1 =document.createElement('td');
  tr.appendChild(td1);
  td1.textContent=type;
  let td2 =document.createElement('td');
  tr.appendChild(td2);
  td2.textContent=qua;
  
  
  
  let data = JSON.parse(localStorage.getItem('userInput'));
  if(data){
  userTabel.deleteRow(Foode.all.length);
  creatFo();
  }
  
 
 

  
}
formUser.addEventListener('submit',getData);


function deleteRow(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("userTabel").deleteRow(i);
}


function creatFo(){
  if(Foode.all){
    let total=0;

    for (let i = 0; i < Foode.all.length; i++) {
      total+=parseInt( Foode.all[i].qua);
      
    }
    
  let tr =document.createElement('tr');
  tr.setAttribute('id','foo')
  userTabel.appendChild(tr);
  
  let td1 =document.createElement('td');
  tr.appendChild(td1);
  td1.textContent='Total';
  let td2 =document.createElement('td');
  tr.appendChild(td2);
  td2.textContent=total;
   
}
}

creatFo();

