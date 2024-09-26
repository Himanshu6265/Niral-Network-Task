
function openForm() {
     document.getElementById("formPopup").style.display = "block";
 }
 
 
 function closeForm() {
     document.getElementById("formPopup").style.display = "none";
 }
 
 function submitForm() {
     const firstName = document.getElementById("firstName").value;
     const lastName = document.getElementById("lastName").value;
     const city = document.getElementById("city").value;
     const country = document.getElementById("country").value;
     const contactNumber = document.getElementById("contactNumber").value;
     const companyName = document.getElementById("companyName").value;
 
     
     if (!firstName || !lastName || !city || !country || !contactNumber) {
         alert("please check once before submitting the form (some field is empty)");
         return;
     }
 
     if (contactNumber.length !== 10 || isNaN(contactNumber)) {
         alert("Contact number must be a 10-digit number!");
         return;
     }
 
     
     document.getElementById("formPopup").style.display = "none";
     document.getElementById("downloadLink").style.display = "block";
 }
 