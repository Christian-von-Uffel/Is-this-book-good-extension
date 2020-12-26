# Notes

## Code process

load the page

  performed by the browser

qualify if the page is for a book product

  check URL with manifest.json
  check category with check-if-book.js

fetch book data

  get book data with get-book-data.js

calculate book scores

  calculate book scores with calculate-scores.js

build the overlay

  create overlay styles with create-styles.js
  create overlay with create-overlay.js

display scores in overlay

## How to Create CSS Styles in Javascript
the styles javascript file creates the overlay on the page.

apparently you can simply just write a function that lets you style some classes with normal javascript and then run it

it's probably safest to create the file first as css then create a sample html page where you can run the file separately

this will let you test the css styling in a way that still enables you to easily spot errors in css syntax

afterwards you can easily rename the filename from .css to .js and then append the initial javascript function initialization

from there you're golden

## What browserAction does

It hard to know what browserAction does ATM. It's obvious that when paired with ".onclick" that it can be used to detect clicks that can perform other actions like opening up a website in a new tab

## How to make Chrome extensions run on specific webpages and websites

Use content scripts that match to a specific website or url.

The important thing is that you need to use asterisks outside of the URL strings in the matching criteria to allow your extension to run on webpages that aren't exactly the single URL you've specified.

You can use regex to create these string types.

For instance, if you want to run a plugin that shows some specific information on google search results, you'll need that information to keep showing no matter how the user's URL will change depending on what they're searching for.

## Solving for edge cases

**When the Percentage of 1-Star Reviews Equals zero**

When the book we're getting data on has 0 1-star reviews, Javascript fails to parse our normal formula to get this value.

Here's our normal formula:

```js
// Get book's % of 1-star reviews
  let oneStarPercentage =
    parseInt(document.querySelector("#histogramTable > tbody > tr:nth-child(5) > td.aok-nowrap > span.a-size-base > a").title.replace('1 stars represent ', '').replace('% of rating', ''))
```

And here's the result we get from the Javascript console when the value we're trying to select doesn't exist.

> Uncaught TypeError: Cannot read property 'title' of null at <anonymous>:2:122

We can't get values that don't exist.

We would like to check and display if the book has zero one-star reviews so we can do that by seeing if the element who's property we're grabbing exists.

If the value for the "title" element of the selector we're grabbing is "null", we know there's zero % one star reviews, there still could be zero reviews of the book in total, but we'd still have our number.

We can use this formula to check if there's a value for the percent of one-star reviews for us to grab:

  ```js
  document.querySelector("#histogramTable > tbody > tr:nth-child(5) > td.aok-nowrap > span.a-size-base > a") == null
  ```  

If the result of this formula is "TRUE", we simply set the value of oneStarPercentage equal to 0 and avoid indexing a value for it using a formula.

**Audio books don't use the same query selectors**

The query selector we use to determine the pagetype, doesn't work on pages for audiobooks such as:

  https://www.amazon.com/Vendes-o-vendes-Grant-Cardone-audiobook/dp/B07WWG8TR1/ref=tmm_aud_swatch_0?_encoding=UTF8&qid=&sr=

Using our normal pagetype selector:

  ```js
  document.querySelector("#nav-subnav > a.nav-a.nav-b > span").innerText
  ```

Produces an error because the parent selector doesn't exist.

This is the selector that seems to exist in it's place.

  ```js
  document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a")
  ```

From here we can evaluate a parent selector to see if it includes the string "Books" which is the innerText of the selector we're typically evaluating.

  ```js
  document.querySelector("#wayfinding-breadcrumbs_feature_div").innerText.includes("Books")
  ```

This produces the result "TRUE"

## How to use multiple javascript actions

You can chain javascript actions together using the "." connector.

Unlike other coding languages that require you to write separate formulas for each action you want to perform, in Javascript you can simply chain actions together in simple succession.

## How to Save numbers in a Text String as a numeric variable

You can convert numbers stored as text into numbers in javascript using the parse integer formula.

If the number you're looking to convert isn't an integer there are a number of other functions you can use.

  ```js
  parseInt()
  ```

## How to change page appearance using javascript

Create a variable that will include all your css style text.

Example:

  let style = `<style>

  b {
    background: red;
  }

  </style>`;

Then insert the contents of this variable into the header of your page's html before it ends.

```js
document.head.insertAdjacentHTML("beforeend", style);
```

But it's not easy to spot your typos if you write CSS using Javascript.

It's a lot easier to write CSS when you have autocomplete and syntax checking on the fly.

I recommend you write your CSS in a separate CSS file and then import

## Code tests

Is book data variable an integer?

Is it positive?

## How to insert content into pages

If you're looking to insert an app interface into an existing webpage, you need to create content people will actually see and you need to create code that inserts this content where you want it to go.

Ok, so let's walk through an example.

If you want to insert a div into a page you need to create the div element.

```js
<!-- here I create a div element and save it as the variable "div" -->
  var div = document.createElement("div");
```

You'll need to add it to the document.

```js
<!-- Here I add the div element to the document's body -->
  document.body.append(div);
```

And you'll need to create some content that actually goes inside of the div.

```js
<!-- here I create a paragraph element that i'll put some text in -->
  var para = document.createElement("p");

  <!-- and here I create the text string I want to go inside the paragraph element "para" -->
  var node = document.createTextNode("This is new.");
```

