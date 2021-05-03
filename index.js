// Your code goes here

const element = document.getElementById('text')




function change(){ 
document.addEventListener("DOMContentLoaded", function() {
    
 element.remove()
 
 let newP = document.createElement('p')
 newP.id = "text"
 newP.textContent = "This is really cool!"
 document.body.appendChild(newP)


  }); 

}

change();




