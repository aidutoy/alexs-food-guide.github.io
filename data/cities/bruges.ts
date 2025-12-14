

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
      ratings: { food: 5, drinks: 5, service: 5, price: 1 },
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
    },
    {
      id: 'fritbar',
      name: "Fritbar",
      description: '',
      quickVerdict: 'Crispy, fresh Belgian fries with a huge selection of sauces. A simple, delicious, and essential stop.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/bruges/frtibar/fritbar_1.jpg', caption: 'Fries with garlic mayo'},
      images: [
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=FritBar%20-%20Bruges%2C%20Katelijnestraat%2C%20Bruges%2C%20Belgium&maptype=roadmap',
      cuisine: 'Fries',
      alexsTip: "Take a medium sized fries with garlic mayo and go next door for waffles for dessert.",
      dietary: {
        celiac: "Fries are gluten-free and some main-dishes like pulled pork loaded fries can be made gluten-free.",
        lactose: "Fries are dairy-free but cheese is not.",
        vegetarian: "Fries can be fried in plant based oil",
        vegan: "Fries can be fried in plant based oil"
      },
      websiteUrl: 'https://fritbar.be/',
      instagramUrl: 'https://www.instagram.com/fritbarbruges/?hl=en',
      tags: ["Belgian", "Fries", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Everyday: 12:00 - 20:00"
      ]
    },
    {
      id: 'go-fre',
      name: "Go.Fre",
      description: "A must visit on your trip to Bruges. Treat yourself to an intoxicatingly sweet waffle on a stick and even buy more to heat up in the microwave later. You can gift these to friends and family who weren't abel to make it on the trip. There are toppings for everyone, but if you have a sweet tooth like me then I recommend the white chocolate and biscoff waffle. There is a shiny gold-leaf waffle for those looking to post something special on instagram but I personally find gold-leaf overrated. There are vegan and gluten-free waffles upon request so there are options for everyone.",
      quickVerdict: 'Intoxicatingly sweet waffles on a stick with endless toppings. A perfect treat for strolling around Bruges and to bring home to your friends.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/bruges/go-fre/go-fre_1.jpg', caption: 'Gluten-free waffle sticks with white chocolate and biscoff (left) and white chocolate and smarties (right)'},
      images: [
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Go.fre%20%7C%20Belgian%20waffles%20on%20a%20stick%2C%20Breidelstraat%2C%20Bruges%2C%20Belgium&maptype=roadmap',
      cuisine: 'Waffles',
      alexsTip: "Try at least one on your trip but save your appetite for the bigger waffles elsewhere.",
      dietary: {
        celiac: "Gluten-free waffles available",
        lactose: "Dairy-free toppings available like dark chocolate sauce",
        vegetarian: "All waffles vegetarian",
        vegan: "Waffles with dairy-free toppings upon request"
      },
      websiteUrl: 'https://www.gofre.be/',
      instagramUrl: 'https://www.instagram.com/go.fre/?hl=en',
      tags: ["Belgian", "Waffles", "dessert", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Sunday - Thursday: 10:00 - 18:30",
          "Friday - 10:00 - 20:00",
          "Saturday: 10:00 - 21:00" 
      ]
    },
    {
      id: 'Bohemian',
      name: "Bohemian Burger",
      description: "If you need somewhere to eat and don't want to think too much about, this is the spot. They have delicious burgers with options for everyone, except vegans as only one vegan burger is consistently on the menu. Everywhere in Belgium is expensive, so expect to pay a bit more than usual for these burgers. I can recommend coming here if you are struggling to find something but honestly it is a nice break from the waffles and chocolate. The gluten-free bun is always nice to see and actually looked similar to the wheat buns. Overall, a good experience that I don't regret.",
      quickVerdict: 'Delicious, high-quality burgers with excellent gluten-free options. A perfect savoury break from the sweets of Bruges.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/bruges/bohemian/bohemian_1.jpg', caption: 'Boston Burger with bacon, cheese, goats cheese and honey mustard with fries.'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/bruges/bohemian/bohemian_2.jpg', caption: 'Gluten-free Bohemian burger and fries'}
      ],
      ratings: { food: 4, drinks: 5, service: 5, price: 3 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Bohemian%20Burgers%20Brugge%2C%20Sint-Amandsstraat%2C%20Bruges%2C%20Belgium&maptype=roadmap',
      cuisine: 'Burgers',
      alexsTip: "Make sure you're hungry before coming as this is not a cheap burger, I would try the Whitesnake for something new",
      dietary: {
        celiac: "Gluten-free buns for €1 extra",
        lactose: "Dairy-free cheese not available but burgers without cheese are",
        vegetarian: "5 burgers are vegetarian and made from different buns like nuts and quinoa",
        vegan: "Only one burger on the menu made from quinoa"
      },
      websiteUrl: 'https://www.bohemianburgers.be/en/',
      instagramUrl: 'https://www.instagram.com/bohemianburgers.be/',
      tags: ["Burgers", "fries", "American", "gluten-free", "vegetarian"],
      openingHours: [
          "Monday: Closed",
          "Tuesday - Thursday: 12:00 - 21:00",
          "Friday - Saturday: 12:00 - 22:00",
          "Sunday: 12:00 - 16:00" 
      ]
    }
  ]
};
