import { deleteEvent, useEvents } from './EventDataProvider.js';
import { RenderEventList } from './EventList.js';

const eventHub = document.querySelector('.dashboard');

export const eventCardRender = (eventObj) => {
  return `
      <div class="EventCard" id="${eventObj.id}">
      <h2>${eventObj.eventName}</h2>
      <p>${eventObj.eventLocationCity}, ${eventObj.eventLocationState}, ${eventObj.eventLocationZip}<p><br>
      <p>${eventObj.date}</p>
      <button id="eventDeleteButton--${eventObj.id}">Delete your Event?</button>
      </div>`;
};

// This will render the cards for the events. Which we need to figure out how we're handling the dates within this string I'm running
// into timing issues.

eventHub.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.id.includes('eventDeleteButton--')) {
    const [prefix, selectedEventId] = clickEvent.target.id.split('--');
    deleteEvent(selectedEventId).then((_) => {
      let updatedEventLogArray = useEvents();
      RenderEventList(updatedEventLogArray);
    });
  }
});
