
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.login-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById("exampleInputEmail1").value;
        const password = document.getElementById("exampleInputPassword1").value;
        
            
        console.log("Email:", email);
        console.log("Password:", password);
    });
});