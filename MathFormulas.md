# Math Formulas for Is This Book Good

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

## Days Since Release Formulas

today's date - publication date

**Javascript Formula**

<script>
const releaseDate = Date.parse('March 4, 2020');
const dateNow = Date.parse('May 8, 2020');
const dayInMS = 24 * 60 * 60 * 1000

console.log((dateNow - releaseDate) / dayInMS);
</script>

**Formula Example:**

## % of 1-Star Reviews Formulas

if less than
