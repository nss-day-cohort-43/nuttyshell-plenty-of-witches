const eventHub = document.querySelector('.dashboard');

export const renderNewEventForm = () => {
	// this will render the new event form - so it needs to render a new form with fields for the user to enter
	let eventsContainerTarget = document.querySelector('.eventsContainer');
	eventsContainerTarget.innerHTML = `
  <section class="newUserEventForm">
            <h4>Please enter the name for your event</h4>
            <input id="newUserEvent--eventName" type="text" placeholder="Enter your event name">
            <h4>Please enter the city that your event is in</h4>
            <input id="newUserEvent--eventLocationCity" type="text" placeholder="Enter the events city">
            <h4>Please enter the state that your event is in</h4>
            <input id="newUserEvent--eventLocationState" type="text" placeholder="Enter the events state">
            <h4>Please enter the Zip that your event is in</h4>
            <input id="newUserEvent--eventLocationZip" type="text" placeholder="Enter the events zip code">
            <h4>Please enter the event's date</h4>
            <input id="newUserEvent--date" type="date" placeholder="Enter the events date">
            <button id="newUserEvent--createEventButton">Create Event!</button>
  </section>
  `;
};

eventHub.addEventListener('click', (clickEvent) => {
	if (clickEvent.target.id.includes('--createEventButton')) {
		const savedUserEventName = document.querySelector(
			'#newUserEvent--eventName'
		).value;
		const savedUserEventCity = document.querySelector(
			'#newUserEvent--eventLocationCity'
		).value;
		const savedUserEventState = document.querySelector(
			'#newUserEvent--eventLocationState'
		).value;
		const savedUserEventZip = document.querySelector(
			'#newUserEvent--eventLocationZip'
		).value;
		const savedUserEventDate = document.querySelector('#newUserEvent--date')
			.value;
	}
});
