Animate Visible
===============

For use with [animate.css](https://daneden.github.io/animate.css/)

This function animates elements only if they are visible (in viewport).

1. instead `animated` add `animate` class to elements and prefix effects with `a-` (e.g. `bounce` should be `a-bounce`)

2. call animateVisible() function when you want animation to start, but most likelly you'll call it on scroll and resize: `$(window).on("scroll resize", animateVisible)`

License: [WTFPL](http://www.wtfpl.net/)

Enjoy!
