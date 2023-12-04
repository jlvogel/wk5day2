// Week 5 - Day 2 - Lecture DOM

// Section 1

// DOM Events JS

//Learning Objectives

// Students will be able to:

//  Add event listeners for events such as click
//  Explore the event object
//  Explain event bubbling
//  Use event bubbling to implement event delegation
//  Stop an event from bubbling

// Roadmap

//  What are DOM events?
//  Setup
//  What's an event listener
//  Our first event listener
//  The event object
//  Creating a new element
//  Event bubbling
//  Event delegation
//  Removing event listeners


// What are DOM Events?

//  DOM events are the bedrock of interactivity on web
//  pages

//  DOM events enable us as developers to implement
//  event-driven programming. This programming paradigm
//  is such that much of our code runs in response to
//  events being triggered during run-time.


// What are DOM Events?

//  Lots of evens are being generated within the browser,
//  for example, when:

//    A user moves or clicks the mouse
//    A user presses a key
//    When a form is submitted
//    When the page has finished loading or has been
//     resized
//    etc...

//  Take a gander https://developer.mozilla.org/en-US/docs/Web/Events
// at the type and sheer number of events.

// What's an Event Listener?

//  An event listener is a function, more specifically, a
//  callback function, that is called when an event fires.

//  Event listeners may also be referred to as event
//  handlers.

//  There are three different approaches for registering
//  event listeners:

//    In the HTML (inline):
//    <button id="reset-btn" onclick="reset()">

//    Assigning to DOM elements' properties:
//    resetBtn.onclick = reset;

//    Calling addEventListener() on a DOM element


// What's an Event Listener?

//  Using the HTML approach (onclick="reset()") is
//  typically frowned upon because it requires that the
//  function be in the global scope. In addition, this, like
//  inline styling, kind of breaks the seperation of concerns
//  design principle.

//  The DOM element approach (resetBtn.onclick = reset;) is
//  better because the function does not have to be in global
//  scope, however...

//  The addEventListener approach is widely considered to be
//  the best practice because it has the flexibility of adding
//  multiple listener functions!


// What's an Event Listener?

//  Here is the common syntax for registering an event
//  listener for a given event:

//  element.addEventListener(<event-name>, <callback>, <use-capture>);

//    event-name is the name of the event (string)

//    callback is the function we want executed when the
//    event happens. When called by the JS engine, it will
//    be passed an event object as an argument.

//    use-capture is a boolean and is optional. It has to do
//    with event phases. We won't need to worry about it in
//    SEI but if you want to more, read the Event Phases section
//    of this article:
//    https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/


const btn = document.querySelector('button');
btn.addEventListener('click', function(evt) {
  // testing!
  console.log(evt);
  console.dir(evt);
});

// The event object

//  Examining the event object that was provided as an argument to our
//  event listener reveals lots of useful information about the event!

//  Of special interest are:

//    Several ...x and ...y properties that provide where the click occurred.

//    The target property, which holds a reference to the DOM element that
//    triggered (dispatched) the event.





//          ASIDE     MAKING FUNCTIONS IN CLASS 12/1/23           
////////////////////////////////////////////////////////////////////////////

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
// }

// // now let's fill an array with random values!

// const array = []

// for (i=0;i<=100;i++) {
//   array.push(getRandomInt(-100,100))
// }
// array.sort((a,b)=>a-b)
// const isElementPairEqualToSum = (array, sum)=>{
//   // we now have a sorted array, and a desired sum
//   // if the sum is greater than half the max value
//   // then we can return false right away because
//   // then there can't be a pair
//   console.log(array[-1])
//   if(2*array[0]<= sum){return false}

// }

// console.log(array)
// isElementPairEqualToSum(array,300)

// let arr = ["a","c","p","z","b"]
// arr.sort()
// str = ""
// for(let char of arr) {
//   str+=char
// }
// console.log(str)

// let sentence = "example for this function"

// sentence = sentence.split(" ")
// let newSentence = ""
// for(let word of sentence){
//   newSentence+=word[0].toUpperCase()+word.slice(1)+" "
// }
// console.log(newSentence)

///////////////////////////////////////////////////////////////////////


// Creating a new <li> element

//  If we want to add a new comment, we're going to need to
//  create a new <li> element.

//  Here's how we can do it using the document.createElement
//  method:

