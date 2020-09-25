export const eventCardRender = (eventObj) => {
	return `
      <div class="EventCard" id="${eventObj.id}">
      <h2>${eventObj.eventName}</h2>
      <p>${eventObj.eventLocationCity}, ${eventObj.eventLocationState}, ${eventObj.eventLocationZip}<p><br>
      <p>${eventObj.date}</p>
      <button id="eventDeleteButton--1">Delete your Event?</button>
      </div>`;
};

// This will render the cards for the events. Which we need to figure out how we're handling the dates within this string I'm running
// into timing issues.
