


import type { City } from '../../types';

const newRestaurants = [
  { name: 'River boat Cruise', cuisine: 'Experience' },
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `cairo-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/cairo-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/cairo-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/cairo-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 1 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221042.3986161421!2d31.33235775!3d30.0594833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sde!4v1684321098765',
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
        tags: [r.cuisine, "Tourism", "Must-do"]
    }
});

export const cairo: City = {
  id: 'cairo',
  name: 'Cairo',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cairo/cairo.jpg',
  coordinates: { lat: 30.0444, lon: 31.2357 },
  restaurants: [
    {
      id: 'riverboat',
      name: "River Boat Cruise",
      description: "For about €20-€25, you can take an evening trip on the Nile in a cruise ship, this included our taxi to and from the hotel in Giza. All of this was organised by the same tour guide as for the pyramids after we asked what we can do in the evening. The cruise ship only goes a little down the nile and back again but you are welcomed with an open buffet and belly dancing. Then you can head up on the observation deck and watch as you pass by the skyscrapers of downtown Cairo. There is shisha, alcohol, performance dancing, but you may be expected to get off your chair and dance to some latin music.\n\nThe food here was good, with a lot of nice baklava. I personally wasn't 100 % interested in all the food on offer as it was a lot of what I already have eaten this trip. Not too many options for vegans or gluten-free. I would recommend taking this trip if you have some time in the evening you want to kill, rather than just for the food.",
      quickVerdict: '',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cairo/riverboat/riverboat_1.jpg', caption: 'Hummus, kofta, bread, fried fish. Baklava, and red velvet cake.'},
      images: [
  
      ],
      ratings: { food: 3.5, drinks: 4, service: 4, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1935.0052017092614!2d31.232080000000003!3d29.979162999999996!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847a171025e55%3A0x4155e0af21a12a6d!2z2KfZhNio2KfYrtix2Kkg2LHZitmB2LEg2KjZiNiqIC0gUml2ZXIgQm9hdA!5e1!3m2!1sen!2sus!4v1763916254095!5m2!1sen!2sus',
      cuisine: 'Oriental Buffet',
      alexsTip: "Organise a trip with a tour guide and head up to the deck as soon as you finish eating. The boat has a pool.",
      dietary: {
        celiac: "Limited gluten-free options in the buffet.",
        lactose: "Reasonable amount of foods without dairy.",
        vegetarian: "Some vegetarian options in the buffet, plus cakes.",
        vegan: "Only vegetables, all cakes made with dairy."
      },
      tags: ["Oriental", "Egyptian", "Buffet", "Cruise", "vegetarian"]
    }
  ]
};