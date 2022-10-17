function getflower(flower) {
    

    switch(flower){
        case "rose":
          return "red";
    
        case "violet":
          return "blue";

        case "sunflower":
          return "Yellow";

        default:
          return "Unknown flowers";

    }

}

function getCalendarMonthDays(monthName){

    monthName = monthName.toLowerCase();
    switch(monthName){
        case "April":
        case "June":
        case "September":
        case "Novmeber":
         return 30;
        case "February":
         return 28;

        default:
         return 31;

    }
}

function checkAlpha(){
    let alphabet =(document.getElementById('alphabet').value).toUpperCase();
    switch(alphabet){
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            return "vowels";
        default:
            return "consonant";
    }
  }

function numberCounter(counter,maxvalue,targetdisplay){
  while(counter <= maxvalue){
    if(targetdisplay.innerHTML != ""){
      targetdisplay.innerHTML += " , ";
    }
     targetdisplay.innerHTML += counter ;
     counter += 1; 
  }

}

function decrementCounter(counter,minvalue,targetdisplay){
  while(counter >= minvalue){
    if(targetdisplay.innerHTML != ""){
      targetdisplay.innerHTML += " , ";
    }
     targetdisplay.innerHTML += counter ;
     counter -= 10; 
  }

}

function getLangauge(key, value){
  let dataCount = 0;
  let i= 0;
  while(i < staff.length){
     if(staff[i][key] > value){
      dataCount ++;
      }
     i++;
     }
  return dataCount;
  }



   