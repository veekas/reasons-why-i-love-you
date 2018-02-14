// The variables in this file are the ones you'll want to modify in order to customize your action:

const person = `Mister Rogers`;

// The action response will be in the format of "[person] loves you because [reason]"
const reasons = [
  `you always see the good in every situation`,
  `you are a great listener`,
  `you are a good friend`,
  `you have an infectious laugh`,
  `you treat others with respect`,
  `you are you, and he likes you as you are!`,
]

const projectID = 'ae2c662f-197d-4272-9dcb-550cc97cb766';

// if you want to modify the demo page on Glitch, you may optionally change the following variables

const title = `Why Mister Rogers Loves You`;

const introParagraph = `Would you like to know why ${person} loves you? Type or say "Why does ${person} love me?" in the box below.`;

const htmlOutput = `
<html>
  <head>
    <title>${title}</title>
  </head>
  <body style="background-color:#2b313f; text-align:center; font-family: Poppins;">
    <h1 style="color:#fd9727;">${title}</h1>
    <p style="max-width: 100%; color: white;">${introParagraph}</p><br/>
    <iframe
      width=100%
      height="430"
      src="https://console.dialogflow.com/api-client/demo/embedded/${projectID}">
    </iframe>
    <script src="https://button.glitch.me/button.js" data-style="glitch"></script>
    <div class="glitchButton" style="position:fixed;top:20px;left:20px;"></div>
    <footer style="color:white">
        Made for Valentines' Day 2018
        by <a href="http://veekasmeansprogress.com" style="color:#A5D175">Veekas Shrivastava</a>
        with help from <a href="https://glitch.com/~google-home" style="color:#A5D175">Glitch</a>.
        Google made me create a <a href="http://veekasmeansprogress.com/reasons-why-they-love-me/privacy-policy.pdf" style="color:#A5D175">privacy policy</a>.
    </footer>
  </body>
</html>
`;

// export variables needed in `app.js`

module.exports = {
  person,
  reasons,
  htmlOutput
};
