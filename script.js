// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];

// const $goodsList = document.querySelector('.goods-list');

// const renderGoodsItem = ({ title, price }) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
// };

// const renderGoodsList = (list = goods) => {
//     let goodsList = list.map(
//         item => renderGoodsItem(item)
//     ).join('');

//     $goodsList.insertAdjacentHTML('beforeend', goodsList);
// }

// renderGoodsList();



class BasketPrice {
    //
}
class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class='goods-item'><h3>${this.title}</h3><p>${this.price}</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150 },
            { title: 'Socks', price: 50 },
            { title: 'Jacket', price: 350 },
            { title: 'Shoes', price: 250 },
        ]
    }

    priceSummaAll() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += (good.price);
        })
        console.log(sum);
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.priceSummaAll();

// 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров.
//  Продумайте, какие методы понадобятся для работы с этими сущностями.
