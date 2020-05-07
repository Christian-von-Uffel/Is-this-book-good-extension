console.log('running Honest Marketer extension...');

var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, span, li, b"); // TODO: support 'div'

var wordTypes = ['score', 'date', 'onestar']
var scoreWords = ["ratings"];
var dateWords = ["Publication"];
var onestarWords = [" free ", " rate", " vote", "first", "patent", "refund", "reviews", "trademark"];

var exitIntentKeywords = ['exit intent', 'exit-intent']; // what else?

var scoreHighlights = dateHighlights = onestarHighlights = 0;

var notificationSpacer = 20; // pixels
var toolCheckDelay = 1500; // milliseconds
