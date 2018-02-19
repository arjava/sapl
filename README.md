<div align="center">
    <a href="https://github.com/Logustra/sapl">
      <img src="http://ultraimg.com/images/2018/02/19/nsjq.png" width="175px"
        alt="Sapl - The Sass Boilerplate">
    </a>
</div>

# Sapl - The Sass Boilerplate
[![License](https://img.shields.io/github/license/Logustra/sapl.svg)](https://raw.githubusercontent.com/Logustra/sapl/master/LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues/Logustra/sapl.svg)](https://github.com/Logustra/sapl/issues)
[![GitHub stars](https://img.shields.io/github/stars/Logustra/sapl.svg)](https://github.com/Logustra/sapl/stargazers)

Sapl - The Sass Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.

* Sass with Gulp : [Here](https://github.com/Logustra/sapl/tree/sass-with-gulp)
* Sass with Grunt : [Here](https://github.com/Logustra/sapl/tree/sass-with-grunt)
* Sass with Webpack : [Here](https://github.com/Logustra/sapl/tree/sass-with-webpack)

## Quick Start
1. Make sure you have these installed
    * [node.js](http://nodejs.org/)
    * [yarn](https://yarnpkg.com/en/)
    * [webpack](https://webpack.js.org/)
    * [sass](http://sass-lang.com/)

2. Clone repository `git clone -b sass-with-gulp https://github.com/Logustra/sapl.git`
3. CD to the folder `cd sapl` 
4. Run `yarn install`
5. Run `yarn start`  
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

Reference : [scotch.io](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)

## Directory Architecture
```
sapl/
├── dist/
│   ├── css
│   │   ├── vendors
│   │   └──  main.css
│   │
│   ├── fonts
│   ├── images
│   ├── js/
│   │   ├── vendors
│   │   └── main.bundle.js
│   │ 
│   ├── videos
│   └── index.html
│
├── src/
│   ├── images
│   ├── js/
│   │   ├── base
│   │   ├── components
│   │   └── layout
│   │
│   ├── sass/
│   │   ├── base
│   │   ├── components
│   │   ├── layout
│   │   ├── pages
│   │   ├── themes
│   │   ├── utils
│   │   └── vendors
│   │
│   └── index.html
│ 
├── .babelrc
├── LICENSE.md
├── package.json
├── README.md
└── webpack.config.js
```

## Features
1. Semantic HTML5
2. Included Flat Colors
3. Included Typographys
4. Included Grid System
5. Included Babel
6. Automatic Browser Prefixing
7. Automatic Minifying HTML    
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

## Dependencies
1. [webpack](https://github.com/webpack)
2. [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
3. [babel](https://github.com/babel/babel)
4. [babel-loader](https://github.com/babel/babel-loader)
5. [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)
6. [babel-preset-stage-2](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2)
7. [css-loader](https://github.com/webpack-contrib/css-loader)
8. [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)
9. [file-loader](https://github.com/webpack-contrib/file-loader)
10. [html-loader](https://github.com/webpack-contrib/html-loader)
11. [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
12. [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)
13. [node-sass](https://github.com/sass/node-sass)
14. [postcss-loader](https://github.com/postcss/postcss-loader)
15. [sass-loader](https://github.com/webpack-contrib/sass-loader)
16. [style-loader](https://github.com/webpack-contrib/style-loader)
17. [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)

## License
[MIT](https://github.com/Logustra/sapl/blob/master/LICENSE.md) &copy; [Logustra](https://github.com/Logustra)
