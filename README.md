# Reasons Why I Love You

A small action for Google Home that tells you a few reasons why Mister Rogers loves you. Edit and deploy it yourself to make a custom action that tells someone special why you love them!

[View the demo here.](https://reasons-why-i-love-you.glitch.me)

![Mister Rogers reasons screenshot](https://raw.githubusercontent.com/veekas/reasons-why-i-love-you/master/assets/mister-rogers-screenshot.jpeg?token=ADvHnmWPEU-874UcblVRTKmjcoiiYaTsks5ajaB_wA%3D%3D)

## How to customize this for someone special

### Get your accounts set up
 1. Sign up for a [Glitch account](https://glitch.com) to host your code
 2. Create a [Google Cloud project](https://console.cloud.google.com/project) to host your action. Remember the name you gave it.
 3. Sign up for a [Dialogflow account](https://dialogflow.com) to control the action logic

### Steps to set up your Google Home Action
4. ['Remix' this app](https://glitch.com/edit/#!/remix/reasons-why-i-love-you) on Glitch. (i.e. copy it to your account so you can edit it), and open the [vars.js](vars.js) file. Change the variable `person` to be your name. Change the `reasons` to include your own reasons, as many as you'd like! Pay attention to the syntax and grammar here.
5. Create a new 'agent' in [Dialogflow](https://console.dialogflow.com/api-client/#/newAgent), making sure to select the Google Cloud project you created earlier.
6. Click on the gear icon next to the agent name to access settings. Click "Export and Import" and import the following zip file: [assets/reasons-why-he-loves-you.zip](assets/reasons-why-he-loves-you.zip).
7. Edit the name, description, etc. in "General" settings.
8. Click "Intents" in the left sidebar, and modify the "User says" inputs for "Give a Reason" and "Give a Reason - more" (accessible via the arrow next to "Give a Reason") to include messages you want the user to be able to say to hear a reason.
9. Click "Integrations" and make sure "Web Demo" is active. A popup box will show you a link. Copy the long string of characters **after** `https://bot.dialogflow.com/`, and replace the `projectID` variable in [vars.js](vars.js) with it. It should follow a similar format to the existing id.
10. Click "Fulfillment" in the left sidebar and update the url to include the link to your Remixed project created in step 4. That's the url in the tab that opens when you click 'Show' from your Glitch project page. It will have the format `https://project-name.glitch.me`.

### Your agent should now be working!
11. Let's test!
  - Type an example command in the right sidebar of Dialogflow to see if you get the responses you expect.
  - You can also check if it works from the "Integrations" page by clicking on "Google Assistant" and then clicking "Test" at the bottom of the popup.
  - This is also a good time to check your project's 'Show' page to see if the embedded action works. Note that the rest of the page will still be Mister Rogers-themed unless you change the `htmlOutput` variable in [vars.js](vars.js).
  - Finally, preview the action using the Google Home [web simulator](https://developers.google.com/actions/tools/web-simulator). Access it from the left sidebar of your [Actions on Google](https://console.actions.google.com) project page.
12. If all of that worked, you have a working action! Now, you have two options:
  - Modify and share your Glitch project demo page and use that as your online reason-giver
  - Submit your project for review to be published. You'll find some files in the [assets](assets/) and [docs](docs/) folders that may help with required fields.
  - Set up "infinite testing" so you can use your action privately and indefinitely! [This is a bit of a process, though...](https://medium.com/google-cloud/how-to-create-a-custom-private-google-home-action-260e2c512fc)

## Acknowledgments

- [Glitch](https://glitch.com/) for providing the [starter code](https://glitch.com/~google-home) and hosting
- Erin, for loving and supporting me. Happy Valentines' Day. =)
- Google, for giving me a new, nerdy way to tell Erin that I love her. [Their docs have more explanations, examples, and tutorials](https://developers.google.com/actions/extending-the-assistant)
- [Google Developer Group NYC](https://www.meetup.com/gdgnyc) for inspiring me to tinker with Google Actions
