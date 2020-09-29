import { LoginForm } from './auth/LoginForm.js';
import { RegisterForm } from './auth/RegisterForm.js';
import { getEvents, useEvents } from './events/EventDataProvider.js';
import { renderNewEventForm } from './events/EventForm.js';
import { RenderEventList, loadEvents } from './events/EventList.js';
import { Nutshell } from './Nutshell.js';
import { ArticleForm } from './articles/ArticleForm.js';
import { ArticleList } from './articles/ArticleList.js';
console.log('Plenty of Witches!');

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
LoginForm();
RegisterForm();
ArticleForm();
ArticleList();
Nutshell();

let currentUser = parseInt(sessionStorage.getItem('activeUser'));
const webpageLoadAction = () => {
  if (currentUser) {
    document.querySelector('.dashboard').style.display = 'block';
    document.querySelector('.auth--login').style.display = 'none';
    document.querySelector('.auth--register').style.display = 'none';
  } else {
    document.querySelector('.dashboard').style.display = 'none';
    document.querySelector('.auth--login').style.display = 'block';
    document.querySelector('.auth--register').style.display = 'block';
  }
};
window.onload = webpageLoadAction();
