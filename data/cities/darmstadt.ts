import type { City } from '../../types';

export const darmstadt: City = {
  id: 'darmstadt',
  name: 'Darmstadt',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/darmstadt.jpg',
  coordinates: { lat: 49.8728, lon: 8.6512 },
  restaurants: [
    {
      id: 'Slap',
      name: 'Slap',
      description: "Great tasting Napoli style pizza in the heart of Darmstadt. There are always people eating here, so you can tell it's good. There is plenty space outside to sit during the summer, although, a bit uncomfortable on the steep inclined outside. The place is order at the bar and get a buzzer for when your pizza is ready, although the wait time was only about 10 minutes. The drinks are around 4 euros and the pizzas are decently priced with a margherita costing 11 euros. I enjoyed the pepperoni and chili-honey pizza which was not too spicy at all. The honey helped make the crust go down a bit easier. I have to say the highlight for me was the high quality mozarella which tasted great! As a last note, the staff are very accomodating and can make a new one if it is a bit burnt.",
      quickVerdict: 'Napoli pizza, great for a quick bite in town, and decent value.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/slap/slap_1.jpg', caption: 'Pepperoni and chili-honey pizza (bottom), bufalina (top and right)'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/slap/slap_2.jpg', caption: 'Margerhita pizza'}
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 2 },
      coordinates: { lat: 49.86872, lon: 8.65251 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=slap%20darmstadt&maptype=roadmap',
      cuisine: 'Italian',
      neighborhood: 'City Centre',
      lastVisited: 'September 2026',
      alexsTip: "Take the pizza to go and sit at outside the theatre, it's only a 2 minute walk so your pizza won't get cold. ",
      dietary: {
        celiac: "No gluten-free pizza available.",
        lactose: "No lactose-free cheese but vegan cheese available, like vegan mozarella and vegan parmesan",
        vegetarian: "At least 8 vegetarian pizzas, with the additional 12 vegan ones.",
        vegan: "There are many vegan options on the menu, 12 at the time of writing this, highly recommended for vegans."
      },
      instagramUrl: 'https://www.instagram.com/slap.pizza',
      tags: ["Italian", "Pizza", "Takeaway", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Mon - Sat: 11:00 - 23:00",
          "Sun: 12:00 - 22:00"
      ]
    },
    {
      id: 'SushiKi',
      name: 'SushiKi',
      description: "This asian restaurant specialising in sushi but there are plenty tasty curries on the menu too. I am a big fan of vietnamese food, so the Ga Chien Sot Xoai (mango-curry sauce) with breaded chicken was right up my street. It did not disappoint, lots of chicken and even too much rice for me, which honestly is not a negative. I would recommend coming with a big appetite. The drinks were very tasty, and I recommend ordering a Vietnames coffee at the end, they will ask you if you want it hot or cold, traditionally it is served cold. They offer a lunch menu saving at least 3 euros but only Monday to Friday between 11:30 and 15:00.",
      quickVerdict: 'Sushi, large Vietnamese curries and a cheap lunch menu.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/sushiki/sushiki_1.jpg', caption: 'Ga Chien Sot Xoai (mango-curry sauce) with breaded chicken'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/sushiki/sushiki_2.jpg', caption: 'Passionfruit (maracuja) soda' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/sushiki/sushiki_3.jpg', caption: 'Cafe Vietnam (cold) with condensed milk' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 2 },
      coordinates: { lat: 49.87031, lon: 8.65082 },
      mapEmbedUrl: '<iframe width="100%" height="650px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=sushiki&maptype=roadmap" allowfullscreen></iframe>',
      cuisine: 'Sushi, Vietnamese',
      neighborhood: 'City Centre',
      lastVisited: 'April 2026',
      alexsTip: "Light hunger: sushi, big hunger: vietnamese curry. Save money and come for lunch during the week.",
      dietary: {
        celiac: "Limited allergen information, most curries with breaded chicken can be replaced with regular chicken but note the amount of chicken is smaller. The curries do not appear to use gluten or soysauce with wheat. There are a lot of sushi with breadcrumbs. All nigiri, maki, temaki are GF, the more expensive larger sushi tends to have breaded shrimp or chicken or salmon in it. Play it safe and bring GF soy sauce with you.",
        lactose: "All curries are made with coconut milk so are lactose-free. The only thing to watch out for is the cream cheese in the sushi. There are plenty without, but the more expensive larger ones do tend to have cream cheese.",
        vegetarian: "Plenty vegetarian sushi, highlighted in green and have their own section in the menu. They are also slightly cheaper than the rest. Careful that a lot of the vegetarian sushi has cream cheese if you have lactose intolerance too.",
        vegan: "Vegetarian sushi typically has cream cheese, there appears to only be one special roll thats vegan, sea algae. There are at least 4 nigiri, and 4 maki that are vegan. Most curries can be with tofu or vegetarian chicken (no confirmation on the ingredient of the chicken to identify if vegan.)"
      },
      websiteUrl: "https://sushiki-darmstadt.de/index.html",
      instagramUrl: 'https://www.instagram.com/sushiki_darmstadt/',
      tags: ["Sushi", "Vietnamese", "Takeaway", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Mon - Sun: 11:30 - 22:00",
          "Thu: closed"
      ]
    },
    {
      id: 'LisKitchen',
      name: "Li's Kitchen",
      description: "Authentic Sichuan restaurant located on Adelungstraße in the centre of Darmstadt (also known locally as 川香巴蜀 / Chuanxiang Bashu). If you appreciate genuine Chinese spice and family style dining, this is a hidden gem. The restaurant appeared quiet through the week but don't let put you off, the food is delicious. The menu is packed with traditional specialities, from fiery Boiled Beef in Chili Sauce (Shuizhu Niurou) and fragrant Mapo Tofu to dry wok dishes and rich noodle soups. The portions are substantial and served piping hot. Those adventurous enough to drink their more exotic dishes like duck blood or pig intestines may have found your final boss. I couldn't bring myself to try it but if you do, let me know! They also offer a great-value lunch menu on weekdays.",
      quickVerdict: "Family style authentic chinese food that should not be overlooked.",
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/lis_kitchen/lis_kitchen_1.jpg', caption: 'Sweet and Sour Chicken (bottom), Fried Aubergine (top right), Mapu Tofu (top)'},
      images: [
        { 
          url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/lis_kitchen/lis_kitchen_2.jpg', 
          caption: 'Sweet and Sour Chicken' 
        },
        { 
          url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/lis_kitchen/lis_kitchen_3.jpg', 
          caption: 'Mapu Tofu' 
        }
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 2 },
      coordinates: { lat: 49.87071, lon: 8.65096 },
      mapEmbedUrl: '<iframe width="100%" height="650px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Li\'s%20Kitchen%2C%20Adelungstra%C3%9Fe%2C%20Darmstadt%2C%20Germany&maptype=roadmap" allowfullscreen></iframe>',
      cuisine: 'Chinese',
      neighborhood: 'City Center',
      lastVisited: 'October 2026',
      alexsTip: "Bring friends and order for the table, the menu is designed to share. Their lunch time menu will save you about 5 euros compared to dinner.",
      dietary: {
        celiac: "Many traditional Sichuan sauces and marinades contain soy sauce with wheat. Ask staff for wok dishes or steamed dishes prepared with salt and garlic without soy sauce, but cross-contamination risk is high in the kitchen.",
        lactose: "Virtually all dishes are naturally dairy-free and lactose-free as Chinese cooking does not traditionally use milk, cream, or cheese.",
        vegetarian: "Several solid choices including Mapo Tofu, homestyle braised eggplant/aubergine, spicy cucumber salad, and stir-fried pak choi with garlic.",
        vegan: "Vegetable stir-fries, and tofu with chili oil can all be prepared vegan."
      },
      websiteUrl: "https://www.liskitchen-darmstadt.de/",
      instagramUrl: 'https://www.instagram.com/chuanxiangbashu/?hl=en',
      tags: ["Chinese", "Sichuan", "Spicy", "Lunch", "Dinner", "Takeaway", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Mon - Wed: 11:30 - 15:00, 17:30 - 22:30",
          "Thu: closed",
          "Fri: 11:30 - 15:00, 17:30 - 22:30",
          "Sat - Sun: 12:00 - 22:30"
      ]
    },
    {
      id: 'Swaad',
      name: "Swaad",
      description: "A wonderful Indian restaurant located right in the city center of Darmstadt on Neckarstraße. One of the clearest signs of an authentic spot is seeing many Indian customers dining inside, and Swaad definitely delivers on genuine flavor without breaking the bank.\n\nThe standout moment for me was ordering the Pani Puri — biting into the crispy hollow puris filled with spiced potatoes and pouring in the tangy mint and tamarind water created an absolute flavor explosion. For the mains, the chicken curries were aromatic, rich, and paired perfectly with warm butter naan and a refreshing mango lassi. With fair prices, friendly service, and a huge selection of gluten-free starters and vegetarian curries, this is easily one of the best Indian spots to visit in Darmstadt.",
      quickVerdict: "Tasty Indian food with many Indian customers, showing its authenticity and inexpensive offers.",
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/swaad/swaad_1.jpg', caption: 'Pani Puri with tamarind and mint sauce'},
      images: [
        { 
          url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/swaad/swaad_2.jpg', 
          caption: 'Chicken Tikka Masala' 
        },
        { 
          url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/swaad/swaad_3.jpg', 
          caption: 'Chicken Curry with Butter Naan' 
        },
        { 
          url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/swaad/swaad_4.jpg', 
          caption: 'Mango Lassi' 
        }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: '<iframe width="100%" height="650px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Swaad%2C%20Neckarstra%C3%9Fe%2C%20Darmstadt%2C%20Germany&maptype=satellite" allowfullscreen></iframe>',
      cuisine: 'Indian',
      neighborhood: 'City Center',
      lastVisited: 'November 2026',
      alexsTip: "Absolutely worth it ordering the Pani Puri, I haven't had a flavour explosion like that in some time!",
      dietary: {
        celiac: "Every curry is gluten-free, but also the pakoras are battered with chickpea flour and the pappadoms are made with lentils so there is a large selection of gluten-free starts also. No gluten-free Naan.",
        lactose: "Many curries contain yoghurt, butter, or cream. There are at least 10 different curries that do not contain dairy like channa masala.",
        vegetarian: "Many curries are vegetarian, as many people in India are vegetarian. The main ingredients are Paneer, lentils, aubergine and potatoes.",
        vegan: "Similar to vegetarian, there are at least 9 curries that are vegan using a combination of vegetables or lentils or chickpeas."
      },
      websiteUrl: "https://www.lieferando.de/speisekarte/swaad-darmstadt#pre-order",
      instagramUrl: 'https://www.instagram.com/swaad_indisches_darmstadt/?hl=en',
      tags: ["Indian", "Curry", "Lunch", "Dinner", "Takeaway", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Mon - Thu: 11:30 - 14:30, 17:00 - 22:30",
          "Fri: 11:00 - 14:30, 17:00 - 22:30",
          "Sat - Sun: 17:00 - 22:30"
      ]
    }
  ]
};
