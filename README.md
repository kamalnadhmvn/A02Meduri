In this Assignement we have used javascript for calculation and jquerys along with html and css.
function myFunction() {
    
       var fries=document.getElementById('fries').value;
       
          var wings=document.getElementById("wings").value;
             var chilly=document.getElementById("chilly").value;
var veg=document.getElementById('vegburger').value;
       
          var paneer=document.getElementById("paneer").value;
            // var total=document.getElementById("total").value; 
            var chicken=document.getElementById("chicken65").value;
var total=parseInt(fries)*2.5+parseInt(wings)*3.5+parseInt(veg)*3.5+parseInt(chilly)*5+parseInt(paneer)*4+parseInt(chicken)*7 +3;
         
 document.getElementById("myForm").submit();
              if (validation()) // Calling validation function
{
  document.getElementById("kamal").innerHTML = "You have entered " + fries;
alert(" Total : " + total+ "\n\n Form Submitted Successfully......");
}
}
function validation() {
var fries=document.getElementById("fries").value;
          var wings=document.getElementById("wings").value;
             var chilly=document.getElementById("chilly").value;
            var veg=document.getElementById('vegburger').value;
       
          var paneer=document.getElementById("paneer").value;
             var chicken=document.getElementById("chicken65").value;
             
if (fries === ''|| wings === '' || chilly ==='' || veg ===''|| paneer ==='' ||chicken ==='') {
alert("Fill the fields");
return false;
} 

else if (isNaN(fries)) {
    alert("only numeric allowed in quantity");

return false;
} 
return true;

}
