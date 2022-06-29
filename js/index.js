let products = {
    chair:0,
    phone:0,
    headphones:0,
}

let productInfomation = {
    chair: ["../assets/img/furniture-modern-studio-lifestyle-green.jpg"],
    phone: ["../assets/img/smartphone-with-blank-black-screen-innovative-future-technology.jpg"],
    headphones: ["../assets/img/pink-headphones-wireless-digital-device.jpg"],
}

function listOfProducts(){
    let p=Object.values(products);
    let add=(a,b) => a+b;
    let total = p.reduce(add);
    let product = document.getElementById("total");
    product.innerText = `${total}`;
}

function start(){
    let productChair = document.getElementById("quantity_of_products_chair");
    let productPhone = document.getElementById("quantity_of_products_phone");
    let productheadphones = document.getElementById("quantity_of_products_headphones");
    productChair.value = "0";
    productPhone.value = "0";
    productheadphones.value = "0";
}


function add(product){
    products[product]+=1;
    let p = document.getElementById(`quantity_of_products_${product}`);
    p.value =  `${products[product]}`;
    listOfProducts();
}

function less(product){
    products[product]-=1;
    let p = document.getElementById(`quantity_of_products_${product}`);
    p.value =  `${products[product]}`;
    listOfProducts();
}

function uploadProducts(){
    let p = document.getElementById('modal-body');
    p.innerHTML = '';
    Object.entries(products).forEach(
        ([key,value]) => {
            if (value != 0) {
                p.innerHTML += `
                <div class="upload_products">
                <h6>${key}</h6>
                <p> cantidad: ${value} </p>
                <img src=${productInfomation[`${key}`]}>
                </div>
            `
            }
        }
    )
    
}


uploadProducts();
listOfProducts();
start();