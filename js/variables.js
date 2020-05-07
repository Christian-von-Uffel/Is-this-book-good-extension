console.log('running Honest Marketer extension...');

var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, span"); // TODO: support 'div'

var wordTypes = ['negative', 'neutral', 'positive']
var negativeWords = ["!", "#1 ", "amazing", "best", "easiest", "fastest", "industry leading", "instant", "most popular", "most powerful", "perfect", "superior", "the future", "world's leading"];
var neutralWords = ["absolute", "better", "easy", "everything you need", "fast", "limited time", "love", "new way", "popular", "powerful", "vote"];
var positiveWords = [" free ", " rate", " vote", "first", "patent", "refund", "reviews", "trademark"];

var exitIntentKeywords = ['exit intent', 'exit-intent']; // what else?

var negativeHighlights = neutralHighlights = positiveHighlights = 0;

var notificationSpacer = 20; // pixels
var toolCheckDelay = 1500; // milliseconds
