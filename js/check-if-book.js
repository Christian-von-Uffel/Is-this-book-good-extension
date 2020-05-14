function checkIfBook() {

  // Check if the user's on a page for a book product
  if (

    document.querySelector("#nav-subnav > a.nav-a.nav-b > span").innerText

    ==

    "Books"
  ) {
    // Fetch page type
    let pageType =

      document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a").innerText
  } else {
    return;
  }

  if (

    pageType

    ==

    "Kindle Store" || "Books" || "Audible Books & Originals")
  // document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a").innerText

) {
  getBookData()
} else {
  return
}
}
