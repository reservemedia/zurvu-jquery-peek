# jQuery.Peek

jQuery Peek is a great way to keep your navigation while preserving your precious
screen real estate for your content. While the user is viewing the page, the navigation
is tucked away. When the user scrolls up (or down), the navigation will reappear.

**Note:** This is a fork of the original repository that was originally forked to allow
support for negative indices. 

The major maintainer is: @mcollis.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/nrdobie/jquery-peek/master/dist/jquery.peek.min.js
[max]: https://raw.github.com/nrdobie/jquery-peek/master/dist/jquery.peek.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.peek.min.js"></script>
<script>
jQuery(function($) {
  $('.top-nav').peek();
});
</script>
```

## Documentation

jQuery Peek is pretty straight forward as far as usage goes.

```js
$(targetElement).peek(options);
```

### Options

**showDirection** _(Default: "up")_ - What direction should the user be scrolling when
the element is showing.

**toggleClass** _(Default: "hidden")_ - Class used to hide the element.

**triggerDelta** _(Default: 50)_ - After a user has scrolled more than this many pixels
show or hide the target element.

**triggerElement** _(Default: `window`)_ - Element to bind the scroll event to.

## Examples

Checkout the `index.html` for working examples.

### [Zurb Foundation](http://foundation.zurb.com)

Zurb Foundation's top navigation bar by default isn't in a fixed position but can be easily
done with a couple lines of CSS.

```css
body {
  padding-top: 60px;
}

.top-bar {
  position: fixed;
  width: 100%;
  z-index: 10;
  top: 0;
  transition: top 0.2s ease-in-out;
}

.top-bar.hidden {
  top: -45px;
}
```

And then add the following JS code:

```js
$('.top-nav').peek();
```

### [Twitter's Bootstrap](http://getbootstrap.com)

Bootstrap's top navigation works with Peek out of the box. Simply add the following JS call:

```js
$('.navbar').peek();
```

## Release History

### 0.1.0

Initial Release
