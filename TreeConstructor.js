function TreeConstructor(strArr) { 
    let parents = [];
    let kids = [];
    let str = strArr.toString();
    for(let i = 0; i < str.length; i++){
        if (str[i-1]==='('){
            kids.push(str[i]);
        }
        if(str[i+1] === ')'){
            parents.push(str[i]);
        }
    }
  
    let elder = [];
    for (let c of parents){
        if (kids.indexOf(c) === -1){
            elder.push(c);
        }
    }
    if (elder.length === 1){
        return true;
    }else{
        return false;
    }
         
}
   
// keep this function call here 
TreeConstructor(readline());                            
