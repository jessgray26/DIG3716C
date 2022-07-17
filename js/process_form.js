// FUNCTION THAT VALIDATES USER'S INPUT
function validateData(){
    // VALIDATES & STORES USER'S FIRST NAME
    var firstName = document.surveyForm.firstName.value;
    var firstNameRGEX = /^[a-zA-Z ]{2,30}$/;
    var firstNameResult = firstNameRGEX.test(firstName);
        if(firstNameResult == false){
            document.getElementById('errorfn').style.display = 'inline-block';
            document.getElementById('successfn').style.display = 'none';
            return false
        }

        else{
            document.getElementById('errorfn').style.display = 'none';
            document.getElementById('successfn').style.display = 'inline-block';
            console.log(firstName);
        }

    // VALIDATES & STORES USER'S LAST NAME
    var lastName = document.surveyForm.lastName.value;
    var lastNameRGEX = /^[a-zA-Z ]{2,30}$/;
    var lastNameResult = lastNameRGEX.test(lastName);
        if(lastNameResult == false){
            
            document.getElementById('errorln').style.display = 'inline-block';
            document.getElementById('successln').style.display = 'none'; 
            return false
        }

        else{
            
            document.getElementById('errorln').style.display = 'none';
            document.getElementById('successln').style.display = 'inline-block';
            console.log(lastName);
        }
    // VALIDATES & STORES USER'S EMAIL ADDRESS
    var email_id = document.surveyForm.email.value;
    var emailRGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailResult = emailRGEX.test(email_id);
        if (emailResult == false){
            document.getElementById('errorea').style.display = 'inline-block';
            document.getElementById('successea').style.display = 'none'; 
            return false;    
        }
    
        else{
            document.getElementById('errorea').style.display = 'none';
            document.getElementById('successea').style.display = 'inline-block';
            console.log(email_id);
        }
    // VALIDATES & STORES USER'S PHONE NUMBER
    var phoneNumber_id = document.surveyForm.phoneNumber.value;
    var phoneRGEX = /^(?:\(\d{3}\)|\d{3}-)\d{3}-\d{4}$/;
    var phoneResult = phoneRGEX.test(phoneNumber_id);
        if (phoneResult == false){
            document.getElementById('errorpn').style.display = 'inline-block';
            document.getElementById('successpn').style.display = 'none';
            return false;   
        }
    
        else{
            document.getElementById('errorpn').style.display = 'none';
            document.getElementById('successpn').style.display = 'inline-block';
            console.log(phoneNumber_id);
        }
    //VALIDATES & STORES USER'S SULLEY ADDRESS
    var sulleyAddress_id = document.surveyForm.sulleyAddress.value;
    tilde = sulleyAddress_id.indexOf("~");
        if ( tilde < 1){
            document.getElementById('errorsa').style.display = 'inline-block';
            document.getElementById('successsa').style.display = 'none';  
            return false;    
        }
    
        else{
            document.getElementById('errorsa').style.display = 'none';
            document.getElementById('successsa').style.display = 'inline-block';
            console.log(sulleyAddress_id);
        }
    return true;
}

// OPTION FOR ANONYMOUS
function anonCheck(){  
    var anon_id = document.getElementById("anonymous");
        if(anon_id.checked == true){
            document.getElementById("firstName_id").disabled = true;
            document.getElementById("lastName_id").disabled = true;
            document.getElementById("email_id").disabled = true;
            document.getElementById("phoneNumber_id").disabled = true;
            document.getElementById("sulleyAddress_id").disabled = true;
        } 
        else {
            document.getElementById("firstName_id").disabled = false;
            document.getElementById("lastName_id").disabled = false;
            document.getElementById("email_id").disabled = false;
            document.getElementById("phoneNumber_id").disabled = false;
            document.getElementById("sulleyAddress_id").disabled = false;
        }
        
}

// SHOWS HINTS WHEN FIELDS ARE FOCUSED
function showHintFN(){
    document.getElementById('hintfn').style.display = 'block';
}
function showHintLN(){
    document.getElementById('hintln').style.display = 'block';
}

function showHintEA(){
    document.getElementById('hintea').style.display = 'block';
}

function showHintPN(){
    document.getElementById('hintpn').style.display = 'block';
}

function showHintSA(){
    document.getElementById('hintsa').style.display = 'block';
}
// HIDES HINTS WHEN FIELDS ARE UNFOCUSED
function hideHints(){
    document.getElementById('hintfn').style.display = 'none';
    document.getElementById('hintln').style.display = 'none';
    document.getElementById('hintea').style.display = 'none';
    document.getElementById('hintpn').style.display = 'none';
    document.getElementById('hintsa').style.display = 'none';
}


