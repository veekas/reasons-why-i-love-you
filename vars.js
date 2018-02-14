// The variables in this file are the ones you'll want to modify in order to customize your action:

const person = `Person's Name`;

// The action response will be in the format of "[person] loves you because [reason]"
const reasons = [
  `you have such a beautiful smile.`,
  `you make him feel peaceful and loved.`,
  `we are independent, yet when we are together, we are inseparable.`,
  `you make him feel special.`,
  `you put up with his imperfections.`,
  `you treat his family right.`
]

const projectID = '4720f5ba-1264-40ab-9cd4-2030c5a1f47a';

// if you want to modify the demo page on Glitch, you may optionally change the following variables

const title = `Demo of 'Reasons Why They Love Me'`;

const introParagraph = `Curious why ${person} loves you? Type or say "Why does ${person} love me?" in the box below.`;

const htmlOutput = `
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <h1>${title}</h1>
    <div>
      <p>${introParagraph}</p>
      <iframe
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/${projectID}">
      </iframe>
    </div>
    <script src="https://button.glitch.me/button.js" data-style="glitch"></script>
    <div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div>
    <footer>
      <center>
      <a href="https://github.com/veekas/reasons-why-they-love-me/blob/master/privacy-policy.md">Privacy Policy</a>
      <br />
      Created with <3 by <a href="http://veekasmeansprogress.com">Veekas Shrivastava</a> and <a href="https://glitch.com/~google-home">Glitch</a>
      </center>
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
