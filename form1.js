function login(){
    let uname = document.querySelector('#uname').value
    let pword = document.querySelector('#pword').value 

    if(uname == "Nishant" && pword == "1234"){
        alert("login successfull");

    }

    else{
        alert("invalid account")
    }
}

function show(){
    let pword = document.querySelector('#pword');
    if(pword.type == "password"){
        pword.type = "text"
    }
       else{
        pword.type = "password"
       }


}