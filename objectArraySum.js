const shoppingList =[
    {name:'foundation' , price: 500 , quantity: 1},
    {name:'lipstick' , price: 380 , quantity: 5},
    {name:'face-powder' , price: 480 , quantity: 2},
    {name:'eye-liner' , price: 250 , quantity: 1},
    {name:'blush' , price: 300 , quantity: 3},
];

function sumOfShopping (list){
    let sum =0;
    for(let i =0 ; i<list.length ; i++){
        const item = list[i];
        itemsPrice= item.price * item.quantity;
        sum=sum+itemsPrice;
    }
    return sum;
}

const totalCost = sumOfShopping(shoppingList);
console.log(totalCost);
