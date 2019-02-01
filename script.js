// initialize the variables

var title = document.getElementById('title');
var list = document.getElementById('list');
var li = list.getElementsByTagName('li');

var addBtn = document.getElementById('add-btn');
var i;

var span = document.getElementsByTagName('span');


var listspan= document.getElementById('list-span');
list.addEventListener('click', activeItem);



function activeItem(event) {
    if(event.target.nodeName == 'LI') {
    document.getElementById("list-span").style.visibility = ""; 
        
        title.innerHTML = event.target.innerText;
      
       
        
    for(var i =0; i < event.target.parentNode.children.length; i++) {
        event.target.parentNode.children[i].removeAttribute('class');

    }    
        event.target.setAttribute('class', 'active');
        
   
    }
     
}




addBtn.addEventListener('click', function() {
    
    
    var txt = prompt('add task');

    
      list.innerHTML += '<li>' + txt +'<span>' + "REMOVE" + '</span>' + '</li>';
    
list.addEventListener('click', activeItem);


    
});





