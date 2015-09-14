'use strict';
chatApp.factory('AppSettings', function() {
    var popupMenu =

        [{
                id: 0,
                text: "Macros",
                desc: "Includes greetings, apologies, goodbyes",
                commands:[]

            },

            {
                id: 1,
                text: "Upload image",
                desc: "Allows to select an image to upload",
                action_type: "upload_image"
            },

            {
                id: 2,
                text: "Redirect",
                desc: "Redirect user to a different channel",
                action_type: "redirect_chat"
            },


            {
                id: 3,
                text: "Rate card",
                desc: "Send a rate card to the user",
                action_type: "rate_card"
            },

            {
                id: 4,
                text: "Share card",
                desc: "Send a share card to the user",
                commands: [

                	 {
		                id: 6,
		                text: "WhatsApp",
		                desc: "Share Request",
		                action_type: "share_whatsapp",
            		},

            		{
		               id: 7,
		                text: "Facebook",
		                desc: "Share Request",
		                action_type: "share_facebook",
            		},

            		{
		                id: 8,
		                text: "Facebook Messenger",
		                desc: "Share Request",
		                action_type: "share_messenger",
            		},

            		{
		                id: 9,
		                text: "Twitter",
		                desc: "Share Request",
		                action_type: "share_twitter",
            		},

            		{
		                id: 10,
		                text: "Google Plus",
		                desc: "Share Request",
		                action_type: "share_gplus",
            		}

                ]
            },

            {
                id: 5,
                text: "Address card",
                desc: "Send a address card to the user",
                action_type: "address_card"
            },

        ];



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

    return {
        popupMenu: popupMenu,
        canned: canned
    };


});
