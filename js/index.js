/*

let productInfomation = {
    chair: ["../assets/img/furniture-modern-studio-lifestyle-green.jpg"],
    phone: ["../assets/img/smartphone-with-blank-black-screen-innovative-future-technology.jpg"],
    headphones: ["../assets/img/pink-headphones-wireless-digital-device.jpg"],
}

listOfProducts();

*/
let products = {
}


function uploadProducts(){
    let p = document.getElementById('modal-body');
    p.innerHTML = '';
    if(Object.keys(products).length == 0){
        p.innerHTML += `
                    carrito vacio 
                `
    }else {
        Object.entries(products).forEach(
            ([key,value]) => {
                if (value != 0) {
                    p.innerHTML += `
                    <div class="upload_products">
                    <h6>${key}</h6>
                    <p> cantidad: ${value} </p>
                    </div>
                `
                }
            }
        )
    }
    
}





function listOfProducts(){
    let p=Object.values(products);
    let add=(a,b) => a+b;
    let total = p.reduce(add);
    let product = document.getElementById("total");
    product.innerText = `${total}`;
}


export function add(product){
    let resultado = Object.keys(products).find((p) => {
        return(p ==product)
    });
    if(resultado == undefined){
        products[product]=1;
        let p = document.getElementById(`quantity_of_products_${product}`);
        p.value =  `${products[product]}`;
    }else if (resultado){
        products[product]+=1;
        let p = document.getElementById(`quantity_of_products_${product}`);
        p.value =  `${products[product]}`;
    }

    listOfProducts();
    uploadProducts();

}

export function less(product){

    let resultado = Object.keys(products).find((p) => {
        return(p ==product)
    });
    if (resultado){
        products[product]-=1;
        let p = document.getElementById(`quantity_of_products_${product}`);
        p.value =  `${products[product]}`;
    }
 
    
    listOfProducts();
    uploadProducts();
}

uploadProducts();