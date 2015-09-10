'use strict';
chatApp.factory('AppSettings', function() {
    var serverChannel, agentChannel, agentCompanyChannel;

    if (window.location.host == "staging.akosha.com" || window.location.host == "one.staging.akosha.com" || window.location.host == "two.staging.akosha.com" || window.location.host == "three.staging.akosha.com" || window.location.host == "chat.staging.akosha.com" || window.location.host == "app.helpchat.dev" || window.location.host == "app.helpchat.dev" || window.location.host == "app.helpchat.dev2" || window.location.host == "app.helpchat.dev3") {
        serverChannel = "akosha_server-staging";
        agentChannel = "agent-staging-";
        agentCompanyChannel = "companygroup-staging-";
    } else if (window.location.host == "localhost:8080" || window.location.host == "akoshalocal.com" || window.location.host == "chat.akoshalocal.com" || window.location.host == "app.helpchat.local.in") {
        serverChannel = "akosha_server-local";
        agentChannel = "agent-local-";
        agentCompanyChannel = "companygroup-local-";
    } else if (window.location.host == "app.helpchat.in") {
        serverChannel = "akosha_server_prod4";
        agentChannel = "agent-prod4-";
        agentCompanyChannel = "companygroup-prod4-";
    } else {
        serverChannel = "akosha_server";
        agentChannel = "agent-prod-";
        agentCompanyChannel = "companygroup-prod-";
    }

    var hostName = "https://www.akosha.com";

    var popupMenu =

        [{
                id: 1,
                text: "Macros",
                desc: "Includes greetings, apologies, goodbyes",
                action_type: "share_macro",
                commands:[]

            },

            {
                id: 2,
                text: "Upload image",
                desc: "Allows to select an image to upload",
                action_type: "upload_image",
                commands:[]
            },

            {
                id: 3,
                text: "Redirect",
                desc: "Redirect user to a different channel",
                action_type: "redirect_chat",
                commands:[]
            },


            {
                id: 4,
                text: "Rate card",
                desc: "Send a rate card to the user",
                action_type: "rate_card",
                commands:[]
            },

            {
                id: 5,
                text: "Share card",
                desc: "Send a share card to the user",
                action_type: "share_card",

                commands: [

                	 {
		                id: 1,
		                text: "Share Request WhatsApp",
		                desc: "Allows to select an image to upload",
		                action_type: "share_whatsapp",
		                shareLink: shareLink + "http://bit.ly/AkoshaW"
            		},

            		{
		                id: 1,
		                text: "Share Request WhatsApp",
		                desc: "Allows to select an image to upload",
		                action_type: "share_whatsapp",
		                shareLink: shareLink + "http://bit.ly/AkoshaW"
            		},





                ]
            },

            {
                id: 6,
                text: "Address card",
                desc: "Send a address card to the user",
                action_type: "share_address_card",
                commands:[]
            },

        ];

    var shareTypes = {
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




    return {
        akosha_login: 'akoshamobile@akosha.com',
        akosha_password: 'kar3.141',
        pubnubPublishKey: 'pub-c-db5d55d0-95c3-4edc-be1c-5b9b8749a40c',
        pubnubSubscribeKey: 'sub-c-34729d70-7d33-11e4-812f-02ee2ddab7fe',

        pubnubAgentPublishKey: 'pub-c-75dc93da-c75d-4d24-b4ae-37a476237da9',
        pubnubAgentSubscribeKey: 'sub-c-6fc3b026-791e-11e4-af64-02ee2ddab7fe',

        pubnubAgentChannel: agentChannel,
        pubnubServerChannel: serverChannel,
        agentCompanyChannel: agentCompanyChannel,
        fayeChannelSalt: 'akosha101',
        fayeChannel: '/chatadmin',
        hostName: hostName,

        popupMenu: popupMenu,
        shareTypes: shareTypes
    };







});
