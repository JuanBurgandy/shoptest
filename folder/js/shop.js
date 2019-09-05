/*Define a global cart object*/

var cart={
  items:[],
  wishlist:[],
  numberItems:0,
  total:0,
  quantity:0
  }

var selectedProducts = [];

var products= [  {
    "image": "https://i.imgur.com/qEjTqCe.jpg ",
    "name":"Basic Black TShirt",
    "description":"Clothes for Developer",
    "category":"womenclothes",
    "price":"20.00"
     }
  ,
  {
    "image": "https://i.imgur.com/a0jtBHP.jpg ",
    "name":"Basic White TShirt",
    "description":"Clothes for Developer",
    "category":"womenclothes",
    "price":"15.00"
    }
,
{
  "image": "https://i.imgur.com/i6kBrLd.jpg ",
  "name":"Basic yellow TShirt",
  "description":"Clothes for Developer",
  "category":"womenclothes",
  "price":"10.00"
  }
,
{
  "image": "https://i.imgur.com/9FDgBXi.jpg ",
  "name":"White TShirt",
  "description":"Clothes for Developer",
  "category":"womenclothes",
  "price":"11.00"
  }
,
{
  "image": "https://i.imgur.com/0mwG8qa.jpg",
  "name":"Basic Blue TShirt",
  "description":"Clothes for Developer",
  "category":"womenclothes",
  "price":"1.00"
  }
,
{
  "image": "https://i.imgur.com/MS5axgP.jpg ",
  "name":"Basic Black TShirt",
  "description":"Clothes for Developer",
  "category":"menclothes",
  "price":"13.00"
  }
,
{
"name":"Hoodie",
"description":"Clothes for Developer",
"price":"15.99",
"category":"womenclothes",
"image": "https://i.imgur.com/TZBghns.jpg"
}
,
{
"name":"Hoodie",
"description":"Clothes for developers",
"price":"15.99",
"category":"womenclothes",
"image":"https://i.imgur.com/iqlZ0ha.jpg "
 }

 ,
 {
 "name":"Black Sweater",
 "description":"Clothes for developers",
 "price":"15.99",
 "category":"womenclothes",
 "image":"https://i.imgur.com/ERlCjAy.jpg "
  }
,

{
"name":"Dev Stickers",
"description":"Stickers for Developer",
"price":"7.99",
"category":"stickers",
"image":"https://i.imgur.com/24BNp0F.png "
}
,
{
"name":"Dev Stickers",
"description":"Stickers for Developer",
"price":"7.99",
"category":"stickers",
"image":"https://i.imgur.com/r4MiSIH.jpg"
}
,
{
"name":"Doc Stickers",
"description":"Stickers for Developer",
"price":"7.99",
"category":"stickers",
"image":"https://i.imgur.com/4I8rz6O.jpg "
}
,
{
"name":"Code Stickers",
"description":"Stickers for Developer",
"price":"7.99",
"category":"stickers",
"image":"https://i.imgur.com/DibuZSR.png "
}
,{
"name":"Display Stickers",
"description":"Stickers for Developer",
"price":"7.99",
"category":"stickers",
"image":"https://i.imgur.com/6RQ3P2a.png "
}
,
{
"name":"Coffe Break Stickers",
"description":"Stickers for Developer",
"price":"7.99",
"category":"stickers",
"image":"https://i.imgur.com/3mz8vMJ.png " }
,
{
"name":"Coding Stickers",
"description":"Stickers for developers",
"price":"5.99",
"category":"stickers",
"image":"https://i.imgur.com/ayNcE3f.png"
}
,
{
"name":"Script Stickers",
"description":"Stickers for Developer",
"price":"7.99",
"category":"stickers",
"image":"https://i.imgur.com/WLqdtN3.jpg "
 }
,
{
"name":"CSS Stickers",
"description":"Stickers for Developer",
"price":"7.99",
"category":"stickers",
"image":"https://i.imgur.com/2rgqlrg.png "
 }
 ,
 {
 "name":"Blue Woolean Hat",
 "description":"Hats for Developer",
 "price":"17.99",
 "category":"hat",
 "image":"https://i.imgur.com/006yZF7.jpg"
  }
  ,
  {
  "name":"Black Hat",
  "description":"Hats for Developer",
  "price":"17.99",
  "category":"hat",
  "image":"https://i.imgur.com/l8bpWFP.jpg"
   }
   ,
   {
   "name":"Grey Stripped Hat",
   "description":"Hat for Developer",
   "price":"17.99",
   "category":"hat",
   "image":"https://i.imgur.com/rqMmc7U.jpg"
    }

    ,{
    "name":"Black White Hat",
    "description":"Hat for Developer",
    "price":"17.99",
    "category":"hat",
    "image":"https://i.imgur.com/iy14Rgc.jpg"
     }
     ,
     {
     "name":"Blue Hat",
     "description":"Hat for Developer",
     "price":"17.99",
     "category":"hat",
     "image":"https://i.imgur.com/XZlKnmU.jpg"
      }
      ,
      {
      "name":"Basic Hat",
      "description":"Hat for Developer",
      "price":"17.99",
      "category":"hat",
      "image":"https://i.imgur.com/yUypsur.jpg"
       }
       ,
       {
       "name":"Hat",
       "description":"Hat for Developer",
       "price":"17.99",
       "category":"hat",
       "image":"https://i.imgur.com/dVzz2uB.jpg"
        }
        ,
        {
        "name":"Pink Hat",
        "description":"Hat for Developer",
        "price":"17.99",
        "category":"hat",
        "image":"https://i.imgur.com/XkM6iPi.jpg"
         }
,

    {
   "name":"Light Blue Hat",
   "description":"Hat for Developer",
   "price":"17.99",
   "category":"hat",
   "image":"https://i.imgur.com/gEXzVMX.jpg"
    }
,

{
"name":"Cargo Pants",
"description":"Clothes for Developer",
"price":"20.99",
"category":"womenclothes",
"image":"https://i.imgur.com/o0wO9AI.jpg"
}
,

{
"name":"Grey Cargo Pants",
"description":"Clothes for Developer",
"price":"20.99",
"category":"menclothes",
"image":"https://i.imgur.com/aMRPo5K.jpg"
}
,

{
"name":"Green Cargo Pants",
"description":"Clothes for Developer",
"price":"20.99",
"category":"menclothes",
"image":"https://i.imgur.com/jNWAlCJ.jpg"
}
,
{
"name":"Grey Cargo Pants",
"description":"Clothes for Developer",
"price":"20.99",
"category":"menclothes",
"image":"https://i.imgur.com/FCjP1Gc.jpg"
}
,
{
"name":"Peach Cargo Pants",
"description":"Clothes for Developer",
"price":"20.99",
"category":"womenclothes",
"image":"https://i.imgur.com/V1Z5R3v.jpg"
}
,
{
"name":"Cargo Pants",
"description":"Clothes for Developer",
"price":"20.99",
"category":"menclothes",
"image":"https://i.imgur.com/oZs2zi3.jpg"
}
,
{
"name":"Black Pants",
"description":"Clothes for Developer",
"price":"20.99",
"category":"womenclothes",
"image":"https://i.imgur.com/CQctxJq.jpg"
}
,
{
"name":"Army Cargo Pants",
"description":"Clothes for Developer",
"price":"20.99",
"category":"menclothes",
"image":"https://i.imgur.com/piG0ZgD.jpg"
}
,

  {
    "image":"https://www.medicalnewstoday.com/content//images/articles/322/322868/golden-retriever-puppy.jpg",
    "name":"TShirt",
    "description":"Clothes for Developer",
    "category":"clothes",
    "price":"10.00"
     }
  ,
  {
    "image":"https://imgur.com/ROq2Bfl.jpeg",
    "name":"Farg Blue Mug",
    "description":"Mugs for Developer",
    "category":"mugs",
    "price":"10.00"
    }
,
{
  "image":"https://imgur.com/pBcYqC1.jpeg ",
"name":"Blue Mug",
"description":"Mugs for Developer",
"price":"4.99",
"category":"mugs"
}
,
{
  "image":"https://imgur.com/4XSxcF0.jpeg",
"name":"Black Mug",
"description":"Mugs for developers",
"price":"5.99",
"category":"Mugs"
 }
,
{
  "image":"https://imgur.com/sSmFkyu.jpeg",
"name":"Text Mug",
"description":"Mugs for developers",
"price":"7.99",
"category":"mugs"
}
,
{
  "image":"https://imgur.com/70hoNIg.jpg",
"name":"White Mug",
"description":"Mugs for Developer",
"price":"2.99",
"category":"mugs"
 }
,
{
  "image":"https://imgur.com/GtfHZVp.jpg",
"name":"Notebook Mug",
"description":"Mugs for Developer",
"price":"2.99",
"category":"mugs"
}
,
{
  "image":"https://imgur.com/FGrmxXa.jpg",
"name":"Devine Mug",
"description":"Mugs for developers",
"price":"5.99",
"category":"mugs"
 }
,
{
  "image":"https://imgur.com/f4R9D2y.jpg",
"name":"Cofee Mug",
"description":"Mugs for Developer",
"price":"7.99",
"category":"mug"
 }
,
{
  "image":"https://i.imgur.com/fjqfc1L.jpg",
"name":"Bay Mug",
"description":"Mugs for Developer",
"price":"7.99",
"category":"mugs"
 }
]
//var products=JSON.parse(items);
////////////////////////////////////////////////////////////////////////////
/*
function getData(){
  fetch('items.json')
  .then(function(response){
    return response.json();
    console.log(response.json)
  })
  .then(function(data){
    for(i=0;i<data.length;i++){
      products[i]=data[i];
      console.log(products[i]);
    }
  })
}
getData();
*/
//Dynamically create the DOM

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//$('.carousel').carousel()

