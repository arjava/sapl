# Architecture Sass
Properly architecting your Sass project is a crucial starting point to having a maintainable, scalable, and well-organized project. Sass makes separating your project into logical “modules” simple with the `@import` directive, which acts differently than the native CSS `@import` directive in that it **includes** `.scss` **or** `.sass` **files before the final CSS output.**

You can [read the documentation on the](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) `@import` [directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) to get a good idea of how you can use it to include partial files.

There are many project architectures that you can employ in your project, and each might have their pros and cons. The important thing is that you **choose one and stick with it**. In this article, The **7-1 Pattern** by Hugo Giraudel will be used. To summarize, there are **seven** folders and **one** `main.scss` file for output:

- `base/` – contains global styles, such as resets, typography, colors, etc.
- `components/` – contains each self-contained component in its own .scss partial
- `layout/` – contains styling for larger layout components; e.g. nav, header, footer, etc.
- `pages/` – contains page-specific styling, if necessary
- `themes/` – contains styling for different themes
- `utils/` – contains global mixins, functions, helper selectors, etc.
- `vendors/` – contains 3rd-party styles, mixins, etc.
- `main.scss` – output file that brings together all of the above parts

Source : [scotch.io](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)

## Instructions

1. Make sure you have these installed
- [node.js](http://nodejs.org/)
- [gulp](http://gulpjs.com/)
- [ruby](https://www.ruby-lang.org/)
- [Sass](http://sass-lang.com/)

2. Just Clone and Use it :)

## Features 
* HTML5 ready. Use the new elements with confidence.
* Designed with progressive enhancement in mind.
* Includes Front End Stuff :
  * [jquery](https://jquery.com/)
  * [Bootstrap](http://getbootstrap.com/)
  * [Materialize](http://materializecss.com/)
  * [Simantic-UI](https://semantic-ui.com/)
  * [Font Awesome](http://fontawesome.io/icons/)
  * [Ionicon](http://ionicons.com/)
  * [Datedropper](http://felicegattuso.com/projects/datedropper/)
  * [Select2](https://select2.github.io/)
  * [Magnific-popup](http://dimsemenov.com/plugins/magnific-popup/)
  * [Nicescroll](http://areaaperta.com/nicescroll/)
  * [Sticky](http://stickyjs.com/)
  * [sweetalert](http://t4t5.github.io/sweetalert/)
 * Sass Media Queries
