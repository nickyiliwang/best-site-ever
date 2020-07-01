How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I got my assignment from the recruiter from June 30th Tuesday, therefore I've tried to complete this assignment to the best of my abilities in the shortest amount of time within deadline July 2nd Thursday, total estimated time spent on this project was 10 hours. If I had more time I would add tests for the Redux state, which is one of the biggest advantage using redux has, testing prev state and after a action is called, and expect the result with tests. I would spend more time adding more css, getting a color theme and refactoring my code.

What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Personally I love using destructing in JavaScript, and I've used it as much as I can for props. Example in DisplayResults component.

function DisplayResults({ isFetching, restaurants, filterTerm }) {
const displayRestaurants = () => {
if (isFetching) {
return <LoadingSkeleton />;
} else if (!isFetching && restaurants !== null && !filterTerm) {
return restaurants.map((restaurant) => {
return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
});
} else if (!isFetching && restaurants !== null && filterTerm) {
const filteredRestaurants = restaurants.filter((restaurant) => {
const { name, address, city, area } = restaurant;
if (
name.includes(filterTerm) ||
address.includes(filterTerm) ||
city.includes(filterTerm) ||
area.includes(filterTerm)
) {
return restaurant;
}
return null;
});
if (filteredRestaurants && filteredRestaurants.length) {
return filteredRestaurants.map((restaurant) => {
return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
});
} else {
return <p>No filter result.</p>;
}
} else {
return <p>Your results will appear in this section</p>;
}
};

How would you track down a performance issue in production? Have you ever had to do this?
Using lighthouse extension it is really easy to track down inefficiencies within the application. I've done it for all my applications to ensure the best load time. I'm learning about AWS and their cloudFront service will speed up page load time by a huge margin, along with incorporating other AWS services.

How would you improve the API that you just used?

The images link doesn't work anymore, so maintenance will be needed.

Please describe yourself using JSON.

const nickWang = {
"age": 25,
"love": ["cats", "games", "coding", "sketching", "learning","fun"],
"hates": "Bored/Hair Cuts"
}