function builtDom(){
  alert("1")
var productContainer=document.getElementById("product-container");
var myRow=document.getElementById("product-row");
 myRow.innerHTML=" ";

var domArray=products;
if(selectedProducts[0] != undefined)
{
products= selectedProducts;
}

  for(i=0;i<products.length;i++){
        var myDiv=document.createElement('div');
        myDiv.setAttribute("class","col-sm-3 product-div");

        var image= new Image();
        image.src= products[i].image;
        image.setAttribute('class','img-thumbnail');
        image.setAttribute('id','productimage');
        myDiv.appendChild(image);


        var heading=document.createElement('h4');
        heading.setAttribute('class','productitems');
        var productname=document.createTextNode(products[i].name);
        heading.appendChild(productname);
        myDiv.appendChild(heading);

        var desc=document.createElement('p');
        desc.setAttribute('class','productitems');
        var productDesc=document.createTextNode(products[i].description);
        desc.appendChild(productDesc);
        myDiv.appendChild(desc);

        var category=document.createTextNode(products[i].category);
        //category.setAttribute('class','productitems');
        //myDiv.appendChild(category);


var price=document.createTextNode("$" + " " + products[i].price);
//price.setAttribute('class','productitems');
myDiv.appendChild(price);


var cartbtn=document.createElement("button");
    cartbtn.setAttribute("index",i);
    cartbtn.setAttribute("onclick","getProductsInfo(this.getAttribute('index'))");
var cartIcon=document.createElement("span");
    cartIcon.setAttribute("class","fa fa-shopping-cart");
    cartbtn.appendChild(cartIcon);
    myDiv.appendChild(cartbtn);

//create an input element
        var input = document.createElement("input");
        input.type = "number";
        input.value = 1;
        input.min = 0;
        input.max = 100;
        input.setAttribute('class', "product-input");
        input.setAttribute("id", "product-qty" + i);

    var wishListbtn=document.createElement("button");
    wishListbtn.setAttribute('index',i);
    wishListbtn.setAttribute("onclick","addToWishList(this.getAttribute('index'))");
    var wishListIcon=document.createElement("span");
    wishListIcon.setAttribute("class","fa fa-heart");
    wishListbtn.appendChild(wishListIcon);
    myDiv.appendChild(wishListbtn);

        myRow.appendChild(myDiv);
        //productContainer.appendChild(myRow);
}//End of for loop
      products=domArray;
}//End of function buitlDom


