//is called in register page
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

    //check inputed data
    if(loginName == '')
    {
        messegeToUser += "נא הכנס שם תקין.\n";
        inputIsValid = false;
    }
    if(id.length != 9 || isNaN(id))
    {
        messegeToUser += "נא הכנס ת.ז. תקין\n";
        inputIsValid = false;
    }
    if (isNaN(age) || age < 0 || age > 120)
    {
        messegeToUser += "נא הכנס גיל תקין\n";
        inputIsValid = false;
    }
    messegeToUser += "תודה על מילוי הפרטים\n";
    alert(messegeToUser);
    if(inputIsValid)
    {
        changePage('form.html');
    }
}

//is called in every page
function changePage(pageName)
{
    location.replace(pageName);
}

//is called in login page
function login()
{
    var loginName = document.getElementById('nameForm').value;
    var id = document.getElementById('idForm').value;

    if(!(loginName && id))
    {
        alert("וודא כי מלאת את כל הפרטים");
    }
    else
    {
        document.getElementById('loginBody').innerHTML = 'תהיה בריא';
    }
}