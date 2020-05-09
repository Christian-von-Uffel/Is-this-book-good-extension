// Get book's average review score
let avgReviewScore = parseInt(document.querySelector("#a-popover-content-9 > div > div > div > div.a-icon-row.a-spacing-small.a-padding-none > span").innerText.replace(" out of 5",""))

// Get book's total number of reviews
let reviewCount = parseInt(document.querySelector("#acrCustomerReviewText").innerText.replace(' ratings',''))

// Get book's original publication date


// Get book's % of 1-star reviews
let oneStarPercentage = document.querySelector("#histogramTable > tbody > tr:nth-child(5) > td.aok-nowrap > span.a-size-base > a").title.replace('1 stars represent ','').replace('% of rating','')
