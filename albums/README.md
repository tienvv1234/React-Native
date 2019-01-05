install java jdk, python 2, android studio

react-native init albums (init project react-native with name is albums)

set android sdk home : C:\Users\Admins\AppData\Local\Android\Sdk

android studio tool to set up an android emulator.

create emulator: tool --> ADV manager

need add JAVA_HOME User Variables for computer and add Path variable for C:\Users\Admins\AppData\Local\Android\Sdk\platform-tool

react-native run-android(new window is react packager) will take all of our javascript code compresses it all down into a single javascript file and then make it avaiable to the device

install npm i --save-dev eslint-config-rallycoding

react and react native
- react: Knows how a component should behave. knows how to take a bunch of components and make them work together
- react-native: knows how to take the output from a component and place it on the screen, provides default core components(image, text)

a component is a javascript function that return some amount of JSX react native is going to take our component and render it to screen it's mean it will run our component it will take the JSX that get returned and it will decide based on the JSX returned what the content should apper on screen

- App component is root component and only App component uses app registry