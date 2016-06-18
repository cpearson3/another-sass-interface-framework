# Bootsmooth
## Version 2.0.1

Bootsmooth is another UI Framework built with Sass / SCSS.

## Building

NPM, Gulp, Browserify, and Sass are used build Bootsmooth.

To get started:

    git clone https://github.com/cpearson3/bootsmooth.git
    npm install
    gulp build

Include bootsmooth.min.css in your HTML.Include

Visit the [web page](http://www.bootsmooth.com) for more documentation and examples.

## Changelog

### 2.0.1

- Added `.bs-row-pad` to add default padding between columns in a row
- Added secondary and complement button classes
- Added variables and classes for secondary and complement colors
- Added `_palette.scss` for color palette schemes 
- Changed `.bs-padded` to `.bs-padding` for naming consistency

### 2.0

- Modified media query breakpoint variables to match UIkit's style
- Added `.bs-margin-*` classes 
- Added `.bs-block` class and variables for padded block elements
- Added `!default` tags to all variable declarations
- Added animation classes from Animate.css
- Added `.bs-col-{percentage}` classes for 25%, 33%, 50%, 66%, and 75% widths as alternative to custom grid
- Added `.bs-col-large-*` classes to allow for multiple column sizes across devices
- Removed the 'ed' ending from the **center** and **shadow** classes
- Removed external Roboto font dependency and changed default to Helvectica


### 1.2.1

- Added `.bs-wide-nav-menu` class to `_navigation.scss` for full width navigation dropdowns