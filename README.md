# Odin - Calculator

Our final project is going to combine everything you’ve learned so far: you’re going to make an on-screen calculator using JavaScript, HTML, and CSS.

## Review

This project was NOT EASY. It started badly from teh start... A lot of online calcs use grid CSS for the buttons. I wanted to use Flexbox only and had to find a trick for the buttons.
I used the flex property to have the buttons fill all the space, and each buttons has a minimun width.

Creating the mathematical function and `operate` was not an issue. The event listenner went well, still using the bubbling property. Adding the decimal and negative sign was also done quickly.

Then came the behavior logic , with `prevNum` `prevOperation` etc.. At first I used flags, `opeFlag` and `equalFlag`, which were Boolean indicating if an operation has been clicked, or other

Then I tried to do without those flags. A rewritten the code with huge difficulties. When fixing something, something else got broken. I had to use a cop-out for the equal sign.

And then I finally check the number length, with an exponential form if needed


## Links

- [Repo](https://github.com/RagingD0nkey/odin-calculator)
- [Live](https://ragingd0nkey.github.io/odin-calculator)