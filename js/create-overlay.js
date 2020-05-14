function buildIcon() {

  // Create an img element in the document
  var bookIcon = document.createElement('img')
  bookIcon.classList.add('book_marketer_icon')
  bookIcon.src = chrome.extension.getURL('images/Icon128.png');

  return bookIcon;
}

function buildContainer() {

  // Create a div element in the document with class 'honest_marketer_warnings'
  var div = document.createElement('div')
  div.classList.add('honest_marketer_warnings')

  // Create a paragraph element in the document with the class 'honest_marketer_report_content'
  var content = document.createElement('p')
  content.classList.add('honest_marketer_report_content')

  // Place the contents of variable 'content' inside of the variable 'div'
  div.append(content);

  return div
}

function statsContent() {

  // Create overlay content
  var innerHTML = '<span style="color: green">High Buyer Success Rate?</span> ' + buyerSuccessRate + ' %<br>'
  innerHTML += '<span style="color: darkgrey">Recent Release Date?</span> ' + daysSinceRelease + ' days ago<br>'
  innerHTML += '<span style="color: tomato">Low % of 1 Star Reviews?</span> ' + oneStarPercentage + ' %'

  return innerHTML;
}