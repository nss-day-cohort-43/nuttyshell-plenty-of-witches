// This will hold the local events so we can slice it in the useEvents() function
let localEvents = [];

// This will be for grabbing the events from our local json server -
export const getEvents = () => {
	return fetch('http://localhost:8088/events')
		.then((Response) => Response.json())
		.then((parsedEvents) => {
			console.table(parsedEvents);
			localEvents = parsedEvents;
		});
};

// This will return a copy of the localEvents so that we can change it without changing the original array.
export const useEvents = () => {
	return localEvents.slice();
};

// We will need a saveEvents() - which will push the new user created event.
