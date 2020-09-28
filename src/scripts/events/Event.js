import { deleteEvent, useEvents } from "./EventDataProvider.js";
import { RenderEventList } from "./EventList.js";

const eventHub = document.querySelector(".dashboard");

export const eventCardRender = (eventObj) => {
	let eventPlanner;
	return `
      <div class="EventCard" id="${eventObj.id}">
      <h1>${eventObj.eventName}</h1>
      <p>${eventObj.eventLocationCity}, ${eventObj.eventLocationState}, ${
		eventObj.eventLocationZip
	}<p>
      <p>${eventObj.date}</p>
      <p>The Event Planner is ${eventObj.user.username}</p>
      <button class="eventWeatherButton" id="eventWeatherButton--${
				eventObj.id
			}">Weather?</button>
      ${deleteButtonLogic(eventObj)}
      </div>`;
};

export const firstEventCardRender = (eventObj) => {
	let eventPlanner;
	return `
      <div class="FirstEventCard" id="${eventObj.id}">
      <h2>${eventObj.eventName}</h2>
      <p>${eventObj.eventLocationCity}, ${eventObj.eventLocationState}, ${
		eventObj.eventLocationZip
	}<p>
      <p>${eventObj.date}</p>
      <p>The Event Planner is ${eventObj.user.username}</p>
      <button class="eventWeatherButton" id="eventWeatherButton--${
				eventObj.id
			}">Weather?</button>
      ${deleteButtonLogic(eventObj)}
      </div>`;
};

// This will render the cards for the events. Which we need to figure out how we're handling the dates within this string I'm running
// into timing issues.

eventHub.addEventListener("click", (clickEvent) => {
	if (clickEvent.target.id.includes("eventDeleteButton--")) {
		const [prefix, selectedEventId] = clickEvent.target.id.split("--");
		deleteEvent(selectedEventId).then((_) => {
			let updatedEventLogArray = useEvents();
			RenderEventList(updatedEventLogArray);
		});
	}
});

const deleteButtonLogic = (eventObj) => {
	if (
		parseInt(eventObj.user.id) ===
		parseInt(sessionStorage.getItem("activeUser"))
	) {
		return `<button class="eventDeleteButton" id="eventDeleteButton--${eventObj.id}" class="eventDeleteButton">Delete your Event?</button>`;
	} else {
		return "<p>This isn't your event</p>";
	}
};
