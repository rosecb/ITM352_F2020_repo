// creating array of products 
var products_array = [
    {
    'type': "kanken",
    },
    {
    'type': "archerandolive",
    },
    {
    'type': "leuchtturm",
    },
    {
    'type': "simplygilded",
    },
    {
    'type': "tombow",
    },
    {
    'type': "putsonyeon",
    },
    {
    'type': "hobonichi",
    }

]

var kanken = [
    {
    "name" : "Kanken Classic Backpack",
    "price" : 80.00,
    "image" : "./images/kclassic.jpg",
    "description" : "a classic and artsy 13 inch backpack perfect for school."
    },
    {
    "name" : "Kanken Mini Backpack",
    "price" : 70.00,
    "image" : "./images/kmini.jpg",
    "description" : "a mini version for whenever you want to take a journal with you."
    },
    {
    "name" : "Kanken Tote Pack Classic",
    "price" : 95.00,
    "image" : "./images/ktotepack.jpg",
    "description" : "the classic backpack that doubles as a shoulder bag."
    },
    {
    "name" : "Kanken Tote Pack Mini",
    "price" : 85.00,
    "image" : "./images/ktotepackmini.jpg",
    "description" : "a duo mini bag that can be used as a backpack and a shoulder bag."
    },
    {
    "name" : "Kanken Sling Crossbody",
    "price" : 65.00,
    "image" : "./images/ksling.jpg",
    "description" : "a compact sized bag perfect for on to go minimal things."
    },
    {
    "name" : "Kanken Vardag (Weekday)",
    "price" : 65.00,
    "image" : "./images/kvardag.jpg",
    "description" : "rather have a lowkey subtle bag? it is perfect for weekdays like the name entails."
    },
    {
    "name" : "Kanken Belt Bag",
    "price" : 50.00,
    "image" : "./images/kbelt.jpg",
    "description" : "for the times whenever you don't feel like carrying a backpack."
    },
    {
    "name" : "Kanken Toiletry Bag",
    "price" : 40.00,
    "image" : "./images/ktoiletry.jpg",
    "description" : "a portable makeup or art supplies set whenever you are on the go."
    },
    {
    "name" : "Kanken Gear Bag",
    "price" : 35.00,
    "image" : "./images/kgear.jpg",
    "description" : "a versatile bag to keep on you if you are doing quick errands."
    },
    {
    "name" : "Kanken Pen Case",
    "price" : 20.00,
    "image" : "./images/kpencil.jpg",
    "description" : "small and portable to carry a minimal amount of writing utensils."
    },
    {
    "name" : "Kanken Cooler",
    "price" : 50.00,
    "image" : "./images/kcooler.jpg",
    "description" : "a lunchbox to keep your drinks cold and food warm when out and about."
    },
    {
    "name" : "Kanken Photo Insert",
    "price" : 90.00,
    "image" : "./images/kphotoinsert.jpg",
    "description" : "a protective case to put in your backpack for photography and cameras."
    },
    {
    "name" : "Kanken Card Wallet",
    "price" : 25.00,
    "image" : "./images/kcard.jpg",
    "description" : "a mini sized wallet to keep essential cards and coins."
    },
    {
    "name" : "Kanken Travel Wallet",
    "price" : 35.00,
    "image" : "./images/kwallet.jpg",
    "description" : "for all the essentials you need to carry with you."
    }
]
var archerandolive = [
    {
    "name" : "AO Mint Gardener",
    "price" : 36.00,
    "image" : "./images/aomint.jpg",
    "description" : "160 gsm, a light beige toned dotted journal."
    }, 
    {
    "name" : "AO Dandelion Dreams",
    "price" : 32.00,
    "image" : "./images/aodandelion.jpg",
    "description" : "160 gsm, a soft jade toned dotted journal."
    },   
    {
    "name" : "AO Deep Green",
    "price" : 32.00,
    "image" : "./images/aodeepgreen.jpg",
    "description" : "160 gsm, a dark green toned dotted journal."
    },   
    {
    "name" : "AO Glidling Swallow",
    "price" : 32.00,
    "image" : "./images/aogliding.jpg",
    "description" : "160 gsm, a mint toned dotted journal."
    },   
    {
    "name" : "AO Floral Details",
    "price" : 32.00,
    "image" : "./images/aofloral.jpg",
    "description" : "160 gsm, a soft purple toned dotted journal."
    }, 
    {
    "name" : "AO Light Pink",
    "price" : 32.00,
    "image" : "./images/aolightpink.jpg",
    "description" : "160 gsm, a soft pastel pink toned dotted journal."
    },     
    {
    "name" : "AO Floral Sunset",
    "price" : 32.00,
    "image" : "./images/aofloralsunset.jpg",
    "description" : "160 gsm, a peachy pink toned dotted journal."
    }, 
    {
    "name" : "AO Rose Gold",
    "price" : 32.00,
    "image" : "./images/aorosegold.jpg",
    "description" : "160 gsm, a light burgundy toned dotted journal."
    },
    {
    "name" : "AO Red Leaf",
    "price" : 32.00,
    "image" : "./images/aoredleaf.jpg",
    "description" : "160 gsm, a classic red toned dotted journal."
    },
    {
    "name" : "AO Moon Flowers",
    "price" : 32.00,
    "image" : "./images/aomoonflower.jpg",
    "description" : "160 gsm, a simple plain white dotted journal."
    },
    {
    "name" : "AO Stardust",
    "price" : 32.00,
    "image" : "./images/aostardust.jpg",
    "description" : "160 gsm, a deep navy blue dotted journal."
    },
    {
    "name" : "AO Morning Sun",
    "price" : 32.00,
    "image" : "./images/aomorning.jpg",
    "description" : "160 gsm, a mustard yellow toned dotted journal."
    },
    {
    "name" : "AO Sun Traveler",
    "price" : 31.00,
    "image" : "./images/aomorningtravel.jpg",
    "description" : "160 gsm, a mustard yellow toned slim travelers journal."
    },
    {
    "name" : "AO Deep Green Traveler",
    "price" : 31.00,
    "image" : "./images/aodeepgreentravel.jpg",
    "description" : "160 gsm, a dark green toned slim travelers journal."
    },
    {
    "name" : "AO North Star Traveler",
    "price" : 31.00,
    "image" : "./images/aonorthstar.jpg",
    "description" : "160 gsm, a dark blue toned slim travelers journal."
    },
]
var leuchtturm = [
    {
    "name" : "LT Bauhaus Edition",
    "price" : 26.00,
    "image" : "./images/ltbauhaus.jpg",
    "description" : "80 gsm, a5, colors selected at random, a special edition notebook to celebrate 100 years of being established."
    },    
    {
    "name" : "LT Meanings Edition",
    "price" : 25.50,
    "image" : "./images/ltmeanings.jpg",
    "description" : "80 gsm, a5, colors selected at random, a special edition journal with german words in various shades of blue."
    },  
    {
    "name" : "LT Metallic Edition",
    "price" : 25.50,
    "image" : "./images/ltmetallic.jpg",
    "description" : "80 gsm, a5, colors selected at random, an elegant metalic shine in colors Gold, Silver, or Copper."
    },
    {
    "name" : "LT Monocle Edition",
    "price" : 35.00,
    "image" : "./images/ltmonocle.jpg",
    "description" : "80 gsm, a5, selected at random, a collaboration with Moncole, a sleek and sophicated collection perfect for any commerce work."
    },
    {
    "product" : "LT Muted Edition",
    "price" : 19.95,
    "image" : "./images/ltmuted.jpg",
    "description" : "80 gsm, a5, colors selected at random, a delicate soft tone pastel like color palette."
    },
    {
    "name" : "LT Neon Edition",
    "price" : 25.95,
    "image" : "./images/ltneon.jpg",
    "description" : "80 gsm, a5, colors selected at random, a neon, bright and bold color palette, bring color to our everyday lives."
    },
    {
    "name" : "LT Red Dots Edition",
    "price" : 25.95,
    "image" : "./images/ltreddots.jpg",
    "description" : "80 gsm, a5, colors selected at random, a special edition journal that uses red dots rather than the usual black dots."
    },
    {
    "name" : "LT Rising Edition",
    "price" : 19.95,
    "image" : "./images/ltrising.jpg",
    "description" : "80 gsm, a5, colors selected at random, a sunrise inspired color palette symbolizing new beginnings."
    },
    {
    "name" : "LT Write Don't Talk",
    "price" : 27.50,
    "image" : "./images/ltwrite.jpg",
    "description" : "80 gsm, a5, colors selected at random, a special designed notebook with metallic copper on the cover."
    }
]
var simplygilded = [
    {
    "name" : "SG Bows",
    "price" : 19.50,
    "image" : "./images/sgbows.jpg",
    "description" : "a soft tone set of pink and blue colors with bows on them."
    },
    {
    "name" : "SG Hawaii",
    "price" : 32.50,
    "image" : "./images/sghawaii.jpg",
    "description" : "a limited edition set exclusively designed Hawaii theme."
    },
    {
    "name" : "SG Peach",
    "price" : 30.00,
    "image" : "./images/sgpeach.jpg",
    "description" : "a soft peachy color theme with peaches and bows, from subscription box."
    },
    {
    "name" : "SG Travel",
    "price" : 30.00,
    "image" : "./images/sgtravel.jpg",
    "description" : "a soft lilac color theme based on world travels, from subscription box."
    },
    {
    "name" : "SG Winter",
    "price" : 21.00,
    "image" : "./images/sgwinter.jpg",
    "description" : "a winter theme set full of streets, perfect for the seasonal holidays."
    },
    {
    "name" : "SG Christmas Lights",
    "price" : 12.00,
    "image" : "./images/sglights.jpg",
    "description" : "a winter theme set full pink, blue, white christmas lights."
    },
    {
    "name" : "SG Warm & Toasty",
    "price" : 9.00,
    "image" : "./images/sglights.jpg",
    "description" : "a rose gold sparkle and shimmer set inspired by warm and toasty feelings."
    },
    {
    "name" : "SG Wintergreen",
    "price" : 9.00,
    "image" : "./images/sgwintergreen.jpg",
    "description" : "a blue green shade with silver sparkles and stars."
    },
    {
    "name" : "SG Glitter Flora & Fauna",
    "price" : 15.00,
    "image" : "./images/sgglitter.jpg",
    "description" : "a winter theme with birds, berries and garlands."
    },
    {
    "name" : "SG Park Avenue",
    "price" : 40.50,
    "image" : "./images/sgpark.jpg",
    "description" : "a full set of a rose gold park avenue theme."
    },
    {
    "name" : "SG Blush",
    "price" : 11.25,
    "image" : "./images/sgblush.jpg",
    "description" : "a set inspired by warm blankets and cozy scarves for the fall and winter."
    },
    {
    "name" : "SG Galaxy Original",
    "price" : 19.50,
    "image" : "./images/sggalaxy.jpg",
    "description" : "a galaxy inspired collection with silver holographic foil."
    },
    {
    "name" : "SG Sugar Galaxy",
    "price" : 15.00,
    "image" : "./images/sgsugar.jpg",
    "description" : "a light purple, pink, and silver galaxy theme."
    },
    {
    "name" : "SG Galaxy Sunset",
    "price" : 6.75,
    "image" : "./images/sgsunset.jpg",
    "description" : "a galaxy inspired set completed with a pink to purple ombre and silver detail."
    },
    {
    "name" : "SG Midnight Galaxy",
    "price" : 19.50,
    "image" : "./images/sgmidnight.jpg",
    "description" : "a midnight galaxy inspired set with deep purples and greys."
    },
    {
    "name" : "SG Sailor Galaxy",
    "price" : 19.50,
    "image" : "./images/sgsailor.jpg",
    "description" : "a blue and pink color scheme with a hint of light gold."
    },
    {
    "name" : "SG Desert Dance",
    "price" : 9.00,
    "image" : "./images/sgdesert.jpg",
    "description" : "a soft tone set with pink, orange, yellow and blue and rose gold tints."
    }
]
var tombow = [
    {
    "name" : "TB Bohemian",
    "price" : 26.99,
    "image" : "./images/tbbohemian.jpg",
    "description" : "an assortment of jewel cool toned brush pens, perfect for any jewel tone spreads."
    },
    {
    "name" : "TB Citrus",
    "price" : 19.99,
    "image" : "./images/tbcitrus.jpg",
    "description" : "an assortment of citrus toned brush pens, perfect for any fruit related spreads."
    },
    {
    "name" : "TB Cottage",
    "price" : 26.99,
    "image" : "./images/tbcottage.jpg",
    "description" : "an assortment of soft cozy like toned brush pens, perfect for any cottage core lovers."
    },
    {
    "name" : "TB Desert Flora",
    "price" : 22.99,
    "image" : "./images/tbdesertfloral.jpg",
    "description" : "an assortment of desert toned brush pens depicting the colors of a desert."
    },
    {
    "name" : "TB Fudennosuke",
    "price" : 24.99,
    "image" : "./images/tbfudenosuke.jpg",
    "description" : "water based brush pens in the standardized rainbow colors."
    },
    {
    "name" : "TB Holiday",
    "price" : 26.99,
    "image" : "./images/tbholiday.jpg",
    "description" : "a limited edition holiday palette with cheerful seasonal tones."
    },
    {
    "name" : "TB Landscape",
    "price" : 20.99,
    "image" : "./images/tblandscape.jpg",
    "description" : "an assortment of blues and greens brush pens, perfect for any landscape drawings."
    },
    {
    "name" : "TB Muted",
    "price" : 19.99,
    "image" : "./images/tbmuted.jpg",
    "description" : "just like the name implied, it's a muted wash down version of the classic rainbow colors."
    },
    {
    "name" : "TB Pastel",
    "price" : 17.99,
    "image" : "./images/tbpastel.jpg",
    "description" : "just like the name implied, it's a pastel version of the classic rainbow colors."
    },
    {
    "name" : "TB Retro",
    "price" : 26.99,
    "image" : "./images/tbretro.jpg",
    "description" : "an assortment of bright and vivid brush pens, inspired by retro colors."
    },
    {
    "name" : "TB Secondary",
    "price" : 26.99,
    "image" : "./images/tbsecondary.jpg",
    "description" : "just like the name implied, it's a color palette full of the secondary tones."
    },
    {
    "name" : "TB Tropical",
    "price" : 26.99,
    "image" : "./images/tbtropical.jpg",
    "description" : "an assortment of ocean toned brush pens with various shades of greens and pink."
    }
]
var putsonyeon = [
    {
    "name" : "PSN Art Practice Memo",
    "price" : 4.00,
    "image" : "./images/psnart.jpg",
    "description" : "a memo pad of 100 sheets with an artwork of an art and coloring class."
    },
    {
    "name" : "PSN Art Exhibition Memo",
    "price" : 4.00,
    "image" : "./images/psnpaint.jpg",
    "description" : "a memo pad of 100 sheets with an artwork of a painting class."
    },
    {
    "name" : "PSN Cafe and Coffee Sticker",
    "price" : 3.00,
    "image" : "./images/psncafe.jpg",
    "description" : "a sticker sheet depicting several drink cafe drinks."
    },
    {
    "name" : "PSN Crepes Sticker",
    "price" : 3.00,
    "image" : "./images/psncrepes.jpg",
    "description" : "a sticker sheet depicting various different crepes."
    },
    {
    "name" : "PSN Dessert Time Sticker",
    "price" : 3.00,
    "image" : "./images/psndessert.jpg",
    "description" : "a sticker sheet depicting different flavor cakes."
    },
    {
    "name" : "PSN Heart Beam Sticker",
    "price" : 3.00,
    "image" : "./images/psnheartbeam.jpg",
    "description" : "a sticker sheet depicting love letters and hearts."
    },
    {
    "name" : "PSN Ice Cream Sticker",
    "price" : 3.00,
    "image" : "./images/psnheartbeam.jpg",
    "description" : "a sticker sheet depicting ice cream and popsicles."
    },
    {
    "name" : "PSN Ice Flakes Sticker",
    "price" : 3.00,
    "image" : "./images/psniceflakes.jpg",
    "description" : "a sticker sheet depicting ice flakes, Patbingsu -- Korean Shaved Ice."
    },
    {
    "name" : "PSN Vintage Mail Sticker",
    "price" : 3.00,
    "image" : "./images/psnmail.jpg",
    "description" : "a sticker sheet depicting vintage like mail."
    },
    {
    "name" : "PSN Ice Flakes Sticker",
    "price" : 3.00,
    "image" : "./images/psntravel.jpg",
    "description" : "a sticker sheet depicting traveling and going on vacation."
    }
]
var hobonichi = [
    {
    "name" : "HT Minamo",
    "price" : 89.75,
    "image" : "./images/htminamo.jpg",
    "description" : "a6 traveling journal and cover set, inspired by the leaves, flowers and wind."
    }, 
    {
    "name" : "HT Always Singing",
    "price" : 55.96,
    "image" : "./images/htsinging.jpg",
    "description" : "a6 traveling journal and cover set, inspired to bring joy, amusement and hope to the user."
    },   
    {
    "name" : "HT Very Berry",
    "price" : 42.23,
    "image" : "./images/htveryberry.jpg",
    "description" : "a6 traveling journal and cover set, inspired by cranberry red and purplish blue colors."
    },  
    {
    "name" : "HT Matcha",
    "price" : 42.23,
    "image" : "./images/htmatcha.jpg",
    "description" : "a6 traveling journal and cover set, inspired by dark green colors of Matcha."
    },  
    {
    "name" : "HT Summer Blue",
    "price" : 42.23,
    "image" : "./images/htsummerblue.jpg",
    "description" : "a6 traveling journal and cover set, inspired by light blue summer sky and the orange golden sunlight."
    }, 
    {
    "name" : "HT Sugar Rose",
    "price" : 42.23,
    "image" : "./images/htsugarrose.jpg",
    "description" : "a6 traveling journal and cover set, inspired by pastel pink and pale green and rose-scented confectioneries."
    },  
    {
    "name" : "HT Astro Blue",
    "price" : 42.23,
    "image" : "./images/htastroblue.jpg",
    "description" : "a6 traveling journal and cover set, inspired by the blue sky and the dark blue colors in space."
    },
    {
    "name" : "HT Pineapple",
    "price" : 42.23,
    "image" : "./images/htpineapple.jpg",
    "description" : "a6 traveling journal and cover set, inspired by bright and vibrant yellow color for an energetic year."
    },
    {
    "name" : "HT Strawberry Milk",
    "price" : 42.23,
    "image" : "./images/htstrawberry.jpg",
    "description" : "a6 traveling journal and cover set, inspired by gentle pink and red hues."
    },
    {
    "name" : "HT Bird, Flower, Willow",
    "price" : 63.35,
    "image" : "./images/htbird.jpg",
    "description" : "a6 traveling journal and cover set, inspired by a lavender colored bird with flowers and willows."
    },
    {
    "name" : "HT Sora Check",
    "price" : 89.75,
    "image" : "./images/htsora.jpg",
    "description" : "a6 traveling journal and cover set, inspired by the sky and checked pattern of clouds."
    },
    {
    "name" : "HT Cherry Sky",
    "price" : 42.00,
    "image" : "./images/htcherry.jpg",
    "description" : "a6 traveling journal and cover set, inspired by a cherry red hue and the light blue sky."
    },
    {
    "name" : "HT Blue Pistachio",
    "price" : 42.00,
    "image" : "./images/htblue.jpg",
    "description" : "a6 traveling journal and cover set, inspired by a calm blue and pastel green color scheme."
    },
    {
    "name" : "HT Summer Lemon",
    "price" : 42.00,
    "image" : "./images/htlemon.jpg",
    "description" : "a6 traveling journal and cover set, inspired by a lemon yellow color and a deep blue of summer skies."
    },
    {
    "name" : "HT Dreamy Pink",
    "price" : 42.00,
    "image" : "./images/htpink.jpg",
    "description" : "a6 traveling journal and cover set, inspired by a sweet and gentle shade of light pink and blue."
    },
    {
    "name" : "HT Time-Traveling Bird",
    "price" : 55.95,
    "image" : "./images/httime.jpg",
    "description" : "a6 traveling journal and cover set, a little bird carrying a letter during a starry night."
    },
    {
    "name" : "HT Candle",
    "price" : 97.70,
    "image" : "./images/htcandle.jpg",
    "description" : "a6 traveling journal and cover set, inspired by a set of candles with a hue of orange based on the light."
    },
    {
    "name" : "HT Memoria",
    "price" : 84.65,
    "image" : "./images/htmemoria.jpg",
    "description" : "a6 traveling journal and cover set, inspired by memoria textiles with butterfly stamps."
    }
]
var productSelection = {
    "kanken": kanken , 
    "archerandolive": archerandolive,
    "leuchtturm": leuchtturm,
    "simplygilded": simplygilded,
    "tombow": tombow,
    "putsonyeon": putsonyeon,
    "hobonichi": hobonichi,
}
if (typeof module != 'undefined') {
    module.exports.productSelection = productSelection;
  }