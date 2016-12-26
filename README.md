Animae
======

Modified [animate.css](https://daneden.github.io/animate.css/).

Animae can animate elements when they are visible (in viewport). Also, background image can be changed when some element enters into view.


Animate elements on scroll
--------------------------

1. instead `animated` add `animae` class to elements and prefix effects with `a-` (e.g. `bounce` should be `a-bounce`)

2. call `animae()` on content ready (it will do simply: `$(window).on("scroll resize", animae)`) or call `animateVisible()` instead whenever you want.


Change background image on scroll
---------------------------------

When user is scrolling and some section enters into view, background image can be changed automatically.

To perform this, first put default background. `div` must have id `background-image`:

```html
<div id="background-image" style="background-image: url('URL_TO_NICE_IMAGE')"></div>
```

Then, add `animae` class to element which should change background image when enters into view and set its `data-background-image`, for example:

```html
<div class="animae" data-background-image="url('URL_TO_NEW_IMAGE')"></div>
```

*BTW, you can have any number of "background switchers"*




That's it.

License: [WTFPL](http://www.wtfpl.net/)

Enjoy!
