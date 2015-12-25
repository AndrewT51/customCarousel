$(document).ready(init);
var focusedItemDetails;
var slider = -15;
var negatives = false;
var reversedArr = objArray.slice();
reversedArr.reverse();
var reverse = false;

function init(){
  displayArray();
  displayMainFocus();
  navigationControl();
}

function displayArray(){
  if(!reverse){
    objArray.forEach(function(obj){
      $(".picArray").append($("<img src='"+ obj.url+"' class='unfocused'>"))
      if(obj.focus){
        focusedItemDetails = obj; 
        $("img[src$='"+obj.url+"']").addClass('focused').removeClass('unfocused');
      }
    })
  }else{

    reversedArr.forEach(function(obj){
      $(".picArray").prepend($("<img src='"+ obj.url+"' class='unfocused'>"))
      if(obj.focus){
        focusedItemDetails = obj; 
        $("img[src$='"+obj.url+"']").addClass('focused').removeClass('unfocused');
        console.log("here:",focusedItemDetails)
      }
    })
    reverse=false;
  }
}

function displayMainFocus(){
  $("#picHolder").append("<img src='"+ focusedItemDetails.url + "'>");
  $("#textContainer p").append(focusedItemDetails.blurb)
}

function navigationControl(){
  $(".next").on("click",function(){


    slider -= 30;
    $("img[src$='"+focusedItemDetails.url+"']").removeClass('focused').addClass('unfocused');
    $(".picArray img").css("left",slider+"%")


    if(focusedItemDetails.id + 1 < objArray.length){
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[focusedItemDetails.id + 1]
      focusedItemDetails.focus = true;
    }else{
      slider += 150;
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[0]
      console.log('addsHere')
      focusedItemDetails.focus = true;
    }

    $("#picHolder").empty();
    $("#textContainer p").empty();
    displayMainFocus();
    displayArray();
  })

  $(".previous").on("click",function(){
    slider += 30;
    $("img[src$='"+focusedItemDetails.url+"']").removeClass('focused').addClass('unfocused');
    $(".picArray img").css("left",slider+"%")
    if(objArray[focusedItemDetails.id].id -1  >= 0){
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[focusedItemDetails.id - 1]
      focusedItemDetails.focus = true;
    }else{
      slider -= 300;
      focusedItemDetails.focus = false;

      objArray[objArray.length-1].focus = true;
      focusedItemDetails = objArray[objArray.length-1]
      
      console.log(focusedItemDetails)
      reverse = true;
    }
    $("#picHolder").empty();
    $("#textContainer p").empty();
    displayMainFocus();
    displayArray();
  })
}
