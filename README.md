[![Taking Submissions | Open for Hiring](https://img.shields.io/badge/Taking_Submissions-Open_for_hiring-brightgreen.svg)]()
[![Location | New York City](https://img.shields.io/badge/Location-NYC_Flatiron-blue.svg)]()

Welcome applicant 👋👋 Thanks for your interest in New York Life Labs! Rather than submitting your resume into another blackhole, we're offering you a chance to show your best skills in the context of what were tangibly looking for. If you're a good fit for the company, this project will give you a chance to stand out

# Intro

Robo Inc., an innovative tech giant in Silicon Alley (Yes, "Alley"--they're based in NYC of course!) has developed fully functional robotic assistants, know as **robo-assistants** (Think _iRobot_ without the curfew or revolutions). They are working on a website for customers to use. They can search for robo-assistants and view details on them. Originally, Robo Inc tried using one of their very own robo-assistants to build out the webapp, but it turns out the [Angular framework](https://www.angular.io) is too advanced for even the most advanced robots. So they need you to take up the challenge!

# Prerequisites.

+ node `6+` environment.
+ Angular cli
  + `npm install -g @angular/cli`

# Setting up the project the project.

+ Fork the repository
+ `npm install`
+ `ng serve`
+ To build a `dist`, run `ng build`

# Requirements

A successful completion of this project involves:

- [ ] Search functionality on the app (users can search for a robo-assistast by name)
- [ ] Detail pages for specific robo-assistant (with full reviews)

For extra credit, especially if you are interested on a front-end focused role:

- [ ] Add styling to the app. Unless you are interested in a UX engineering role, the actual design will not be critiqued, just how well the css itself is implemented.
- [ ] Any other functionality you would like. Eg infinite scrolling, star svgs for ratings, etc. If there's something you specialize in and can quickly add, the project is free-range!

# Tips

+ This project tests that you know Angular or can pick up Angular at a reasonable pace. You can get by with just the very basics. If you are new to Angular and finished their [tour of heroes](https://angular.io/docs/ts/latest/tutorial/) with understanding, you will have no problem with this project.
+ This project can be completed with just angular Components and one Service. But you may add more parts if you feel it results in an improved finished project (Child Components, Pipes, Directives, etc)
+ This project was built with Angular CLI, but **it is not recommended that you use any of the `ng generate` functions**, as they will write over some custom routing in `app.module.ts`.
+ Additional info is found in this repo's wiki, and also linked when referenced by this guide.

# Your tickets (Do these!)

Below are the "tickets" to help you complete all aspects of the project in the most efficient order. They are broken up into **Backend Suggestions** and **Frontend Needs**. We recommend working back to front.

## Backend Suggestions.

> NOTE: You don't need to do all this backend stuff, but it will surely help you stay organized and understand what is going on for building the front end app ;)


### B1. Understand the Data models.

Checkout the [data models](https://github.com/NYLLABS/hiring-robo-project/wiki/Data-Models), you will be the working very closely with this data.

The trickiest part is that the reviews for each robo-assistant is not embedded in the document. Think about ways to fetch the reviews when you need them for a corresponding robo-assistant.


### B2. Understand the API

[Robo-assist API](https://github.com/NYLLABS/hiring-robo-project/wiki/Robo-assist-API) is the premiere API for accessing the robo-assistant database. It will be helpful to verify that you can make calls to all the routes.

+ Use [Postman](https://www.getpostman.com/), cURL, or [httpie](https://httpie.org/) for testing the routes.
+ Follow the documentation to:
    + get an authorization token
    + configure the authorization token.
+ Test that other routes are accessible.

> NOTE: If you get a `500` response, it might be a genuine error. Email nick@nyllabs.tech if this happens.

## Frontend Needs

### F1. Use `roboAssistant.service.ts` to incorporate API calls

The robo-assistant service uses Angular's [http](https://angular.io/docs/ts/latest/tutorial/toh-pt6.html) [service](https://angular.io/docs/ts/latest/api/http/index/Http-class.html) to make calls. You will need to:

+ Set the [headers](https://angular.io/docs/ts/latest/api/http/index/Headers-class.html) to use your authorization token. (You may set headers any way you like, but Angulars Headers class might be least error-prone)
+ Add the API urls to the provided method, and add your own methods for the other api.
+ When you need to make different API calls, you can add other methods here as needed.

### F2. Add Search bar to `search.component.ts`, and incorporate `roboAssistantService`

+ Add a search bar with [two-way data binding](https://angular.io/docs/ts/latest/guide/architecture.html#!#sts=Data%20binding) for the user to search for Robo-assistants.
+ Add a click event to a search button, which will populate the view with a list of matching robo-assistants from the API. Each entry should have a hyperlink, changing the route to `/detail/:robo_id`, where `:robo_id` is the `robo_id` of the robo-assistant.
+ Each robo-assistant rendered should include the following information
    + name
    + model
    + rating
    + price **(In USD format (no cents), eg `$1,482,483`)**

### F3. Complete missing parts of `landing.component.ts`
In `src/app/detail/landing.component.ts`, complete the options object in the decorator to include `detail.component.html` as the template, and `detail.component.css` as the style.

### F4. Add `DetailComponent` to the routing in `app.module.ts`

`DetailComponent` is exported in `src/app/detail/landing.component.ts`, but not yet included in the router. So we have no access to it!

+ Add a route `/detail/:robo_id` to `app.module.ts`, using the `DetailComponent` for loading.

### F5. Configure detail page to fetch and display a robo-assistast.

+ Make sure the `RoboAssistantsService` has a method to get an individual robo-assistant. And their reviews.
+ Fetch the correct robo-assistant from the url param `:robo_id`
+ Ensure corresponding reviews are also fetched
+ Display all info on the html page.



## Submitting

+ Delete the `node_modules` directory, make sure any additional dependencies you've added is properly saved to package.json.

+ Create a zip of the entire finished project and email it to hiring@nyllabs.tech. NOTE: If using gmail, you will have to upload the zip with Google Drive.

+ **Please attach your resume in PDF format as well**.

+ If you've added or modified extra files, be sure to also mention this in the email of your submission.

> NOTE: This email is monitored and any attachments other than the assigned project and resume will be blocked and investigated.

## Assessment

Upon receiving the project, NYLLabs will do the following:

+ Unzip the project in an isolated, visualized environment, running `node 7.9.0` & `npm 3.10.10` with angular cli.
+ Run `npm install` in the root directory of your project.
+ Run `ng build`
+ Open the `dist/` in Chrome and Firefox (recent or very-close-to-recent stable versions)
+ Search for a robo-assistant.
+ Click on a robo-assistant.
+ Review code implementation in the following files.
    + `/src/app/detail/*`
    + `/src/app/search/*`
    + `/src/app/roboAssistant.service.ts`
    + `/src/app/app.module.ts`
    + Any additional file you've worked on that you request when emailing the completed project.
