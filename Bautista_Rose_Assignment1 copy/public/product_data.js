/*
Author: Rose Bautista
Date due: 11/05/2020
File Description: Javascript for the products
*/

//creates JSON object that can be used within multiple different files and for the server.
//creating a store with multiple different products. it felt very empty with 5 so i just added majority of the line.

var products = [
    {
    "item" : "Classic Backpack",
    "price" : 80.00,
    "image" : "classic.jpg",
    "description" : "a classic and artsy 13 inch backpack perfect for school."
    },
    {
    "item" : "Mini Backpack",
    "price" : 70.00,
    "image" : "mini.jpg",
    "description" : "a mini version for whenever you want to take a journal with you."
    },
    {
    "item" : "Tote Pack Classic",
    "price" : 95.00,
    "image" : "totepack.jpg",
    "description" : "the classic backpack that doubles as a shoulder bag."
    },
    {
    "item" : "Tote Pack Mini",
    "price" : 85.00,
    "image" : "totepackmini.jpg",
    "description" : "a duo mini bag that can be used as a backpack and a shoulder bag."
    },
    {
    "item" : "Sling Crossbody",
    "price" : 65.00,
    "image" : "sling.jpg",
    "description" : "a compact sized bag perfect for on to go minimal things."
    },
    {
    "item" : "Vardag (Weekday)",
    "price" : 65.00,
    "image" : "vardag.jpg",
    "description" : "rather have a lowkey subtle bag? it is perfect for weekdays like the name entails."
    },
    {
    "item" : "Belt Bag",
    "price" : 50.00,
    "image" : "belt.jpg",
    "description" : "for the times whenever you don't feel like carrying a backpack."
    },
    {
    "item" : "Toiletry Bag",
    "price" : 40.00,
    "image" : "toiletry.jpg",
    "description" : "a portable makeup or art supplies set whenever you are on the go."
    },
    {
    "item" : "Gear Bag",
    "price" : 35.00,
    "image" : "gear.jpg",
    "description" : "a versatile bag to keep on you if you are doing quick errands."
    },
    {
    "item" : "Pen Case",
    "price" : 20.00,
    "image" : "pencil.jpg",
    "description" : "small and portable to carry a minimal amount of writing utensils."
    },
    {
    "item" : "Cooler",
    "price" : 50.00,
    "image" : "cooler.jpg",
    "description" : "a lunchbox to keep your drinks cold and food warm when out and about."
    },
    {
    "item" : "Photo Insert",
    "price" : 90.00,
    "image" : "photoinsert.jpg",
    "description" : "a protective case to put in your backpack for photography and cameras."
    },
    {
    "item" : "Card Wallet",
    "price" : 25.00,
    "image" : "card.jpg",
    "description" : "a mini sized wallet to keep essential cards and coins."
    },
    {
    "item" : "Travel Wallet",
    "price" : 35.00,
    "image" : "wallet.jpg",
    "description" : "for all the essentials you need to carry with you."
    },
];

if (typeof module != 'undefined') {
    module.exports = products;
};
