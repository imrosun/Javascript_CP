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
    }//should ahve the parnets and kids arrays
    
    //kids - 1,2,5,7,9 - 9,1,
    //pars -2,4,7,2,5 - 4
    // have to all reduce till i find a single parent
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

// the immediate pattern i see is that there cannot be 3 parents so any istance of two of the same (1,i2)false
// i have to make sure every kid has a parent and that there is one final parent 
// mayve i ican make two deparate arrays of the children and parents
// or make a table of parents and their kids ?