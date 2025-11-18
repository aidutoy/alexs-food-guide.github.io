
import type { City } from '../../types';

export const bonn: City = {
  id: 'bonn',
  name: 'Bonn',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_1.jpg',
  coordinates: { lat: 50.7374, lon: 7.0982 },
  restaurants: [
    {
      id: 'okinii',
      name: 'Okinii',
      description: 'One of the best sushi places in bonn with an all-you-can-eat sushi menu. I have been so often that I am starting to get sick of it! I think the price is quite high but the sushi is worth it in my opinion.',
      quickVerdict: 'The go-to spot for high-quality all-you-can-eat sushi in Bonn. Come hungry.',
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
      instagramUrl: 'https://www.instagram.com/okiniirestaurants/?hl=en',
      tags: ["Sushi", "Japanese", "Asian", "All-you-can-eat", "Dinner"]
    },
    {
      id: 'tio-pepe',
      name: 'Tio Pepe',
      description: 'Great spot for some Spanish tapas, lots of incredibly tasty dishes to share with family and friends. There is no need to rush here, sit and enjoy the atmosphere with amazing food and wine.',
      quickVerdict: 'Perfect for a relaxed evening of sharing plates and wine. Authentic vibes, busy atmosphere.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_0.jpg', caption: 'Calamari plancha, patatas bravas, bacon wrapped dates, croquettes with fish and chilli, patatas with aiolo, bread' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_2.jpg', caption: 'Fried calamari, patatas bravas, bacon wrapped dates, croquettes with fish and chilli, patatas with aiolo, bread, tortilla con chorizo' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_3.jpg', caption: 'Tortilla con chorizo' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_4.jpg', caption: 'Fried calamari' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_6.jpg', caption: 'Fried calamari, patatas bravas, bacon wrapped dates, croquettes with fish and chilli, patatas with aiolo, bread, tortilla con chorizo' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_5.jpg', caption: 'Crema Catalana' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 3 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=tio%20pepe&maptype=roadmap',
      cuisine: 'Spanish tapas',
      alexsTip: "I would recommend to take a pitcher of sangria and the bacon wrapped dates, but the tortilla, croquettes, patatas bravas, and calamari are great options too.",
      dietary: {
        celiac: "No gluten-free bread but plenty of tapas like patatas bravas, calamari and bacon wrapped dates.",
        lactose: "No cheese or milk specifically lactose-free but many options without dairy.",
        vegan: "Very limited options due to the meat and fish in most food."
      },
      websiteUrl: 'https://tio-pepe-bonn.de/',
      instagramUrl: 'https://www.instagram.com/tiopepebonn/',
      tags: ["Tapas", "Spanish", "Sharing", "Wine", "Date Night"]
    },
    {
      id: 'ha-long',
      name: 'Ha Long',
      description: "I have been going to Ha Long since it was called Ginger's. It is one of my favourite restaurants in Bonn because I love their mama mango. The portion sizes are huge and you will definitely leave the place full. I haven't tried the sushi, but I have seen many other tables ordering it too. I quite often order take away for pickup or delivery so don't be put off if there are no customers inside.",
      quickVerdict: 'Huge portions, incredible flavors, and great value. Don’t judge the empty tables, it’s a takeaway favorite.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ha_long/ha_long_1.jpg', caption: 'Mama mango with crispy fried chicken.' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ha_long/ha_long_2.jpg', caption: 'Mama mango with crispy fried chicken.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ha_long/ha_long_3.jpg', caption: 'Mama mango with crispy fried chicken, peanut sauce with grilled chicken (left and right).' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ha_long/ha_long_4.jpg', caption: 'Mama mango with crispy fried chicken (bottom) and Thai yellow curry with grilled chicken (top)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ha_long/ha_long_5.jpg', caption: 'Mama mango with crispy fried chicken.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ha_long/ha_long_6.jpg', caption: 'Chicken satay skewers.' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Ha%20Long%20-%20Sushi%20%26%20vietnamesische%20K%C3%BCche%2C%20Endenicher%20Stra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Vietnamese, sushi',
      alexsTip: "I always take the mama mango with crispy fried chicken because it is incredibly tasty. I can recommend also the peanut sauce, chicken satay skewers, and the Thai yellow curry.",
      dietary: {
        celiac: "A lot of curries on the menu say they have gluten but after speaking with the chef, they in fact do not, so always ask just in case.",
        lactose: "All curries are made from coconut milk, sushi may have cream cheese in some cases but generally lactose-free.",
        vegan: "Every curry can be ordered with tofu, and there are vegan sushi on the menu."
      },
      websiteUrl: 'https://www.lieferando.de/speisekarte/ha-long-endenicher-strasse',
      tags: ["Vietnamese", "Asian", "Curry", "Sushi", "Budget-friendly", "Takeaway"]
    }
  ],
};