
import type { City } from '../../types';

const newRestaurants = [
  { name: "Ca's Patró March", cuisine: 'Seafood' },
  { name: 'Sadrassana', cuisine: 'Mallorcan' },
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `mallorca-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/mallorca-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/mallorca-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/mallorca-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 2 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3075.760074256268!2d2.647574312693991!3d39.56949997136081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12979259c61ac757%3A0xc40d5406c3d1482!2sPalma%2C%20Illes%20Balears%2C%20Spain!5e0!3m2!1sen!2sde!4v1684321098765',
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
        tags: [r.cuisine, "Dining", "Island Life"]
    }
});

export const mallorca: City = {
  id: 'mallorca',
  name: 'Palma de Mallorca',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/mallorca.jpg',
  coordinates: { lat: 39.5696, lon: 2.6502 },
  restaurants: [
    {
      id: 'cafeplaya',
      name: 'Cafeteria Playa',
      description: 'A packed restaurant of locals and some tourists. It is always a good sign when you see locals in a restaurant. The food was quick, cheap, and very tasty. The hake was soft and well cooked, the side salad a bit underwhelming but the view makes up for it. Take some time and enjoy the view with some spanish food.',
      quickVerdict: 'A bustling local gem offering fresh, affordable seafood with stunning beachside views. The daily menu is an absolute steal.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/cafeplaya/cafeplaya_1.jpg', caption: 'Hake fillet with fries' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/cafeplaya/cafeplaya_2.jpg', caption: 'House white wine' }
      ],
      ratings: { food: 4, drinks: 5, service: 4, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Cafeteria%20Playa%2C%20Avinguda%20de%20Bartomeu%20Riutort%2C%20Palma%2C%20Spain&maptype=roadmap',
      cuisine: 'Spanish',
      alexsTip: "Take the daily menu for only €11.90, including a glass of wine or beer.",
      dietary: {
        celiac: "A lot on the menu is without gluten, including the cheap daily menu. You won't have a problem finding food here.",
        lactose: "No dairy in the daily menu and not a lot of dairy in the tapas.",
        vegetarian: "Not suitable for vegetarians as majority of the menu is seafood apart from patatas bravas and salads.",
        vegan: "Even less vegan food than vegetarian so not recommended."
      },
      websiteUrl: 'https://www.tripadvisor.com/Restaurant_Review-g187463-d10807909-Reviews-Cafeteria_Playa-Palma_de_Mallorca_Majorca_Balearic_Islands.html',
      tags: ["Spanish", "Tapas",  "Sharing", "Wine", "Sangria", "Seafood", "gluten-free",  "lactose-free"]
    }
  ]
};
