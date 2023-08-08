const phones = [
    {name : 'samsung' , camera : 13 , storage : 128 , price : 50000 , color : 'black'},
    {name : 'redmi' , camera : 50 , storage : 64 , price : 18000 , color : 'black'},
    {name : 'iphone' , camera : 15 , storage : 128 , price : 90000 , color : 'silver'},
    {name : 'xiomi' , camera : 48 , storage : 64 , price : 22000 , color : 'yollow'},
    {name : 'oppo' , camera : 20 , storage : 32 , price : 15000 , color : 'black'},
    {name : 'nokia' , camera : 25 , storage : 32 , price : 18000 , color : 'black'},
]

//for check cheapest phone

function cheapestPhone (phones){
    let cheapest =phones[0];
    for(let i = 0 ; i<phones.length ; i++){
        const phone = phones[i];
        if(cheapest.price>phone.price){
            cheapest=phone;
        }
    }
    return cheapest;

}

//for check best camera

function bestCamera (phones){
    let cameras =phones[0];
    for(let i = 0 ; i<phones.length ; i++){
        const phone = phones[i];
        if(cameras.camera<phone.camera){
           cameras=phone;
        }
    }
    return cameras;

}

const myPhone = cheapestPhone(phones);
console.log(myPhone);

const myCamera = bestCamera(phones);
console.log(myCamera);
