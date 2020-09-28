import { eventCardRender, firstEventCardRender } from "./Event.js";
import { getEvents, useEvents } from "./EventDataProvider.js";
import { renderNewEventForm } from "./EventForm.js";

const eventHub = document.querySelector(".container");
let eventListArray = [];
let soonestEvent = 99999999999999999999999;

export const RenderEventList = () => {
	const eventContainerDomTarget = document.querySelector(".eventsContainer");
	let eventListHtmlHolder =
		'<button id="newUserEvent--createEventFormButton">Create a new event?</button> <div class="eventScrollBox">';
	let firstEventObj;
	getEvents().then((_) => {
		eventListArray = useEvents();

		eventListArray.sort((a, b) => {
			return a.date - b.date;
		});
		console.log("this should be the sorted array", eventListArray);
		firstEventObj = eventListArray.shift();
		console.log("this should be one object", firstEventObj);
		eventListHtmlHolder += firstEventCardRender(firstEventObj);
		eventListArray.forEach((eventObj) => {
			eventListHtmlHolder += eventCardRender(eventObj) + " ";

			return (eventContainerDomTarget.innerHTML =
				eventListHtmlHolder +
				"</div> <div class='newUserEventFormModal'>u here?</div>");
		});
	});
};

eventHub.addEventListener("click", (clickEvent) => {
	if (clickEvent.target.id.includes("--createEventFormButton")) {
		renderNewEventForm();
	}
});

export const loadEvents = () => {
	eventHub.addEventListener("userAuthenticated", (e) => {
		RenderEventList();
	});
};
