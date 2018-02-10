# Sapl - The Sass Boilerplate
Sass Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.

* Sass with Gulp : [Here](https://github.com/Logustra/sapl/tree/sass-with-gulp)
* Sass with Grunt : [Here](https://github.com/Logustra/sapl/tree/sass-with-grunt)
* Sass with Webpack : Coming Soon

## Quick Start
1. Make sure you have these installed
    * [node.js](http://nodejs.org/)
    * [yarn](https://yarnpkg.com/en/)
    * [grunt](https://gruntjs.com/)
    * [sass](http://sass-lang.com/)
    * [browserify](http://browserify.org/)

2. Clone repository `git clone -b sass-with-grunt https://github.com/Logustra/sapl.git`
3. CD to the folder `cd sapl` 
4. Run `yarn install`
5. Run `grunt`  
6. Happy to use :)  

## Architecture Sass
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

## Directory Architecture
```
sapl/
├── dist/
│   ├── css
│   │   └── vendors
│   │
│   ├── fonts
│   ├── images
│   ├── js/
│   │   └── vendors
│   │ 
│   └── videos
│
└── src/
    ├── images
    ├── js/
    │   ├── base
    │   ├── components
    │   └── layout
    │
    └── sass/
        ├── base
        ├── components
        ├── layout
        ├── pages
        ├── themes
        ├── utils
        └── vendors
```

## Features
1. Semantic HTML5
2. Includes Flat Color
3. Includes Typography
4. Includes Grid System
5. Include Babel
6. Include Browserify
7. Automatic Browser Prefixing   
8. Automatic Minifying CSS   
9. Automatic Minifying Images
10. Automatic Minifying Javascript
11. Automatic Livereload 
12. Includes Framework
    * [Jquery](https://jquery.com/)
    * [Jquery UI](http://jqueryui.com/)
    * [Bootstrap](http://getbootstrap.com/)
    * [Font Awesome](http://fontawesome.io/)
13. Includes Useful Mixins
    * Breakpoints
    * Clearfix
    * Rem units
    * Background Image
    * Background Tinted Image 
    * Background Image Parallax
    * Background Tinted Image Parallax
    * Background Shapes Image 
    * Background Tinted Shapes Image 
    * Background Shapes Image Parallax 
    * Background Tinted Shapes Image Parallax

## How to use Mixins
1. Breakpoints
    ```
    @include mq (xxsmall) {
        // your css
    }

    or 

    .example {

        @include mq (xxsmall) {
            // your css
        }
    }
    ```
   
2. Clearfix
    ```
    .example {
        @include clearfix;
    }
    ```
3. Rem units
    ```
    .example {
        @include font-size(14px);
    }
    ```
4. Background Image
    ```
    .example {
        @include bgImg ('../images/image.jpeg', center center, no-repeat, cover);
    }
    ```
5. Background Tinted Image 
    ```
    .example {
        @include bgTintedImg ('../images/image.jpeg', center center, no-repeat, cover, rgba(255, 0, 0, 0.45));
    }
    ```
6. Background Image Parallax
    ```
    .example {
        @include bgImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed);
    }
    ```
7. Background Tinted Image Parallax
    ```
    .example {
        @include bgTintedImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, rgba(255, 0, 0, 0.45));
    }
    ```
8. Background Shapes Image
    ```
    .example {
        @include bgShapeLeftImg ('../images/image.jpeg', center center, no-repeat, cover, 87%);
    }
    
    .example {
        @include bgShapeRightImg ('../images/image.jpeg', center center, no-repeat, cover, 87%);
    }
    ```
    
9. Background Tinted Shapes Image 
    ```
    .example {
        @include bgShapeLeftImg ('../images/image.jpeg', center center, no-repeat, cover, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {
        @include bgShapeRightImg ('../images/image.jpeg', center center, no-repeat, cover, 87%, rgba(255, 0, 0, 0.45));
    }
    ```
10. Background Shapes Image Parallax 
    ```
    .example {

        @include bgShapeLeftImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%);
    }

    .example {

        @include bgShapeRightImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%);
    }
    ```
11. Background Tinted Shapes Image Parallax 
    ```
    .example {

        @include bgTintedShapeLeftImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%, rgba(255, 0, 0, 0.45));
    }

    .example {

        @include bgTintedShapeRightImgParallax ('../images/image.jpeg', center center, no-repeat, cover, fixed, 87%, rgba(255, 0, 0, 0.45));
    }
    ```

## Documentations
1. [grunt-sass](https://github.com/sindresorhus/grunt-sass)
2. [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer)
3. [grunt-browserify](https://github.com/jmreidy/grunt-browserify)
4. [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
5. [grunt-image](https://github.com/1000ch/grunt-image)
6. [grunt-browser-sync](https://github.com/BrowserSync/browser-sync)
7. [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)

## License
[MIT](https://github.com/Logustra/sapl/blob/master/LICENSE.md) &copy; [Logustra](https://github.com/Logustra)