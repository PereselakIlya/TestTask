window.addEventListener("load",()=>{
    document.getElementsByClassName("question_right_part").item(1).style.display="none";
    document.getElementsByClassName("question_right_part").item(2).style.display="none";
    document.getElementsByClassName("question_right_part").item(0).children[1].children[4].style.display="none";
    document.getElementsByClassName("question_formula").item(1).style.display="none";
    document.getElementsByClassName("question_formula").item(2).style.display="none";
    document.getElementsByClassName("answers").item(2).style.display="flex";
    document.getElementsByClassName("answers").item(2).style.flexDirection="column";
    delete sessionStorage.Question0;
    delete sessionStorage.Question1;
});
var sliderIndex=2;
var slider=document.getElementsByClassName("slider");
var sliderItems=document.getElementsByClassName("slider_card");
function sliderLeft(){
    if(sliderItems.item(2).style.display!="none"){
        sliderItems.item(sliderIndex).style.display="none";
        sliderIndex+=1;
        slider.item(0).style.justifyContent="flex-end";
        slider.item(0).style.justifyContent="center";
    }
    else{
        sliderItems.item(sliderIndex).style.display="flex";
        sliderIndex+=1;
        slider.item(0).style.justifyContent="flex-end";
        slider.item(0).style.justifyContent="center";
    }
}
var reversedIndex=2;
function sliderRight(){
    if(sliderItems.item(3).style.display!="none"){
        sliderItems.item(sliderIndex).style.display="none";
        sliderIndex-=1;
        slider.item(0).style.justifyContent="flex-end";
        slider.item(0).style.justifyContent="center";
    }
    else{
        sliderItems.item(sliderIndex).style.display="flex";
        sliderIndex-=1;
        slider.item(0).style.justifyContent="flex-end";
        slider.item(0).style.justifyContent="center";
    }
}
function QuizSelector(){
    var counter=0;
    var Back=document.getElementsByClassName("question_right_part").item(0).children[1].children[4];
        document.body.addEventListener("click",evt=>{
          if(evt.target.className=="answer"&&counter<3){
            if(sessionStorage.getItem("Question"+counter)==null){
                sessionStorage.setItem("Question"+counter,evt.target.lastChild.textContent);
                evt.target.style.backgroundColor="black";
                evt.target.style.color="white";
                evt.target.children[0].style.visibility="visible";
                evt.target.children[0].style.opacity="1";
                counter+=1;
            }
        }
    });
      Back.style.visibility="visible";
      Back.style.opacity=1;
}
function TimeTraveler(){
    var output=document.getElementsByClassName("question_formula-text").item(0);
    var AnswerBut=document.getElementsByClassName("answer");
    var answer;
    answer=output.textContent.split(". ");
    for(var i=0;i<AnswerBut.length;++i){
        if(AnswerBut.item(i).textContent==answer[0]){
            AnswerBut.item(i).style.backgroundColor="black";
            AnswerBut.item(i).style.color="white";
            AnswerBut.item(i).children[0].style.visibility="visible";
            AnswerBut.item(i).children[0].style.opacity="1";
            Answer.item(i).children[0].style.backgroundColor="black";
            Answer.item(i).children[0].style.borderColor="white";
            output.textContent=answer[0];
        }
        else if(AnswerBut.item(i).textContent==answer[1]){
            AnswerBut.item(i).style.backgroundColor="black";
            AnswerBut.item(i).style.color="white";
            AnswerBut.item(i).children[0].style.visibility="visible";
            AnswerBut.item(i).children[0].style.opacity="1";
            Answer.item(i).children[0].style.backgroundColor="black";
            Answer.item(i).children[0].style.borderColor="white";
            output.textContent-=answer[1];
        }
    }
}
function Back(){
    if(document.getElementsByClassName("question_right_part").item(1).style.display!="none"){
        document.getElementsByClassName("question_right_part").item(1).style.display="none";
        document.getElementsByClassName("question_right_part").item(0).style.display="flex";
    }
    else if(document.getElementsByClassName("question_right_part").item(2).style.display!="none"){
        document.getElementsByClassName("question_right_part").item(2).style.display="none";
        document.getElementsByClassName("question_right_part").item(1).style.display="flex";
    }
}
function Cancel(){
    var Answer=document.getElementsByClassName("answer");
    var answ1;
    for(var i=0;i<Answer.length;++i){
        if(Answer.item(i).style.backgroundColor!="white"){
            delete sessionStorage.Question0;
            answ1=Answer.item(i).style.backgroundColor="white";
            Answer.item(i).style.color="black";
            Answer.item(i).children[0].style.visibility="hidden";
            Answer.item(i).children[0].style.opacity="0";
            Answer.item(i).children[0].style.backgroundColor="black";
            Answer.item(i).children[0].style.borderColor="white";
        }
        else if(answ1!=null&&Answer.item(i).style.backgroundColor!="white"){
            delete sessionStorage.Question1;
            answ2=Answer.item(i).style.backgroundColor="white";
            Answer.item(i).style.color="black";
            Answer.item(i).children[0].style.visibility="hidden";
            Answer.item(i).children[0].style.opacity="0";
            Answer.item(i).children[0].style.backgroundColor="white";
            Answer.item(i).children[0].style.borderColor="black";
        }
    }
}
function Continue(){   
    var output=document.getElementsByClassName("question_formula-text");
    var Answer=document.getElementsByClassName("answer");
    var marker=document.getElementsByClassName("answer_marker");
    if(output.item(0).textContent==""){
        output.item(0).textContent=sessionStorage.getItem("Question0")+"."+" "+sessionStorage.getItem("Question1");
    }
    else if(output.item(0).textContent!=""){
        output.item(1).textContent=sessionStorage.getItem("Question0")+"."+" "+sessionStorage.getItem("Question1");
    }
    else{
        output.item(2).textContent=sessionStorage.getItem("Question0")+"."+" "+sessionStorage.getItem("Question1");
    }
    delete sessionStorage.Question0;
    delete sessionStorage.Question1;
    for(var i=0;i<Answer.length;++i){
        if(Answer.item(i).style.backgroundColor!="white"){
        Answer.item(i).style.backgroundColor="white";
        Answer.item(i).style.color="black";
        Answer.item(i).children[0].style.visibility="hidden";
        Answer.item(i).children[0].style.opacity="0";
        Answer.item(i).children[0].style.backgroundColor="black";
        Answer.item(i).children[0].style.borderColor="white";
        }
    }
    document.getElementsByClassName("contact_button").item(3).style.visibility="hidden";
    document.getElementsByClassName("contact_button").item(3).style.opacity="0";
    if(document.getElementsByClassName("question_right_part").item(0).style.display!="none"){
        document.getElementsByClassName("question_right_part").item(0).style.display="none";
        document.getElementsByClassName("question_right_part").item(1).style.display="flex";
    }
    else if(document.getElementsByClassName("question_right_part").item(1).style.display!="none"){
        document.getElementsByClassName("question_right_part").item(1).style.display="none";
        document.getElementsByClassName("question_right_part").item(2).style.display="flex";
    }
    if(document.getElementsByClassName("question_formula").item(1).style.display=="none"){
        document.getElementsByClassName("question_formula").item(1).style.display="block";
    }
    else{
        document.getElementsByClassName("question_formula").item(2).style.display="block";
    }
}
function Contact(){
    document.getElementsByClassName("contact_modal-window").item(0).style.display="unset";
}
function Close(){
    document.getElementsByClassName("contact_modal-window").item(0).style.display="none";
}
function Close2(){
    document.getElementsByClassName("contact-modal-window_after-submission-window").item(0).style.display="none";
}
function Submition(){
    document.getElementsByClassName("contact-modal-window_after-submission-window").item(0).style.display="unset";
    document.getElementsByClassName("contact_modal-window").item(0).style.display="none";
}