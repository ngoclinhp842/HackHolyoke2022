
//make the popup form appear
const openbtn = document.getElementById('survey');
openbtn.addEventListener('click', function openForm(){
    document.getElementById('form-popup').style.display = "block";
});

//showing resources based on user responses
var adultOrNot = document.getElementById('age').value;
