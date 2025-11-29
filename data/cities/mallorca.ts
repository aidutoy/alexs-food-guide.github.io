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
      id: 'sibil-la',
      name: 'Sibil-La',
      description: "A delicious cafe with an excellent tapas menu covering the basics and some intersting asian twists, like the crunchy prawns with coconut sauce, peanut oil and pistachios. This cafe has the best sangria we tried on the trip so I would recommend taking a large glass. I am a big fan of aubergine so the fried aubergine with honey was incredible. The patatas bravas was also not too spicy and paired nicely with the aioli. I would come again on my next trip to Palma. There is a larger menu for those who don't want tapas, that includes burgers, salads, tacos, and curries. ",
      quickVerdict: 'The best sangria of the trip and addictive fried aubergine with honey. A perfect spot for tapas with a twist.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/sibil-la/sibil-la_1.jpg', caption: 'Patatas bravas with aioli, ceviche, cruncy prawns.' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/sibil-la/sibil-la_2.jpg', caption: 'Patatas bravas with aioli and sangria' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/sibil-la/sibil-la_3.jpg', caption: 'Ceviche' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/sibil-la/sibil-la_4.jpg', caption: 'Crunchy prawns with coconut sauce, peanut oil and pistachios' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/sibil-la/sibil-la_5.jpg', caption: 'Fried aubergine with honey' }

      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Caf%C3%A9%20Restaurante%20Sibil%C2%B7la%2C%20Carrer%20de%20Blanquerna%2C%20Palma%2C%20Spain&maptype=roadmap',
      cuisine: 'Spanish Tapas',
      alexsTip: "The fried aubergine with honey is addictive, order at least two plates and best shared between friends.",
      dietary: {
        celiac: "Plenty options in the tapas menu, even some fried dishes use chickpea flour. ",
        lactose: "Curries made from coconut milk so dairy-free, and most seafood dishes don't include dairy.",
        vegetarian: "Plenty salads and vegetarian tapas, including arepas, fried aubergine, and hummus. ",
        vegan: "More limited than the vegetarian as there are some egg dishes on the menu, but a good selection on offer like patatas bravas, fried aubergine, hummus, but very limited vegan desserts. "
      },
      websiteUrl: 'https://cafe-restaurante-sibilla.goto-where.com/',
      instagramUrl: 'https://www.instagram.com/caferestaurantesibil.la/?hl=en',
      tags:["Spanish", "Tapas", "Asian", "Sharing", "Wine", "Sangria", "Seafood", "gluten-free",  "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Everyday: 09:00 - 00:00"
      ]
    },
    {
      id: 'saulo',
      name: 'Sauló by Puro',
      description: "A great hotel if you don't mind basic rooms, it is right next to the beach and has easy bus connections to the airport and city center. The breakfast is expensive at €15 per person but we figured we would rather not waste time looking for somewhere and fill up on the breakfast. The food was tasty and there are gluten-free, lactose-free, vegetarian, vegan options upon request. You have to ask for the gluten-free bread and they can warm it up for you. I would recommend taking the breakfast and then head out into town, don't forget to try the cheese with fig jam. You can also eat here for lunch or dinner, they have a pizzeria too but we preferred to eat tapas in town.",
      quickVerdict: 'Convenient beachfront hotel buffet with extensive dietary options. A bit pricey but perfect for fueling up before exploring Palma.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/saulo/saulo_1.jpg', caption: 'Cheese, Iberian ham, bacon, scrambled eggs, ensalmada.' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/saulo/saulo_2.jpg', caption: 'Cheese, turkey bacon, scrambled eggs, Iberian ham, fig jam' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/saulo/saulo_3.jpg', caption: 'Cheese, turkey bacon, scrambled eggs, Iberian ham, fig jam' }

      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Saul%C3%B3%20by%20Puro%2C%20Playa%20de%2C%20Spain&maptype=roadmap',
      cuisine: 'Continental',
      alexsTip: "Wake up with a sunrise swim and satisfy your appetite on the buffet breakfast.",
      dietary: {
        celiac: "Gluten-free bread available upon request, can be warmed up. Warmed in sealed packaging so no cross-contimation.",
        lactose: "Lactose-free milk and yoghurt available, but no sign of lactose-free cheese. ",
        vegetarian: "Plenty vegetables, dairy products, toast, spreads, and fruit. ",
        vegan: "Similarly to the vegetarian options but vegan yoghurts and milks available."
      },
      websiteUrl: 'https://www.hotelsaulo.com/en/',
      instagramUrl: 'https://www.instagram.com/saulobypuro/?hl=en',
      tags: ["Continental", "Breakfast",  "Buffet", "All-you-can-eat", "Prosecco", "gluten-free",  "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Breakfast: 07:30 - 10:30",
          "Lunch and Dinner: 12:30 - 22:30"
      ]
    },
    {
      id: 'casajulio',
      name: 'Casa Julio',
      description: "While wandering the city center in the late evening we asked chatGPT where the top rated restaurants in Palma are. The top answer was Casa Julio, and it was totally right. This was one of the best meals we had on the island. The service was great and even set up another table for us outside even though they were full and we didn't book ahead. The sangria was amazing, and served in a large glass. The bacon covered dates and patatas bravas with aioli were delicious, could order again and again.",
      quickVerdict: 'A hidden gem in the narrow streets that is a must stop on your vacation.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/casajulio/casajulio_1.jpg', caption: 'Hake fillet with fries' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/mallorca/casajulio/casajulio_2.jpg', caption: 'House white wine' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Restaurant%20Casa%20Julio%2C%20Carrer%20de%20la%20Previsi%C3%B3%2C%20Palma%2C%20Spain&maptype=roadmap',
      cuisine: 'Spanish',
      alexsTip: "Take the sangria and the bacon covered dates. Get a table outside to really enjoy the atmosphere.",
      dietary: {
        celiac: "The tapas menu has many gluten-free dishes, like patatas braves, grilled shrimp, and andalusian squid.",
        lactose: "Almost everything is without dairy, but check no butter is used for cooking.",
        vegetarian: "A portion of the tapas menu is vegetarian but tapas is quite centered around seafood on the island.",
        vegan: "Similarly to the vegetarian options but you can order food without fried eggs or cheese."
      },
      instagramUrl: 'https://www.instagram.com/casajuliorestaurante/?hl=en',
      tags: ["Spanish", "Tapas",  "Sharing", "Wine", "Sangria", "Seafood", "gluten-free",  "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Monday: 13:00 - 23:30",
          "Tuesday - Thursday: 13:00 - 17:00",
          "Friday - Sunday: 13:00 - 23:00"
      ]
    },
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
      tags: ["Spanish", "Tapas",  "Sharing", "Wine", "Sangria", "Seafood", "gluten-free",  "lactose-free"],
      openingHours: [
          "Everyday except Wednesday: 10:00 - 00:00",
          "SWednesday: Closed",
      ]
    }
  ]
};