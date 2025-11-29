
import type { City } from '../../types';

const newRestaurants = [
  { name: 'House of Waffles', cuisine: 'Dessert' },
  { name: 'De Halve Maan', cuisine: 'Brewery' },
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `bruges-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/bruges-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/bruges-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/bruges-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 2 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20028.96677469799!2d3.212789785869689!3d51.20934857474241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c350d0c11e420d%3A0x1aa2f35ac8834df7!2sBruges%2C%20Belgium!5e0!3m2!1sen!2sde!4v1684321098765',
        cuisine: r.cuisine,
        alexsTip: "Add your personal tip here!",
        dietary: {
            celiac: "Please update dietary information.",
            lactose: "Please update dietary information.",
            vegetarian: "Please update dietary information.",
            vegan: "Please update dietary information."
        },
        websiteUrl: '#',
        instagramUrl: '#',
        tags: [r.cuisine, "Dining", "Belgian"]
    }
});

export const bruges: City = {
  id: 'bruges',
  name: 'Bruges',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/bruges/bruges.jpg',
  coordinates: { lat: 51.2093, lon: 3.2247 },
  restaurants: [
    {
      id: 'otto',
      name: "Otto Waffle Atelier",
      description: "For some of the best waffles in town, and they are gluten-free! Take some to go and enjoy the view of the canals just outside. I totally recommend coming here on your trip. The street is full of chocolate shops and chip shops. The Fritbar next door is a must go to as well. The waffles were fluffy and moist, both the strawberry and cream and the blueberry and syrup toppings were super tasty. I personally prefer the blueberries and syrup. Don't forget to snap a pic.",
      quickVerdict: 'The best gluten-free waffles in town. Fluffy, moist, and perfect for a canal-side treat.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/bruges/otto/otto_1.jpg', caption: 'Gluten-free waffles with strawberry, cream and pomegranate seeds (left) and with blueberries, nuts and maple syrup (right).'},
      images: [
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Otto%20Waffle%20Atelier%20Katelijnestraat%2C%20Katelijnestraat%2C%20Bruges%2C%20Belgium&maptype=roadmap',
      cuisine: 'Waffles',
      alexsTip: "Take the blueberry waffle and take a picture by the canal to capture the Bruges experience.",
      dietary: {
        celiac: "All waffles are gluten-free.",
        lactose: "All waffles are dairy-free.",
        vegetarian: "All waffles vegetarian.",
        vegan: "Vegan waffles are available upon request."
      },
      websiteUrl: 'https://ottowaffleatelier.be/brugse-wafels/',
      instagramUrl: 'https://www.instagram.com/ottowaffleatelier/?hl=en',
      tags: ["Belgian", "Waffles", "dessert", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Everyday: 10:00 - 18:00"
      ]
    }
  ]
};
