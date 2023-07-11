# Scroll Animation
This is a simple scroll animation example that displays a set of boxes with content. As the user scrolls down the page, the boxes slide into view from the sides. The animation is triggered when the top of each box reaches a specific position relative to the viewport.

## Live site:
https://silviasaverino.github.io/Scroll-Animation/

## Animation Logic:
The animation is implemented using JavaScript. When the page loads or when the user scrolls, the checkBoxes function is triggered. It checks the position of each box relative to the viewport using getBoundingClientRect(). If the top of a box is within a certain threshold (defined as (window.innerHeight / 5) * 4), the box is given the "show" class, which triggers the slide animation defined in the CSS.