# University of Utah Climbing Team Website

- Authors: Julia Duffy, Ethan Laynor
- Start Date: 6/15/24

## Overview

This is the official website for the University of Utah Climbing Team. This website is designed to provide students with information about the club and serve as a place to post club resources (sign-up forms, team constitution, etc). The website is built using HTML, CSS, and JavaScript, with a focus on responsive design and clarity.

## Developer Handoff

This website was built to be easy to maintain and update by future climbing team board members. A guide for future maintainers can be found here:

> Developer Guide: https://docs.google.com/document/d/1uixyDznXhdAYeMwqLKP8yw4AI99kk6MEJ7Yr-KSwGQQ/edit?tab=t.0

The guide covers:

- Installing VS Code and Git
- How the site is structured (HTML/CSS/JS overview)
- Updating content and pushing changes to the GitHub repo
- GitHub Pages overview
- How to run the site locally using LiveServer
- How our custom domain is managed (utahclimbingteam.com)
- How to test responsive design

## Features

### Interactive Menu Bar

- Hover effects highlight active links in red.
- Dropdown menus reveal subpages under “About” and “Contact.”
- The header is dynamically injected into each page using JavaScript.

### Responsive Design

- The site adapts to mobile and desktop screens.
- On small screens, the navbar collapses into a hamburger menu.
- Images and paragraph layouts adjust with screen size.

### Image Carousel

- Pages like `compteam.html` feature image carousels to showcase team photos.
- Navigation buttons allow users to cycle through featured images.

### Popups

- Optional popup feature on the home page to display important information.
- Popups are optionally dismissible and may link to other pages when clicked.

### Error Handling

- `<noscript>` fallback messaging for users without JavaScript.

### Maintainable Structure

- The header is stored in `header.html` and injected via `app.js`.
- Global styles are in `styles.css`.
- Pages use consistent class naming and modular structure.

### Email Signup

- Embedded MailerLite form on the Contact page for newsletter signups. (No longer active)

## Sources

1. CS50 lecture 8: https://youtu.be/ciz2UaifaNM?si=JW3cJmmhoUul2I5A

2. Fully responsive website tutorial: https://youtu.be/FazgJVnrVuI?si=PPeIccPg9HAzWN1c

3. Stack overflow post about including HTML on all pages of a website: https://stackoverflow.com/questions/33322508/include-html-navigation-bar-in-all-pages

4. Stack overflow post about including HTML on all pages using fetch api: https://stackoverflow.com/questions/57987543/how-do-i-use-the-fetch-api-to-load-html-page-with-its-javascript

5. Mailerlite (email list host): https://www.mailerlite.com/

6. Pop-Up Tutorial: https://www.w3schools.com/howto/howto_css_modals.asp?

7. Image Carousel Tutorial: https://blog.logrocket.com/build-image-carousel-scratch-vanilla-javascript
