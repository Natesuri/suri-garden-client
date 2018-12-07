Suri Garden App Client

Current Version: v1

Deployed Client: https://natesuri.github.io/suri-garden-client/
Deployed API: https://pacific-reaches-70030.herokuapp.com/
Github repo: https://github.com/Natesuri/suri-garden-client

v1 (current version)
An app that allows a user to ~~plant into and remove plants from plots that they own~~ own plots with unique atrrtibutes.
Communicates with custom API: https://github.com/Natesuri/Suri-Garden-App

v2
A user can add plants to their plots from a pre-determined list plants list.

v3
User is able to receive reminders of how often they need to water individual plants.

.....

The client uses HTML, CSS, JS, BOOTSTRAP, SASS, HANDLEBARS, JQUERY, and AJAX:
     A user can view all their plots on page load, and click through individual plots to view and
     update a single pllots attributes. Buttons on the page open bootstrap modals in which the user can
     send AJAX CRUD requests to the RESTful custom API. The returned data is passed into a handlebars template
     and inserted into the page using jQuery. The page is structured with bootstrap, but may be restructured later
     to work without bootstrap. The site is mobile responsive.

Planning and execution:
  Set out to make a garden management application that's engaging and fun,
  but also helps a user take care of their plants with reminders.
  Can work with small gardens and eventually larger homesteads.
  The application is designed to feel like a game, with the idea that most data
  is represented with visual icons as opposed to being text heavy.
  The current version uses dummy plants in plots (the green squares) and future versions
  will actually display the correct number of plants in a plot.
  The representation of a plant may also change. It could be an actual icon of a plant,
  or perhaps a color that represents a plant type (tuber, vine, grain, etc.)

Unsolved and Unfinished Content:
  Need to accurately represent plants on the page and set reminders for users based off those plants watering and harvest patterns.


Wireframes: https://www.dropbox.com/sh/n7axklrf0z4zbzy/AAD9R4-KKpNCLi1vTP_hGk7ua?dl=0
User Stories: https://www.dropbox.com/sh/zbn1mid4xna5g25/AAA4uedIUNg4-fLdECXC3BQ3a?dl=0
