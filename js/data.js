{
    menu: [{
            id: 1,
            text: "Macros",
            desc: "Includes greetings, apologies, goodbyes",
            action_type: "share_macro"
        },

        {
            id: 2,
            text: "Upload image",
            desc: "Allows to select an image to upload",
            action_type: "upload_image"
        },

        {
            id: 3,
            text: "Redirect",
            desc: "Redirect user to a different channel",
            action_type: "redirect_chat"
        },


        {
            id: 4,
            text: "Rate card",
            desc: "Send a rate card to the user",
            action_type: "rate_card"
        },

        {
            id: 5,
            text: "Share card",
            desc: "Send a share card to the user",
            action_type: "share_card"
        },

        {
            id: 6,
            text: "Address card",
            desc: "Send a address card to the user",
            action_type: "share_address_card"
        },


    ]


}


var  canned=
{
    "canned": [{
        "shortcutId": 13,
        "responseId": 32,
        "shortcutText": "Apology/Warning",
        "responseText": "Hey <First Name>! I'm sorry for the late response! It took me some time to get back to you."
    }, {
        "shortcutId": 13,
        "responseId": 33,
        "shortcutText": "Apology/Warning",
        "responseText": "<First Name>, I am sorry. Sharing such information is against our company policies."
    }, {
        "shortcutId": 13,
        "responseId": 35,
        "shortcutText": "Apology/Warning",
        "responseText": "<First Name>, that hurt! Please don't talk like this or else I'll sadly have to end this chat."
    }, {
        "shortcutId": 13,
        "responseId": 37,
        "shortcutText": "Apology/Warning",
        "responseText": "I understand how you feel <First Name>. I'll try my best to get this sorted as soon as possible."
    }, {
        "shortcutId": 16,
        "responseId": 41,
        "shortcutText": "Chat_Transfer",
        "responseText": "Please click on the transfer card I am sharing with you to chat with our expert in that field."
    }, {
        "shortcutId": 12,
        "responseId": 27,
        "shortcutText": "Closing",
        "responseText": "It was nice chatting with you. Have a nice day ahead! Chat again soon :-)"
    }, {
        "shortcutId": 12,
        "responseId": 29,
        "shortcutText": "Closing",
        "responseText": "Do reach out to us if you have any query in the future with regards to any brand or business."
    }, {
        "shortcutId": 12,
        "responseId": 30,
        "shortcutText": "Closing",
        "responseText": "That is sweet. Thanks. I am right here if you need any more help!"
    }, {
        "shortcutId": 12,
        "responseId": 31,
        "shortcutText": "Closing",
        "responseText": "I hope I have been of some help to you. Chat again soon!"
    }, {
        "shortcutId": 11,
        "responseId": 25,
        "shortcutText": "Educating",
        "responseText": "Like a friend you can chat with me whenever you need any help and your query will be resolved."
    }, {
        "shortcutId": 11,
        "responseId": 26,
        "shortcutText": "Educating",
        "responseText": "You can chat and get solution to every query of yours! Try exploring the App, You will love it!"
    }, {
        "shortcutId": 10,
        "responseId": 22,
        "shortcutText": "Greet/Request",
        "responseText": "Please allow me sometime to find an answer to this."
    }, {
        "shortcutId": 10,
        "responseId": 23,
        "shortcutText": "Greet/Request",
        "responseText": "Thanks for being patient <First Name>!"
    }, {
        "shortcutId": 14,
        "responseId": 38,
        "shortcutText": "Probing",
        "responseText": "<First Name>, Is there anything else you would like to chat about?"
    }, {
        "shortcutId": 14,
        "responseId": 39,
        "shortcutText": "Probing",
        "responseText": "<First Name>, Sorry that it took me sometime to write back! Are you there?"
    }]





}



var shareText = "Sharing is Caring. Would you like to share this must have app with your friends?";
var rateText = "I hope your query has been resolved. Do you think this deserves a 5 star rating?";
var shareLink = "Hi! Found this really useful app. It lets you chat directly with businesses. You can get help with things like finding deals, ordering cabs or food, checking into flights, finding best mobile plans and many more things. Try it now ";
var twitterShareLink = "Found this really useful app. It lets you chat directly with businesses. Makes life a hell lot easier. Try it now http://bit.ly/AkoshaT";

