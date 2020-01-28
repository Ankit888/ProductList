var jsonData1 =1 ;


function displayUser(users,check){

	
     var idCount = 1;
	for (const prop in users) {

        
         idCount++;
		var div = document.createElement('div');
		 div.id = `${idCount}`;
	     div.draggable="true";
         div.className = "divdrag";

         var maindiv = document.getElementById("list");

         var ul = document.createElement("ul");
         var li = document.createElement("li");
         
  		 var li1 = document.createElement("li");

  		 var img = document.createElement("img");
  		 img.style.width = '100px';//setting image height and width
         img.style.height = '70px';
         var srcimg  = users[prop].image;//image url taken
         img.src = `${srcimg}`;

         img.onerror = function () {
			  //console.log("yahoooo");
			  img.onerror = null;
			  this.src = 'alternative.png'; // place your error.png image instead
		  };

		  img.setAttribute('alt', 'na');//setting alt value



  		 var name = users[prop].name;
		 var author = users[prop].author;

		  li.appendChild(document.createTextNode(name));
		  li1.appendChild(document.createTextNode(author));

          ul.appendChild(img);
		  ul.appendChild(li);
		  ul.appendChild(li1);

		  div.appendChild(ul);
		  maindiv.appendChild(div);


	}



var columns = document.querySelectorAll('.divdrag');
var draggingClass = 'dragging';
var dragSource;

Array.prototype.forEach.call(columns, function (col) {
  col.addEventListener('dragstart', handleDragStart, false);
  col.addEventListener('dragenter', handleDragEnter, false)
  col.addEventListener('dragover', handleDragOver, false);
  col.addEventListener('dragleave', handleDragLeave, false);
  col.addEventListener('drop', handleDrop, false);
  col.addEventListener('dragend', handleDragEnd, false);
});

function handleDragStart (evt) {
  dragSource = this;
  evt.target.classList.add(draggingClass);
  evt.dataTransfer.effectAllowed = 'move';
  evt.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver (evt) {
  evt.dataTransfer.dropEffect = 'move';
  evt.preventDefault();
}

function handleDragEnter (evt) {
  this.classList.add('over');
}

function handleDragLeave (evt) {
  this.classList.remove('over');
}

function handleDrop (evt) {
  evt.stopPropagation();
  
  if (dragSource !== this) {
    dragSource.innerHTML = this.innerHTML;
    this.innerHTML = evt.dataTransfer.getData('text/html');
  }
  
  evt.preventDefault();
}

function handleDragEnd (evt) {
  Array.prototype.forEach.call(columns, function (col) {
    ['over', 'dragging'].forEach(function (className) {
      col.classList.remove(className);
    });
  });
}


}

window.addEventListener('load', 
  function() { 

  fetch("https://gist.githubusercontent.com/bharadwajturlapati/4e81154dbcc7d6928921b96057fc5b4a/raw/d31da32d6e5c1dd2a11968d7e94d3c60dfd50fcb/products.json")
  .then(res => res.json())

  .then(d =>
  { 
   
  	jsonData1=d;
  	console.log("----------------------");
  	console.log(d);
  	console.log("----------------------");
  	console.log(jsonData1);
  	console.log("----------------------");
  	displayUser(jsonData1);//function call to displayUser
  	return "hello baby";
}
           
)

  }, false);

//console.log(jsonData1);


function otherUser(){

	var otherUserData = {};

	var e = document.getElementById("list"); 
    e.innerHTML = ""; 
    //console.log(jsonData1);
    
   Object.keys(jsonData1).forEach(key => {
   //console.log(key) // returns the keys in an object
   //console.log(jsonData1[key].hub);  // returns the appropriate value 
   	if(jsonData1[key].hub!=='general'){
   		otherUserData[key] = jsonData1[key];

   	}
})

displayUser(otherUserData);


};




function generalUser(){

	var generalUserData = {};

	var e = document.getElementById("list"); 
    e.innerHTML = ""; 
    //console.log(jsonData1);
    
   Object.keys(jsonData1).forEach(key => {
   //console.log(key) // returns the keys in an object
   //console.log(jsonData1[key].hub);  // returns the appropriate value 
   	if(jsonData1[key].hub==='general'){
   		generalUserData[key] = jsonData1[key];

   	}
})

displayUser(generalUserData);


};






