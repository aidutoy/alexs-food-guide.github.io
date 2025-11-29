


import type { City } from '../../types';

const newRestaurants = [
  { name: 'Okinii', cuisine: 'Japanese' },
  { name: 'Thai Viet Street Food', cuisine: 'Thai/Vietnamese' },
  { name: 'Nennillo', cuisine: 'Italian' },
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `cologne-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/cologne-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/cologne-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/cologne-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 1 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160900.2238426915!2d6.822295697265622!3d50.9383611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25916a3765f3%3A0x42760fc4a2a73b0!2sCologne!5e0!3m2!1sen!2sde!4v1684321098765',
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
        tags: [r.cuisine.split('/')[0], "Casual", "Dinner"]
    }
});

export const cologne: City = {
  id: 'cologne',
  name: 'Köln',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cologne/cologne.jpg',
  coordinates: { lat: 50.9375, lon: 6.9603 },
  restaurants: [
    {
      id: 'okinii',
      name: 'Okinii',
      description: 'One of the best sushi places in bonn with an all-you-can-eat sushi menu. I have been so often that I am starting to get sick of it! I think the price is quite high but the sushi is worth it in my opinion.',
      quickVerdict: 'The go-to spot for high-quality all-you-can-eat sushi in Köln. Come hungry.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_8.jpg', caption: 'Shake nigiri, tekka nigiri, teriyaki roll, cream cheese roll, tekka maki, shake maki' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_1.jpg', caption: 'Tekka maki, shake maki, avocado maki, shake nigiri, cream cheese roll, california roll' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_3.jpg', caption: 'Tekka maki, avocado maki, shake maki, cream cheese roll, teriyaki roll, shake temaki' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_4.jpg', caption: 'Tekka maki, shake maki, cream cheese roll, shake nigiri, california maki, chicken and mango roll, teriyaki roll, and spicy duck mango roll' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_5.jpg', caption: 'Chicken and mango roll' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_6.jpg', caption: 'Spicy duck mango roll (left) and chicken and mango roll (right)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_2.jpg', caption: 'Cream cheese roll, tuna roll, chicken and mango roll, and tekka maki' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_10.jpg', caption: 'Spicy duck roll, chicken mango roll, gyu hireniku, various nigiri' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_11.jpg', caption: 'Yaki tori' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_12.jpg', caption: 'Spicy duck roll, chicken mango roll' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_13.jpg', caption: 'Specials fried egg bun' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_14.jpg', caption: 'Sweet and sour karrage (fried chicken)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_15.jpg', caption: 'Special roll with salmon, fried prawns, and wasabi cream, tekka nigiri, teriyaki roll, tekka maki, shake nigiri' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_16.jpg', caption: 'Teriyaki roll' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_17.jpg', caption: 'Tako Yaki' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_18.jpg', caption: 'Gluten-free soy sauce' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_7.jpg', caption: 'Matcha, black sesame, and mango ice cream' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_9.jpg', caption: 'Fried Rafaello' }

      ],
      ratings: { food: 5, drinks: 4, service: 4, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Okinii%20K%C3%B6ln%2C%20Blaubach%2C%20Cologne%2C%20Germany&maptype=roadmap',
      cuisine: 'Japanese sushi',
      alexsTip: "The all-you-can-eat dinner during the week is far superior to the lunch menu. Try their chicken and mango roll, I can't get enough of it.",
      dietary: {
        celiac: "A few sushi options in the all-you-can-eat lunch menu, gluten-free soy sauce available.",
        lactose: "plenty of lactose-free sushi.",
        vegetarian: "Plenty of vegetarian sushi options available.",
        vegan: "vegetarian sushi are typically vegan unless with cream cheese."
      },
      websiteUrl: 'https://okinii.de/standorte-bu/koln/',
      instagramUrl: 'https://www.instagram.com/okiniirestaurants/?hl=en',
      tags: ["Sushi", "Japanese", "Asian", "All-you-can-eat", "Dinner", "gluten-free", "lactose-free"],
      openingHours: [
          "Monday - Thursday: 17:00 - 22:00",
          "Friday - Saturday: 12:00 - 16:00, 16:00 - 23:30",
          "Sunday, holidays: 12:00 - 16:00, 16:00 - 22:00",
      ]
    },
    {
      id: 'nennillo',
      name: 'Nennillo',
      description: "The closest pizza to a true Napoli pizza you can find in Germany. I have been back many, many times and order takeout often. The pizzas are cooked in a traditional pizza oven so each pizza is cooked slighltly different, some more pale and some more burnt.\n\nIf you are not happy with the cook of you pizza you can always send it back as the service staff are very polite. There are three in Köln, the one I have visited was in the Belgium quarter so I can recommend this one.",
      quickVerdict: 'Napoli pizza, best in town, and great value. 10-20 minutes for pick-up order.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_1.jpg', caption: 'Bufalina gluten-free (bottom), Rot und Böse (right) and Margherita (top)'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_2.jpg', caption: 'Rot und Böse (bottom), Bufalina gluten-free (right bottom), Principesa (top right), Lungo Tonno (top left), Bufalina (mid left)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_3.jpg', caption: 'Margherita with Aperol Spritz' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_4.jpg', caption: 'Margherita' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_5.jpg', caption: 'Rot und Böse in Köln is different than in Bonn' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_6.jpg', caption: 'Rot und Böse (bottom) and Bufalina gluten-free (top)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_7.jpg', caption: 'Rot und Böse (bottom) and Bufalina (top)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_8.jpg', caption: 'Margherita takeaway'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_9.jpg', caption: 'Margherita takeaway'}
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Antica%20Pizzeria%20Nennillo%20-%20Belgisches%20Viertel%2C%20Limburger%20Stra%C3%9Fe%2C%20Cologne%2C%20Germany&maptype=roadmap',
      cuisine: 'Italian',
      alexsTip: "If you like it a bit spicy like me, then take the Rot und Böse (red and evil), and always have an Aperol Spritz. For dessert, share the nutella and pistachio pizza.",
      dietary: {
        celiac: "Notify the restaurant, typically a day before but morning might be ok, that you wish for a gluten-free pizza so they warm the second pizza oven before your arrival. Note it costs 4.50 more, which is rather expensive.",
        lactose: "Cheese is not lactose-free but you can order pizza without cheese.",
        vegetarian: "Margherita, Funghi, and other vegetarian classics available.",
        vegan: "There are two vegan pizzas, la vegana arrabbiata and quattro vegani."
      },
      websiteUrl: 'https://www.nennillo.de/',
      instagramUrl: 'https://www.instagram.com/pizzerianennillo/',
      tags: ["Italian", "Pizza", "Aperol", "Budget-friendly", "Takeaway", "gluten-free", "vegetarian", "vegan"],
      openingHours: [
          "Everyday: 11:00 - 23:00"
      ]
    },
    {
      id: 'thaiviet',
      name: 'Thai Viet Street Food',
      description: "If you like Thai and Vietnamese food and big portions for a good price then this is the place for you. Quite central to the Cologne Cathedral is a small cash-only restaurant that serves excellent curries. I am especially a fan of the mango sauce with crispy fried chicken and the peanut sauce. Suitable for both vegans and coeliacs. ",
      quickVerdict: 'Excellent curries, big portions, and great value near the Cathedral. Cash only.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cologne/thaiviet/thaiviet_1.jpg', caption: 'Crispy fried chicken with mango sauce (bottom) and fried chicken with peanut sauce (top)'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cologne/thaiviet/thaiviet_2.jpg', caption: 'Crispy fried chicken with mango sauce' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Thai-Viet%20Street%20Food%20Imbiss%2C%20Kleine%20Budengasse%2C%20Cologne%2C%20Germany&maptype=roadmap',
      cuisine: 'Vietnamese',
      alexsTip: "I recommend the Vietnamese drink Chanh Da with lime juice, sugar, and water",
      dietary: {
        celiac: "Many curries have the option to have grilled chicken or tofu. The noodles are not gluten-free.",
        lactose: "All curries are made with coconut milk.",
        vegetarian: "Dishes can be served with tofu or just vegetables.",
        vegan: "Dishes can be served with tofu or just vegetables, no dairy in the curries."
      },
      websiteUrl: 'https://www.thaiimbisskoelnkoeln.de/',
      tags: ["Vietnamese", "Thai", "Asian", "Curries", "Noodles", "Budget-friendly", "Takeaway", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Monday - Friday: 11:00 - 22:00",
          "Saturday - Sunday: 12:00 - 22:00" 
      ]
    },
    {
      id: 'elinca',
      name: 'El Inca',
      description: "El Inca is an excellent Peruvian restaurant, not only specialising in Peruvian food but other dishes from Latin America. The restaurant has a great atmosphere and the decoration highlights the Latin American culture. I really recommend this restaurant to everyone. I had the aji de gallina, but I can also recommend the lomo saltado.",
      quickVerdict: 'A vibrant taste of Peru in Cologne! Authentic dishes, lively atmosphere, and must-try Pisco Sours.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cologne/el_inca/el_inca_2.jpg', caption: 'Aji de Gallina'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cologne/el_inca/el_inca_1.jpg', caption: 'Lomo Saltado' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cologne/el_inca/el_inca_3.jpg', caption: 'Nachos with mixed salsas' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cologne/el_inca/el_inca_6.jpg', caption: 'Patacones (bottom) and Yuca a la Huancaina (top)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cologne/el_inca/el_inca_4.jpg', caption: 'Pisco Sour' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/cologne/el_inca/el_inca_5.jpg', caption: 'Inca Kola' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Thai-Viet%20Street%20Food%20Imbiss%2C%20Kleine%20Budengasse%2C%20Cologne%2C%20Germany&maptype=roadmap',
      cuisine: 'Peruvian',
      alexsTip: "Definitely take the Inca kola and the pisco sour when you go!",
      dietary: {
        celiac: "A few dishes like lomo saltado have no gluten in it but aji de gallina is made from biscuits.",
        lactose: "A few dishes made with dairy but plenty options without.",
        vegetarian: "A lot of dishes meat based but some vegetarian options.",
        vegan: "Limited options but one or two on the menu"
      },
      websiteUrl: 'https://www.el-inca.de/',
      instagramUrl: 'https://www.instagram.com/elincarestaurant/?hl=en',
      tags: ["Peruvian", "Latin American", "Pisco Sour", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Monday: Closed",
          "Tuesday - Saturday: 17:00 - 00:00",
          "Sunday: 12:00 - 22:00"
      ]
    },
    {
      id: 'frittenwerk',
      name: "Frittenwerk",
      description: "Definitely a good spot for some loaded fries or 'poutine'. I was surprised by how filling the fries were after seeing the portion size, so don't be too disappointed. The price is a little on the expensive side so I wouldn't go back often but a nice treat when you want to try something different.\n\nI had the Tijuana street fries that are topped with tomatoes, avocado and sour cream. I can also recommend the BBQ pulled pork poutine. I do not recommend adding extra falafel on top as it is not worth the price\n\nYou can order at the screens and change the language so you don't need to speak German. Note the wait time for all orders when eating in is approx 30 minutes, so I wouldn' go if you are in a rush.",
      quickVerdict: 'The best loaded fries in the area, wait time is a bit long but worth it.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/frittenwerk/frittenwerk_1.jpg', caption: 'BBQ pulled pork poutine (left) and Tijuana street fries (right) with falafel'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/frittenwerk/frittenwerk_2.jpg', caption: 'Tijuana street fries with falafel' }
      ],
      ratings: { food: 4, drinks: 4, service: 3, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Frittenwerk%20K%C3%B6ln%2C%20Ehrenstra%C3%9Fe%2C%20Cologne%2C%20Germany&maptype=roadmap',
      cuisine: 'Fries',
      alexsTip: "Take the BBQ pulled pork poutine or the Tijuana street fries but do not add extra falafel. Takeaway orders are much faster.",
      dietary: {
        celiac: "Majority of fries are gluten-free.",
        lactose: "Fries without cheese available.",
        vegetarian: "A few fries are without meat.",
        vegan: "Vegan fries and vegan mayo on offer."
      },
      websiteUrl: 'https://frittenwerk.com/',
      instagramUrl: 'https://www.instagram.com/frittenwerk/',
      tags: ["Fries", "Takeaway", "Street-food", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Monday - Thursday: 11:00 - 22:00",
          "Friday - Saturday: 11:00 - 23:00",
          "Sunday, Holidays: 11:30 - 21:00"
      ]
    },
    {
      id: 'kaffeesaurus',
      name: "Kaffeesaurus",
      description: "A great spot for brunch with friends, or a quick coffee and cake, or even an atmospheric place to study during the week. I would recommend coming here to try the chai and cakes.\n\nIn my experience the hollandaise sauce wasn't as good as in cream company but the Brontosaurus burger I had one time was really tasty. I think the prices are fair and the atmosphere is really nice, so overall a great cafe.",
      quickVerdict: 'A trendy, spacious spot near the station ideal for brunch or study. Delicious cakes and fair prices.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_1.jpg', caption: 'Brontosaurus burger'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_2.jpg', caption: 'Open toast sandwiches, Bennysaurus eggs (bottom right), Eggs any style with poached eggs, extra salmon on gluten free bread with a side of turkey bacon (mid left)'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_3.jpg', caption: 'Bennysaurus eggs'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_9.jpg', caption: 'Saurus french toast with vanilla ice cream'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_10.jpg', caption: 'Saurus french toast and hawaii bowls (gluten-free)'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_4.jpg', caption: 'Carrot cake'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_5.jpg', caption: 'Chai'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_6.jpg', caption: 'Chai'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_7.jpg', caption: 'Options on 25.05.2025 with two gluten free options and 5 vegan options'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_8.jpg', caption: 'Gluten-free brownies'}
      ],
      ratings: { food: 4, drinks: 5, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Kaffeesaurus%2C%20Friesenplatz%2C%20Cologne%2C%20Germany&maptype=roadmap',
      cuisine: 'Cafe',
      alexsTip: "Definitely order the chai, it tastes close to the real thing and even comes with a timer when to pour. The Brontosaurus burger is my favourite.",
      dietary: {
        celiac: "Some gluten free cakes, salads and gluten-free toast. Hollandaise sauce is not gluten-free. The Hawaii bowl is gluten-free, but please double check with server.",
        lactose: "Lactose-free milk for coffee available.",
        vegetarian: "Plenty options for sandwiches, burgers, and cakes.",
        vegan: "Cakes, main dishes and milk alternatives for coffee."
      },
      websiteUrl: 'https://kaffeesaurus.com/',
      instagramUrl: 'https://www.instagram.com/kaffeesaurus/',
      tags: ["Cafe", "Burgers", "Cakes", "Sandwiches", "Coffee", "Tea", "Chai", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Monday - Friday: 08:00 - 21:00",
          "Saturday - Sunday: 09:00 - 21:00" 
      ]
    }
    {
      id: 'losteria',
      name: "L'osteria",
      description: "A good spot for a large appetite, the pizzas are so big they don't fit on a plate, and you will probably take some home. I definitely recommend coming to feed a family, or if you have a work event, because who doesn't like pizza and pasta?\n\nNow the pizza isn't as good as Napoli pizza, and they do have Hawaiian, but I am a fan regardless. You can even split the pizza in half and share with a friend, or just try two different toppings yourself, like I do. I would not recommend the pasta as the portion size is too small, and honestly, I don't think it is what they are known for.\n\nYou can find L'Osteria everywhere. There are many in Bonn and Cologne, but I will only link to the one I went to in Bonn for simplicity. I don't expect the menu or quality of food to change much between the different locations. The price is fair for what you get, just have a few Aperol spritz and try to finish your plate.",
      quickVerdict: 'Huge pizzas for a fair price, you will probably end up taking half home.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/losteria/losteria_1.jpg', caption: 'Various pizzas'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/losteria/losteria_2.jpg', caption: 'Half Hawaiian and BBQ chicken (spicy) pizza'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/losteria/losteria_4.jpg', caption: 'Quattro Formaggi pizza'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/losteria/losteria_3.jpg', caption: 'Pizza pane and bruschetta (top)'}
      ],
      ratings: { food: 4, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: "https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=L'Osteria%20Bonn%20In%20der%20S%C3%BCrst%2C%20In%20der%20S%C3%BCrst%2C%20Bonn%2C%20Germany&maptype=roadmap",
      cuisine: 'Italian',
      alexsTip: "Order half of your favourite pizza and half of something new to try.",
      dietary: {
        celiac: "No gluten-free pasta or pizza.",
        lactose: "No specific lactose-free cheese but parmesean can be lactose-free so check with the waiter.",
        vegetarian: "Plenty vegetarian pizza and pasta options.",
        vegan: "Vegan pizza and pasta available."
      },
      websiteUrl: 'https://losteria.net/de/',
      instagramUrl: 'https://www.instagram.com/losteria.de/?hl=en',
      tags: ["Italian", "Pizza", "Aperol", "Takeaway", "vegetarian", "vegan"],
      openingHours: [
          "Monday - Thursday: 11:30 - 23:00",
          "Friday - Saturday: 11:30 - 00:00",
          "Sunday: 12:00 - 23:00"
      ]
    },
    {
      id: 'fritesbelgique',
      name: "Frites Belgique",
      description: "An easy and quick stop to get some good fries with tasty dips. Not too much to say but definitely try the peanut dipping sauce for something new. The dips change from time to time, but mayo, vegan mayo, and peanut sauce are the best.",
      quickVerdict: 'The best fries in Bonn. Fast, tasty, and great dips.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/fritesbelgique/frites_1.jpg', caption: 'Large fries with mayo and bacon mayo'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/fritesbelgique/frites_2.jpg', caption: 'Regular fries with peanut sauce' }
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Frites%20Belgique%2C%20Sternstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Fries',
      alexsTip: "Large fries with the peanut sauce if on offer, and if not go for the mayo.",
      dietary: {
        celiac: "All fries are gluten-free.",
        lactose: "All fries are lactose-free and most dips are too.",
        vegetarian: "Fries cooked in plant based oil, only bacon mayo dip not vegetarian.",
        vegan: "Fries cooked in plant base oil, no animal fat, and there is vegan mayo."
      },
      websiteUrl: 'https://frites-belgique.com/',
      instagramUrl: 'https://www.instagram.com/fritesbelgique/',
      tags: ["Fries", "Takeaway", "Street-food", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Monday - Saturday: 11:30 - 20:00",
          "Sunday: 13:00 - 18:00"
      ]
    }
  ],
};