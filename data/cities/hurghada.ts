
import type { City } from '../../types';

const newRestaurants = [
  { name: 'Giftun Azur Resort', cuisine: 'Resort Dining' },
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `hurghada-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/hurghada-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/hurghada-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/hurghada-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 1 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113460.52227181829!2d33.8242279!3d27.2021516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1452875569527661%3A0x75345796245995aa!2sHurghada%2C%20Red%20Sea%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sde!4v1684321098765',
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
        tags: ["Resort", "Relaxing", "International"]
    }
});

export const hurghada: City = {
  id: 'hurghada',
  name: 'Hurghada',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/hurghada.jpg',
  coordinates: { lat: 27.2579, lon: 33.8116 },
  restaurants: [
    {
      id: 'azur',
      name: "Azur Giftun Resort",
      description: "We booked a last minute hotel in Hurghada because we wanted to spend more time relaxing by the beach. One of the only good hotels available was the Giftun Azur. The deal was all-inclusive for just over €100 per night for two people, which if you think about an all inclusive hotel is pretty good. We had breakfast, lunch and dinner both days before heading to the airport in the evening. I think I never ate so much as I did here on the rest of the trip.\n\nThere are two restaurants where you can get more oriental and egyptian food and one for more international food. We tried both and definitely prefer the international one due to the better variety. There was also a beach restaurant open for lunch that served sea food, grilled meat, pasta and more. The food was tasty and there were many many cakes. There wasn't the best gluten free selection nor the best vegan selection but you wont go hungry.\n\nI definitely recommend this hotel if the other more expensive ones are booked out or you are on a budget. The alcohol for me was a bit random, sometimes it cost extra, sometimes it was free, there was a German Oktoberfest party on the Saturday that had free alcohol also.\n\nAs the end of our trip, I would say this was well worth the extra day in Hurghada as opposed to Luxor so we could really decompress from the sightseeing tours, and the tasty food made it all the better.",
      quickVerdict: 'Excellent value all-inclusive dining with a wide variety of international dishes and cakes. Perfect for decompressing after a trip.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_6.jpg', caption: 'Breakfast with toast, pasty, boiled eggs, fried potatoes, crepes, fresh fruit, waffles, pastry, cheese, vegetables, figs.' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_1.jpg', caption: 'Chicken wings, fried fish, lamb kofta, rice, fries, bread rolls. Plate of hummus and plate of salad.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_2.jpg', caption: 'Various cakes.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_3.jpg', caption: 'Fried fish, beef, egyptian pita.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_4.jpg', caption: 'Various cakes.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_5.jpg', caption: 'Various cakes for Oktoberfest' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_7.jpg', caption: 'Breakfast with toast, pasty, boiled eggs, fried potatoes, crepes, fresh fruit, waffles, pastry, cheese, vegetables, figs.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_8.jpg', caption: 'Fried fish, fries, beef with carrots and peas.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_9.jpg', caption: 'Fried fish, dauphinoise potatoes, beef, chicken curry, sushi, rice, caramelised apple and welcome cocktails.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/hurghada/azur/azur_10.jpg', caption: 'Various cakes.' },

      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 3 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Giftun%20Azur%20Resort%2C%20Youssef%20Affifi%20Road%2C%20Touristic%20Villages%2C%20Hurghada%201%2C%20Egypt&maptype=roadmap',
      cuisine: 'Egyptian / International',
      alexsTip: "Take advantage as much as you can of the food and drinks, go for a sunrise swim, and secure a good spot on the beach.",
      dietary: {
        celiac: "no gluten-free bread but many options available, even some cakes. The chef is happy to show you what you can eat.",
        lactose: "Many options without dairy but there are no labels on the food so always ask just in case.",
        vegetarian: "Many vegetable dishes in the international buffet, more than in the egyptian restaurant. The beach restaurant has a lot of seafood.",
        vegan: "Most of the vegetarian dishes are vegan. Very limited or no vegan cakes."
      },
      tags: ["Oriental", "Egyptian", "all-you-can-eat", "seafood", "international", "all-inclusive", "hotel", "gluten-free", "lactose-free", "vegetarian", "vegan"]
    }
  ]
};
