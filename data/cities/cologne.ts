
import type { City } from '../../types';

const newRestaurants = [
  { name: 'Okinii', cuisine: 'Japanese' },
  { name: 'Thai Viet Street Food', cuisine: 'Thai/Vietnamese' },
  { name: 'Nennillo', cuisine: 'Italian' },
  { name: 'El Inca', cuisine: 'Peruvian' },
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
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/Nennillo/Nennillo_1.jpg',
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
      tags: ["Sushi", "Japanese", "Asian", "All-you-can-eat", "Dinner", "gluten-free", "lactose-free"]
    },
    {
      id: 'nennillo',
      name: 'Nennillo',
      description: "The closest pizza to a true Napoli pizza you can find in Germany. I have been back many, many times and order takeout often. The pizzas are cooked in a traditional pizza oven so each pizza is cooked slighltly different, some more pale and some more burnt. If you are not happy with the cook of you pizza you can always send it back as the service staff are very polite. There are three in Köln, the one I have visited was in the Belgium quarter so I can recommend this one.",
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
      tags: ["Italian", "Pizza", "Aperol", "Budget-friendly", "Takeaway", "gluten-free", "vegetarian", "vegan"]
    },
    {
      id: 'frittenwerk',
      name: "Frittenwerk",
      description: "Definitely a good spot for some loaded fries or 'poutine'. I was surprised by how filling the fries were after seeing the portion size, so don't be too disappointed. The price is a little on the expensive side so I wouldn't go back often but a nice treat when you want to try something different. I had the Tijuana street fries that are topped with tomatoes, avocado and sour cream. I can also recommend the BBQ pulled pork poutine. I do not recommend adding extra falafel on top as it is not worth the price You can order at the screens and change the language so you don't need to speak German. Note the wait time for all orders when eating in is approx 30 minutes, so I wouldn' go if you are in a rush.",
      quickVerdict: 'The best loaded fries in Bonn, wait time is a bit long but worth it.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/frittenwerk/frittenwerk_2.jpg', caption: 'Tijuana street fries with falafel'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/frittenwerk/frittenwerk_1.jpg', caption: 'BBQ pulled pork poutine (left) and Tijuana street fries (right) with falafel' }
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
      tags: ["Fries", "Takeaway", "Street-food", "gluten-free", "lactose-free", "vegetarian", "vegan"]
    }
  ],
};
