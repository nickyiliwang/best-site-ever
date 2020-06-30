// http://opentable.herokuapp.com/api/restaurants?city=toronto

// better error handling
export const getRestaurantsWithLocation = async (location) => {
  const address = `http://opentable.herokuapp.com/api/restaurants?city=${location}&per_page=100`;
  const restaurants = await fetch(address).then((r) => r.json());
  return restaurants;
};
