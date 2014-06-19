# formTestBookmarklet

This [bookmarklet](http://en.wikipedia.org/wiki/Bookmarklet) provides a simple form testing tool.
It parses form fields and tries to find proper test values (email, zip code, phone number, etc.) from a set of example values.

![Screenshot](http://steambros.github.io/formTestBookmarklet/images/screenshot.gif)

For every project in my daily work I have to test different forms (registration, order, contact, etc.). In the best case I want to test these forms with different values or even empty fields (to test error handling). Therefor I created this bookmarklet.


## Installation

For an easy Drag'n'Drop installation please visit the &nbsp; [» Project Page] (http://steambros.github.io/formTestBookmarklet/).

Manual installation in your browser:

1. Create a new bookmark.
2. Choose any name for your bookmark.
3. Copy the whole text of the `bookmarklet.txt` file into the bookmark's address field.


## Usage
Open your website and click on the created bookmark – Done! (Click again and you get new random values)

After you clicked the bookmarklet you can execute `testTheForm()` to trigger the form testing from your browser's console.

Use `testTheForm('emptyFields')` to test your form with (randomized) empty fields.

## ToDo
Select radio buttons and checkboxes, too.

## License

The MIT License (MIT)

Copyright (c) 2014 Stefanie Ambrosch

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.