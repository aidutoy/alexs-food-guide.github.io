
import type { City } from '../../types';

const newRestaurants = [
  { name: 'El Mesala Hotel', cuisine: 'Hotel Restaurant' },
  { name: 'New Nile Panorama', cuisine: 'Egyptian' },
  { name: 'Thebes Restaurant', cuisine: 'Egyptian' },
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `luxor-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/luxor-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/luxor-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/luxor-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 1 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115995.7347952472!2d32.6775691!3d25.6949313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144915cf57731991%3A0x653243e86c572242!2sLuxor%2C%20Luxor%20City%2C%20Luxor%2C%20Luxor%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sde!4v1684321098765',
        cuisine: r.cuisine,
        alexsTip: "Add your personal tip here!",
        dietary: {
            celiac: "Please update dietary information.",
            lactose: "Please update dietary information.",
            vegan: "Please update dietary information."
        },
        websiteUrl: '#',
        instagramUrl: '#'
    }
});

export const luxor: City = {
  id: 'luxor',
  name: 'Luxor',
  image: 'https://picsum.photos/seed/luxor-city/800/600',
  restaurants: [
    ...placeholderRestaurants,
  ],
};