import { deleteEvent, getEvents, useEvents } from './EventDataProvider.js';
import { RenderEventList } from './EventList.js';

const eventHub = document.querySelector('.dashboard');

// This function creates a event card that can be styled. It takes an Event object as a param.
export const eventCardRender = (eventObj) => {
  let eventPlanner;
  return `
      <div class="EventCard" id="${eventObj.id}">
      <h1>${eventObj.eventName}</h1>
      <p>${eventObj.eventLocationCity}, ${eventObj.eventLocationState}, ${
    eventObj.eventLocationZip
  }<p>
      <p>${new Date(eventObj.date).toUTCString('en-US')}</p>
      <p>The Event Planner is ${eventObj.user.username}</p>
      <button class="eventWeatherButton" id="eventWeatherButton--${
        eventObj.id
      }">Weather?</button>
      ${deleteButtonLogic(eventObj)}
      </div>`;
};
// This function creates the first event card in the event container - Making it easier to see how things work. It takes an Event object as a param.
export const firstEventCardRender = (eventObj) => {
  let eventPlanner;
  return `
      <div class="FirstEventCard" id="${eventObj.id}">
      <h2>${eventObj.eventName}</h2>
      <p>${eventObj.eventLocationCity}, ${eventObj.eventLocationState}, ${
    eventObj.eventLocationZip
  }<p>
      <p>${new Date(eventObj.date).toUTCString('en-US')}</p>
      <p>The Event Planner is ${eventObj.user.username}</p>
      <button class="eventWeatherButton" id="eventWeatherButton--${
        eventObj.id
      }">Weather?</button>
      ${deleteButtonLogic(eventObj)}
      </div>`;
};

// This will render the cards for the events. Which we need to figure out how we're handling the dates within this string I'm running
// into timing issues.

eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id.includes('eventDeleteButton--')) {
    const [prefix, selectedEventId] = clickEvent.target.id.split('--');
    deleteEvent(selectedEventId)
      .then(getEvents)
      .then((_) => {
        let updatedEventLogArray = useEvents();
        RenderEventList(updatedEventLogArray);
      });
  }
});

// this checks to see if the current user that's logged in owns an event. And if the active user does, it will render the delete button on their events allowing them to edit them.
const deleteButtonLogic = (eventObj) => {
  if (
    parseInt(eventObj.user.id) ===
    parseInt(sessionStorage.getItem('activeUser'))
  ) {
    return `<button class="eventDeleteButton" id="eventDeleteButton--${eventObj.id}" class="eventDeleteButton">Delete your Event?</button>`;
  } else {
    return "<p>This isn't your event</p>";
  }
};
