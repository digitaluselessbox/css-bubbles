# Digital Useless Box - CSS Bubbles Animation

## Setup

You need **npm** to initialise this projekt. Clone or download this project
and simply run the following:

```shell
npm install
```

## Grunt
After that you can use grunt to create the css files for the projekt. There is 
a file watcher witch register all changes to the scss files and recreate the 
css files.

you have the following grunt task:
- default -> dev
- dev
- build

## Demo

[https://digitaluselessbox.com/demo/css-bubbles/](https://digitaluselessbox.com/demo/css-bubbles/)

## HTML

Each bubble field is surrounded by a wrapper. The wrapper contains the big
bubble with link and logo. Beside the big bubble there are 4 small bubbles. 

## CSS
The position of the bubble wrapper is set **"relative"**. The position of the 
small bubbles is set **"absolute"**. Each of the small bubbles has a fixed basic
position.

The small bubbles are animated with two css-animations. The color and the 
position is changed. Thereby a pulsating movement is simulated.

## Animation Configuration
Of course it would be an advantage if all bubbles have a different animation,
so that a kind of randomness is created. The problem is the configuration of 
the animations. To get this randomness you have to define the animation for 
each bubble individually with different start and run times. If you have 
4 bubbles with 4 sub-bubbles, you have 16 animation configurations.

To get around this, only one CSS-animation is created, which is filled with 
variables for **"animation-duration"** and **"animation-delay"**.

## Parameter Animation
1. animation_name
2. animation_duration
3. animation timing function
4. animation delay

## CSS Variables
We take advantage of the fact that CSS variables are dependent on selectors. 
So we set a multiplier for each bubble and each sub-bubble.

The animation is placed directly on the sub-bubbles and because of the 
selector dependent variables we always use the appropriate multiplier for
each sub-bubble.

## Example of a sub-bubble configuration

```css
.subbubble_x{ 
  --sub-multiplicator: 1; 
  --animation delay offset: 1s; 
  --animation-duration-offset: 1s; 
  --position-left-offset: 10px; 
  --position-top-offset: 10px; 
}
```

In theory, this configuration can also be used on the large bubbles.

## Licence

Published under the MIT Licence