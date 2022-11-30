function submitForm()
{
    //get data from site
    var loginName = document.getElementById('nameForm').value;
    var id = document.getElementById('idForm').value;
    var age = document.getElementById('ageForm').value;
    var gender = document.getElementById('genderForm').value;
    var diseasesSensitivities = document.getElementById('diseasesSensitivities').value;
    
    var messegeToUser = "";
    var inputIsValid = true;

    //trim users input

    //check inputed data
    if(loginName == '')
    {
        messegeToUser += "נא הכנס שם תקין.\n";
        inputIsValid = false;
    }
    if((id.length) != 9)
    {
        messegeToUser += "נא הכנס ת.ז. תקין\n";
        inputIsValid = false;
    }
    if(age<0 || age >120)
    {
        messegeToUser += "נא הכנס גיל תקין\n";
        inputIsValid = false;
    }
    messegeToUser += "תודה על מילוי הפרטים\n";
    alert(messegeToUser);
}

function changePage(pageName)
{
    location.replace(pageName);
}