
// form validation 

function validation(event){
    event.preventDefault();
    var userid = document.getElementById("userid").value;
    var username = document.getElementById("username").value;
    var useraddress = document.getElementById("address").value;
    var python = document.getElementById("python").value;
    var java = document.getElementById("java").value;
    var cpp = document.getElementById("c").value;
    var front = document.getElementById("front").value;
    var back = document.getElementById("back").value;


    if(userid === ""){
        document.getElementById("uid").innerHTML = "*Please enter your id.";
        return false;
    }

    if(username === ""){
        document.getElementById("uname").innerHTML = "*Please enter your name.";
        return false;
    }

    if(username.length  <= 2 || username.length > 20){
        document.getElementById("uname").innerHTML = "*Please enter name length between 3 and 20.";
        return false;
    }

    if(!isNaN(username)){
        document.getElementById("uname").innerHTML = "*Please enter only alphabets.";
        return false;
    }

    if(useraddress == ""){
        document.getElementById("uaddress").innerHTML = "*Please enter your address.";
        return false;
    }

    if(python == ""){
        document.getElementById("upython").innerHTML = "*Please enter your python marks.";
        return false;
    }

    if(java == ""){
        document.getElementById("ujava").innerHTML = "*Please enter your java marks.";
        return false;
    }

    if(cpp == ""){
        document.getElementById("uc").innerHTML = "*Please enter your cpp marks.";
        return false;
    }

    if(front == ""){
        document.getElementById("ufront").innerHTML = "*Please enter your frontend marks.";
        return false;
    }

    if(back == ""){
        document.getElementById("uback").innerHTML = "*Please enter your backend marks.";
        return false;
    }

    return false;

}


// global varibales for calculate function 

//  retrive values from form 

var sub1, sub2, sub3, sub4, sub5;
var avg = 0;
var total = 0;

function calculate()
{

    sub1 = parseInt(forms.python.value);
    sub2 = parseInt(forms.java.value);
    sub3 = parseInt(forms.cpp.value);
    sub4 = parseInt(forms.frontend.value);
    sub5 = parseInt(forms.backend.value);

    total = sub1 + sub2 + sub3 + sub4 + sub5;
    avg = total/3;

    document.write("Total marks scored by student : " + total + "<br>" );
    document.write("Avg marks of student : " + avg + "<br>" );

    if(avg <= 33)
    {
        document.write("Your grade is F.")
    }
    else if(avg > 33 && avg <=50)
    {
        document.write("Your grade is E.")
    }
    else if(avg > 50 && avg <=60)
    {
        document.write("Your grade is D.")
    }
    else if(avg > 60 && avg <=70)
    {
        document.write("Your grade is C.")
    }
    else if(avg > 70 && avg <=90)
    {
        document.write("Your grade is B.")
    }
    else if(avg > 90)
    {
        document.write("Your grade is A.")
    }

}