// btn.addEventListener('click', function(evt) {
//   const li = document.createElement('li');
//   console.log(li)
// });

// Note: At this point, the element is "in memory" only
// and is not part of the DOM (yet).

// Creating a new Comment

//  Okay, we have a new <li> element created and assigned to
//  a variable named li, but it has no content.

// We want to get whatever text the user has typed into the
//  <input> element.

//  As an exercise, find the property that holds the content of an
// <input>.

// --> ok looks like the property is value.

console.dir(document.querySelector('#input'));

// Creating a new Comment

//  So, now we can set the textContent of the new <li>:

// btn.addEventListener('click', function(evt) {
//   const li = document.createElement('li');
//   const inp = document.querySelector('input');
//   li.textContent = inp.value;
// });

// Creating a new Comment

//  Now the new <li> is ready to be added to the DOM!
//  Which element do we want to add the <li> to ?

//     --> I'm thinking to the <ul> element?

// Creating a new Comment

//  There are several ways to add DOM elements to the
//  document using JavaScript.

//  A common way to add new elements to another element is
//  by using the appendChild method like this:

btn.addEventListener('click', function(evt) {
  const li = document.createElement('li');
  const inp = document.querySelector('input');
  li.textContent = inp.value;
  // new code below
  if(li.textContent!=""){document.querySelector('ul').appendChild(li);};
  inp.value = "";
});

// Note that the new element is appended as the last child.

// Create a new Comment

//  Test it out -nice!
//   -->   Yeah it is nice - it's awesome creating elements
//         outside HTML haha

// The new comment has been added, but if we want to
// improve the UX, we have one more task - clear out the
// <input>.

//  One line of code is all it takes - you got this!
//    --> yeah it was just inp.value = ""; line added to
//        added to btn click event function


// Event bubbling

//  When an event occurs on an element, that event, whether it
//  is listened to on that element or not, bubbles up through the
//  DOM, all the way up to the document object.

// Document <--
//             |
//        Element <html>  <--
//                           |
//                      Element <body>  <--
//                                         |
//                                     Element <div>

// Event bubbling

//  All event listeners registered for the same event, such as
//  click, will be invoked along the path to the document element
//  -unless one of those listeners calls the event object's
//  stopPropagation method.

//  Why does JS bubble up (propagate) its events?...

// Event Delegation

//  Imagine a web app, like a game perhaps, with lots of
//  elements that need to respond to a click. It's possible there
//  could be tens, hundreds, or more of these elements.

//  That would be a lot of listeners, wouldn't it - not very efficient
//  at all.

//  Plus, every time a new element is added, the event listener
//  would also have to be registered!

// Event Delegation

//  Event bubbling allows us to implement what's known as
//  event delegation.

//  Event delegation allows us to register a single event listener
//  that can respond to events triggered by any of its
//  descendants. Much more efficent!

// Event Delegation

//  Let's register a listener (this time for kicks we'll use a named
//  function) on the <ul> that can respond to clicks on any of its
//  <li> s:

document.querySelector('ul').addEventListener('click', handleClick);

function handleClick(evt) {
  console.log(evt);
  evt.target.style.color = 'white'
}

//  Importantly, the event object's target property is set to the
//  actual element that was clicked!

// Event Delegation

//  Not only is event delegation more efficient, by it's very
//  design, it's dynamic - as descendants are added, they too will
//  be listened to!

//  Without event delegation, you would have to register a
//  listener every time a new element, such as when the
//  comment <li> is added.

// Event Delegation (Practice)

//  Practice: Write the code to change the color of the text of
//  a clicked comment.

//  Hint: DOM elements have a style property that's an object
//  with the CSS properties (named using camel-casing), e.g.,
//  myLi.style.fontSize .

//   --> Did it!! 
//   added evt.target.style.color = 'green' to function handleClick(evt) !!

// Removing event listeners

//  It's possible to remove an added event listener, however,
//  only if a named function was used as the callback:

btn.removeEventListener('click', handleClick);
// document.querySelector('ul').removeEventListener('click', handleClick);
//  This would remove the 'click' event listener ( handleClick )
//  that was registered on the btn element like this:
//  btn.addEventListener('click', handleClick);

// References
//  Event Developer Guide on MDN
//  https://developer.mozilla.org/en-US/docs/Web/Guide/Events