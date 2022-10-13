const firstname=document.myform.firstname.value; 
const lastname=document.myform.lastname.value;
const companyname=document.myform.companyname.value;
const address=document.myform.address.value;
const phonenumber=document.myform.phonenumber.value; 
const a=document.myform.email.value;  
const massage1=document.myform.subject.value;

var btn=document.getElementById("btn");
 btn.addEventListener('click',(pera)=>{
	pera.preventDefault();
	const firstname=document.myform.firstname.value; 
	var test=firstname.length;
	if(test<2)
	{
		alert("First Name must be 2 character");
		return false;
	}
	var lastname=document.myform.lastname.value;  
	var test=lastname.length;
	if(test<2){
		alert("Last Name must be 2 character");
		return false;
	}
    var companyname=document.myform.companyname.value;  
	var test=companyname.length;
	if(test<2){
		alert("companyname must be needed");
		return false;
	}

    var address=document.myform.address.value;  
	var test=address.length;
	if(test<2){
		alert("Full address must be needed ");
		return false;
	}

	var phonenumber=document.myform.phonenumber.value;  
	if (phonenumber==''){  
		alert("Must be phone Number input");
		return false;  
		}
    if (isNaN(phonenumber)){  
    alert("numeric value only phone number");
    return false;  
    }
	

	var a=document.myform.email.value; 
	if(a=='')
	{
		alert("Must be input Email");
		return false;
	}

	if(a.indexOf('@')<=0){
		alert("**first position @ Invalid ");
		return false;
	}
	if(a.charAt(a.length-4)!=='.'&& a.charAt(a.length-3)!=='.'){
		alert("**Invalid . position");
		return false;
	}
	

	var massage1=document.myform.subject.value;  
    if (massage1=="")
	{  
    alert("Must be input subject");
    return false;  
    }
	
	else
	{
		var tbody=document.getElementById('tbody');
		var tr=document.createElement('tr');
		var td=document.createElement('td');
		td.innerHTML=firstname+" "+lastname;
		tr.appendChild(td);
 
	
		
		var td2=document.createElement('td');
		td2.innerHTML=phonenumber;
		tr.appendChild(td2);

		
		var td3=document.createElement('td');
		td3.innerHTML=address;
		tr.appendChild(td3);

		var td4=document.createElement('td');
		td4.innerHTML=companyname;
		tr.appendChild(td4);


		var td5=document.createElement('td');
		td5.innerHTML=massage1;
		tr.appendChild(td5);

		var td6=document.createElement('td');
		td6.innerHTML="<h4 color:black; onclick=myDeleteFunction(this)>Remove</h4>";
		tr.appendChild(td6);

		tbody.appendChild(tr);
		alert("Submit Successfull");
        
		
	
	}
	b.classList.add(massage);
 });

        function myDeleteFunction() {
           
            document.getElementById("customers").deleteRow(1);
}  