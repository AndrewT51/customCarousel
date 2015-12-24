$(document).ready(init);
var focusedItemDetails;

  var objArray = [{
    url:"pics/1.jpg",
    blurb: "",
    name: "",
    focus: true,
    id: 0
  },
  {
    url:"pics/2.jpg",
    blurb: "",
    name: "",
    focus: false,
    id: 1
  },
  {
    url:"pics/3.jpg",
    name: "",
    focus: false,
    id: 2
  },
  {
    url:"pics/4.jpg",
    name: "",
    focus: false,
    id: 3
  },
    {
    url:"pics/5.jpg",
    name: "",
    focus: false,
    id: 4
  }

  ];

function init(){
  displayArray();
  displayMainFocus();
  navigationControl();
  
}



function displayArray(){
  objArray.forEach(function(obj){
    $(".picArray").append($("<img src='"+ obj.url+"'>"))
    if(obj.focus){
      focusedItemDetails = obj; 
      $("img[src$='"+obj.url+"']").addClass('focused');
    }
  })
  // for(itemNumber = 0; itemNumber <=4; itemNumber++){
  //   $(".picArray").append($("<img src='"+ objArray[itemNumber].url+"'>"))
  // }
}


function displayMainFocus(){
  $("#picHolder").append("<img src='"+ focusedItemDetails.url + "'>")
}

function navigationControl(){
  $(".next").on("click",function(){
    $("img[src$='"+focusedItemDetails.url+"']").removeClass('focused');

    if(focusedItemDetails.id + 1 < objArray.length){
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[focusedItemDetails.id + 1]
      focusedItemDetails.focus = true;
    }else{
      console.log(focusedItemDetails)
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[0]
      focusedItemDetails.focus = true;
      console.log(focusedItemDetails)
    }
    // focusedItemDetails = objArray[focusedItemDetails.id +1]
    $("#picHolder").empty();
    displayMainFocus();
    displayArray();
    console.log(objArray)
  })
  $(".previous").on("click",function(){
    $("img[src$='"+focusedItemDetails.url+"']").removeClass('focused');
    if(objArray[focusedItemDetails.id].id - 1 >= 0){
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[focusedItemDetails.id - 1]
      focusedItemDetails.focus = true;
    }else{
      focusedItemDetails.focus = false;
      focusedItemDetails = objArray[objArray.length-1]
      focusedItemDetails.focus = true;
    }
    $("#picHolder").empty();
    displayMainFocus();
    displayArray();
    console.log(objArray)
  })


}
