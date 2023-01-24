function BitmapHoles(strArr) { 
    let returnArry = [];
    let indexOfZ = [];
    let subarr;
     for(let i=0 ; i < strArr.length; i++){
       subarr = strArr[i].split("");
      let index = [];
      for(let y=0 ; y < subarr.length; y++){
        if(subarr[y] == 0)
        index.push(y);
        if(y == subarr.length-1)
        indexOfZ.push(index);
      }
    }
    for(let i=0 ; i < indexOfZ.length; i++){
        for(let j=0; j<indexOfZ[i].length ; j++){
          if(indexOfZ[i+1] && (indexOfZ[i][j]==indexOfZ[i+1][j] || indexOfZ[i+1].indexOf(indexOfZ[i][j])))
          returnArry.indexOf(strArr[i]) < 0 ? returnArry.push(strArr[i]): false;
          if(Math.abs(indexOfZ[i][j]-indexOfZ[i][j+1])==1)
          returnArry.indexOf(strArr[i]) < 0 ? returnArry.push(strArr[i]): false;
        }
    }
      return returnArry.length; 
    }
       
    // keep this function call here 
    console.log(BitmapHoles(readline()));