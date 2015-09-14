# Angular chat Popup

A simple angular directive to add a popup menu to the `input` element or a `contenteditable` `div`

The UI is inspired from [Slack](https://slack.com/) and [Flock](http://www.flock.co/)

###[Demo](http://madhur.co.in/angular-chat-popup)

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

##How do I configure the action on each option

Each leaf node has a corresponding property `action_type`. The function `executeAction(selectedCommand)` is called upon press on enter key or right arrow key on a highlighted node. Currently, the function is a dummy placeholder for you to define your own action types.

```javascript
function executeAction(selectedCommand) {
                if (selectedCommand.action_type == 'share_macro') {
                    // do name replacement and company
                    destroyPopup(selectedCommand.text);
                } else {
                    if (selectedCommand.action_type == 'rate_card') {

                    } else if (selectedCommand.action_type == 'upload_image') {

                    } else if (selectedCommand.action_type == 'address_card') {

                    } else if (selectedCommand.action_type == 'share_whatsapp') {

                    } else if (selectedCommand.action_type == 'share_messenger') {

                    } else if (selectedCommand.action_type == 'share_facebook') {

                    } else if (selectedCommand.action_type == 'share_twitter') {

                    } else if (selectedCommand.action_type == 'share_gplus') {

                    }
                    destroyPopup(null);
                }
            }
```

##Next Steps

* Add filtering through keyboard
* Include scrollbar for long menus

