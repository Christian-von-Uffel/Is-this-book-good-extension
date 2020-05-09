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