////////////////////////////////////////////////////////////////////////////////////////

function sortCategoryFunction()
{

  var categories=[];
  var checkBox=document.getElementsByClassName("sortByCategory");
  selectedProducts=[];

  for(i=0;i<checkBox.length;i++)
  {
    if(checkBox[i].checked)
    {
      var x=checkBox[i].getAttribute("value");
      categories.push(x);
      console.log(categories);
    }
  }

  for(k=0;k<categories.length;k++)
  {
    var item=categories[k];
    console.log("Tjis is the selected item category" + item)
    for(j=0;j<products.length;j++)
    {
        if(products[j].category === item)
        {
          selectedProducts.push(products[j]);
          console.log(selectedProducts.length)
        }
    }
  }
  console.log(selectedProducts);
  builtDom();

}
////////////////////////////////////////////////////////////////////////////////////////

//List View
document.getElementById("list-view").onclick=function listView(){
  alert("Hello List");
  var row = document.getElementById('product-row')
  row.style.display= "inline";
  row.style.width="100%"
 }

//Grid View
document.getElementById("grid-view").onclick=function gridView(){
  alert("Hello Grid");
  var row = document.getElementById('product-row')
  row.style.display= "";
  row.style.width="100%"
 }//End of Grid View and List View

 //////////////////////////////////////////////////////////////////////////////////////

