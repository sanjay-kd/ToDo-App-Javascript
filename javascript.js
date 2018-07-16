var id_item_passed;
var text_item_passed;
var no = document.getElementsByTagName('button');
var len;
var len2;
var len3;
	
listItems();
listItemsDone();


function listItems(){
	len =document.getElementById('list').children.length;
	if(len !== 0)
		{
			
		  document.getElementById("p2").style.display = "none";
		}
	else{
		document.getElementById("p2").style.display = "block";
	}
}

function listItemsDone(){
	len2 =document.getElementById('list').children.length;
	len3 =document.getElementById('done_todo_list').children.length;
	
	if(len2 === 0 && len3 !== 0)
		{	
		 	document.getElementById("p3").style.display = "block";
			document.getElementById("p4").style.display = "none";	
		}
	else if((len3 ===0 && len2 !==0) || (len3 !==0 && len2 !==0))
		{
			document.getElementById("item_remaining").textContent=len2;
			document.getElementById("p4").style.display = "block";	
			document.getElementById("p3").style.display = "none";
		}
	
	else
		{
			document.getElementById("p3").style.display = "none";
			document.getElementById("p4").style.display = "none";
		}
	
}


function todoCompleted(id_item_passed,text_item_passed)
{
	
	document.getElementById(id_item_passed).remove();
	listItems();
	listItemsDone();
	
	var ul2 =document.getElementById('done_todo_list');
	var li2 =document.createElement('li');
	li2.classList.add('add_items');
	li2.setAttribute('id',id_item_passed);
	
	li2.appendChild(document.createTextNode(text_item_passed));
	
	var btn3 = document.createElement('button');
	btn3.setAttribute('id','done_btn');
	li2.appendChild(btn3);
	
	var btn4 = document.createElement('button');
	btn4.setAttribute('id','delete_btn')
	li2.appendChild(btn4);
	

	var done = document.createElement('a');
	done.innerHTML='<i class="fa fa-check-circle-o done2" aria-hidden="true"></i>';
	
	var delete_btn = document.createElement('a');
	delete_btn.innerHTML='<i class="fa fa-trash delete" aria-hidden="true">';
	delete_btn.setAttribute('href','#');
	
	btn3.appendChild(done);
	btn4.appendChild(delete_btn);
	
	ul2.appendChild(li2);
	
	reNew_delete_done();
}


//Adding New item to todo list in uncompleted task
var index=2;
document.getElementById("add_button").onclick = function(){
	
	
	var input = document.getElementById("todo_item").value;

	if(input ==="")
	   {
	   		alert("Enter some task to do!")
	   }

	else
	   {
			document.getElementById("todo_item").value = ""

			var ul = document.getElementById("list");
			var li = document.createElement("li");
			li.classList.add("add_items");

			index=index+1;

			li.setAttribute('id',index);

			li.appendChild(document.createTextNode(input));

			var btn1 = document.createElement('button');
			btn1.setAttribute('id','done_btn')
			li.appendChild(btn1);

			var btn2 = document.createElement('button');
			btn2.setAttribute('id','delete_btn')
			li.appendChild(btn2);

			var done = document.createElement('a');
			done.innerHTML='<i class="fa fa-check-circle-o done1" aria-hidden="true"></i>';
			done.setAttribute('href','#');

			var delete_btn = document.createElement('a');
			delete_btn.innerHTML='<i class="fa fa-trash delete" aria-hidden="true">';
			delete_btn.setAttribute('href','#');


			btn1.appendChild(done);
			btn2.appendChild(delete_btn);

			ul.appendChild(li);
			no = document.getElementsByTagName('button');

			listItems();
			listItemsDone();
			reNew_delete_done();
			   }

	
};

//move completed item to bottom unorderd list


//function to delete todo list
function reNew_delete_done()
{
	
	for(var i =1; i<no.length ;i++)
		{
			var id_btn = no[i].getAttribute('id');
			
			
			if(id_btn === "delete_btn")
				{
					no[i].addEventListener('click', function(){

						var it = this.parentNode.getAttribute('id');
						document.getElementById(it).remove();
						listItems();
						listItemsDone();
						});
				}
			else if(id_btn === "done_btn")
				{
						no[i].addEventListener('click', function(){
							var id_item = this.parentNode.getAttribute('id');
							
							var text_item =this.parentNode.textContent;
							todoCompleted(id_item,text_item);
							listItemsDone();
						});
				}
		}
	
}

reNew_delete_done();