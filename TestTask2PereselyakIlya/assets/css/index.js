function sliderLeft(){
    var slider=document.getElementsByClassName("slider");
    var sliderItems=document.getElementsByClassName("slider_card");
    slider.style.justifyContent="flex-end";
    sliderItems.item(0).style.display="none";
}