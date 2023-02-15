<h1 align="left">Portfolio Website</h1>

<img src="src/assets/readme/responsive.png">

This project was created to be my online work portfolio, displaying my attributes, skills and completed projects as a junior web developer.
I used the JavaScript library called React to build this single page site along with the traditional front-end technologies such HTML, CSS and JavaScript.
Sanity was used to handle the backend and the full site is hosted on netify.

The live link can be found here: https://daryl-portfolio.netlify.app/

---

# Table of Contents:

- [Technologies Used](#technologies-used)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features left to implement](#features-left-to-implement)
- [Bugs](#bugs)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowlegments](#credits)

---

# Technologies Used

- ## Programming Languages, Libraries and Editors

  - [HTML5](https://en.wikipedia.org/wiki/HTML5)
  - [CSS3](https://en.wikipedia.org/wiki/CSS)
  - [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
  - [SASS](https://sass-lang.com/)
  - [React](https://reactjs.org/)
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [Git](https://git-scm.com/)
  - [Github](https://github.com/)

- ### Tools Used:

  - [Sanity](https://www.sanity.io/)
  - [Google Fonts](https://fonts.google.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [React Icons](https://react-icons.github.io/react-icons/)

[Back to Top](#table-of-contents)

---

# Features

## Existing Features

- Home

  - First view of the site the visitor is shown 3 moving elements, a name banner, profile image and three circles.
  - The elements are animated using framer motion and varry slightly using different animations and load times.
  - The name banner has a greeting to the page with my name and my job title.
  - The profile image is png of my favourite video game character to be later replaced.
  - The three circles have contained in them the three languages used for front end development varring in sizes.

<img width="50%" src="src/assets/readme/home.gif">

<br/>

- About

- This section highlights my attributes as a developer and a person.
- Uses framer motion to highlight each attibute as the mouse scrolls over.

<img width="50%" src="src/assets/readme/about.gif">

<br/>

- Skills and Expereinces

- This section has the languages, frameworks, libraries and databases that I have used.
- Framer motion is used to highlight each skill as they are scrolled over.
- It also has my work experience and the tasks I would undergo in them.

<img width="50%" src="src/assets/readme/skills.gif">

<br/>

- Projects

- This section holds the links to both the codebase and live site to my portfolio projects.
- Framer motion is used to let the visitor hover over a selected project and has choices to open each link on a new page.
- <img width="50%" src="src/assets/readme/proj.gif">

- Each project has tags and can be filtered by clicking on one of the choices above.
- The most prevelent tag for each project is seen bellow the project image.
- <img width="50%" src="src/assets/readme/proj-filter.gif">

- If a chosen filter has no project with that tag another image is shown.
- This lets the visitor know that I have more projects in the works.
- <img width="50%" src="src/assets/readme/proj-filter-2.gif">

<br/>

- Contact Me

- This section is a way for the visitor to get in touch with me by having my contact details.
- My email and phone number are clickable links that redirect accordingly.
- There's also a form element that the visitor can leave their details and this data is sent to the sanity backend which I can view.

<img width="50%" src="src/assets/readme/contact.gif">

<br/>

[Back to Top](#table-of-contents)

## Features left to Implement

- Possible features to add in future updates:

- Have the form data be sent to my personal email using emailJs.
- Get data from co-workers to fill out the testimonial section which is currently not being implemented.

[Back to Top](#table-of-contents)

---

# Bugs

-

## Bugs Solved

---

# Deployment

The build folder was generated and used to deploy this project to Netify.

## Visual Studio Code

- This project was created locally using Visual Studio Code and used git to connect the local files to the github repository on my account.
- When commiting any file changes both the local and online codebase was updated.
- A quick setup to acheive this:
  - Create a repositry on github and a new folder in your local Visual Studio Code
  - In your local workspace terminal type `git init`
  - Then `git add .` and `git commit -m "first commit"`
  - Then `git branch -M main`
  - Then `git remote add origin https://github.com/username/reponame.git`
  - Finally `git push -u origin main`

## Github and Gitpod

- Forking the GitHub Repository

  - If you want to make changes to your repository without affecting it, you can make a copy of it by 'Forking' it. This ensures your original repository remains unchanged.

  - Find the relevant GitHub repository
  - In the top right corner of the page, click the Fork button (under your account)
  - Your repository has now been 'Forked' and you have a copy to work on
  - Cloning the GitHub Repository

- Cloning your repository will allow you to download a local version of the repository to be worked on. Cloning can also be a great way to backup your work.

  - Find the relevant GitHub repository
  - Press the arrow on the Code button
  - Copy the link that is shown in the drop-down
  - Now open Gitpod & select the directory location where you would like the clone created
  - In the terminal type 'git clone & then paste the link you copied in GitHub
  - Press enter and your local clone will be created.

## Sanity

- Sanity was used to create the backend for this project.

## Deployment to Netify

[Back to Top](#table-of-contents)

# Credits

- [JavaScript Mastery](https://www.youtube.com/watch?v=3HNyXCPDQ7Q) for the tutorial for creating and deploying this site.

## Media

- [Unsplash](https://unsplash.com/) for homepage image.
- [Ezgif](https://ezgif.com/maker) to create the gifs.

# Acknowledgements

[Back to Top](#table-of-contents)
