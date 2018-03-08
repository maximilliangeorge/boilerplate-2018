# Boilerplate 2018
Opinionated boilerplate for web projects

## Install

Clone the repository.

`git clone git@github.com:maximilliangeorge/boilerplate-2018.git`

Rename the directory.

`mv ./boilerplate-2018 ./my-project`

Enter into your directory.

`cd ./my-project`

Optionally, pick some other boilerplate. See below for different branches.

`git checkout <desired branch>`

Install dependencies.

`npm install`

When you're done, make sure to remove `.git` to make it your own project.

`rm -rf ./.git`

All set! Run `gulp` to start developing.


## Branches

### Master

Basic HTML5 setup with the following:
- jQuery
- Vue.js
- Gulp build process (Sass, BrowserSync, script concatenation and minification)

### Wordpress

A barebones Wordpress theme with the same build tools and dependencies as `master`
