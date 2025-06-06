function getFormvalue() {
    
    // Prevent form submission (if needed)
    event.preventDefault();
    
    // Access the form using document.forms
    const form = document.forms[0];
    
    // Get values from the input fields
    const firstName = form.fname.value;
    const lastName = form.lname.value;
    
    // Display full name using alert
    alert(firstName + " " + lastName);
}



