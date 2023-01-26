import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <img src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    alt="logo"
    className ="logo" />
);



const Header = () => (
  <div className = "header">
    <Title />
    <div className ="nav_items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>

    </div>
  </div>
);

const vegSutra = {
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lbudaxadlhmchfq4jh32",
  name: "Veg Sutra",
  cuisine: ["North Indian" , "Chinese", "Pizzas", "Desserts", "Beverages"],
  rating: 4.3,
  deliveryTime : "30 mins",
  costForTwo : 250,
}

const restaurantList = [ 
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "531654",
                  "name": "Haldiram's Restaurant",
                  "uuid": "3fc9634c-7b90-488a-88bc-0947bd313c8d",
                  "city": "5",
                  "area": "Kurla",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "dh65eyjbp2ffxbnbhkv8",
                  "cuisines": [
                    "South Indian",
                    "North Indian",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 42,
                  "minDeliveryTime": 42,
                  "maxDeliveryTime": 42,
                  "slaString": "42 MINS",
                  "lastMileTravel": 1.600000023841858,
                  "slugs": {
                    "restaurant": "haldiram-kurla-kurla",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "UNIT NO S-23 SECOND FLOOR, PHOENIX MARKET CITY, LBS MARG, KURLA WEST MUMBAI, Greater Mumbai Ward-L, Greater Mumbai 400070",
                  "locality": "Lbs Marg",
                  "parentId": 351771,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "50% off",
                    "shortDescriptionList": [
                      {
                        "meta": "50% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "50% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5786555~p=1~eid=00000185-ed8d-6b2e-0fe9-58e200df0130",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "531654",
                    "deliveryTime": 42,
                    "minDeliveryTime": 42,
                    "maxDeliveryTime": 42,
                    "lastMileTravel": 1.600000023841858,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.1",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "110312",
                  "name": "Cakeology",
                  "uuid": "bca27c5c-3b0d-4610-b7ff-a691ab73cd8a",
                  "city": "5",
                  "area": "Kurla West",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "lcwiw0dq7lgamjnr0bxv",
                  "cuisines": [
                    "Desserts",
                    "Bakery"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 21,
                  "minDeliveryTime": 21,
                  "maxDeliveryTime": 21,
                  "slaString": "21 MINS",
                  "lastMileTravel": 0.6000000238418579,
                  "slugs": {
                    "restaurant": "cakeology-kurla-kurla",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "Shop No 6, Anjuma Khyrula Momineen Masjid SVLR Link Road, Kurla West",
                  "locality": "Kurla",
                  "parentId": 55234,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "20% off",
                    "shortDescriptionList": [
                      {
                        "meta": "20% off | Use PARTY",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off | Use code PARTY",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "20% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use PARTY",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off | Use code PARTY",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "0.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "110312",
                    "deliveryTime": 21,
                    "minDeliveryTime": 21,
                    "maxDeliveryTime": 21,
                    "lastMileTravel": 0.6000000238418579,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.7",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "6329",
                  "name": "Mughal Darbar",
                  "uuid": "4b126c31-91c3-41e7-ab6b-4146e0d7cd4e",
                  "city": "5",
                  "area": "Kurla West",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "xqvy1u2v4s9gmd2szka7",
                  "cuisines": [
                    "Mughlai",
                    "North Indian",
                    "Chinese",
                    "Seafood"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "slaString": "27 MINS",
                  "lastMileTravel": 1.399999976158142,
                  "slugs": {
                    "restaurant": "mughal-darbar-lbs-marg-kurla",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "136/7-8, Gomes Estate, Opposite Phoenix Mall, Navpada, LBS Marg, Kurla West, Mumbai",
                  "locality": "LBS Marg",
                  "parentId": 8892,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "60% off",
                    "shortDescriptionList": [
                      {
                        "meta": "60% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "60% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "60% off up to ₹120 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.3 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "6329",
                    "deliveryTime": 27,
                    "minDeliveryTime": 27,
                    "maxDeliveryTime": 27,
                    "lastMileTravel": 1.399999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.8",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "5956",
                  "name": "Veg Sutra",
                  "uuid": "3378460f-54ff-4829-abf4-f1cace1a7ead",
                  "city": "5",
                  "area": "Kurla",
                  "totalRatingsString": "1000+ ratings",
                  "cloudinaryImageId": "lbudaxadlhmchfq4jh32",
                  "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Pizzas",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 25000,
                  "costForTwoString": "₹250 FOR TWO",
                  "deliveryTime": 30,
                  "minDeliveryTime": 30,
                  "maxDeliveryTime": 30,
                  "slaString": "30 MINS",
                  "lastMileTravel": 2.5999999046325684,
                  "slugs": {
                    "restaurant": "veg-sutra-scruz-bandra-east",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "Shop 3, A 176, Belgrami Road & LBS Marg Junction, Near Bandra Kurla Complex, Mumbai400070",
                  "locality": "BKC",
                  "parentId": 10928,
                  "unserviceable": false,
                  "veg": true,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "30% off",
                    "shortDescriptionList": [
                      {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "30% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5738871~p=4~eid=00000185-ed8d-6b2e-0fe9-58e300df0426",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "5956",
                    "deliveryTime": 30,
                    "minDeliveryTime": 30,
                    "maxDeliveryTime": 30,
                    "lastMileTravel": 2.5999999046325684,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.3",
                  "totalRatings": 1000,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "9864",
                  "name": "Pizza Hut",
                  "uuid": "c2681372-cdc9-497d-9df3-b8308cfffa74",
                  "city": "5",
                  "area": "Saki Naka",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "s7v9ilktll6rwg1waehk",
                  "cuisines": [
                    "Pizzas"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 36,
                  "minDeliveryTime": 36,
                  "maxDeliveryTime": 36,
                  "slaString": "36 MINS",
                  "lastMileTravel": 1.600000023841858,
                  "slugs": {
                    "restaurant": "pizza-hut-phoenix-market-city-kurla",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "Phoenix Market City, LBS Road, Kurla, Mumbai",
                  "locality": "Pheonix Market City",
                  "parentId": 721,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "40% off",
                    "shortDescriptionList": [
                      {
                        "meta": "40% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "40% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.6 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "9864",
                    "deliveryTime": 36,
                    "minDeliveryTime": 36,
                    "maxDeliveryTime": 36,
                    "lastMileTravel": 1.600000023841858,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "3.4",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "355806",
                  "name": "Baba Falooda (Kurla)",
                  "uuid": "384970ad-6ed8-455a-acf6-5493551f5893",
                  "city": "5",
                  "area": "Kurla",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "ys88tnnklqgfhzsftmqq",
                  "cuisines": [
                    "Ice Cream",
                    "Beverages",
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 20000,
                  "costForTwoString": "₹200 FOR TWO",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "slaString": "23 MINS",
                  "lastMileTravel": 1.5,
                  "slugs": {
                    "restaurant": "baba-falooda-by-hotel-sky-way-powai-powai",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "TAYYAB MANZIL  shop no 1,2,3 L.B.S Marg KURLA WEST MUMBAI 400070",
                  "locality": "Powai",
                  "parentId": 38827,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.5 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "355806",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 1.5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.4",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "23438",
                  "name": "Theeram",
                  "uuid": "bf679f56-c9ca-4e7d-825a-6c97ee31d9e6",
                  "city": "5",
                  "area": "Church Road",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "sz2ep2jggdodtr2yvcmn",
                  "cuisines": [
                    "Kerala"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 60000,
                  "costForTwoString": "₹600 FOR TWO",
                  "deliveryTime": 42,
                  "minDeliveryTime": 42,
                  "maxDeliveryTime": 42,
                  "slaString": "42 MINS",
                  "lastMileTravel": 2.9000000953674316,
                  "slugs": {
                    "restaurant": "theeram-santacruz-east-scruz-bandra-east",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "SHOP NO 105/106, GROUND FLOOR, REBELLO HOUSE, MATHARWAR ROAD OPP MINA APT, KALINA VILLAGE SANTACRUZ EAST",
                  "locality": "Church Road",
                  "parentId": 10117,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "10% off",
                    "shortDescriptionList": [
                      {
                        "meta": "10% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "10% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5732825~p=7~eid=00000185-ed8d-6b2e-0fe9-58e400df0765",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.9 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "23438",
                    "deliveryTime": 42,
                    "minDeliveryTime": 42,
                    "maxDeliveryTime": 42,
                    "lastMileTravel": 2.9000000953674316,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.0",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "338372",
                  "name": "Merwans Cake Stop",
                  "uuid": "d461ead0-469f-4d17-b9bd-ff591a7164a9",
                  "city": "5",
                  "area": "Kurla West",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "c2ootw6sg891x1b8ro6n",
                  "cuisines": [
                    "Desserts",
                    "Bakery"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 30000,
                  "costForTwoString": "₹300 FOR TWO",
                  "deliveryTime": 23,
                  "minDeliveryTime": 23,
                  "maxDeliveryTime": 23,
                  "slaString": "23 MINS",
                  "lastMileTravel": 1.899999976158142,
                  "slugs": {
                    "restaurant": "merwans-cake-stop-kurla-kurla",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "SHOP NO.3, GRD FLOOR, NEW DWARAKAPURI CHS LTD., LBS MARG, KURLA(W), MUMBAI - 400070, District - Greater Mumbai, STATE - Maharashtra - 400070",
                  "locality": "Kurla",
                  "parentId": 135373,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.8 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "338372",
                    "deliveryTime": 23,
                    "minDeliveryTime": 23,
                    "maxDeliveryTime": 23,
                    "lastMileTravel": 1.899999976158142,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.3",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "48030",
                  "name": "Sahara Hotel - Kurla",
                  "uuid": "4ffa188b-b74e-4b62-b141-de7a145f8efe",
                  "city": "5",
                  "area": "Kurla",
                  "totalRatingsString": "500+ ratings",
                  "cloudinaryImageId": "qhd1a0qhl4iuaiwpf5rs",
                  "cuisines": [
                    "North Indian",
                    "Chinese",
                    "Mughlai",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 65000,
                  "costForTwoString": "₹650 FOR TWO",
                  "deliveryTime": 26,
                  "minDeliveryTime": 26,
                  "maxDeliveryTime": 26,
                  "slaString": "26 MINS",
                  "lastMileTravel": 1.2999999523162842,
                  "slugs": {
                    "restaurant": "sahara-hotel-kurla-kurla",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "Near Kalpana Cinema, LBS Marg, Kurla West, Kurla, Mumbai",
                  "locality": "Near Kalpana Cinema",
                  "parentId": 174631,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "40% off",
                    "shortDescriptionList": [
                      {
                        "meta": "40% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "40% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "40% off up to ₹80 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3100,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3100,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3100",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "1.2 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "48030",
                    "deliveryTime": 26,
                    "minDeliveryTime": 26,
                    "maxDeliveryTime": 26,
                    "lastMileTravel": 1.2999999523162842,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.1",
                  "totalRatings": 500,
                  "new": false
                },
                "subtype": "basic"
              },
              {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "484594",
                  "name": "KFC",
                  "uuid": "4d6d45a4-7edb-4df6-960e-50675ba9aed6",
                  "city": "5",
                  "area": "East Point Kurla",
                  "totalRatingsString": "100+ ratings",
                  "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
                  "cuisines": [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 40000,
                  "costForTwoString": "₹400 FOR TWO",
                  "deliveryTime": 31,
                  "minDeliveryTime": 31,
                  "maxDeliveryTime": 31,
                  "slaString": "31 MINS",
                  "lastMileTravel": 3.799999952316284,
                  "slugs": {
                    "restaurant": "kfc-east-point-kurla-kurla",
                    "city": "mumbai"
                  },
                  "cityState": "5",
                  "address": "Shop No 14B , Ground Floor, East Point Market, Opposite Kurla East Railway Station.  Kurla East, Mumbai - 400024.",
                  "locality": "East Point Market",
                  "parentId": 547,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "20% off",
                    "shortDescriptionList": [
                      {
                        "meta": "20% off | Use SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "20% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "20% off up to ₹50 | Use code SWIGGYIT",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 3800,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 3800,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "3800",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=5786389~p=10~eid=00000185-ed8d-6b2e-0fe9-58e500df0a32",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "3.7 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "484594",
                    "deliveryTime": 31,
                    "minDeliveryTime": 31,
                    "maxDeliveryTime": 31,
                    "lastMileTravel": 3.799999952316284,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "4.0",
                  "totalRatings": 100,
                  "new": false
                },
                "subtype": "basic"
              },]

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/" + 
      restaurantList[0].data?.cloudinaryImageId} alt="logo" />
      <h2>{restaurantList[0].data?.name}</h2>
      <h3>{restaurantList[0].data?.cuisines.join(", ")}</h3>
      <div className = "card_data">
        <p>{restaurantList[0].data?.avgRating} stars</p>
        <p>{restaurantList[0].data?.deliveryTime} MINS</p>
        <p>{restaurantList[0].data?.costForTwoString}</p>
      </div>
    </div>
  );
}

const Body  = () => {
  return (
    <div className ="restaurants">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  )
}

const Footer = () => (
  <>
    Footer
  </>
)

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);