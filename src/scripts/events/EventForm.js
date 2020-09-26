import { getEvents, saveEvents } from './EventDataProvider.js';

const stateArray = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

const renderStateDropDown = (stateArray) => {
  return `${stateArray
    .map((state) => {
      return `<option value="${state}">${state}</option>`;
    })
    .join(' ')}`;
};

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
						<label for="stateDropDown">State</label>
						<select name="stateDropDown" id="stateDropDown">
							<option value="0">Pick a State</option>
  						${renderStateDropDown(stateArray)}
						</select>
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
    const savedUserEventState = document.querySelector('#stateDropDown').value;
    const savedUserEventZip = document.querySelector(
      '#newUserEvent--eventLocationZip'
    ).value;
    const savedUserEventDate = document.querySelector('#newUserEvent--date')
      .value;
    const savedLoggedInUserId = sessionStorage.getItem('activeUser');

    if (
      savedUserEventName === '' ||
      savedUserEventCity === '' ||
      savedUserEventState === '0' ||
      savedUserEventZip === '' ||
      savedUserEventZip.length > 5 ||
      // savedUserEventZip.test(/^[0-9]+$/) === false ||
      savedUserEventDate === ''
    ) {
      window.alert('Yo fill out yo shit witch');
    } else {
      let newUserEvent = {
        userId: savedLoggedInUserId,
        eventName: savedUserEventName,
        eventLocationCity: savedUserEventCity,
        eventLocationState: savedUserEventState,
        eventLocationZip: savedUserEventZip,
        date: savedUserEventDate,
      };
      saveEvents(newUserEvent).then(getEvents).then(renderNewEventForm);
    }
  }
});
