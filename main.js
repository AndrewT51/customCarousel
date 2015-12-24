$(document).ready(init);
var focusedItemDetails;
var slider = -15;

function init(){
  displayArray();
  displayMainFocus();
  navigationControl();
}

function displayArray(){
  objArray.forEach(function(obj){
    $(".picArray").append($("<img src='"+ obj.url+"' class='unfocused'>"))
    if(obj.focus){
      focusedItemDetails = obj; 
      $("img[src$='"+obj.url+"']").addClass('focused').removeClass('unfocused');
    }
  })
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
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[0]
      focusedItemDetails.focus = true;
    }

    $("#picHolder").empty();
    $("#textContainer p").empty();
    displayMainFocus();
    displayArray();
  })

  $(".previous").on("click",function(){
    slider += 30;
    $("img[src$='"+focusedItemDetails.url+"']").removeClass('focused');
    $(".picArray img").css("left",slider+"%")
    if(objArray[focusedItemDetails.id].id - 1 >= 1){
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[focusedItemDetails.id - 1]
      focusedItemDetails.focus = true;
    }else{
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[objArray.length-1]
      focusedItemDetails.focus = true;
    }
    $("#picHolder").empty();
    $("#textContainer p").empty();
    displayMainFocus();
    displayArray();
  })
}