var shareType = {
    whatsapp: {
        actionText: shareText,
        actionName: "com.whatsapp",
        shareLink: shareLink + "http://bit.ly/AkoshaW"
    },

    facebook: {
        actionText: shareText,
        actionName: "com.facebook.katana",
        shareLink: shareLink + "http://bit.ly/AkoshaFB"
    },
    fbmess: {
        actionText: shareText,
        actionName: "com.facebook.orca",
        shareLink: shareLink + "http://bit.ly/AkoshaM"
    },

    twitter: {
        actionText: shareText,
        actionName: "com.twitter.android",
        shareLink: twitterShareLink

    },
    gplus: {
        actionText: shareText,
        actionName: "com.google.android.apps.plus",
        shareLink: shareLink + "http://bit.ly/AkoshaGP"

    },

    rate: {
        actionText: rateText,
        actionName: "com.akosha.directtalk"
    },

    rate_session: {

    },

    redirect: {
        companyId: 1,
        actionText: "Redirecting you to this session"

    }


};


var companies = 
[{
    "companyName": "Go Air",
    "companyId": 1,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Air India",
    "companyId": 2,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Jet Airways",
    "companyId": 3,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Vistara Airlines",
    "companyId": 4,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Spicejet",
    "companyId": 5,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Aiwa",
    "companyId": 6,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "IFB",
    "companyId": 8,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Panasonic",
    "companyId": 12,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Samsung",
    "companyId": 13,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Bajaj Auto",
    "companyId": 16,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Hero Motocorp",
    "companyId": 17,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Honda Cars ",
    "companyId": 18,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Maruti Suzuki",
    "companyId": 20,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Suzuki Motors",
    "companyId": 23,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Tata Motors",
    "companyId": 24,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Toyota ",
    "companyId": 25,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "TVS",
    "companyId": 26,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Yamaha",
    "companyId": 27,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Allahabad Bank",
    "companyId": 30,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "American Express",
    "companyId": 31,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Andhra Bank",
    "companyId": 32,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Axis Bank",
    "companyId": 33,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Bank of Baroda ",
    "companyId": 34,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Bank of India",
    "companyId": 35,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Bank of Maharashtra",
    "companyId": 36,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Central Bank of India",
    "companyId": 39,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Citibank",
    "companyId": 40,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Corporation Bank",
    "companyId": 41,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Dena Bank",
    "companyId": 42,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Deutsche Bank",
    "companyId": 43,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "HDFC Bank",
    "companyId": 47,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "HSBC Bank",
    "companyId": 48,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "ICICI Bank Limited ",
    "companyId": 49,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Indian Overseas Bank",
    "companyId": 50,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Kotak Mahindra Bank",
    "companyId": 51,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Oriental Bank of Commerce",
    "companyId": 53,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Oriental Insurance",
    "companyId": 54,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Punjab and Sind Bank",
    "companyId": 55,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Punjab National Bank",
    "companyId": 56,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Standard Chartered Bank",
    "companyId": 57,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "State Bank of Hyderabad",
    "companyId": 59,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "State Bank of India ",
    "companyId": 60,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "State Bank of Mysore",
    "companyId": 63,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "UCO Bank",
    "companyId": 66,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Union Bank of India",
    "companyId": 67,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Airtel DTH",
    "companyId": 72,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Dish TV",
    "companyId": 74,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Tata Sky",
    "companyId": 75,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Videocon D2H",
    "companyId": 76,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Apple",
    "companyId": 78,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Asus",
    "companyId": 79,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Dell",
    "companyId": 82,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "HCL Tablets",
    "companyId": 83,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Hewlett Packard",
    "companyId": 84,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Lenovo",
    "companyId": 85,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Toshiba",
    "companyId": 88,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Apollo Munich Health Insurance",
    "companyId": 111,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Bajaj Allianz Life",
    "companyId": 113,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Bharti AXA Life Insurance",
    "companyId": 115,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Birla Sun Life Insurance",
    "companyId": 116,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Future Generali Life Insurance",
    "companyId": 120,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Future Generali ",
    "companyId": 121,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "HDFC Ergo General Insurance",
    "companyId": 122,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "ICICI Lombard ",
    "companyId": 125,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "ICICI Prudential Insurance",
    "companyId": 126,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Exide Life Insurance",
    "companyId": 128,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Kotak Mahindra Mutual Life Insurance",
    "companyId": 129,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "LIC",
    "companyId": 130,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Max Life Insurance ",
    "companyId": 131,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "PNB Met Life Insurance",
    "companyId": 132,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "New India Assurance",
    "companyId": 133,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Reliance Life Insurance",
    "companyId": 135,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "SBI Life Insurance ",
    "companyId": 138,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Tata AIA Life Insurance ",
    "companyId": 142,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "United India Insurance",
    "companyId": 143,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Max Hospital",
    "companyId": 145,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "HTC",
    "companyId": 148,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Karbonn",
    "companyId": 152,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Micromax",
    "companyId": 154,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Motorola",
    "companyId": 155,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Nokia",
    "companyId": 156,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Spice Mobiles",
    "companyId": 160,
    "channelCompanyStatus": true,
    "channelId": 19
}, {
    "companyName": "BagitToday",
    "companyId": 164,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Bookmyshow",
    "companyId": 167,
    "channelCompanyStatus": true,
    "channelId": 41
}, {
    "companyName": "Cleartrip",
    "companyId": 171,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Ebay",
    "companyId": 177,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Fashionandyou",
    "companyId": 178,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Flipkart",
    "companyId": 179,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Homeshop18",
    "companyId": 182,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Indiatimes Shopping",
    "companyId": 186,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Infibeam",
    "companyId": 187,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "IRCTC",
    "companyId": 189,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Justdial",
    "companyId": 190,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Makemytrip",
    "companyId": 192,
    "channelCompanyStatus": true,
    "channelId": 12
}, {
    "companyName": "Myntra",
    "companyId": 194,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Naaptol",
    "companyId": 195,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Rediff Shopping",
    "companyId": 200,
    "channelCompanyStatus": true,
    "channelId": 25
}, {
    "companyName": "Snapdeal",
    "companyId": 203,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Yatra",
    "companyId": 210,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Aircel",
    "companyId": 216,
    "channelCompanyStatus": true,
    "channelId": 24
}, {
    "companyName": "Airtel ",
    "companyId": 217,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "BSNL",
    "companyId": 218,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Idea Cellular",
    "companyId": 219,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "MTNL",
    "companyId": 220,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Reliance Communications",
    "companyId": 221,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Tata Docomo",
    "companyId": 222,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Vodafone",
    "companyId": 225,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Easy Cabs",
    "companyId": 226,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Club Mahindra Holidays",
    "companyId": 227,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Mega Cabs",
    "companyId": 228,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Meru Cabs",
    "companyId": 229,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Thomas Cook",
    "companyId": 231,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "BSES Rajdhani - Delhi",
    "companyId": 232,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "BSES Yamuna - Delhi",
    "companyId": 233,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "Indigo Airlines",
    "companyId": 238,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Bajaj Electricals",
    "companyId": 240,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Bluestar",
    "companyId": 241,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Crompton Greaves",
    "companyId": 243,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Daikin",
    "companyId": 244,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Electrolux",
    "companyId": 245,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Eureka Forbes",
    "companyId": 247,
    "channelCompanyStatus": true,
    "channelId": 10
}, {
    "companyName": "Godrej",
    "companyId": 249,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Haier",
    "companyId": 250,
    "channelCompanyStatus": true,
    "channelId": 35
}, {
    "companyName": "Hitachi",
    "companyId": 251,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Kenstar",
    "companyId": 252,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Lloyd",
    "companyId": 254,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Onida",
    "companyId": 258,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Philips",
    "companyId": 259,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Sony",
    "companyId": 264,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Tata Swach",
    "companyId": 268,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Voltas",
    "companyId": 269,
    "channelCompanyStatus": true,
    "channelId": 24
}, {
    "companyName": "Videocon",
    "companyId": 272,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Whirlpool",
    "companyId": 275,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Chevrolet",
    "companyId": 276,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Ford India",
    "companyId": 280,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Hyundai Motors",
    "companyId": 283,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Mahindra",
    "companyId": 284,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Royal Enfield",
    "companyId": 285,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Skoda Auto",
    "companyId": 286,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Volkswagen",
    "companyId": 287,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "IDBI Bank",
    "companyId": 292,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Sharekhan",
    "companyId": 299,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Syndicate Bank",
    "companyId": 302,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Reliance Big TV",
    "companyId": 308,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Sun Direct",
    "companyId": 309,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Western Digital",
    "companyId": 311,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Blazeflash Couriers ",
    "companyId": 317,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Blue Dart Couriers",
    "companyId": 318,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "DHL",
    "companyId": 320,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "FedEx",
    "companyId": 322,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "First Flight Couriers Ltd.",
    "companyId": 323,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Gati Services",
    "companyId": 324,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Dominos Pizza",
    "companyId": 334,
    "channelCompanyStatus": true,
    "channelId": 14
}, {
    "companyName": "McDonalds",
    "companyId": 336,
    "channelCompanyStatus": true,
    "channelId": 14
}, {
    "companyName": "Pizza Hut",
    "companyId": 337,
    "channelCompanyStatus": true,
    "channelId": 14
}, {
    "companyName": "Lava International",
    "companyId": 348,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Groupon India",
    "companyId": 351,
    "channelCompanyStatus": true,
    "channelId": 49
}, {
    "companyName": "Freecharge",
    "companyId": 356,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "PayTM",
    "companyId": 360,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Redbus",
    "companyId": 361,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "ShopCJ",
    "companyId": 365,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Big Bazaar",
    "companyId": 387,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Croma Retail ",
    "companyId": 389,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Provogue",
    "companyId": 397,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Reliance Fresh",
    "companyId": 398,
    "channelCompanyStatus": true,
    "channelId": 48
}, {
    "companyName": "The Mobile Store",
    "companyId": 400,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Beam Telecom",
    "companyId": 401,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Hathway Internet",
    "companyId": 402,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Loop Telecom",
    "companyId": 403,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "MTS",
    "companyId": 404,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Uninor",
    "companyId": 408,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Bharat Gas",
    "companyId": 417,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "HP Gas",
    "companyId": 418,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "Indane Gas ",
    "companyId": 419,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "Kelvinator",
    "companyId": 426,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Kent",
    "companyId": 431,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Singapore Airlines",
    "companyId": 433,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Huawei",
    "companyId": 437,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Reliance Digital",
    "companyId": 440,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Sansui India",
    "companyId": 441,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Seagate",
    "companyId": 452,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Star Health and Allied Insurance",
    "companyId": 466,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "HealthKart",
    "companyId": 471,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Tikona",
    "companyId": 488,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Apollo Hospitals",
    "companyId": 492,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Apollo Pharmacy",
    "companyId": 493,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Agarwal Packers and Movers",
    "companyId": 497,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "India Post ",
    "companyId": 500,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "Bata",
    "companyId": 504,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "INOX Movies",
    "companyId": 507,
    "channelCompanyStatus": true,
    "channelId": 44
}, {
    "companyName": "Shoppers Stop",
    "companyId": 528,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Bajaj Finserv",
    "companyId": 534,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Canara Bank",
    "companyId": 536,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Federal Bank",
    "companyId": 540,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "ING Vysya Bank",
    "companyId": 541,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Karnataka Bank",
    "companyId": 543,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Karur Vysya Bank",
    "companyId": 544,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Pantaloons",
    "companyId": 557,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Yepmeshopping",
    "companyId": 579,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Lenskart",
    "companyId": 606,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "KFC",
    "companyId": 616,
    "channelCompanyStatus": true,
    "channelId": 14
}, {
    "companyName": "iBall",
    "companyId": 700,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Fullerton India ",
    "companyId": 736,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "ICICI Direct",
    "companyId": 739,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "DTDC",
    "companyId": 759,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Indian Passport Authority",
    "companyId": 825,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "Dr. Batra's Positive Health Clinic",
    "companyId": 849,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Easymobile Recharge",
    "companyId": 884,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Goibibo",
    "companyId": 886,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Mobikwik",
    "companyId": 893,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Fastrack",
    "companyId": 946,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Housefull Furniture",
    "companyId": 954,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "PVR Cinemas",
    "companyId": 962,
    "channelCompanyStatus": true,
    "channelId": 44
}, {
    "companyName": "Star Bazaar",
    "companyId": 980,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Jabong",
    "companyId": 1078,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Pepperfry",
    "companyId": 1100,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Shopclues",
    "companyId": 1114,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Casio India",
    "companyId": 1156,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Craftsvilla",
    "companyId": 1167,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Kyazoonga",
    "companyId": 1244,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Sangeetha mobiles",
    "companyId": 1288,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Vijay Sales",
    "companyId": 1338,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Westside",
    "companyId": 1344,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Muthoot Fincorp",
    "companyId": 1426,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Yebhi",
    "companyId": 1431,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Reliance General Insurance",
    "companyId": 1435,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "TATA AIG General Insurance",
    "companyId": 1436,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Honda Two Wheelers",
    "companyId": 1500,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Amway",
    "companyId": 1557,
    "channelCompanyStatus": true,
    "channelId": 43
}, {
    "companyName": "Angel Broking ",
    "companyId": 1559,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Aramex",
    "companyId": 1565,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Audi",
    "companyId": 1567,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Big Rock",
    "companyId": 1576,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Delhi Jal Board",
    "companyId": 1594,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "Emirates Airlines",
    "companyId": 1606,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "IndusInd Bank",
    "companyId": 1628,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Intex Technologies",
    "companyId": 1630,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Kaya Skin Clinic",
    "companyId": 1636,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Kesineni Travels",
    "companyId": 1638,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Lifestyle",
    "companyId": 1641,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Ola Cabs",
    "companyId": 1661,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "PUMA",
    "companyId": 1687,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "FabFurnish",
    "companyId": 2347,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Foodpanda",
    "companyId": 2355,
    "channelCompanyStatus": true,
    "channelId": 14
}, {
    "companyName": "Mercedes Benz",
    "companyId": 2379,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Aadhar Card",
    "companyId": 2399,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "BMW",
    "companyId": 2646,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "BOSCH Home Appliances",
    "companyId": 2647,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Billdesk",
    "companyId": 2795,
    "channelCompanyStatus": true,
    "channelId": 28
}, {
    "companyName": "British Airways",
    "companyId": 2842,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Cinemax",
    "companyId": 2984,
    "channelCompanyStatus": true,
    "channelId": 44
}, {
    "companyName": "Cinepolis",
    "companyId": 2985,
    "channelCompanyStatus": true,
    "channelId": 44
}, {
    "companyName": "DTC",
    "companyId": 3052,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Fashionara",
    "companyId": 3271,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Fortis Hospital",
    "companyId": 3294,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Google",
    "companyId": 3415,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Guardian Lifecare",
    "companyId": 3451,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Lufthansa Airlines",
    "companyId": 3993,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Nissan",
    "companyId": 4340,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "PAN Card",
    "companyId": 4398,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "Reliance Retail",
    "companyId": 4663,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Sandisk",
    "companyId": 4751,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Siti Digital Cable",
    "companyId": 4935,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "Titan",
    "companyId": 5266,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Transcend",
    "companyId": 5270,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "VLCC",
    "companyId": 5348,
    "channelCompanyStatus": true,
    "channelId": 43
}, {
    "companyName": "Vespa",
    "companyId": 5401,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Xolo",
    "companyId": 5491,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "OLX.in",
    "companyId": 5520,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Renault",
    "companyId": 5521,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Max Bupa Health Insurance",
    "companyId": 5535,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Gold Gym",
    "companyId": 5555,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Tommy Hilfiger",
    "companyId": 5571,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Kotak Securities",
    "companyId": 5604,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Gionee",
    "companyId": 5716,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Taxiforsure",
    "companyId": 5744,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Wyn Cabs",
    "companyId": 5745,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Justeat.in",
    "companyId": 5746,
    "channelCompanyStatus": true,
    "channelId": 14
}, {
    "companyName": "SRL Diagnostics",
    "companyId": 5747,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Ticketplease",
    "companyId": 5748,
    "channelCompanyStatus": true,
    "channelId": 44
}, {
    "companyName": "98.4 Pharmacy",
    "companyId": 5752,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Oppo Mobiles",
    "companyId": 5792,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Askmebazaar.com",
    "companyId": 5912,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Amazon.in",
    "companyId": 5928,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "State Bank of Bikaner and Jaipur",
    "companyId": 5940,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Red Express Courier",
    "companyId": 5941,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Future Lifestyle Fashion Ltd",
    "companyId": 5958,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Vguard",
    "companyId": 5961,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Akosha",
    "companyId": 5969,
    "channelCompanyStatus": true,
    "channelId": 3
}, {
    "companyName": "Xiaomi",
    "companyId": 6028,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Tech Support",
    "companyId": 6056,
    "channelCompanyStatus": true,
    "channelId": 20
}, {
    "companyName": "Online Coupons & Deals",
    "companyId": 6060,
    "channelCompanyStatus": true,
    "channelId": 49
}, {
    "companyName": "Health & Fitness",
    "companyId": 6061,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Repair & Services",
    "companyId": 6062,
    "channelCompanyStatus": true,
    "channelId": 54
}, {
    "companyName": "Uber Cabs",
    "companyId": 6076,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Jobs & Vacancies",
    "companyId": 6102,
    "channelCompanyStatus": true,
    "channelId": 15
}, {
    "companyName": "Shopping Assistant",
    "companyId": 6103,
    "channelCompanyStatus": true,
    "channelId": 55
}, {
    "companyName": "Travel",
    "companyId": 6108,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Coupon Dunia",
    "companyId": 6112,
    "channelCompanyStatus": true,
    "channelId": 49
}, {
    "companyName": "Right to Information",
    "companyId": 6115,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "IRDA",
    "companyId": 6117,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "Fashion & Beauty",
    "companyId": 6122,
    "channelCompanyStatus": true,
    "channelId": 43
}, {
    "companyName": "Telecom",
    "companyId": 6123,
    "channelCompanyStatus": true,
    "channelId": 53
}, {
    "companyName": "Movies & Entertainment",
    "companyId": 6131,
    "channelCompanyStatus": true,
    "channelId": 44
}, {
    "companyName": "Spice Cabs",
    "companyId": 6138,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "Food Ordering & Deals",
    "companyId": 6144,
    "channelCompanyStatus": true,
    "channelId": 14
}, {
    "companyName": "Doctor Search",
    "companyId": 6145,
    "channelCompanyStatus": true,
    "channelId": 45
}, {
    "companyName": "Holiday Experts",
    "companyId": 6146,
    "channelCompanyStatus": true,
    "channelId": 12
}, {
    "companyName": "AirAsia",
    "companyId": 6147,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "DEN Networks",
    "companyId": 6148,
    "channelCompanyStatus": true,
    "channelId": 4
}, {
    "companyName": "TinyOwl",
    "companyId": 6150,
    "channelCompanyStatus": true,
    "channelId": 14
}, {
    "companyName": "Grocery & Vegetables",
    "companyId": 6153,
    "channelCompanyStatus": true,
    "channelId": 48
}, {
    "companyName": "Banking & Finance",
    "companyId": 6157,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Bikes & Cars",
    "companyId": 6158,
    "channelCompanyStatus": true,
    "channelId": 9
}, {
    "companyName": "Retail Offers & Sales",
    "companyId": 6159,
    "channelCompanyStatus": true,
    "channelId": 49
}, {
    "companyName": "Education",
    "companyId": 6161,
    "channelCompanyStatus": true,
    "channelId": 32
}, {
    "companyName": "OnePlus",
    "companyId": 6162,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Syska",
    "companyId": 6163,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Oxigen Wallet",
    "companyId": 6164,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "KTM",
    "companyId": 6165,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Dunkin Donuts",
    "companyId": 6166,
    "channelCompanyStatus": true,
    "channelId": 14
}, {
    "companyName": "Housejoy",
    "companyId": 6170,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "BigBasket",
    "companyId": 6171,
    "channelCompanyStatus": true,
    "channelId": 48
}, {
    "companyName": "Government",
    "companyId": 6172,
    "channelCompanyStatus": true,
    "channelId": 16
}, {
    "companyName": "HDFC Life",
    "companyId": 6173,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Housing.com",
    "companyId": 6174,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Local Banya",
    "companyId": 6175,
    "channelCompanyStatus": true,
    "channelId": 48
}, {
    "companyName": "Kotak Prime",
    "companyId": 6176,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Buy & Rent Property",
    "companyId": 6178,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "Insurance",
    "companyId": 6179,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Gifts & Hampers",
    "companyId": 6180,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "OYO Rooms",
    "companyId": 6181,
    "channelCompanyStatus": true,
    "channelId": 47
}, {
    "companyName": "YU",
    "companyId": 6183,
    "channelCompanyStatus": true,
    "channelId": 46
}, {
    "companyName": "Spice Hotspot",
    "companyId": 6187,
    "channelCompanyStatus": true,
    "channelId": 1
}, {
    "companyName": "UTI Mutual Fund",
    "companyId": 6244,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Helpchat Laundry",
    "companyId": 6268,
    "channelCompanyStatus": true,
    "channelId": 40
}, {
    "companyName": "Bill Payments",
    "companyId": 6269,
    "channelCompanyStatus": true,
    "channelId": 28
}, {
    "companyName": "Helpchat",
    "companyId": 6388,
    "channelCompanyStatus": true,
    "channelId": 3
}, {
    "companyName": "Edelweiss Tokio Life Insurance",
    "companyId": 14654,
    "channelCompanyStatus": true,
    "channelId": 38
}, {
    "companyName": "Edelweiss",
    "companyId": 30502,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Religare Online",
    "companyId": 31477,
    "channelCompanyStatus": true,
    "channelId": 13
}, {
    "companyName": "Perfumes Direct",
    "companyId": 31479,
    "channelCompanyStatus": true,
    "channelId": 5
}, {
    "companyName": "Tamil Nadu State Transport Corporation",
    "companyId": 32354,
    "channelCompanyStatus": true,
    "channelId": 1
}]
