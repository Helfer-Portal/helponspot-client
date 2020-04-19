# Storybook

Use Storybook to see our UIKit matching to the Style Guide. Invoke with the command `yarn storybook` and open the storybook in the browser, see hints in commandline.

# Installation

Checkout the project, go to the root directory, run yarn install

## Running the app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

###Project Guidelines

These guidelines are motivated by the need to mitigate the consequences of the coronavirus. Therefore, our focus is on quickly developing a reliable product that we can refine later.

We aim to focus on development of new features, and making sure they work properly. As a consequence, we try to keep our code simple and readable.

We also recognize that we are not seasoned experts, and hence we try to remain humble and ready to embrace better solutions to our goals.

However, we also care about sustainability of this project, as many open source efforts are abandoned after a short-lived phase of enthusiasm. This is why we try to keep up an enjoyable atmosphere for development, where we do not argue needlessly about pointless details and leave freedom for each contributor as much as possible (e.g. if you like to use Typescript, feel free to do so in your code)

###Contribution Guidelines

For a better understanding of the project, please have a look at our user flows [here](https://bitrix24public.com/b24-c5kaqs.bitrix24.de/docs/pub/188f369466feb2c949730671b4dbce98/default/?&), and the design page [here](https://www.figma.com/file/DV0E2lCqq39fhdDG6v86Ru/Helferportal?node-id=1%3A1324). How we organize the code is explained here.

If you would like to contribute, please check one of the issues on the github board, and submit a new pull request. We will review and give you feedback within one day; after doing this a couple times, you become a team member and can also do reviews if you like.

To make cooperation easier, please install Node version 13.6.0

###Code Organization

We use React + Tailwind for better CSS reusability.  
Frequently used design components are present in the components/UIKit folder.  
Higher level react components such as Dashboards, Maps, Forms are present in the /features folder. If you are working on a new route, this is where you should add the associated component.
Routes are collected in /router/index.js
For State Management we are using React’s Context API for now; see RequestFormStore and its usages for an example of how we employ it.  
Under the folder public, there should be static files. These are for example a “favicon”. These files are not required by anything under source and therefore not bundled with webpack. Files which are needed by your components (e.g. Icons for the Tab Bar… ) should live under src/assets. These are included in the bundle.

TODO: test section

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