function selectFunction(){
  var selectEl = document.getElementById('sortByChoice');

 if(selectEl.selectedIndex === 0){
  alert("Low to High");
     products.sort(ascendingOrder);
   }

else if(selectEl.selectedIndex=== 1){
  alert("High To Low");
  //alert(selectedIndex.value);
products.sort(descendingOrder);
}

else{
products.sort(alphabeticalOrder);
}

builtDom();
} // end of function

///////////////////////////////////////////////////////////////////////////////////////////
function ascendingOrder(a, b) {
  //var price1= parseInt(products.price);
  //alert(price1)
    for (var i = 0; i < products.length; i++) {
     // alert(parseInt(products[i].price));
        return parseFloat(a.price) - parseFloat(b.price);
    }
} //end of function

function descendingOrder(a, b) {
    for (var i = 0; i < products.length; i++) {
        return parseFloat(b.price) - parseFloat(a.price);
    }
}

function alphabeticalOrder(a,b){
for (var i = 0; i < products.length; i++) {
   if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;

    }

}
/////////////////////////////////////////////////////////////////////////////////////


window.onload=builtDom()

/////////////////////////////////////////////////////////////////////////////////////

//function to get Product information on clicking the Cart or Wish list button
function getProductsInfo(index){
let quantity=0;

var product={
  Id:index,
  name:products[index].name,
  description:products[index].description,
  price:products[index].price,
  Amount:products[index].price,
  Quanity:0
}

alert(product.Quantity);
//function to check if item already in cart
var productInCart=false;
for(var i=0;i<cart.items.length;i++){

  if(cart.items[i].Id===index){
    productInCart=true;
    cart.items[i].Amount=(product.Amount + cart.items[i].Amount);
   cart.items[i].Quanity=(product.Quantity + cart.items[i].Quantity);
    //Break;
                              }//End Of
                                    }//End For*/
 //if(!productInCart){
    cart.items.push(product);
 // }
//alert(JSON.stringify(cart.items));

//productTotal();
buildCart();
//displayNumberCartItems();

}

///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

