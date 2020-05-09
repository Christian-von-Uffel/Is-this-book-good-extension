# Math Formulas for Is This Book Good

## User Threshold Formula

display pass/fail based on book criteria value and user setting

if (criteriaVariableName < userThresholdValue) {
  document.getElementById("demo").innerHTML = "&#10008";
} else {
document.getElementById("demo").innerHTML = "&#10004";
}

## Buyer Success Formula

(review score / highest possible score * review count + 1) / ( total review count + 2)

multiple by 100 and round to get percent

**Javascript Formula**

<script>
var bookRating = 5
var scoreCount = 19;
var x = ((scoreCount + 1) / (scoreCount + 2) * bookRating) / 5 * 100;
x = Math.round(x);
document.getElementById("demo").innerHTML = x;
</script>

**Formula Example:**
Great mental models by Shane Parrish
https://www.amazon.com/Great-Mental-Models-Physics-Chemistry-ebook/dp/B085HY11NF/ref=msx_wsirn_v1_2/137-7992787-1708650

rating of 5 out 5; 19 reviews

(5 / 5 * 19 + 1) / (19 + 2)

(19 + 1) / (19 + 2)

(20) / (21)

95% buyer success rate

**Getting Data from the page**

gets the span

document.querySelector("#acrCustomerReviewText").innerText

<span id="acrCustomerReviewText" class="a-size-base">19 ratings</span>

gets the text

document.querySelector("#acrCustomerReviewText").innerText

19 ratings

gets the actual number of reviews (still a text string though)

document.querySelector("#acrCustomerReviewText").innerText.replace(' ratings','')

need to replace text, convert to number, save to variable

document.querySelector("#acrCustomerReviewText").innerText.replace(' ratings','')

"971"

let reviewCount = parseInt(document.querySelector("#acrCustomerReviewText").innerText.replace(' ratings',''))

971

getting the book's average review score

let avgReviewScore = parseInt(document.querySelector("#a-popover-content-9 > div > div > div > div.a-icon-row.a-spacing-small.a-padding-none > span").innerText.replace(" out of 5",""))

4.6

## Days Since Release Formulas

today's date - publication date

get today's date using **Date.now()** Javascript function

get publication date using?? (jQuery CSS selector, find in document??)

**Javascript Formula**

<script>
const releaseDate = Date.parse('March 4, 2020');
const dateNow = Date.now();
const dayInMS = 24 * 60 * 60 * 1000

console.log((dateNow - releaseDate) / dayInMS);
</script>

**Formula Example:**

**Getting Data from the Page**

Book Example:
Pre-Suasion by Robert Cialdini
https://www.amazon.com/Pre-Suasion-Revolutionary-Way-Influence-Persuade-ebook/dp/B01C36E2YS

get publication date (fragile method)

document.querySelector("#productDetailsTable > tbody > tr > td > div > ul > li:nth-child(4)").innerText

result:
  "Publication Date: September 6, 2016"

get publication date (robust method)

document.querySelector("#productDetailsTable").innerText

result:
    fetches full product details table including line breaks

## % of 1-Star Reviews Formulas

if less than

**Getting Data from the Page**

get span showing % of 1-star reviews

document.querySelector("#histogramTable > tbody > tr:nth-child(5) > td.aok-nowrap > span.a-size-base > a").title

result:
"1 stars represent 2% of rating"

replace text strings not including 1-star % and save as value

let oneStarPercentage = document.querySelector("#histogramTable > tbody > tr:nth-child(5) > td.aok-nowrap > span.a-size-base > a").title.replace('1 stars represent ','').replace('% of rating','')
