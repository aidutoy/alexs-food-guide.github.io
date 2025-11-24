
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
    ...placeholderRestaurants
  ]
};