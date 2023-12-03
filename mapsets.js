//Set(4) {1,2,3,4}
//ref
//Map(2){[1,2,3]=>true,[1,2,3]=>false}

const hasDuplicate = (arr)=>(arr.some((n,i)=>(arr.toSpliced(i,1).includes(n))));

const vowelCount = (str)=>{
    const vowels = ["a","e","i","o","u"];
    let newMap = new Map();
    for(let i = 0; i<str.length; i++){
        if(vowels.includes(str[i].toLowerCase()))newMap.set(str[i], (newMap.get(str[i])||0)+1);
    }
    return newMap;
}

