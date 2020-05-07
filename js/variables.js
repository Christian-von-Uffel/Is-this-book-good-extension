console.log('running Honest Marketer extension...');

var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, span, li, b"); // TODO: support 'div'

var wordTypes = ['score', 'date', 'positive']
var scoreWords = ["ratings"];
var dateWords = ["Publication", "better", "easy", "everything you need", "fast", "limited time", "love", "new way", "popular", "powerful", "vote"];
var positiveWords = [" free ", " rate", " vote", "first", "patent", "refund", "reviews", "trademark"];

var exitIntentKeywords = ['exit intent', 'exit-intent']; // what else?

var scoreHighlights = dateHighlights = positiveHighlights = 0;

var notificationSpacer = 20; // pixels
var toolCheckDelay = 1500; // milliseconds
