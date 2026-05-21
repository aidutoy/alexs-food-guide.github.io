import type { City } from '../../types';

export const darmstadt: City = {
  id: 'darmstadt',
  name: 'Darmstadt',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/darmstadt.jpg',
  coordinates: { lat: 49.8728, lon: 8.6512 },
  restaurants: [
    {
      id: 'Slap',
      name: 'Slap',
      description: "Great tasting Napoli style pizza in the heart of Darmstadt. There are always people eating here, with plenty space outside to sit during the summer. Although, a bit uncomfortable on the steep inclined outside. The place is order at the bar and get a buzzer for when your pizza is ready, although the wait time was only about 10 minutes. The drinks are around 4 euros and the pizzas are decently priced with a margherita costing 11 euros. I enjoyed the pepperoni and chili-honey pizza which was not too spicy at all. It helped make the crust go down a bit easier. I have to say the highlight for me was the mozarella which tasted great!",
      quickVerdict: 'Napoli pizza, great for a quick bite in town, and decent value.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/slap/slap_1.jpg', caption: 'Pepperoni and chili-honey pizza (bottom), bufalina (top and right)'},
      images: [
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=slap%20darmstadt&maptype=roadmap',
      cuisine: 'Italian',
      alexsTip: "The staff are very accomodating and can make a new one if it is a bit burnt.",
      dietary: {
        celiac: "No gluten-free pizza available.",
        lactose: "No lactose-free cheese but vegan cheese available, like vegan mozarella and vegan parmesan",
        vegetarian: "At least 8 vegetarian pizzas, with the additional 12 vegan ones.",
        vegan: "There are many vegan options on the menu, 12 at the time of writing this, highly recommended for vegans."
      },
      instagramUrl: 'https://www.instagram.com/slap.pizza',
      tags: ["Italian", "Pizza", "Takeaway", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Mon - Sat: 11:00 - 23:00",
          "Sun: 12:00 - 22:00"
      ]
    },
  ]
};