function buildCart(){

alert("ITEM Added")
var cartItems=cart.items;
alert(JSON.stringify(cartItems));
var table=document.getElementById("productsTable");

while(table.children.length){
  table.removeChild(table.children[0]);
}

for (var key in cartItems){
var item=cartItems[key];
var row=document.createElement("tr");

var productNameCell=document.createElement("td");
var productName=document.createTextNode(item.name);
productNameCell.appendChild(productName);

var amountCell=document.createElement("td");
var amount=item.Amount;
var amountText=document.createTextNode(amount);
amountCell.appendChild(amountText);
/*var descriptionCell=document.createElement("td");
var description=document.createTextNode(item.description);
descriptionCell.appendChild(description);*/
var quantityCell=document.createElement("td");
var quantity=document.createTextNode(item.quantity);
quantityCell.appendChild(quantity);


var decreaseBtn=document.createElement("button");
decreaseBtn.setAttribute("class", "quantityButton");
decreaseBtn.setAttribute('index',item.Id);
decreaseBtn.appendChild(document.createTextNode('-'));
decreaseBtn.setAttribute("onclick","decreaseQty(this.getAttribute('index'))");
quantityCell.appendChild(decreaseBtn);

var increaseBtn=document.createElement("button");
increaseBtn.setAttribute("class","quantityButton");
increaseBtn.setAttribute('index',item.Id);
increaseBtn.appendChild(document.createTextNode('+'));
increaseBtn.setAttribute("onclick","increaseQty(this.getAttribute('index'))");
quantityCell.appendChild(increaseBtn);



var priceCell=document.createElement("td");
var price=document.createTextNode(item.price);
priceCell.appendChild(price);

var removeItemCell=document.createElement("td");
var removeButton=document.createElement("button");
removeButton.innerHTML="Remove Product";
removeButton.setAttribute('class','btn btn-primary');
removeButton.setAttribute('index',item.Id);
removeButton.setAttribute("onclick","removeItem(this.getAttribute('index'))");
removeItemCell.appendChild(removeButton);

row.appendChild(productNameCell);
//row.appendChild(descriptionCell);
row.appendChild(priceCell);
row.appendChild(amountCell);
row.appendChild(quantityCell);
row.appendChild(removeItemCell);
table.appendChild(row);


}//End of for*/


}//End of funciton builCart()

//////////////////////////////////////////////////////

function productTotal(){



}
////////////////////////////////////////////////////////
function removeItem(index){
for (var i=0;i<cart.items.length;i++){
  if(cart.items[i].Id === index){
    document.getElementById("productsTable").innerHTML="";
    cart.items.splice(i,1);
    alert(cart.items.length);
    alert(cart.items.name)
    break;
}//end of if

}//end of For

if(cart.items.length == 0){
document.getElementById("topCartDisplay").value=0;
}//end of if

productTotal();
buildCart();
}
/////////////////////////////////////////////////////////
function decreaseQty(index){
  for (var i in cart.items){
    if(cart.items[i].Id === index){
      cart.items[i].Quantity--;
      cart.items[i].Amount=cart.items[i].Quantity* cart.items[i].price;

      if(cart.items[i].Quantity <= 0){
        removeItem(index);
      }//end of if

      }//end of if
  }//end of for
  productTotal();
}//end of function
/////////////////////////////////////////////////////////////////

function increaseQty(index){
   alert("added")
  for(var i in cart.items){
    if(cart.items[i].Id === index){
      cart.items[i].Quantity++;
      alert(cart.items[i].Quantity);
     cart.items[i].Amount=cart.items[i].Quantity* cart.items[i].price;
        if(cart.items[i].Quantity <= 0){
          removeItem(index);
        }
    }
  }

  productTotal();
}


///////////////////////////////////////////////////////////
function productTotal(){
  var itemTotal=0;
  var totalQuantity=0;

  for(var i in cart.items){
    itemTotal += cart.items[i].Amount;
    cart.total = itemTotal;
  }//end of for

  if(cart.items.length == 0){
    itemTotal=0;
    document.getElementById('total').innerHTML="";
                            }//end of if

//total number of cart quantities
for(var i=0;i<cart.items.length;i++){
  totalQuantity += cart.items[i].Quantity;
  cart.numberItems=totalQuantity;
  displayCartQuantity();
}//end of for

}//end of function productTotal

///////////////////////////////////////////////////////

function displayCartQuantity(){
  if(cart.numberItems>0){
    document.getElementById("topCartDisplay").value=cart.numberItems;
  }
}

///////////////////////////////////////////////////////////////
