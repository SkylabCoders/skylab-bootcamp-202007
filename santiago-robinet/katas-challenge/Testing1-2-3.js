var number=function(array){
    //your awesome code here
    let counter = 0;
    const formatedString = array.map((element) => {
      ++counter;
      return `${counter}: ${element}`;
    })
    
    return formatedString;
    
  }

  //I can refactor this one, to do it in a better and shorter way.