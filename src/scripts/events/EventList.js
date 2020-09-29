import { eventCardRender, firstEventCardRender } from './Event.js';
import { getEvents, useEvents } from './EventDataProvider.js';
import { renderNewEventForm } from './EventForm.js';

const eventHub = document.querySelector('.container');
let eventListArray = [];
let soonestEvent = 99999999999999999999999;

// this will render the total event list - with all the events from the api will be rendered from this.
export const RenderEventList = () => {
  const eventContainerDomTarget = document.querySelector('.eventsContainer');
  let eventListHtmlHolder =
    '<button id="newUserEvent--createEventFormButton">Create a new event?</button> <div class="eventScrollBox">';
  let firstEventObj;
  getEvents().then((_) => {
    eventListArray = useEvents();
    if (eventListArray.length > 1) {
      eventListArray.sort((a, b) => {
        return a.date - b.date;
      });
    }
    firstEventObj = eventListArray.shift();
    eventListHtmlHolder += firstEventCardRender(firstEventObj);
    if (eventListArray.length >= 1) {
      eventListArray.forEach((eventObj) => {
        eventListHtmlHolder += eventCardRender(eventObj) + ' ';

        return (eventContainerDomTarget.innerHTML =
          eventListHtmlHolder + '</div>');
      });
    } else {
      return (eventContainerDomTarget.innerHTML =
        eventListHtmlHolder + '</div>');
    }
  });
};

// This will be the one function that is called in nutshell - this makes sure that the user is logged in before they can see the events.
export const loadEvents = () => {
  RenderEventList();
};
