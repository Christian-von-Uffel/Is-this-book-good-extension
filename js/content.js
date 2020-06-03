// start the program
console.log("Running Is this book Good?");

// get book data
console.log("getting book data");

// Get book's average review score
var avgReviewScore = Number(
  document.querySelector("#reviewsMedley > div > div.a-fixed-left-grid-col.a-col-left > div.a-section.a-spacing-none.a-spacing-top-mini.cr-widget-ACR > div.a-fixed-left-grid.AverageCustomerReviews.a-spacing-small > div > div.a-fixed-left-grid-col.aok-align-center.a-col-right > div > span > span").
  innerText.replace(" out of 5", ""));


// Get book's total number of reviews
var reviewCount = parseInt(
  document.querySelector("#acrCustomerReviewText").
  innerText.replace(' ratings', '').
  replace(',', ''));


// grab the book's publication date
if (document.querySelector("#productBinding") == null){

  var publicationDate = Date.parse(
    document.querySelector("#productDetailsTable").
    innerText.match(/\w*\s\d{1,2}[,]\s\d{4}/)[0]
  )

} else {

  var publicationDate = Date.parse(document.querySelector("#detailsReleaseDate").innerText)

};


// Get book's % of 1-star reviews
if (document.querySelector("#histogramTable > tbody > tr:nth-child(5) > td.aok-nowrap > span.a-size-base > a") == null)

{
  // If the book has zero 1-star reviews, let oneStarPercentage equal 0
  var oneStarPercentage = 0
} else {

  var oneStarPercentage = parseInt(document.querySelector("#histogramTable > tbody > tr:nth-child(5) > td.aok-nowrap > span.a-size-base > a").title.replace('1 stars represent ', '').replace('% of rating', ''));

};


// calculate scores
console.log("calculating scores");

// Calculate book's buyer success rate
var buyerSuccessRate = Math.round((reviewCount + 1)/(reviewCount + 2) * avgReviewScore / 5 * 100);

// Calculate days since release
var daysSinceRelease = Math.floor((Date.now() - publicationDate) /(24 * 60 * 60 * 1000));


// create styles
console.log("creating styles");

// create style properties
var style = `<style>
    	#overlay {
          width: 320px;
          border: 0;
          top: 20px;
          right: 20px;
          position: fixed;
          text-align: left;
          z-index: 99999999999999;
          -webkit-box-sizing: border-box;
          cursor: pointer;
          box-sizing: border-box;
          font-weight: 400;
          border-radius: 6px;
          -webkit-box-shadow: 2px 2px 10px 2px hsla(0,0%,60%,.2);
          box-shadow: 2px 2px 10px 2px hsla(0,0%,60%,.2);
          background-color: #fff;
        }

        img.book-icon {
          max-width: 80px;
          display: inline-block;
          vertical-align: middle;
        }

        .book_report_content {
          margin: 0px 0px 0px 10px;
          display: inline-block;
          vertical-align: middle;
          font-size: 16px;
          font-style: normal;
          line-height: 1.5em;
        }

        .hidden {
          visibility: hidden;
        }

    </style>`;

// insert style properties
document.head.insertAdjacentHTML("beforeend", style);

console.log("creating overlay");

  // create div element and save as variable "div"
  var div = document.createElement("div");

  // add class of "overlay" to div
  div.setAttribute("id", "overlay");

  // create image
  var img = document.createElement("img");

  //  add class "book-icon" to image
  img.classList.add("book-icon");

  // point the image selector to the image source
  img.src = chrome.extension.getURL("images/Icon128.png");

  // add the image to the div
  div.appendChild(img);

  // create another div to contain our text content; because we need another div for proper formatting
  var bookReport = document.createElement("div");

  // add class "book_report_content" to the variable "bookReport"
  bookReport.classList.add("book_report_content");

  // create the book report's content
  var innerHTML = 'Buyer Success Rate: ' + buyerSuccessRate + '%<br>'
    innerHTML += 'Days Since Release: ' + daysSinceRelease + ' days<br>'
    innerHTML += '% of 1-Star Reviews: ' + oneStarPercentage + '%</p>';

  // put the content inside the div
  bookReport.innerHTML = innerHTML;

  // add book report element to the parent div element
  div.appendChild(bookReport);

  // add the div to the document
  document.body.append(div);

  // add listener to hide the overlay on click
  document.getElementById("overlay").addEventListener("click", hideOverlay);

  // hide overlay function
  function hideOverlay(){
    document.getElementById("overlay").setAttribute("class", "hidden");
  };
