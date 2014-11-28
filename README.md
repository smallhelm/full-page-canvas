# What it does

Mount an HTML5 canvas to the full width and height of the web page. When the page is resized the canvas resizes too.

Usefull for graphic visulizations or games that want to simply use the canvas to controll the entire page.

Your html is just a blank page that includes your javascript.
```html
<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<script src="main.js"></script>
	</head>
	<body></body>
</html>
```
Then call `mount` on this library and it  will inject a `<canvas>` element into the `<body>` and return it so you can use it.

# How to use it

Be sure to include this in your html `<head>` to prevent zooming on mobile devices
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

There are 3 ways to include this library

## With browserify

```js
var canvas = require('full-page-canvas').mount();
...
```

## With a script tag

Download [this](https://github.com/smallhelm/full-page-canvas/blob/master/full-page-canvas.min.js) script then include it in your html
```html
<script src="full-page-canvas.min.js"></script>
```

Then use it
```js
var canvas = FULL_PAGE_CANVAS.mount();
...
```

## With require.js

```js
require(['full-page-canvas'], function(c) {
	var canvas = c.mount();
	...
});
```


# License
The MIT License (MIT)

Copyright (c) 2014 Small Helm LLC

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
