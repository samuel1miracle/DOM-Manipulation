//This is to test if our script is working fine

window.onload = function() {
document.getElementById('change_heading').onmouseover = function() {
this.style.backgroundColor = 'blue';
this.style.color = '#fff';
this.style.borderRadius = '12px';
this.style.width = '300px';
} };

//replace the header text "Change Me" to "Hello World"

const x = document.getElementById('change_heading').innerHTML = 'Hello World';


//Display the color name "Blue" on the
//blue box onmouseover

onmouseover = function() { 
document.querySelector('.blue').onmouseover = function() {
   this.innerHTML = 'Blue';
   this.style.color = '#fff';
 }};


 //create a new div with the class of purple
 //and append it to the section html tag.

   let newDiv = document.getElementsByTagName('section'); {
       newDiv = document.createElement('div').className = 'purple';
       newDiv = document.getElementsByTagName('section')
       
   };


   //when button onclick, the car race begins

   function startRace() {
     let id = 0
     let car1 = document.querySelector('.car1')
     let car2 = document.querySelector('.car2')
     let car3 = document.querySelector('.car3');

     let startingPoint = 0;
     clearInterval(id);
     id = setInterval(frame, 15);
     function frame() {
       if (startingPoint == window.innerWidth) {
         clearInterval(id);
       } else{
         startingPoint++;
         car1.style.right = startingPoint + 'px'
         car2.style.left = startingPoint + 'px'
         car3.style.top = startingPoint + 'px'
       } 
  if (startingPoint == window.innerWidth) {
    alert('This Is The Winner')
  }
     }
  

   };
