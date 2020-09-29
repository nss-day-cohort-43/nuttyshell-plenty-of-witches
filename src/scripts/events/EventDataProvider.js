// This will hold the local events so we can slice it in the useEvents() function
let localEvents = [];
const eventHub = document.querySelector('.dashboard');

const dispatchStateChangeEvent = () => {
  eventHub.dispatchEvent(new CustomEvent('eventStateChanged'));
};

// This will be for grabbing the events from our local json server -
export const getEvents = () => {
  return fetch('http://localhost:8088/events?_expand=user')
    .then((response) => response.json())
    .then((parsedEvents) => {
      localEvents = parsedEvents;
    });
};

// This will return a copy of the localEvents so that we can change it without changing the original array.
export const useEvents = () => localEvents.slice();

// We will need a saveEvents() - which will push the new user created event.
export const saveEvents = (event) => {
  return fetch('http://localhost:8088/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(event),
  });
  // .then we want to update our aside bar
  // .then dispatch an event that says we need to re-render the aside
};

export const deleteEvent = (eventId) => {
  return fetch(`http://localhost:8088/events/${eventId}`, {
    method: 'DELETE',
  })
    .then(getEvents)
    .then(dispatchStateChangeEvent);
};
