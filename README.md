# Development

### Link to Deployed Website
https://crazykangaroo001.github.io/development/

### Goal and Value of the Application

Clubs @ Brown is an application that displays a list of student organizations available at Brown. Its goal is to provide an interface for students to find clubs that match their interests as well as schedule. Students can favorite organizations and see the total number of hours as time commitment to all their interested clubs. By providing this aggregated information, Clubs @ Brown hopes to help student make more informed decisions in creating a balanced schedule.

### Usability Principles Considered
I considered the color contrast and organization of the layout in the visual design of the app to ensure that the users are able to locate the filters and sorting features, and to favorite clubs as efficiently as possible. I added dropdown effects to the cards representing clubs for better visibility and recognition of its priority on the page. I also added heart icons as tooltips to favoriting clubs, which may allow the users to identify the action more quickly; however, I am wary that the icon could be misunderstood as the meaning of heart icons can vary from application to application. Finally, I strove to implement consistency in the hierarchy and design of the app by reusing the same component to showcase the items.

### Organization of Components

The primary component App contains a list of Item components corresponding to each club in club data, multiple Select components for filtering categories and sorting features, and the Aggregator component to display the aggregator results.

I utilized seven state variables in total.
<ol>
<li>items keeps track of the list of clubs currently displayed</li>
<li>type represents the club type that the user would like to filter on</li>
<li>day represents the meeting time/day that the user would like to filter on</li>
<li>sortBy represents the metric that user would like to sort the clubs by</li>
<li>liked keeps track of the list of clubs the user favorited</li>
<li>totalTime keeps track of the total time commitment in number of hours for the clubs that the user favorited</li>
<li>clicked is a state variable within the Item component and tracks if the favorite button for a club has been clicked</li>
</ol>

### How Data is Passed Down Through Components
As each club is shown as an Item component, information about that club, including the name, description, logo, expected time commitment, club type, and meetingTime, is passed down to the Item component from App. To keep track of the list of clubs that a user has favorited and the total time commitment expected from these favorited clubs, an updateFavorite function is also passed in as a prop so that if the button to favorite a club is clicked, the updateFavorite will update the state variables liked and totalTime.

For the filtering categories and sorting feature, the Select component displays the currently selected option and when a change in selection is detected, the state variable corresponding to the component is updated.

Finally, the component Aggregator takes in content as a prop, which contains the aggregator results, and styles it with a divider.

### How the User Triggers State Changes

There are two primary classes of actions a user can take to trigger state changes.
<ol>
<li> Select different club types or meeting times to filter the list of clubs. Once the value of the Select comoponent changes, an eventHandler is called to update the state variables corresponding to the component (i.e. type, day, sortBy)</li>
<li> Favorite a club / Unfavorite a club. Clicking the heart icon will call the function updateFavorites, which is passed in as a prop. The function updateFavorites will update the state variables liked and totalTime by adding or removing favorited clubs depending on whether the state variable within the component clicked is true or false.</li>
</ol>

