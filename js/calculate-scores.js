function calculateScores(){

// Calculate book's buyer success rate
let buyerSuccessRate =
Math.round(
  (reviewCount + 1) / (reviewCount + 2)
  * avgReviewScore) / 5 * 100);

// Calculate days since release
let daysSinceRelease =
Math.floor(
  ( releaseDate - dateNow()  )
  / ( 24 * 60 * 60 * 1000)  )
}
