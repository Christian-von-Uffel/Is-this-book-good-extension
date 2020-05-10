# Notes

## How to Create CSS Styles in Javascript
the styles javascript file creates the overlay on the page.

apparently you can simply just write a function that lets you style some classes with normal javascript and then run it

it's probably safest to create the file first as css then create a sample html page where you can run the file separately

this will let you test the css styling in a way that still enables you to easily spot errors in css syntax

afterwards you can easily rename the filename from .css to .js and then append the initial javascript function initialization

from there you're golden

## What browserAction does

It hard to know what browserAction does ATM. It's obvious that when paired with "".onclick" that it can be used to detect clicks that can perform other actions like opening up a website in a new tab

## How to make Chrome extensions run on specific webpages and websites

Use content scripts that match to a specific website or url

The import thing though is that you need to use asterisks outside of the URL strings in the matching criteria to allow your extension to run on webpages that aren't exactly the single URL you've specified.

For instance, if you want to run a plugin that shows some specific information on google search results, you'll need that information to keep showing no matter how the user's URL will change depending on what they're searching for.

## How to use multiple javascript actions

You can chain javascript actions together using the "." connector.

Unlike other coding languages that require you to write separate formulas for each action you want to perform, in Javascript you can simply chain actions together in simple succession.

## How to Save numbers in a Text String as a numeric variable

You can convert numbers stored as text into numbers in javascript using the parse integer formula.

If the number you're looking to convert isn't an integer there are a number of other functions you can use.

parseInt()

## How to change page appearance using javascript

Create a variable that will include all your css style text.

Example:

let style = `<style>

b {
  background: red;
}

</style>`;

Then insert the contents of this variable into the header of your page's html before it ends.

document.head.insertAdjacentHTML("beforeend", style);

But it's not easy to spot your typos if you write CSS using Javascript.

It's a lot easier to write CSS when you have autocomplete and syntax checking on the fly.

I recommend you write your CSS in a separate CSS file and then import

## Code process

load the page

run get book data

calculate scores

build the overlay

display scores in overlay

## Code tests

Is book data variable an integer?

Is it positive?

## How to insert content into a div

Ryan initialized variables div and icon as being equal to the content of two other functions, which presumably format content

var div = buildNotification();
var icon = buildIcon();

It seems that honest marketer is inserting content into a div by making a variable contain the content of another variable where content is formatted together based on variables

content.innerHTML = statsContent();

## How to make the extension only run when the user's on an amazon book's product page

We don't want the extension to run on pages that aren't for books, that would make it annoying and cause people to uninstall.

The breadcrumbs navigation link seems like a pretty fragile way to verify if the page we're on is the right category because the link is different for every product.

So that won't work.

How about qualifying the breadbrumbs text? Does that work?

**javascript selector for a hardcover book product**
document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a")

**javascript selector for a kindle book product**
document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a")

Ok, so both of these are equal so we can simply, lookup the inner text value and see if they equal the values we want before we run any additional javascript scripts.

document.querySelector("#wayfinding-breadcrumbs_feature_div > ul > li:nth-child(1) > span > a").innerText

If this function evaluates to "Kindle Store" or "Books", or "Audible Books & Originals", we run the scripts.

<div id='nav-subnav'  data-category="digital-text">

## What the "return" javascript statement Does

Return stops a javascript function from executing code that follows it, so it's a good idea to use if you want to qualify whether you want some code to run.

 IE only try to find amazon book data, if you're on a page for amazon books, else return, duh.

## How to run if statements in the javascript console

simply evaluate your if statement in a parentheses after initializing with "if", close your parentheses and give the follow up action.

**Example:**

if( x > 10 )
    console.log('x is greater than 10');
