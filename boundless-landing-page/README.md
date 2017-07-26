# Boundless landing page
This is a sample landing page for the Boundless UI test.

## Installation
This project assumes that you have:
  * The current LTS release of node js
  * The yarn package manager installed globally
  * gulp installed globally (gulp is included as a dependency so you can use the local binary if you wish)

```bash
yarn install
gulp
```
## Installation
```bash
yarn add boundless-ui-base --dev # Assuming we have some kind of private npm repo

# If no local repo, in the root of the ui-base project run:
yarn link

# in this project's root directory:
yarn link "boundless-ui-base"

# Start developing.  Changes in either project will be reflected on the page.
gulp
```