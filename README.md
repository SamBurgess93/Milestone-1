# BB Fitness

![Preview](assets/readme-assets/responsive.png)

[Link to the Live Project](https://samburgess93.github.io/Milestone-1/).

## Table of contents
1. [Introduction](#introduction)
2. [UX](#ux)
    1. [Ideal User Demographic](#ideal-user-demographic)
    2. [User Stories](#user-stories)
    3. [Development Planes](#development-planes)
    4. [Design](#design)
3. [Features](#features)
    1. [Design Features](#design-features) 
    2. [Existing Features](#existing-features)
    3. [Features to Implement in the future](#features-to-implement-in-the-future)
4. [Technologies Used](#technologies-used)
     1. [Main Languages Used](#main-languages-used)
     2. [Additional Languages Used](#additional-languages-used)
     3. [Frameworks and Programs Used](#frameworks-and-programs-used)
5. [Testing](#testing)
     1. [Testing planning](#testing-planning)
     2. [Execution](#execution)
6. [Results and outcomes](#results-and-outcomes)
     1. [Validator](#validator)
     2. [Lighthouse](#lighthouse)
7. [Bugs](#bugs)
8. [Deployment](#deployment)
     1. [Deploying on GitHub Pages](#deploying-on-github-pages)
     2. [Forking the Repository](#forking-the-repository)
     3. [Creating a Clone](#creating-a-clone)
9. [Credits](#credits)
     1. [Images](#images)
     2. [Code](#code)
10. [Acknowledgements](#acknowledgements)
***

## Introduction
### Milestone project - User Centric Frontend development

This project will be used to promote a Personal Training service. 
The aim is to encourage potential customers to join the movement and sign up to the free 30 day fitness challenge and as a result take up the service long term.

The idea is that by properly describing the story of the trainers own fitness journey (Ben Burgess) this will inspire others who are in the same situation to make the change in their own lives.

[Back to top ⇧](#bb-fitness)

## UX

### Ideal User Demographic
#### The ideal user of this website is:
- Potential clients
- Current clients
- Anyone from ages 16-70

### User Stories
The user of this website will be people who want to increase their own fitness levels and people who can relate to the story of the business owner.
Ages ranging from 18-50 and will be mostly accessed on mobile devices.
The user will want to see the story behind the business and see what services are offered.
The user will want to see how they can get in contact to get started on their journey.

The website will invite the user to interact with a colour scheme and a user-friendly experience. They will be able to sign up for the 30 day challenge and be able to get in touch to start their journey and also have links to the social links.

A user will want to relate to the owners story.
A user will want to see what services are on offer.
A user will want to see more information on the the businesses social media platforms.
A user will want to see some customer feedback.
A user will want to see how to get in touch.

### Development Planes
#### Strategy


##### User Needs.
The potential user will need the information contained in the application to be concise and easily accessed. The application will need to be easily navigated by mobile devices such as phones and tablets.


##### Technical Capabilites
This project can be created in the available timeframe using the Bootstrap HTML & CSS framework.

##### Business Vision
The purpose of this project is to introduce new people to the fitness movement. By showing what services can be offered and telling the story of the owner 
the aim is to have people sign up to the free 30 day challenge to sample the services with the desired outcome being a sign up to longer membership afterwards.
With people visiting the site it is envisaged that the social media pages will in turn get more clicks and in turn get more people to join

#### Scope
For the users to my website I wanted to highlight to them that they can change their lives and become a happier and healthier person by signing up for some personal training.


#### Structure
The main structure of the website will be a single page application with a main hero image and text that the user sees first when they visit the site.
On scrolling down the user will come upon the About Me section which tells the story of the owners own battle with weight loss that will bring a sense of togetherness and relatability 
to the application. What follows then is the Services section which highlights to the user what they can expect from BB fitness and how this business
differentiates itself from others. This will include a call to action button to get in touch to start the process. After the services the user is met with the 30 day fitness challenge
section which will invite the user to sign up for the free fitness programme. Following this is a embedded motivational video to create a positive emotional response from the user.
A review section then follows which showcases what existing clients have to say about BB fitness. This is then followed by the contact form and the footer which contains the links to
the social media channels. 

![Site Map](assets/readme-assets/structure-tree.png)


#### Skeleton

The wireframes were created on figma.com  

Original Wireframes:
Link to wireframes can be found [here](https://www.figma.com/file/1PZ3T115pa96Jw6TOooS29/Milestone-1?node-id=0%3A1).

### Design

#### Colour Scheme
The main colours used throughout the website are a mixture of Black, White and a Light Blue.

This colour scheme was chosen as it's a reflection of the owners official logo and creates a warm inviting feel to the webpage.

#### Typography
For fonts I decided to go with the [Roboto](https://fonts.google.com/specimen/Roboto "Link to Roboto Google Font") font imported from Google fonts. If for some reason the import failed then Sans serif would be used.

[Back to top ⇧](#bb-fitness)

## Features

### Design Features
Each section of the website features a consistent responsive navigational system:
- Within the **Header** there is a **logo** placed in the top left of the page and upon clicking will redirect the user to the main landing page.
- The **navbar** will be 100% transparent when the user is on the landing page. This will become solid when scrolled down.
- On mobile devices the navbar will collapse into a **toggle** button and upon clicking will reveal the naviagtion links.

<dl>
  <dt><a href="index.html" target="_blank" alt="BB Fitness Home Page">Home Page</a></dt>
  <dd>
     <ul>
          <li><strong>About Me </strong> - Occupying 50% of the page width on desktop and 100% on mobiles devices. The imagery used was specifically chosen as it created a impactful first impression, setting the tone of the website for the user.
          </li>
          <li><strong>Hero Text</strong> - Set on top of the <strong>Hero Image</strong> running across it. On mobile and tablet devices, the text becomes stacked. The purpose of the text is to provide an area in the center to draw in the users attention and create a positive emotional response from the user. 
          </li>
     </ul>
  </dd>

  <dt><a href="#about-me" target="_blank" alt="BB Fitness Home Page">About Me Page</a></dt>
  <dd> The About Me page is two columns wide on desktops and one column wide on mobile and tablet devices.
     <ul>
          <li><strong>About Me Section</strong> - Occupying 50% of the page width, on the left side, while viewing on a desktop. On mobile and tablet devices, the image becomes stacked at the top of the page, occupying 100% of the page width. This section illustrates the owners own fitness journey which will allow the user to relate to the story.
          </li>
          <li><strong>Comparison Image</strong> - Occupying 50% of the width, on the right side, while viewing on a desktop. On mobile and tablet devices, the container becomes stacked. This picture shows the owner himself has lost weight further helping the user to relate.
          </li>
          <li><strong>Coaching Image</strong> - Occupying 50% of the page width, on the left side, while viewing on a desktop. On mobile and tablet devices, the image becomes stacked, occupying 100% of the page width. This section illustrates shows the owner in a personal training setting showing the user his experience in coaching others.
          </li>
          <li><strong>Qualifications</strong> - Occupying 50% of the width, on the right side, while viewing on a desktop. On mobile and tablet devices, the container becomes stacked. The container provides the qualifications of the trainer. This information was styled in a list with bullet points.
          </li>
          <li><strong>Philosophy</strong> - Occupying 50% of the width, on the right side, under the qualifications while viewing on a desktop. On mobile and tablet devices, the container becomes stacked. The container provides some quotes that the trainer bases their own philosophy on.  This information was styled in a list with bullet points.
          </li>
     </ul>
  </dd>

  <dt><a href="#services" target="_blank" alt="BB Fitness Home Page">Services</a></dt>
  <dd>The Services page has a blue background to clearly seperate it from the About me section.
     <ul> 
          <li><strong>Heading</strong> - Occupying 100% of the page width on all devices. The heading asks the user a question which is answered in the following information,grabbing the users attention.
          </li>
          <li><strong>Service Items</strong> - There are 4 service item sections each being illustrated with a Font Awesome icon and some associated text. On desktop these 4 sections are laid horizontally across the webpages. On medium screens the sections are laid in a 2x2 grid. On small screens the sections are stacked horizontally.
          </li>
          <li><strong>Get in touch</strong> - A call to action button that invites the user to interact. The button brings the user to the contact form section.
          </li>
     </ul>
  </dd>

  <dt><a href="#challenge" target="_blank" alt="BB Fitness Home Page">30 Day Challenge</a></dt>
  <dd>The aim of the 30 Day challenge section is to get the user to sign up to the free challenge in the expectation that they will want to sign up for longer afterwards after a positive experience.
     <ul> 
          <li><strong>Heading</strong> - Occupying 100% of the page width on all devices. The heading asks the user a question which is answered in the following information,grabbing the users attention.
          </li>
          <li><strong>Service Items</strong> - There are 4 service item sections each being illustrated with a Font Awesome icon and some associated text. On desktop these 4 sections are laid horizontally across the webpages. On medium screens the sections are laid in a 2x2 grid. On small screens the sections are stacked horizontally.
          </li>
          <li><strong>Get in touch</strong> - A call to action button that invites the user to interact. The button brings the user to the contact form section.
          </li>
     </ul>
    </dd>

  <dt><a href="#video" target="_blank" alt="BB Fitness Home Page">Video</a></dt>
  <dd>The aim of the video is to get the user motivated to make the change in their own lives. The video is embedded from YouTube and the size is responsive and adapts to whatever size of screen its being viewed on.
    </dd>

  <dt><a href="#reviews" target="_blank" alt="BB Fitness Home Page">Reviews</a></dt>
  <dd>The idea behind the review section is that potenital new customers will be able to see what existing customers think of the services offered. There is 3 reviews in total. On large screens the 3 reviews wil be laid out horizontally across the screen. On meduim sized screens two wil occupy the top row and with one centred below.
     <ul> 
          <li><strong>Images</strong> - Each review shows a picture of the person that wrote it creating a more personal human touch for the user.
          </li>
          <li><strong>Icons</strong> - 5 star icons imported from Font Awesome represent the rating given by the reviewer.
          </li>
          <li><strong>Review</strong> - A 'show review' button allows the review itself to be expanded and collapsed again.
          </li>
     </ul>
    </dd>

  <dt><a href="#contact" target="_blank" alt="BB Fitness Home Page">Contact</a></dt>
  <dd>The contact section will be the final section before the footer. This offers the user an opportunity to get in contact with the business to start their fitness journey. Theres a name, email and message field all of which are required fields. There is a send button at the bottom which changes state as the user hovers over with their mouse inviting them to click.

  <dt><a href="#footer" target="_blank" alt="BB Fitness Home Page">Footer</a></dt>
  <dd>The footer gives the user easy access to the social media links for the business to learn more. Links to Facebook, Instagram and Twitter are available.
    </dd>



### Existing Features
- Header Logo - Appearing in navbar and remains in top left of screen at the user scrolls. Clicking on the logo will return the users to the home page, as expected.

- Header Navigation Bar - Fixed to the top of the page as the user scrolls down. Its clear at the top of the to enhance the impact of the Hero Image but becomes solid down the page to ensure the navigation links are clear and accessible. On smaller screens the navbar icons collapse into a toggler button.

- Social Media Icons - Appearing in the footer, the icons represent the relevant Social Media platforms, allowing the user to learn more. Upon hovering over the icons they change colour.

- YouTube Embed - iframe element for a video uploaded to YouTube, showcasing a motivational video for the user to enjoy. The bootstrap responsive class was utilised to make sure the video size was dynamic depending on what device screen size was being used. 

- Collapsible Reviews - The customer reviews are expandable and collapsible to make the section cleaner and create an enhanced user experience.


### Features to implement in the future
- Members forum so people can interact and encourage each other.

- Email confirmation for successful sign up to challenge.

- Create a multi page app with a gallery of pictures.

[Back to top ⇧](#bb-fitness)

## Technologies Used

### Main Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5 "Link to HTML Wiki")
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets "Link to CSS Wiki")

### Additional Languages Used
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript "Link to JavaScript Wiki")
     - Used to implement a function that allowed the Navbar to change from clear to solid when user scrolls through page, for UX purposes.

### Frameworks and Programs Used
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/ "Link to Bootstrap page")
     - Bootstrap v4.3.1 was used to implement the responsiveness of the site, using bootstrap classes.
- [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
    - Google fonts was used to import the "Roboto" font. This font is used throughout the project.
- [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
     - Font Awesome was used throughout the website to import icons (e.g. social media icons) for UX purposes.
- [Git](https://git-scm.com/ "Link to Git homepage")
     - Git was used for version control by utilizing the GitPod terminal to commit to Git and push to GitHub.
- [GitHub](https://github.com/ "Link to GitHub")
     - GitHub was used to store the project after pushing.
- [Figma](https://www.figma.com/ "Link to Figma homepage")
     - Figma was used to create the wireframes during the design phase of the project.
- [Am I Responsive?](http://ami.responsivedesign.is/# "Link to Am I Responsive Homepage")
     - Am I Responsive was used in order to see responsive design throughout the process and to generate mockup imagery to be used.

[Back to top ⇧](#bb-fitness)

## Testing

### Testing planning
At the start of the project I had to take into account the needs of the user and the devices they would be using to view the application.

Using Chrome tools I tested using the following devices;

- iPhone 5/SE (320 x 568)
- iPhone 6/7/8 (375 x 667)
- iPhone 6/7/8 Plus (414 x 716)
- iPhone X (375 x 812)
- iPad (768 x 1024)
- iPad Pro (1024 x 1366)
- Laptop with HiDPI Screen (1440 x 900)

I tested with other screens I have also;
- Samsung S9 mobile
- 23.8" Desktop Screen (1920 x 1080)
- Laptop 14" (1920 x 1080)


### Execution
I used Google Chrome dev tools to debug and test my code. I used the 'mobile first' approach so I debugged on the smallest screen first and worked my way up to the largest. 
I also tested using the handheld devices I owned to make the testing more accurate.

The main method of testing I used was implenting/ changing styles in the Chrome Dev Tools first to see how it looked on various device sizes. If this was satisfactory then I would paste the code over to my HTML/CSS to make the change permanent.

I also used Lighthouse to test the accessability of the site and W3 validator to further test my code.

The testing process on different devices was carried out using the following method.
1. Load up the webpage and scroll through the page without clicking on any features checking for any overflow or sizing issues.
2. If everything is OK then I would scroll back to the top of the page and click on the first feature. Does it function and present itself in the way it is intended? If yes, then go to the next feature and repeat the step. If not then I fixed the issue.
3. Click on each item on the navbar ensuring that the link brings you to the correct destination and also when the user is brought to the destination that the navbar doesnt obstruct any of the information.
4. On the Modal and contact form sections I would test the fields on each device to ensure each field was required worked correctly.
5. Ensured that the social links worked correctly and that they would open in a new tab to ensure good UX.


## Results and outcomes

### Validator

I used the W3C Validator to check my HTML code. The first error I encountered was that in my embedded code for the YouTube video the frameborder attribute is obselete in HTML5. I had to implement this is in my CSS instead.

The results from the validator can be seen [here](https://github.com/SamBurgess93/Milestone-1/blob/master/assets/readme-assets/validator.png).

### Lighthouse

I used Google Lighthouse to audit my site and further enhance the accesibility of the site.
My current score is: 99% Performance 96% Accessibility 87% Best Practices 92% Search Engine Optimization.

Results can be seen [here](https://github.com/SamBurgess93/Milestone-1/blob/master/assets/readme-assets/lighthouseaudit.png).

[Back to top ⇧](#bb-fitness)

## Bugs

I encountered a number of bugs during my development of the website.

1.  I was getting an unusual scroll behaviour on my navbar items and my logo within the navbar itself when moving down on the page. Upon further investigation it was found that from adding some extra padding onto my reviews section that it was creating an overflow which was causing this behaviour.
    When I realised what was causing the issue I was able to quickly resolve the problem by adjusting the padding on the reviews section.
2.  On mobile devices I couldn't see the lines in the hamburger toggle icon in the navbar. This was due to the incorrect navbar bootstrap class being used. I was using navbar light and when I tried using navbar dark class instead on chrome dev tools, this solved the issue.
    I then implemented this is my HTML code and the issue was resolved. 
3.  I encountered an issue with the 2 pictures in the about me section, I added a border radius style but this was only being shown on the top corners. This was being caused by the pictures being too large for their container. By resizing the images using an editor I was able to solve this issue.
4.  During the early phase of the project I had a problem with the hero text not having enough contrast against the image behind it. I added some text shadow to the text to make it stand out better.

[Back to top ⇧](#bb-fitness)

## Deployment

This project was developed using [GitPod](https://gitpod.io/ "Link to GitPod"), committed to git and pushed to GitHub using the computer terminal.

### Deploying on GitHub Pages
To deploy this page to GitHub Pages from its GitHub repository, the following steps were taken:

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/SamBurgess93/Milestone-1 "Link to GitHub Repo").
3. At the top of the repository, select Settings from the menu items.
4. Go to the "Pages" section on the left hand side.
5. Under "Source" click the drop-down menu labelled "None" and select "Master Branch".
6. Upon selection, the page will automatically refresh meaning that the website is now deployed.
7. Click on the link provided to view the deployed site.

### Forking the Repository
By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/SamBurgess93/Milestone-1 "Link to GitHub Repo").
3. At the top of the repository, on the right side of the page, select "Fork"
4. You should now have a copy of the original repository in your GitHub account.

### Creating a Clone
How to run this project locally:
1. Install the [GitPod Browser](https://www.gitpod.io/docs/browser-extension/ "Link to Gitpod Browser extension download") Extension for Chrome.
2. After installation, restart the browser.
3. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
4. Locate the [GitHub Repository](https://github.com/SamBurgess93/Milestone-1 "Link to GitHub Repo").
5. Click the green "GitPod" button in the top right corner of the repository.
This will trigger a new gitPod workspace to be created from the code in github where you can work locally.

How to run this project within a local IDE:

1. Log into [GitHub](https://github.com/login "Link to GitHub login page") or [create an account](https://github.com/join "Link to GitHub create account page").
2. Locate the [GitHub Repository](https://github.com/SamBurgess93/Milestone-1 "Link to GitHub Repo").
3. Under the repository name, click "Clone or download".
4. In the Clone with HTTPs section, copy the clone URL for the repository.
5. In your local IDE open the terminal.
6. Change the current working directory to the location where you want the cloned directory to be made.
7. Type 'git clone', and then paste the URL you copied in Step 3.
```
git clone https://github.com/USERNAME/REPOSITORY
```
8. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository "Link to GitHub troubleshooting")

[Back to top ⇧](#bb-fitness)

## Credits 

### Images
- The 2 pictures in the About Me section were taken from the owners own Facebook page (Ben Burgess) with his permission granted for them to be used.

The stock images that were used during the development of this site were taken from,
- [Unsplash](https://unsplash.com/ "Link to UnSplash page")

### Code 
I consulted the following sites to better understand some elements of code:
- [Stack Overflow](https://stackoverflow.com/ "Link to Stack Overflow page")
- [W3Schools](https://www.w3schools.com/ "Link to W3Schools page")
- [Bootstrap](https://getbootstrap.com/ "Link to BootStrap page")
- [Codepen](https://codepen.io/ "Link to Codepen page")

[Back to top ⇧](#bb-fitness)

## Acknowledgements

- I would like to thank my friends and family for their time and opinions on the website.
- I would like to thank my mentor, Seun, for her help and constructive feedback throughout the project.
- I would like to thank Maggie Walsh who took the time and reviewed my project throught the "peer code review" channel on Slack.
- I would like to extend my deepest gratitude to my brother Ben for entrustng me to make this site for him.
- I would like to credit Mike Avgeros for the code surrounding the collapsible review section.

[Back to top ⇧](#bb-fitness)


**This project is for educational use only and was created specifcally for the Code Institute Module of User Centric front end development**

**Created by Sam Burgess** 