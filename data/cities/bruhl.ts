
import type { City } from '../../types';

const newRestaurants = [
  { name: 'El Patio', cuisine: 'Spanish' },
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `bruhl-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/bruhl-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/bruhl-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/bruhl-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 1 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32231.8595514059!2d6.88219465!3d50.82956225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf24a434315621%3A0x42760fc4a2a7500!2sBr%C3%BChl!5e0!3m2!1sen!2sde!4v1684321098765',
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

export const bruhl: City = {
  id: 'bruhl',
  name: 'Bruhl',
  image: 'https://picsum.photos/seed/bruhl-city/800/600',
  restaurants: [
    ...placeholderRestaurants,
  ],
};