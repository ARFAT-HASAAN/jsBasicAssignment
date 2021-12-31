// Seer to Mon 

function seerToMon(Seer){
    return Seer / 40

}

const mon = seerToMon(40)
console.log(mon)



// totalSales
function totalSales(Shirt,Pant,Shoe){
 
    const ShirtPrice = Shirt * 100;
    const pantPrice = Pant * 200;
    const Shoeprice = Shoe * 500;
    
    const totalPrice = ShirtPrice + pantPrice + Shoeprice;
    return totalPrice


}

const ShoopingPrice = totalSales(2,3,2)
console.log(ShoopingPrice);


//deliveryCost
function deliveryCost(shirt){
    
    if(shirt <= 100){
        return shirt * 100;
    }
    else if(shirt <= 200){
        const frange = 100;
        const firstShirdCost = frange * 100;
        console.log(firstShirdCost)
        const secondrange = shirt - frange;
        console.log(secondrange)
        const SecondShirtCost = secondrange * 80;
        console.log(SecondShirtCost)
        const tolatPrice = firstShirdCost + SecondShirtCost;
        return tolatPrice;

    }
    else{
        const frange = 100;
        const firstShirdCost = frange * 100;
        const secondRage = 100;
        const SecondShirtCost = secondRage * 80
        const thirdRange = shirt - 200;
        console.log(thirdRange)
        const ThirdShirdCost = thirdRange * 50;
        console.log(ThirdShirdCost)
        const totalPrice = firstShirdCost + SecondShirtCost + ThirdShirdCost;
        return totalPrice;
    }
   
}


const dCost = deliveryCost(201)
console.log(dCost)



function perfectFriend(Names){
    for( let name of Names ){
         if(name.length == 5){
             return name
         }
    }

}

const names = ['kopshikd', 'iyahiya', 'kolsomapa' , 'arfat', 'sornamone', 'fahim']
const TheFrind = perfectFriend(names)
console.log(TheFrind)