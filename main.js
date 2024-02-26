// const myArray = ['Apple', 'Banana', 'Cherry'];

// // 1. Using forEach with an array
// myArray.forEach(item => {
//     console.log (item );
// })

const products = [
    {
        title: "Product 1",
        description: "Description for Product 1",
        image: "https://picsum.photos/200/150",
        price: 19.99,
        category: "Electronice"
    },
    {
        title: "Product 2",
        description: "Description for Product 2",
        image: "https://picsum.photos/200/150",
        price: 29.99,
        category: "Electronice"
    },
    {
        title: "Product 3",
        description: "Description for Product 3",
        image: "https://picsum.photos/200/150",
        price: 39.99,
        category: "Electronice"
    }
];

// products.forEach(product => {
//     console.log(`Title: ${product.title} - Price: ${product.price}`);
// })

const createCard = product => {
    return `
        <div class="card">
            <h4>${product.title}</h4>
            <h2>${product.description}</h2>
            <img src="${product.image}"/>
            <p>Price: Kr${product.price}</p>
            <p>Category: ${product.category}</p>
        </div>
    `;
};


// products.forEach(product => {
//     console.log(createCard(product))
// })

const productContainer = document.querySelector(".row")

// products.forEach(product => {
//     productContainer.innerHTML += createCard(product) 
// })



const filteredProducts = products.filter(product => product.category == "Electronice")

console.log(filteredProducts)

products.forEach(product => {
    productContainer.innerHTML += createCard(product) 
})