function surveyAnswers(){
    // TAKES VARIABLES FROM FORM ONCE VALIDATED
    var firstName = document.surveyForm.firstName.value;
        lastName = document.surveyForm.lastName.value;
        email_id = document.surveyForm.email.value;
        phoneNumber_id = document.surveyForm.phoneNumber.value;
        sulleyAddress_id = document.surveyForm.sulleyAddress.value;

    // VARIABLES FOR EACH CHOICE. 
    var a1Choice = 0,
        a2Choice = 0,
        a3Choice = 0,
        a4Choice = 0,
        a5Choice = 0,
        a6Choice = 0,
        a7Choice = 0,
        a8Choice = 0;

    // ADDS UP EACH POSSIBLE CHOICE THE USER MAKES
    var questions = document.getElementsByTagName('input')
    for(i=0; i < questions.length; i++){
        if(questions[i].checked){
            if (questions[i].value == 'a1'){
                a1Choice = a1Choice + 1.1;
            }
            if (questions[i].value == 'a2'){
                a2Choice = a2Choice + 1.2;
            }
            if (questions[i].value == 'a3'){
                a3Choice = a3Choice + 1.3;
            }
            if (questions[i].value == 'a4'){
                a4Choice = a4Choice + 1.4;
            }
            if (questions[i].value == 'a5'){
                a5Choice = a5Choice + 1.5;
            }
            if (questions[i].value == 'a6'){
                a6Choice= a6Choice + 1.6;
            }
            if (questions[i].value == 'a7'){
                a7Choice = a7Choice + 1.7;
            }
            if (questions[i].value == 'a8'){
                a8Choice = a8Choice + 1.8;
            }
        }
    }

    // SHOWS BADGE AND BADGE URL BASED ON THE CHOICE WITH THE HIGHEST NUMBER
    var addChoices = Math.max(a1Choice, a2Choice, a3Choice, a4Choice, a5Choice, a6Choice, a7Choice, a8Choice);
        if(a1Choice == addChoices){
            document.getElementById('badge').style.display = 'block';
            var resultHeader = document.createElement("h2");
                resultText = document.createTextNode("You are...Cinderella!");
                resultHeader.appendChild(resultText);
            document.getElementById('badge').appendChild(resultHeader);

            var badgeIMG = document.createElement("img");
                badgeIMG.setAttribute("src", "img/cinderella.png");
            document.getElementById("badge").appendChild(badgeIMG);

            var cinderellaURL = document.getElementById("cinderella_img").src;
            var badgeTextbox = document.createElement("textarea");
            var badgeURL = document.createTextNode(cinderellaURL);
                badgeTextbox.appendChild(badgeURL)
            document.getElementById("badge").appendChild(badgeTextbox);
        }
        if(a2Choice == addChoices){
            document.getElementById('badge').style.display = 'block';
            var resultHeader = document.createElement("h2");
                resultText = document.createTextNode("You are...Aurora!");
                resultHeader.appendChild(resultText);
            document.getElementById('badge').appendChild(resultHeader);

            var badgeIMG = document.createElement("img");
                badgeIMG.setAttribute("src", "img/aurora.png");
            document.getElementById("badge").appendChild(badgeIMG);

            var auroraURL = document.getElementById("aurora_img").src;
            var badgeTextbox = document.createElement("textarea");
            var badgeURL = document.createTextNode(auroraURL);
                badgeTextbox.appendChild(badgeURL)
            document.getElementById("badge").appendChild(badgeTextbox);
        }
        if(a3Choice == addChoices){
            document.getElementById('badge').style.display = 'block';
            var resultHeader = document.createElement("h2");
                resultText = document.createTextNode("You are...Pocahontas!");
                resultHeader.appendChild(resultText);
            document.getElementById('badge').appendChild(resultHeader);

            var badgeIMG = document.createElement("img");
                badgeIMG.setAttribute("src", "img/pocahontas.png");
            document.getElementById("badge").appendChild(badgeIMG);

            var pocahontasURL = document.getElementById("pocahontas_img").src;
            var badgeTextbox = document.createElement("textarea");
            var badgeURL = document.createTextNode(pocahontasURL);
                badgeTextbox.appendChild(badgeURL)
            document.getElementById("badge").appendChild(badgeTextbox);
        }
        if(a4Choice == addChoices){
            document.getElementById('badge').style.display = 'block';
            var resultHeader = document.createElement("h2");
                resultText = document.createTextNode("You are...Ariel!");
                resultHeader.appendChild(resultText);
            document.getElementById('badge').appendChild(resultHeader);

            var badgeIMG = document.createElement("img");
                badgeIMG.setAttribute("src", "img/ariel.png");
            document.getElementById("badge").appendChild(badgeIMG);

            var arielURL = document.getElementById("ariel_img").src;
            var badgeTextbox = document.createElement("textarea");
            var badgeURL = document.createTextNode(arielURL);
                badgeTextbox.appendChild(badgeURL)
            document.getElementById("badge").appendChild(badgeTextbox);
        }
        if(a5Choice == addChoices){
            document.getElementById('badge').style.display = 'block';
            var resultHeader = document.createElement("h2");
                resultText = document.createTextNode("You are...Belle!");
                resultHeader.appendChild(resultText);
            document.getElementById('badge').appendChild(resultHeader);

            var badgeIMG = document.createElement("img");
                badgeIMG.setAttribute("src", "img/belle.png");
            document.getElementById("badge").appendChild(badgeIMG);

            var belleURL = document.getElementById("belle_img").src;
            var badgeTextbox = document.createElement("textarea");
            var badgeURL = document.createTextNode(belleURL);
                badgeTextbox.appendChild(badgeURL)
            document.getElementById("badge").appendChild(badgeTextbox);
        }
        if(a6Choice == addChoices){
            document.getElementById('badge').style.display = 'block';
            var resultHeader = document.createElement("h2");
                resultText = document.createTextNode("You are...Mulan!");
                resultHeader.appendChild(resultText);
            document.getElementById('badge').appendChild(resultHeader);

            var badgeIMG = document.createElement("img");
                badgeIMG.setAttribute("src", "img/mulan.png");
            document.getElementById("badge").appendChild(badgeIMG);

            var mulanURL = document.getElementById("mulan_img").src;
            var badgeTextbox = document.createElement("textarea");
            var badgeURL = document.createTextNode(mulanURL);
                badgeTextbox.appendChild(badgeURL)
            document.getElementById("badge").appendChild(badgeTextbox);
        }
        if(a7Choice == addChoices){
            document.getElementById('badge').style.display = 'block';
            var resultHeader = document.createElement("h2");
                resultText = document.createTextNode("You are...Jasmine!");
                resultHeader.appendChild(resultText);
            document.getElementById('badge').appendChild(resultHeader);

            var badgeIMG = document.createElement("img");
                badgeIMG.setAttribute("src", "img/jasmine.png");
            document.getElementById("badge").appendChild(badgeIMG);

            var jasmineURL = document.getElementById("jasmine_img").src;
            var badgeTextbox = document.createElement("textarea");
            var badgeURL = document.createTextNode(jasmineURL);
                badgeTextbox.appendChild(badgeURL)
            document.getElementById("badge").appendChild(badgeTextbox);
        }
        if(a8Choice == addChoices){
            document.getElementById('badge').style.display = 'block';
            var resultHeader = document.createElement("h2");
                resultText = document.createTextNode("You are...Snow White!");
                resultHeader.appendChild(resultText);
            document.getElementById('badge').appendChild(resultHeader);

            var badgeIMG = document.createElement("img");
                badgeIMG.setAttribute("src", "img/snowwhite.png");
            document.getElementById("badge").appendChild(badgeIMG);

            var snowwhiteURL = document.getElementById("snowwhite_img").src;
            var badgeTextbox = document.createElement("textarea");
            var badgeURL = document.createTextNode(snowwhiteURL);
                badgeTextbox.appendChild(badgeURL)
            document.getElementById("badge").appendChild(badgeTextbox);
        }   

    // STORES ALL POSSIBLE CHOICES USER MADE THROUGH EACH OPTION AND QUESTION SET.
    var choices = document.getElementsByTagName('input')
    for(i=0; i < choices.length; i++){
        if(choices[i].checked){
            // FIRST QUESTION SET
            if (choices[i].id == 'a_1'){
                var answerValueOne = document.getElementById('a1_label').innerText;
                console.log(answerValueOne)
            }
            if (choices[i].id == 'a_2'){
                var answerValueOne = document.getElementById('a2_label').innerText;
                console.log(answerValueOne)
            }
            if (choices[i].id == 'a_3'){
                var answerValueOne = document.getElementById('a3_label').innerText;
                console.log(answerValueOne)
            }
            if (choices[i].id == 'a_4'){
                var answerValueOne = document.getElementById('a4_label').innerText;
                console.log(answerValueOne)
            }
            if (choices[i].id == 'a_5'){
                var answerValueOne = document.getElementById('a5_label').innerText;
                console.log(answerValueOne)
            }
            if (choices[i].id == 'a_6'){
                var answerValueOne = document.getElementById('a6_label').innerText;
                console.log(answerValueOne)
            }
            if (choices[i].id == 'a_7'){
                var answerValueOne = document.getElementById('a7_label').innerText;
                console.log(answerValueOne)
            }
            if (choices[i].id == 'a_8'){
                var answerValueOne = document.getElementById('a8_label').innerText;
                console.log(answerValueOne)
            }
            // SECOND QUESTION SET
            if (choices[i].id == 'a_9'){
                var answerValueTwo = document.getElementById('a9_label').innerText;
                console.log(answerValueTwo)
            }
            if (choices[i].id == 'a_10'){
                var answerValueTwo = document.getElementById('a10_label').innerText;
                console.log(answerValueTwo)
            }
            if (choices[i].id == 'a_11'){
                var answerValueTwo = document.getElementById('a11_label').innerText;
                console.log(answerValueTwo)
            }
            if (choices[i].id == 'a_12'){
                var answerValueTwo = document.getElementById('a12_label').innerText;
                console.log(answerValueTwo)
            }
            if (choices[i].id == 'a_13'){
                var answerValueTwo = document.getElementById('a13_label').innerText;
                console.log(answerValueTwo)
            }
            if (choices[i].id == 'a_14'){
                var answerValueTwo = document.getElementById('a14_label').innerText;
                console.log(answerValueTwo)
            }
            if (choices[i].id == 'a_15'){
                var answerValueTwo = document.getElementById('a15_label').innerText;
                console.log(answerValueTwo)
            }
            if (choices[i].id == 'a_16'){
                var answerValueTwo = document.getElementById('a16_label').innerText;
                console.log(answerValueTwo)
            }
            // THIRD QUESTION SET
            if (choices[i].id == 'a_17'){
                var answerValueThree = document.getElementById('a17_label').innerText;
                console.log(answerValueThree)
            }
            if (choices[i].id == 'a_18'){
                var answerValueThree = document.getElementById('a18_label').innerText;
                console.log(answerValueThree)
            }
            if (choices[i].id == 'a_19'){
                var answerValueThree = document.getElementById('a19_label').innerText;
                console.log(answerValueThree)
            }
            if (choices[i].id == 'a_20'){
                var answerValueThree = document.getElementById('a20_label').innerText;
                console.log(answerValueThree)
            }
            if (choices[i].id == 'a_21'){
                var answerValueThree = document.getElementById('a21_label').innerText;
                console.log(answerValueThree)
            }
            if (choices[i].id == 'a_22'){
                var answerValueThree = document.getElementById('a22_label').innerText;
                console.log(answerValueThree)
            }
            if (choices[i].id == 'a_23'){
                var answerValueThree = document.getElementById('a23_label').innerText;
                console.log(answerValueThree)
            }
            if (choices[i].id == 'a_24'){
                var answerValueThree = document.getElementById('a24_label').innerText;
                console.log(answerValueThree)
            }
            // FOURTH QUESTION SET
            if (choices[i].id == 'a_25'){
                var answerValueFour = document.getElementById('a25_label').innerText;
                console.log(answerValueFour)
            }
            if (choices[i].id == 'a_26'){
                var answerValueFour = document.getElementById('a26_label').innerText;
                console.log(answerValueFour)
            }
            if (choices[i].id == 'a_27'){
                var answerValueFour = document.getElementById('a27_label').innerText;
                console.log(answerValueFour)
            }
            if (choices[i].id == 'a_28'){
                var answerValueFour = document.getElementById('a28_label').innerText;
                console.log(answerValueFour)
            }
            if (choices[i].id == 'a_29'){
                var answerValueFour = document.getElementById('a29_label').innerText;
                console.log(answerValueFour)
            }
            if (choices[i].id == 'a_30'){
                var answerValueFour = document.getElementById('a30_label').innerText;
                console.log(answerValueFour)
            }
            if (choices[i].id == 'a_31'){
                var answerValueFour = document.getElementById('a31_label').innerText;
                console.log(answerValueFour)
            }
            if (choices[i].id == 'a_32'){
                var answerValueFour = document.getElementById('a32_label').innerText;
                console.log(answerValueFour)
            }
            // FIFTH QUESTION SET
            if (choices[i].id == 'a_33'){
                var answerValueFive = document.getElementById('a33_label').innerText;
                console.log(answerValueFive)
            }
            if (choices[i].id == 'a_34'){
                var answerValueFive = document.getElementById('a34_label').innerText;
                console.log(answerValueFive)
            }
            if (choices[i].id == 'a_35'){
                var answerValueFive = document.getElementById('a35_label').innerText;
                console.log(answerValueFive)
            }
            if (choices[i].id == 'a_36'){
                var answerValueFive = document.getElementById('a36_label').innerText;
                console.log(answerValueFive)
            }
            if (choices[i].id == 'a_37'){
                var answerValueFive = document.getElementById('a37_label').innerText;
                console.log(answerValueFive)
            }
            if (choices[i].id == 'a_38'){
                var answerValueFive = document.getElementById('a38_label').innerText;
                console.log(answerValueFive)
            }
            if (choices[i].id == 'a_39'){
                var answerValueFive = document.getElementById('a39_label').innerText;
                console.log(answerValueFive)
            }
            if (choices[i].id == 'a_40'){
                var answerValueFive = document.getElementById('a40_label').innerText;
                console.log(answerValueFive)
            }
            // SIXTH QUESTION SET
            if (choices[i].id == 'a_41'){
                var answerValueSix = document.getElementById('a41_label').innerText;
                console.log(answerValueSix)
            }
            if (choices[i].id == 'a_42'){
                var answerValueSix = document.getElementById('a42_label').innerText;
                console.log(answerValueSix)
            }
            if (choices[i].id == 'a_43'){
                var answerValueSix = document.getElementById('a43_label').innerText;
                console.log(answerValueSix)
            }
            if (choices[i].id == 'a_44'){
                var answerValueSix = document.getElementById('a44_label').innerText;
                console.log(answerValueSix)
            }
            if (choices[i].id == 'a_45'){
                var answerValueSix = document.getElementById('a45_label').innerText;
                console.log(answerValueSix)
            }
            if (choices[i].id == 'a_46'){
                var answerValueSix = document.getElementById('a46_label').innerText;
                console.log(answerValueSix)
            }
            if (choices[i].id == 'a_47'){
                var answerValueSix = document.getElementById('a47_label').innerText;
                console.log(answerValueSix)
            }
            if (choices[i].id == 'a_48'){
                var answerValueSix = document.getElementById('a48_label').innerText;
                console.log(answerValueSix)
            }
        }
    }

    // SHOWS USER'S CHOICES
    var userChoices = [answerValueOne, answerValueTwo, answerValueThree, answerValueFour, answerValueFive, answerValueSix]
        choicesHeader = document.createElement("h3");
        choicesText = document.createTextNode("Here are the choices you picked:");
            choicesHeader.appendChild(choicesText);
    document.getElementById('userAnswers').appendChild(choicesHeader);

    var choicesList = document.createElement("ul");
        for(i=0; i < userChoices.length ; i++){
            var choicesListItem = document.createElement("li");
            choicesListItem.innerText = userChoices[i];
            choicesList.appendChild(choicesListItem);
        }
    document.getElementById('userAnswers').appendChild(choicesList);

    // SHOWS USER'S PERSONAL INFORMATION THEY PROVIDED
    var userInfo = [firstName, lastName, email_id, phoneNumber_id, sulleyAddress_id]
        infoHeader = document.createElement("h3");
        t = document.createTextNode("Here is the personal information you provided above:");
        infoHeader.appendChild(t);
    document.getElementById('userAnswers').appendChild(infoHeader);  
    
    var infoList = document.createElement("ul");
    var anon_id = document.getElementById("anonymous");
        if(anon_id.checked == true){
            anonPara = document.createElement("p");
            anonText = document.createTextNode("You chose to be anonymous!");
            anonPara.appendChild(anonText);
        document.getElementById('userAnswers').appendChild(anonPara);
        }

        else{
            for(i=0; i < userInfo.length ; i++){
                var infoListItem = document.createElement("li");
                    infoListItem.innerText = userInfo[i];
                    infoList.appendChild(infoListItem);
            }
        document.getElementById('userInfo').appendChild(infoList);
        }
    document.getElementById('submit').style.display = 'none';
    document.getElementById('answerBox').style.display = 'flex';
    document.getElementById('retakeBTN').style.display = 'inline-block';
}

// IF USER WANTS TO RETAKE SURVEY
function retakeSurvey(){
    document.location.reload(true);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
}