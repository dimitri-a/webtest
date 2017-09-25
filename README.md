# [FOX](http://www.foxsports.com.au)

## Welcome to the Web Front End Team test

### Introduction

In this test, we are looking at your ability to write elegant, efficient and semantically correct JavaScript and CSS code.

Please also be aware that Chrome can't deal with local json files, so task 2 won't work in Chrome unless you are running it through a local webserver.

### Rules

* Try to limit the use of jQuery to fetching data in the [json-module](#json-module) task. For everything else, please write your code in functional/prototype JavaScript.
* Do NOT alter the `style.css` file in the __css__ directory any way
* Do NOT alter the raw HTML markup in this document, other than the use of JavaScript and CSS.
* Do place your code in the provided `script.js` and `style.css` files in the __root__ of this project.
* Transpilation is allowed. If you transpile, please include your source files. Don't waste too much time building bundling pipelines.
* Submit your answer to the repo.
* Test is not timed, but we expect it to be finished in under 2 hours.

### Tasks

There are 2 parts to this test:

* [image-hover-module](#image-module)
* [json-module](#json-module)

#### Image Hover Module

1. On page load, it should look like:

![example1.1.jpg](images/example1.1.jpg)

2. When the user hovers over the image, the "hover-text" div should display with white text on a blue transparent background, over the image - like this:

  ![example1.2.jpg](images/example1.2.jpg)
3. When the mouse leaves the image hover-text, it should go back to just the image displaying.

#### JSON Module

1.                                 Fetch the contents of the JSON files in this zip called [players.json](data/players.json) and [stats.json](data/stats.json)
2. Parse the JSON files using a table like this, using the `short_name`, `matches`, and `tries` fields:

  ![example2](images/example2.jpg)

  Border color in the table is #eee.
