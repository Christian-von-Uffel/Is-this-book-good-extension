console.log('running Honest Marketer extension...');

var elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, span"); // TODO: support 'div'

var negativeWords = ["ratings","!", "#1 ", "amazing", "best", "easiest", "fastest", "industry leading", "instant", "most popular", "most powerful", "perfect", "superior", "the future", "world's leading"];
var wordTypes = ['ratings', 'neutral', 'positive']
var ratingsWords = ["ratings"];
var neutralWords = ["absolute", "better", "easy", "everything you need", "fast", "limited time", "love", "new way", "popular", "powerful", "vote"];
var positiveWords = [" free ", " rate", " vote", "first", "patent", "refund", "reviews", "trademark"];

var exitIntentKeywords = ['exit intent', 'exit-intent']; // what else?

var ratingsHighlights = neutralHighlights = positiveHighlights = 0;

var notificationSpacer = 20; // pixels
var toolCheckDelay = 1500; // milliseconds
