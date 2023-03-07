// Validating Form
var btnRegister = document.querySelector('#btn_register');

btnRegister.addEventListener('click', function(e){
    var name = document.querySelector('#name');
    var email = document.querySelector('#email');
    var password = document.querySelector('#password');
    var genderM = document.querySelectorAll("#genderM");
    var genderF = document.querySelectorAll("#genderF");
    var terms = document.querySelectorAll("#terms")
    var errorMsg = document.querySelector('#lblError');
    var lblMsg = [];
    let count = 0;
    let genflag = false;
    let termsflag = false;

    if(name.value.length == 0){
        lblMsg.push("Name must be filled");
    }
    
    else{
        if(name.value.length <= 4){
            lblMsg.push("Name must be more than 4 characters");
        }
        else count++;
    }
    
    if(email.value.length == 0){
        lblMsg.push("Email must be filled");
    }
    
    else{
        let counter = 0;
        let keeper = 0;
        let length = email.value.length;
    
        for(let i = 0; i < length; i++){
            if(email.value[i] == "@" ){
                keeper = i;
                counter++;
            }

            if(email.value[i] == "." && i > keeper+1){
                counter++;
            }
        }

        if(counter == 2){
            count++;
        }
    
        if(counter != 2){
            lblMsg.push("Invalid email format");
        }
    }
    
    if(password.value.length == 0){
        lblMsg.push("Password must be filled");
    }
    
    else{
        if(password.value.length < 8 || password.value.length > 20){
            lblMsg.push("Password must between 8 and 20 characters");
        }
        else count++;
    }

    genderM.forEach(function(gen){
        if(gen.checked){
            genflag = true;
        }
    })

    genderF.forEach(function(gen){
        if(gen.checked){
            genflag = true;
        }
    })

    if(!genflag){
        lblMsg.push("Gender must be filled");
    }

    terms.forEach(function(te){
        if(te.checked){
            termsflag = true;
        }
    })
    
    if(!termsflag){
        lblMsg.push("Terms & Conditions must be check");
    }
    
    if(lblMsg.length > 0){
        e.preventDefault();
        errorMsg.innerHTML = lblMsg.join(", ");
    }
    
    if(count == 3 && genflag && termsflag){
        alert("Success");
    }
})