You may want to create a style for this element, so you'll need to add a class name.

```js
<!-- Here I add the class name "overlay" to the element saved as the variable "div" -->
  div.classList.add("overlay");
```

Ryan initialized variables div and icon as being equal to the content of two other functions, which presumably format content

  ```js
  var div = buildNotification();
  var icon = buildIcon();
  ```

It seems that honest marketer is inserting content into a div by making a variable contain the content of another variable where content is formatted together based on variables

  ```js
  content.innerHTML = statsContent();
  ```

## How to make the extension only run when the user's on a book's product page

We don't want the extension to run on pages that aren't for books, that would make it annoying and cause people to uninstall.

The breadcrumbs navigation link seems like a pretty fragile way to verify if the page we're on is the right category because the link is different for every product.

So that won't work.

How about qualifying the breadcrumbs text? Does that work?

**javascript selector for a hardcover book product**
```js
document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a")
```

**javascript selector for a kindle book product**
```js
document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a")
```

Ok, so both of these are equal so we can simply, lookup the inner text value and see if they equal the values we want before we run any additional javascript scripts.

  ```js
  document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a").innerText
  ```

If this function evaluates to "Kindle Store" or "Books", or "Audible Books & Originals", we run the scripts.

  ```js
  <div id='nav-subnav'  data-category="digital-text">
  ```

Another way to determine if the book type is an Audible book is to grab the product's product binding text using the JS path.

  ```js
  document.querySelector("#productBinding").innerText
  ```

## What the "return" javascript statement Does

Return stops a javascript function from executing code that follows it, so it's a good idea to use if you want to qualify whether you want some code to run.

IE only try to find amazon book data, if you're on a page for amazon books, else return, duh.

## How to run if statements in the javascript console

simply evaluate your if statement in a parentheses after initializing with "if", close your parentheses and give the follow up action.

**Example:**

  ```js
  if( x > 10 )
      console.log('x is greater than 10');
  ```

## How to insert HTML into a page using javascript

You can easily insert HTML into pages using the pretty straight forwardly-named function insertAdjacentHTML.

The way it works is you first declare which section of the html you want to insert your code into.

You could insert your code into the html header using:

```js
document.head.insertAdjacentHTML
```

Or you could insert code in the body using:

```js
document.body.insertAdjacentHTML
```

You could decide where you want to put the code using the first argument of the insertAdjacentHTML function.

Your options for where you want to put the code are before the code starts, after the code starts (meaning your code becomes a "child" of the first element), before the code ends, or after the code ends.

You can put your code in general areas like the body or header or be way more specific and insert code into a specific element, whether it's the 5th div or the last and fit it by any criteria you like.

## How to scrape hidden text that's not always in the same place

Sometimes the data you want isn't always easy to find.

It may be in the same place approximately, but not exactly.

So you need to search data that you know it'll be part of and then clean the data or find it's exact position.

That's exactly the problem I had when I was looking to fetch the publication date for books in my Is This Book Good project.

The data was easy to see, but I didn't know how to index it exactly every single time.

I could fetch the table containing a book's publication date.

  ```js
  document.querySelector("#productDetailsTable").innerText
  ```

I could find the position of the date string by first searching for the position of "Publication Date: ":

  ```js
  document.querySelector("#productDetailsTable").innerText.search("Publication Date:")
  ```

Then I could find the position the date string starts at by calculating the length of "Publication Date: "

```js
document.querySelector("#productDetailsTable").innerText.search("Publication Date: ") + ("Publication Date: ").length
```

I could grab the first character of the date string with:

```js
document.querySelector("#productDetailsTable").innerText.charAt(
document.querySelector("#productDetailsTable").innerText.search("Publication Date: ") + ("Publication Date: ").length
)
```

```js
document.querySelector("#productDetailsTable").innerText.search("Publication Date:")
```

Could I save the next string segment to a variable if I first split it by the break element?

You can grab the next set of characters by fetching them using the substring method.

Here's an example of substring where the variable res stores the first 4 characters after the initial character which is position 0.

  ```js
  var str = "Hello world!";
  var res = str.substring(1, 4);
  console.log(res);
  > "ell"
  ```

## Solving for edge cases

If we try to validate which product pages are for books using query selectors, these methods can easily break.

Breadcrumbs and other pieces of amazon's website navigation vary a lot depending on how the user gets to a given page, so creating a versatile and robust solution isn't as easy as it might appear.


## Notes on Call w/ Aaron Smyth

Here's how you might index the text you're looking for using jQuery:

  $('#productDetailsTable')     .find('.content')     .find('ul')     .children('li')     .each(function($el){       const bEl = $el.children('b');       if(bEl.innerText == "Production Date:") {         const productionDate = bEl.siblings()[0].innerText;       }     })

  always indent Formulas

  lookup

## Chrome Webstore Guidelines on User Data Privacy

My extension was initially rejected from the webstore because it broke Chrome's guidelines on user data privacy.

Specifically, my extension declared permissions that it didn't need to run.

The permissions I originally declared in my manifest file are "activeTab" and "tabs", but in order to get the extension to run correctly, I didn't need to declare any permissions at all.

This information is not written about clearly in any documentation, so you may think that your Chrome Extension needs to have an "activeTab" permission to view and manipulate data on the active tab, but confusingly it does not.
