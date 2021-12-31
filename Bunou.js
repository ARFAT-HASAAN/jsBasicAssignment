const Mobiles = [
    {company: 'sumsung', name: 'sumsung j5', price: 1000},
    {company: 'Nokia', name: 'sumsung j5', price: 1000},
    {company: 'Mi', name: 'sumsung j5', price: 1000},
    {company: 'saomi', name: 'sumsung j5', price: 1000},
    {company: 'yamaha', name: 'sumsung j5', price: 1000},
    {company: 'tesla', name: 'sumsung j5', price: 1000},
    {company: 'zerox', name: 'watch 45', price: 1000},
    {company: 'ratan', name: 'wood watch', price: 1000},
    {company: 'thisr', name: 'newshit', price: 1000},

]

function matchedProduct(product, names){
    let selectP = []
     for(let name of product){
         let n = name.name;
          if(n.indexOf(names) !== -1){
               selectP.push(n);
          }
     }
      return selectP;
}
console.log(matchedProduct(Mobiles, 'watch'))