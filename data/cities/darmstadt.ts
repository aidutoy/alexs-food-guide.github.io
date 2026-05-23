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
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=slap%20darmstadt&maptype=roadmap',
      cuisine: 'Italian',
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
      name: 'SuhsiKi',
      description: "This asian restaurant specialising in sushi but there are plenty tasty curries on the menu too. I am a big fan of vietnamese food, so the Ga Chien Sot Xoai (mango-curry sauce) with breaded chicken was right up my street. It did not disappoint, lots of chicken and even too much rice for me, which honestly is not a negative. I would recommend coming with a big appetite. The drinks were very tasty, and I recommend ordering a Vietnames coffee at the end, they will ask you if you want it hot or cold, traditionally it is served cold. They offer a lunch menu saving at least 3 euros but only Monday to Friday between 11:30 and 15:00.",
      quickVerdict: 'Sushi, large Vietnamese curries and a cheap lunch menu.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/sushiki/sushiki_1.jpg', caption: 'Ga Chien Sot Xoai (mango-curry sauce) with breaded chicken'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/sushiki/sushiki_2.jpg', caption: 'Passionfruit (maracuja) soda' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/darmstadt/sushiki/sushiki_3.jpg', caption: 'Cafe Vietnam (cold) with condensed milk' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: '<iframe width="100%" height="650px" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=sushiki&maptype=roadmap" allowfullscreen></iframe>',
      cuisine: 'Sushi, Vietnamese',
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
    }
  ]
};
