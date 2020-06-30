Open Table has a public API available at https://opentable.herokuapp.com/
As an example, http://opentable.herokuapp.com/api/restaurants?city=toronto returns a list of restaurants that deliver to Toronto, including some basic restaurant information.

The task is to create an application that accepts a City as a parameter. The application should then display the following information about each restaurant that delivers to that City:
Name
Address
Price

Using Redux store the following for each returned City
"name"
"address"
"area"

A user should be able to type in a second parameter such as “dinner” and the results will update to only show restaurants that have either
"name"
"address"
"area"

The web app should have at least 2 fields a user can type in:
City
Refine ( should apply to partial or full “name” / “address” / “area” )
Any other inputs of your choice for filtering

Platform Choice
MUST use ReactJS, Redux

Task requirements
Feel free to spend as much or as little time on the exercise as you like as long as the following requirements have been met.
Please complete the user story below.
Your code should compile and run in one step.
Try not to use any UI library (ex. Bootstrap), as the more of your own hand-written code and design is there, the better it is to evaluate your own skills.

User Story
As a user running the application
I can view a list of restaurants in a user submitted City (e.g. Toronto)
So that I know which restaurants are currently available

Acceptance criteria
For the known City, results are returned
User should be able to further refine the results, i.e. using part of a restaurant name, or street, area, etc.
You must include tests
UI must be responsive
Must be fully WCAG 2.0/2.1 AA compliant for the entire page
Must perform well in a Lighthouse audit - Performance, SEO, Accessibility
The Name, Cuisine Types and Rating of the restaurant are displayed
Must work in common browsers, desktop and mobile (Chrome, Safari, IE11)
Send your Github repo of your application
Host the app on heroku or any other cloud host platform of your choice
Send your answers to the tech questions as a .md file in your repo

Technical questions
Please answer the following questions in a markdown file called Answers to technical questions.md.

How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
How would you track down a performance issue in production? Have you ever had to do this?
How would you improve the API that you just used?
Please describe yourself using JSON.
