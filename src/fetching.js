const axios = require("axios");

/* You will get an array of products in the format :
{
        "productId": 14383,
        "name": "Croma",
        "description": "<p>Croma has always been dedicated towards giving its customers an easy and hassle-free access to best consumer electronics products. Croma Gift Card is a perfect gifting option for your loved ones to choose from categories such as Phones, Camera, Computers, Entertainment, Home Appliances, Kitchen Appliances, Gaming and Accessories.</p>",
        "orderQuantityLimit": 10,
        "termsAndConditionsInstructions": "<p>To activate the gift card, please send SMS text as</p>",
        "expiryAndValidity": "<p>12 months</p>",
        "redemptionInstructions": "<div><ol><li>Visit the outlet near you.</li><li>Before making the purchase confirm about the acceptance of Gift Card at the store.</li><li>Choose the products you would like to buy.</li><li>Show your Gift Card details to the cashier at the time of billing & pay any balance amount by cash or card.</li></ol></div><p>&nbsp;</p>",
        "categories": "Electronics",
        "lastUpdateDate": "2023-05-24 06:33:13",
        "imageUrl": "https://res.cloudinary.com/dyyjph6kx/image/upload/fl_lossy,f_auto,q_auto,h_280,w_420,c_fill/gift_vouchers/php5vVUiv_kipktl.jpg",
        "currencyCode": "INR",
        "currencyName": "rupees",
        "countryName": "India",
        "countryCode": "IN",
        "countries": [
            {
                "code": "IN",
                "name": "India"
            }
        ],
        "valueType": "fixed_denomination",
        "maxValue": 0,
        "minValue": 0,
        "valueDenominations": "5000,4500,4000,3500,3000,2500,2000,1500,1000,500,100,50",
        "tatInDays": 0,
        "usageType": "both",
        "deliveryType": "realtime",
        "fee": 0,
        "discount": 0,
        "exchangeRate": null,
        "isPhoneNumberMandatory": false
    },

    You can use filters to get response based on your needs. The filter currently available is based on countries.
    It can be called by changing the url as - "http://localhost:3000"/getVouchers?country="India" and change the country of your choice.


*/

function fetchProducts(country) {
  let url;
  if (country) {
    url = `https://blockchain-server-jjhjkj.vercel.app/getVouchers?country=${country}`;
  } else {
    url = `http://localhost:3000/getVouchers`;
  }
  axios
    .get(url)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
}

/*
productId - unique to every product
email - The user logs in through his wallet address, so you have to ask for it on the order screen. It is neccessary.
quantity- max limit mentined in each product's metadata
po - a unique identifier that has to be generated from our side, has to be a number. If it matches any other, order gets declined.
denomination - product metadata contains different denomination, whichever the user selects.
*/
function placeOrder(productId, email, quantity, po, denomination) {
  axios
    .post(
      `https://blockchain-server-jjhjkj.vercel.app/placeOrder?id=${productId}&quantity=${quantity}&email=${email}&po=${po}&denomination=${denomination}`
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
}

// OrderId - generated when the user places the order.
function getOrderDetails(orderId) {
  axios
    .get(
      `https://blockchain-server-jjhjkj.vercel.app/orderDetails?orderId=${orderId}`
    )
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
}

getOrderDetails(6459750);

module.exports = { fetchProducts, placeOrder, getOrderDetails };
