# animate.scss
__A port of the core animate.css lib to Sass.__

CSS toolkit of CSS animations (http://daneden.me/animate) converted to Sass

`animate.scss` is a bunch of cool, fun, and cross-browser animations for you to use in your projects. Great for emphasis, home pages, sliders, and general just-add-water-awesomeness.

## Usage
To use animate.css in your website, simply drop the stylesheet into your document's `<head>`, and add the class `animated` to an element, along with any of the animation names. That's it! You've got a CSS animated element. Super!

You can do a whole bunch of other stuff with animate.css when you combine it with jQuery or add your own CSS rules. Dynamically add animations using jQuery with ease:

```
$('#yourElement').addClass('animated bounceOutLeft');
```

You can change the duration of your animations, add a delay or change the number of times that it plays!

```
#yourElement {
	-vendor-animation-duration: 3s;
	-vendor-animation-delay: 2s;
	-vendor-animation-iteration-count: infinite;
}
```

*Note: be sure to replace "vendor" in the CSS with the applicable vendor prefixes (webkit, moz, ms, o)*

## License
Animate.css is licensed under the &#9786; license. (http://licence.visualidiot.com/)

## Learn more
You can learn more about animate.css over at http://daneden.me/animate
