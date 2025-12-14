
import type { City } from '../../types';

export const lisbon: City = {
  id: 'lisbon',
  name: 'Lisbon',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/lisbon/lisbon.jpg?v=1',
  coordinates: { lat: 38.7223, lon: -9.1393 },
  restaurants: [
    {
      id: 'Mariacatita',
      name: "Maria Catita",
      description: "An expensive taste of Lisbon's finest seafood. A must try is the Bacalhau, a classic Portugese dish you should take on your visit. The octopus was one of the tastiest I have had, I would recommend taking both this and the Bacalhau together with a friend and share. I think the food is quite simple, with not too many elements to the dish, which shows how confident the chefs are. The location is great, not far from the main tourist spots but far enough away to not be bothered by street buskers. Admire the beautiful architecture with a glass of sangria.",
      quickVerdict: 'Simple, confident seafood dishes in a beautiful setting. The octopus and passion fruit sangria are standout choices.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/lisbon/maria/maria_1.jpg', caption: 'Octopus Lagareiro style with crushed baked potato' },
      images: [
           { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/lisbon/maria/maria_2.jpg', caption: 'Salted Cod (Bacalhau) fillet with crushed potatoes and seasonal vegetables' },
           { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/lisbon/maria/maria_3.jpg', caption: 'Passion fruit sangria' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 3 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Maria%20Catita%2C%20Rua%20dos%20Bacalhoeiros%2C%20Lisbon%2C%20Portugal&maptype=roadmap',
      cuisine: 'Portugese',
      alexsTip: "Sit outside in the beautiful street and take the passion fruit sangria alonside some octopus, some of the best I've had.",
      dietary: {
        celiac: "A lot of seafood dishes without gluten.",
        lactose: "A few dishes on the menu do not disclose that they are cooked with butter so best to ask the waiter if you are unsure. The octopus and the bacalhau are dairy free.",
        vegetarian: "A few but limited dishes such as risotto or bacalhau using leek instead of cod.",
        vegan: "Only roasted sweet potatoes are on offer"
      },
      websiteUrl: "https://mariacatita.pt/",
      instagramUrl: "https://www.instagram.com/mariacatita_restaurante/?hl=en",
      tags: ["Portugese", "Seafood", "fish", "octopus", "squid", "sangria", "gluten-free", "lactose-free"],
      openingHours: ["Everyday: 12:00 - 22:45"]
    }
  ]
};
