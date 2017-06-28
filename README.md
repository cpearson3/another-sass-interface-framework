# Another Sass Interface Framework (ASIF)
## Version 3.2

A starter project for building a simple responsive user interface framework

## Building

NPM, Gulp, Browserify, and Sass are required to build ASIF.

To get started, open a terminal:

    git clone https://github.com/cpearson3/another-sass-interface-framework.git NEW_PROJECT
    cd NEW_PROJECT
    npm install -g gulp
    npm insall
    gulp build

Include `dist/asif.min.css` in your HTML or `scss/ASIF.scss` in your SCSS file to get started.

Include `dist/asif.build.js` to use ASIF javascript components.

## Changelog

### 3.2

- Project renamed to ASIF from Bootsmooth (now the Bootsmooth WordPress theme)
- Added flexbox classes
- Side navigation component
- More variables for more consistent styles for typography elements
-

### 3.1.2
- Changed default modular scale ratio to 1.25

### 3.1.1
- Modified widths for the '.container' class in the grid module
- Added '.fullscreen' class to the positioning module for full view height elements
- jQuery is now bundled into the build process and is not required to be loaded separately

### 3.1.0
- New typography management with [modular scale](http://modularscale.com)
- Javascript components rewritten in ES2015

### 3.0.2
- Updated bootsmooth.js navigation component

### 3.0.1
- Updated bower.json and created 3.0.1 and dev branchs

### 3.0.0
- Removed '.bs-' from all classes
- Renamed button classes
- Grid is now based on [Materialize CSS](http://materializecss.com/grid.html)

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

## License

MIT License

Copyright (c) 2017 Clarence B Pearson III

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

