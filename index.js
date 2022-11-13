
var state = 0;
//make the popup form appear
const openbtn = document.getElementById('survey');
openbtn.addEventListener('click', function openForm(){
    document.getElementById('form-popup').style.display = "block";
});

//submit responses
    //event listener
var submitbtn = $(`.submit`);
submitbtn.addEventListener('click', saveResponse);

//saving user responses as object
let responses=[];
const saveResponse = (ev) =>{
    ev.preventDefault();
    let response = {
        //the ids still need to be changed to match the HTML ids for each question
        adultOrNot: document.getElementById('age').value,
        selfHarm: document.getElementById('age').value,
        suicidalAssessment: document.getElementById('age').value,
        toxicRelation: document.getElementById('age').value,
        substanceAbuse: document.getElementById('age').value,
        sexuality: document.getElementById('age').value

    }
    responses.push(response);
    document.forms[0].reset(); //clearing the survey for next usage!

    //saving it to local storage
    localStorage.setItem('mentalHealthSurveyResponse',JSON.stringify(responses));

    //changes button to a view resources button based on responses
    if(state == 0){
        checkNeed = responses(responses.length - 1);
        if (checkNeed.adultOrNot == "Yes"){
            //nest if statements for the other responses, then use .innerHTML to create a link that will take the user to their specific-need resources
            if(checkNeed.selfHarm=="Yes"){

            }else{

            }

        }
        submitbtn.text("View Resources!");
        
    }else{

    }
}




