// The variables in this file are the ones you'll want to modify in order to customize your action:

const person = `Person's Name`;

// The action response will be in the format of "[person] loves you because [reason]"
// (Example reasons are from https://www.enkirelations.com/100-reasons-why-i-love-you.html)
const reasons = [
  `You have such a beautiful smile.`,
  `You makes me feel peaceful and loved.`,
  `We are independent, yet when we are together, we are inseparable.`,
  `You make me feel special.`,
  `You put up with my imperfections.`,
  `You treat my family right.`
]

// replace with your own project ID
const projectID = 'reasons-why-they-love-me';

// if you want to use the demo page, you may optionally change the following variables

const title = 'Reasons Why They Love Me';

const header = `Demo of 'Reasons Why They Love Me'`;

const introParagraph = `Curious why ${person} loves you? Type or say "Why does ${person} love me?" in the box below.`;

const htmlOutput = `
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <h1>${header}</h1>
    <div>
      <p>${introParagraph}</p>
      <iframe width="350" height="430" src="https://console.api.ai/api-client/demo/embedded/${projectID}"></iframe>
    </div>
    <script src="https://button.glitch.me/button.js" data-style="glitch"></script>
    <div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div>
  </body>
</html>
`

// export variables needed in `app.js`

module.exports = {
  person,
  reasons,
  htmlOutput
};
