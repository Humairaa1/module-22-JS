const nameList = ['humaira' , 'rakib' , 'roja' , 'riya' , 'rakib' , 'pavel' , 'kona', 'roja' ,'riya', 'mehnaz' , 'farhan'];

function checkDuplicate (names){
    const duplicateFree =[];
    for (let i=0 ; i<names.length ; i++){
        if ( duplicateFree.includes(names[i]) === false){
            duplicateFree.push(names[i]);
        }
    }
    return duplicateFree;
}

const result = checkDuplicate(nameList);
console.log(result);