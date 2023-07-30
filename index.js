function buttonFunction(){
    var firstNameVar = document.getElementById("firstName").value;
    var lastNameVar = document.getElementById("lastName").value;
    var gmailVar = document.getElementById("gmail").value;
    var checkboxVar = document.getElementById("checkboxBox");
    if(firstNameVar.length >0 && lastNameVar.length >0 && gmailVar.length >0 && checkboxVar.checked){
        //pass
    }
    else{
        console.log("empty");
        var element = document.querySelector("#box");
        element.style.border = '5px solid';
        element.style.borderColor = "red";
        setTimeout(function backToNormal(){
            element.style.borderColor = "black"; element.style.borderTopStyle = 'none';
            element.style.borderLeftStyle = 'none';
            element.style.borderRightStyle = 'none';
        }, 500);
    }
}
function checkBoxFunction(){
    if(!document.getElementById("checkboxBox").checked){
        var verificationBox = document.querySelector(".verificationAll");
        verificationBox.style.backgroundColor = 'transparent';
    } 
    else{
        var verificationBox = document.querySelector(".verificationAll");
        verificationBox.style.backgroundColor = 'rgba(0, 255, 0, 0.3)';
    }
}