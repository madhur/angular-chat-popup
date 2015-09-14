# Angular chat Popup

A simple angular directive to add a popup menu to the `input` element or a `contenteditable` `div`

The UI is inspired from [Slack](https://slack.com/) and [Flock](http://www.flock.co/)

[!](screen.png)

##How does this work

Upon `/` character, a popup menu is rendered. Its template is fetched from `partials/popupmenu.html` file.



##How do I configure the popup

The input data is fetched from the `appsettings.js` file. Currently 3 levels are supported. In actual case, this data may come from a 
`$http` service.


```javascript
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
```

##Next Steps

* Add filtering through keyboard
* Include scrollbar for long menus

