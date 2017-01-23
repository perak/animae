Animae
======

Addition to [animate.css](https://daneden.github.io/animate.css/).

Animae can animate elements when they are visible (in viewport). Also, background image can be changed when some element enters into view.


Animate elements on scroll
--------------------------

1. instead `animated` add `animae` class to elements and prefix effects with `a-` (e.g. `bounce` should be `a-bounce`)

2. call `animae()` on content ready (it will do simply: `$(window).on("scroll resize", animateVisible)`) or call `animateVisible()` instead whenever you want.


Change background image on scroll
---------------------------------

When user is scrolling and some section enters into view, background image can be changed automatically.

Add `animae` class to element which should change background image when enters into view and set its `data-background-image`, for example:

```html
<div class="animae" data-background-image="url('URL_TO_NEW_IMAGE')"></div>
```

*BTW, you can have any number of "background switchers"*

Options
-------

You can pass options object to `animae()` function.

Following options are supported:

`backgroundImage: "url"` - default (initial) background image. If background switcher is not found, this background image will be shown.

Example:

```
animae({
	backgroundImage: "https://apod.nasa.gov/apod/image/0801/16500feetmilkywaykc2_brunier.jpg"
});
```

License
-------

[MIT](http://opensource.org/licenses/MIT)


That's it.

Enjoy!
