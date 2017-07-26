# Boundless ui-base
Base styles for Boundless web properties.  This package should be added as a dependency of any projects that need a html and css markup.
It is intended to be used during development by linking the local package.  This is intended to encourage development of components in an environment where we can mimic a variety of contexts on one page.  It should also help keep the base library well updated.

## Installation
```bash
yarn add boundless-ui-base --dev # Assuming we have some kind of private npm repo
:
# If no local repo, in the root of this project run:
yarn link

# in the project where you will use the repository:
yarn link "boundless-ui-base"
```

## Usage
```bash
# After the project starts, you can navigate to the indicated url to see a sample page containing all components
gulp
#[06:50:53] Using gulpfile ~/code/boundless/boundless-ui-base/gulpfile.js
#[06:50:53] Starting 'cleanCss'...
#[06:50:53] Starting 'libs'...
#[06:50:53] Starting 'html'...
#[06:50:53] Starting 'images'...
#[06:50:53] Starting 'watch'...
#[06:50:53] Finished 'watch' after 38 ms
#[06:50:53] Starting 'browser-sync'...
#[06:50:53] Finished 'browser-sync' after 19 ms
#[Browsersync] Access URLs:
# --------------------------------------
#       Local: http://localhost:3000
#    External: http://192.168.1.106:3000
# --------------------------------------
#          UI: http://localhost:3001
# UI External: http://192.168.1.106:3001
# --------------------------------------
```