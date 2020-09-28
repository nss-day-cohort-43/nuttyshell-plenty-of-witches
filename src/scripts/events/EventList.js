import { eventCardRender } from './Event.js';
import { getEvents, useEvents } from './EventDataProvider.js';
import { renderNewEventForm } from './EventForm.js';

const eventHub = document.querySelector('.dashboard');
let eventListArray = [];

export const RenderEventList = () => {
  const eventContainerDomTarget = document.querySelector('.eventsContainer');
  let eventListHtmlHolder =
    '<button id="newUserEvent--createEventFormButton">Create a new event?</button>';
  getEvents().then((_) => {
    eventListArray = useEvents();

    eventListArray.forEach((eventObj) => {
      eventListHtmlHolder += eventCardRender(eventObj) + ' ';

      return (eventContainerDomTarget.innerHTML = eventListHtmlHolder);
    });
  });
};

eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id.includes('--createEventFormButton')) {
    renderNewEventForm();
  }
});
