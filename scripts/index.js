//store the products array in localstorage as "data"
function productBluePrint(brand,name,price,image){
    this.brand=brand;
    this.name=name;
    this.price=price;
    this.image=image;
}

let arr =JSON.parse(localStorage.getItem("data")) ||[]
function submitProduct(e){
    // console.log(" inside function")
    e.preventDefault();
    let form = document.querySelector("#product_form")
    let brand = form.product_brand.value;
    let price = form.product_price.value;
    let name = form.product_name.value
    let image= form.product_image.value
    let item = new productBluePrint(brand, name, price, image)

    arr.push(item)
    console.log(arr)
    localStorage.setItem("data",JSON.stringify(arr))
}