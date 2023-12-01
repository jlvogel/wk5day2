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