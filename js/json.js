const shop = {
    name: 'zim',
    address: 'mirpur11',
    products: ['laptop', 'mobile'],
    owner :{
        name: 'zim',
        profession: 'actor'
    },
    isExpensive: false
};
const shopStringfield = JSON.stringify(shop);
console.log(shopStringfield);
const convert = JSON.parse(shopStringfield);
console.log(convert.owner);