
var state = 0;
//make the popup form appear
const openbtn = document.getElementById('survey');
openbtn.addEventListener('click', function openForm(){
    document.getElementById('form-popup').style.display = "block";
});
//button to close popup form
const closebtn = $(`.close`);
closebtn.addEventListener('click',function closeForm(){
    document.getElementById('form-popup').style.display = "none";
});

//last question: storing selected values as an array
var values = [];
$("input[name='condition']:checked").each(function(){
    values.push($(this).val());
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
        adultOrNot: document.querySelector('input[name="age"]:checked').value,
        selfHarm: document.querySelector('input[name="self-harm"]:checked').value,
        suicidalAssessment: document.querySelector('input[name="suicide"]:checked').value,
        toxicRelation: document.querySelector('input[name="sexualHarm"]:checked').value,
        substanceAbuse: document.querySelector('input[name="substance"]:checked').value,
        gender: document.querySelector('input[name="substance"]:checked').value,
        sexuality: document.getElementById('input[name="gender"]:checked').value,
        conditions: values

    }
    //function that finds if any value in a object is null 
    const anyNull = Object.values(response).every(value=>{
        if (value==null){
         return true;
        }
        return false;
    } );
    if(anyNull==true){
        alert("Please choose at least one answer for every question.");
    }else{
        responses.push(response);
        document.forms[0].reset(); //clearing the survey for next usage!

        //saving it to local storage
       localStorage.setItem('mentalHealthSurveyResponse',JSON.stringify(responses));

        //makes the links appear in a otherwise blank list
        checkNeed = responses(responses.length - 1);
        if (checkNeed.adultOrNot == "no"){ //resources for adolescents
            document.getElementById("resources").innerHTML += "<h3>Learn About Therapy</h3>";
            document.getElementById("resources").innerHTML += "<a href='https://www.mhanational.org/frequently-asked-questions'> Finding Therapy </a><br>";
            document.getElementById("resources").innerHTML += "<a href='https://childmind.org/article/how-to-talk-to-your-parents-about-getting-help-if-you-think-you-need-it/'> Asking Your Parents About Therapy </a><br>";
            document.getElementById("resources").innerHTML += "<a href='https://www.kidshealth.org/en/teens/your-mind/#catalcohol'> Mental Health in Youth </a><br>";
            //nest if statements for the other responses, then use .innerHTML to create a link that will take the user to their specific-need resources
            if(checkNeed.selfHarm=="yes"){
                document.getElementById("resources").innerHTML += "<h3>Self-harm Awareness & Recovery Information</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://keltymentalhealth.ca/blog/2020/02/alternatives-self-injury'>Alternatives to Self-injury</a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://keltymentalhealth.ca/self-injury'>What is Self-harm?</a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.psychologytoday.com/us/blog/the-truth-about-exercise-addiction/201708/15-things-do-instead-self-harming'>15 Alternatives to Self-injury</a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/how-to-cope-with-non-suicidal-self-injury/'>Coping with Self-harm</a><br>";
            }
            if(checkNeed.suicidalAssessment=="yes"){
                document.getElementById("resources").innerHTML += "<h3>Suicide Crisis Lines & Long-Term Support</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://www.teenline.org/'> Teen Crisis Line </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/what-are-suicidal-thoughts-and-do-i-need-help-for-them/'> Recognizing Suicidal Thoughts </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/how-to-tell-someone-youre-thinking-about-suicide/'> How to Tell Someone That You're Having Suicidal Thoughts </a><br>";
            }
            if(checkNeed.toxicRelation=="yes"){
                document.getElementById("resources").innerHTML += "<h3>Domestic & Relationship Abuse Resources</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://www.thehotline.org/search-our-resources/?search=Warning+signs+of+abuse'> Warning Signs of Domestic Violence </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/how-to-identify-and-report-abuse/'> Identifying & Reporting Abuse </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://childhelphotline.org'>Child Abuse Hotline by State</a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/how-to-cope-with-psychological-trauma/'> Coping with Trauma from Abusive Situations </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.loveisrespect.org/resources/should-we-break-up/'> Ending an Abusive Relationship </a><br>";
            }else{
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/how-to-identify-and-report-abuse/'> Supporting Others: Identifying & Reporting Abuse </a><br>";
            }
            if(checkNeed.substanceAbuse=="yes"){
                document.getElementById("resources").innerHTML += "<h3>Addiction & Substance Abuse Recovery</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/how-to-manage-drug-or-alcohol-issues/'> Managing & Recovering from Addiction </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/understanding-the-mental-health-and-drinking-connection/'> Understanding Alcoholism </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.samhsa.gov/find-help/national-helpline'> National Substance Abuse Helpline </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://findtreatment.samhsa.gov/'> Addiction Treatment Locator </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.kidshealth.org/en/teens/addictions.html#catgetting-help'> What is Addiction? </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.kidshealth.org/en/teens/drug-alcohol/#catalcohol'> Alcohol & Drug Awareness </a><br>";
            }
            if(checkNeed.gender != "cis"){
                document.getElementById("resources").innerHTML += "<h3>Gender Identity Exploration & Support</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/understanding-gender-identity/'> Understanding Gender Identity </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.thetrevorproject.org/resources/'> Trevor Project: Mental Health Resources </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://translifeline.org/resources/'> Translife Mental Health Hotline </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://itgetsbetter.org/'> It Gets Better Project: Support Network </a><br>";
                document.getElementById("resources").innerHTML += "<a href='http://www.ct.gov/shp/lib/shp/pdf/i_think_i_might_be_transgender.pdf'> Questioning: Am I Trans? </a><br>";

            }
            if(checkNeed.sexuality != "straight" ){
                document.getElementById("resources").innerHTML += "<h3>LGBTQ+ Mental Health Services & Exploration </h3>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/understanding-sexual-orientation/'> Understanding Sexual Orientation </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.thetrevorproject.org/resources/'> Trevor Project: LGBTQIA+ Awareness </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.healthline.com/health/am-i-gay'> Am I Gay? Questioning Sexuality </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://itgetsbetter.org/'> It Gets Better Project: Support Network </a><br>";
                          
            }
            //checking the various conditions
            if(checkNeed.conditions.includes("depression")||checkNeed.conditions.includes("anxiety")){
                document.getElementById("resources").innerHTML += "<h3> Depression & Anxiety Resources </h3>";
                document.getElementById("resources").innerHTML += "<a href=''> Understanding Depressive Feelings </a><br>";
                document.getElementById("resources").innerHTML += "<a href=''> Coping with Depression </a><br>";
                document.getElementById("resources").innerHTML += "<a href=''> Understanding Hopeless Feelings </a><br>";
            }
            if(checkNeed.conditions.includes("ptsd")){
                document.getElementById("resources").innerHTML += "<h3>PTSD</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/trauma-101/'> Understanding the Effects of Trauma </a><br>";
            }
            if(checkNeed.conditions.includes("disorderedEating")){
                document.getElementById("resources").innerHTML += "<h3>Eating Disorders</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/body-image-food-issues-101/'> Understanding Negative Body Image </a><br>";
            }
            

        }else{ //resources for adults
            if(checkNeed.selfHarm=="yes"){
                document.getElementById("resources").innerHTML += "<h3>Self-harm Awareness & Recovery Information</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://www.mind.org.uk/information-support/types-of-mental-health-problems/self-harm/helping-yourself-now/'> Recovering from Self-harm </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.psychologytoday.com/us/blog/the-truth-about-exercise-addiction/201708/15-things-do-instead-self-harming'> Self-harm Alternatives </a><br>";
                
            }
            if(checkNeed.suicidalAssessment=="yes"){
                document.getElementById("resources").innerHTML += "<h3>Suicide Crisis Lines & Long-Term Support</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://afsp.org/mental-health-resources-for-underrepresented-communities'> Suiceide Awareness in Underrepresented Communities </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.suicideinfo.ca/ask-help-feeling-suicidal/'> Asking for Help </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://jedfoundation.org/resource/what-are-suicidal-thoughts-and-do-i-need-help-for-them/'> Recognizing Suicidal Thoughts & Seeking Help </a><br>";
            }
            if(checkNeed.toxicRelation=="yes"){
                document.getElementById("resources").innerHTML += "<h3>Domestic & Relationship Abuse Resourcest</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://www.thehotline.org/'> National Domestic Abuse Hotline </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.thehotline.org/search-our-resources/?search=Warning+signs+of+abuse'> Warning Signs of Abuse </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://ncadv.org/personalized-safety-plan'> Making a Personalized Safety Plan </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://ncadv.org/tips-for-accessing-resources'> How to Get Help </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.rainn.org/'> Sexual Assault Awareness </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://apps.rainn.org/policy/?_ga=2.182111523.580776574.1668270604-517925609.1668270604'> Sexual Assault Policy By State </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.loveisrespect.org/'> Abusive Relationship Hotline </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.justice.gov/ovw/local-resources'> Local Legal Resources for Domestic Violence </a><br>";
            }
            if(checkNeed.substanceAbuse=="yes"){
                document.getElementById("resources").innerHTML += "<h3>Substance Abuse & Addiction Resources</h3>";
                document.getElementById("resources").innerHTML += "<a href=''> National Substance Abuse Hotline </a><br>";
                document.getElementById("resources").innerHTML += "<a href=''> About Substance Abuse Hotlines </a><br>";
                document.getElementById("resources").innerHTML += "<a href=''> Prescription Drug Abuse </a><br>";
                document.getElementById("resources").innerHTML += "<a href=''> Finding Treatment </a><br>";
            }
            if(checkNeed.gender != "cis"){
                document.getElementById("resources").innerHTML += "<h3>Identity Support</h3>";
                document.getElementById("resources").innerHTML += "<a href=''> Coming Out as Trans </a><br>";
                document.getElementById("resources").innerHTML += "<a href=''> Coming Out as Nonbinary or Trans </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.thetrevorproject.org/resources/'> Trevor Project: Mental Health Resources </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://translifeline.org/resources/'> Translife Mental Health Hotline </a><br>";
                document.getElementById("resources").innerHTML += "<a href='http://www.ct.gov/shp/lib/shp/pdf/i_think_i_might_be_transgender.pdf'> Questioning: Am I Trans? </a><br>";
            }
            if(checkNeed.sexuality != "straight" ){
                document.getElementById("resources").innerHTML += "<h3>LGBTQ+ Mental Health Services</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://www.thetrevorproject.org/resources/'> Trevor Project: LGBTQ+ Awareness </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.hrc.org/resources/bisexual'> Bisexuality Awareness </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.hrc.org/resources/communities-of-color'> LGBTQ+ in Communities of Color </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.healthline.com/health/am-i-gay'> Questioning: Am I Gay? </a><br>";
                          
            }
            //checking the various conditions
            if(checkNeed.conditions.includes("anxiety")||checkNeed.conditions.includes("depression")){
                document.getElementById("resources").innerHTML += "<h3>Anxiety & Depression Resources</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://adaa.org/'> Anxiety & Depression Awareness </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.dbsalliance.org/'> Depression & Bipolar </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://afsp.org/'> Suicide Prevention </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://health.gov/myhealthfinder/doctor-visits/screening-tests/talk-your-doctor-about-depression'> Communicating With Your Doctor </a><br>";
            }
                //data to share regardless of answers
                document.getElementById("resources").innerHTML += "<h3>Mental Health Literacy</h3>";
                document.getElementById("resources").innerHTML += "<a href='https://mentalhealthliteracy.org/'> Understanding Mental Health Discussions </a><br>";
                document.getElementById("resources").innerHTML += "<a href='https://www.mind.org.uk/information-support/types-of-mental-health-problems/'> Types of Mental Health Conditions </a><br>";
            

            
        }
    }   
    

}
    

