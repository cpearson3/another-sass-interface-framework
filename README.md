# Bootsmooth
## Version 2.1.0

Bootsmooth is another UI Framework built with Sass / SCSS.

## Building

NPM, Gulp, Browserify, and Sass are used build Bootsmooth.

To get started:

    git clone https://github.com/cpearson3/bootsmooth.git
    npm install
    gulp build

Include `dist/bootsmooth.min.css` in your HTML or `scss/bootsmooth.scss` in your SCSS file to get started.

Visit the [web page](http://www.bootsmooth.com) for more documentation and examples.

## Changelog

### 2.1.0
- Navigation toggle elements can be set by data-nav-toggle attribute
- Updated gulpfile for build process of bootsmooth.js
- Fixed text alignment of sub menu elements 
- Added Static Width Classes `.bs-25, .bs-75. .bs-33, .bs-66`
- Fixed media query for `.bs-show* .bs-hide*` for large displays
- Added Small and Medium Breakpoint Width Columns Classes `.bs-container-small, .bs-container-medium` 

### 2.0.4, 2.0.5
- Fixed width of radio and checkbox inputs
- Changed gutter of first and last columns in `.bs-gutter` (formerly `.bs-row-pad`)
- Added 2/3-width (66.66%) column class `.bs-col-66` and `.bs-col-large-66`
- Fixed mobile padding for `.bs-col-*` classes

### 2.0.3
- Added color border and shadow classes
- Added more variables for common styles to allow for more customization
- Added flat button color classes

### 2.0.2
- Added foreground color variable to default shadow config for `.bs-shadow`
- Removed the border from `.bs-form-input` and replaced it with `.bs-shadow`
- Removed the border from `.bs-button-flat` and replaced it with `.bs-shadow`

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