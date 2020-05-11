function getBookData() {

// Get book's average review score
let avgReviewScore = number(
  document.querySelector("#reviewsMedley > div > div.a-fixed-left-grid-col.a-col-left > div.a-section.a-spacing-none.a-spacing-top-mini.cr-widget-ACR > div.a-fixed-left-grid.AverageCustomerReviews.a-spacing-small > div > div.a-fixed-left-grid-col.aok-align-center.a-col-right > div > span > span").innerText
  .replace(" out of 5",""))

// Get book's total number of reviews
let reviewCount = parseInt
  (document.querySelector("#acrCustomerReviewText").innerText.replace(' ratings','').replace(',',''))

// Get book's original publication date
if (pageType = "Audible Books & Originals")

let publicationDate =
  // grabs the date for Audible books
  Date.parse(document.querySelector("#detailsReleaseDate").innerText)

else {
  Date.parse(
  // grabs the table but not the specific list element
  document.querySelector("#productDetailsTable").innerText
}

)
// Get book's % of 1-star reviews
let oneStarPercentage =
  parseInt(document.querySelector("#histogramTable > tbody > tr:nth-child(5) > td.aok-nowrap > span.a-size-base > a").title.replace('1 stars represent ','').replace('% of rating',''))

// Run next javascript function
calculateScores()
}
