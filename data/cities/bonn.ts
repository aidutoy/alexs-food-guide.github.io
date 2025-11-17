
import type { City } from '../../types';

export const bonn: City = {
  id: 'bonn',
  name: 'Bonn',
  image: 'https://picsum.photos/seed/bonn/800/600',
  restaurants: [
    {
      id: 'okinii',
      name: 'Okinii',
      description: 'One of the best sushi places in bonn with an all-you-can-eat sushi menu. I have been so often that I am starting to get sick of it! I think the price is quite high but the sushi is worth it in my opinion.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_2.jpg', caption: 'Cream cheese roll, tuna roll, chicken and mango roll, and tekka maki' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_1.jpg', caption: 'Tekka maki, shake maki, avocado maki, shake nigiri, cream cheese roll, california roll' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_3.jpg', caption: 'Tekka maki, avocado maki, shake maki, cream cheese roll, teriyaki roll, shake temaki' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_4.jpg', caption: 'Tekka maki, shake maki, cream cheese roll, shake nigiri, california maki, chicken and mango roll, teriyaki roll, and spicy duck mango roll' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_5.jpg', caption: 'Chicken and mango roll' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_6.jpg', caption: 'Spicy duck mango roll (left) and chicken and mango roll (right)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/okinii/okinii_7.jpg', caption: 'Matcha, black sesame, and mango ice cream' }
      ],
      ratings: { food: 5, drinks: 4, service: 4, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Okinii%20Bonn%2C%20Quantiusstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Japanese sushi',
      alexsTip: "Try their chicken and mango roll, I can't get enough of it.",
      dietary: {
        celiac: "A few sushi options in the all-you-can-eat lunch menu, gluten-free soy sauce available.",
        lactose: "plenty of lactose-free sushi.",
        vegan: "vegetarian sushi are typically vegan unless with cream cheese."
      },
      websiteUrl: 'https://okinii.de/standorte-bu/bonn/',
      instagramUrl: 'https://www.instagram.com/okiniirestaurants/?hl=en'
    },
    {
      id: 'tio-pepe',
      name: 'Tio Pepe',
      description: 'Great spot for some Spanish tapas, lots of incredibly tasty dishes to share with family and friends. There is no need to rush here, sit and enjoy the atmosphere with amazing food and wine.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/tio_pepe/tio_pepe_0.jpg', caption: 'Calamari plancha, patatas bravas, bacon wrapped dates, croquettes with fish and chilli, patatas with aiolo, bread' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/tio_pepe/tio_pepe_2.jpg', caption: 'Fried calamari, patatas bravas, bacon wrapped dates, croquettes with fish and chilli, patatas with aiolo, bread, tortilla con chorizo' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/tio_pepe/tio_pepe_3.jpg', caption: 'Tortilla con chorizo' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/tio_pepe/tio_pepe_4.jpg', caption: 'Fried calamari' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/tio_pepe/tio_pepe_6.jpg', caption: 'Fried calamari, patatas bravas, bacon wrapped dates, croquettes with fish and chilli, patatas with aiolo, bread, tortilla con chorizo)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/tio_pepe/tio_pepe_5.jpg', caption: 'Crema Catalana' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 3 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Okinii%20Bonn%2C%20Quantiusstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Spanish tapas',
      alexsTip: "I would recommend to take a pitcher of sangria and the bacon wrapped dates, but the tortilla, croquettes, patatas bravas, and calamari are great options too.",
      dietary: {
        celiac: "No gluten-free bread but plenty of tapas like patatas bravas, calamari and bacon wrapped dates.",
        lactose: "No cheese or milk specifically lactose-free but many options without dairy.",
        vegan: "Very limited options due to the meat and fish in most food."
      },
      websiteUrl: 'https://tio-pepe-bonn.de/',
      instagramUrl: 'https://www.instagram.com/tiopepebonn/'
    },
  ],
};
