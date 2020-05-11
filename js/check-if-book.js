function checkIfBook(){

// Check if the user's on a page for a amazon book product
if (

  document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a").innerText

  =

  "Kindle Store" |  "Books" | "Audible Books & Originals"

)

  getBookData()

else {
  return
  }
}
