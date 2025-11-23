
import type { City } from '../../types';

const newRestaurants = [
  { name: 'Comfort Sphinx and Pyramids Inn', cuisine: 'Hotel Restaurant' },
  { name: 'Rooftop 7000', cuisine: 'Rooftop Bar' },
  { name: 'Elkhedive Restaurant', cuisine: 'Egyptian' },
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `giza-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/giza-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/giza-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/giza-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 1 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55291.49386737526!2d31.18958725!3d29.9866896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584f7de239bbcd%3A0xca7474355a122829!2sGiza%2C%20Giza%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sde!4v1684321098765',
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
        tags: [r.cuisine, "View", "Experience"]
    }
});

export const giza: City = {
  id: 'giza',
  name: 'Giza',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/giza/giza.jpg',
  coordinates: { lat: 29.9866, lon: 31.2120 },
  restaurants: [
    {
      id: 'comfort',
      name: "Comfort Sphinx & Pyramid Inn",
      description: "I personally would not recommend this hotel in Giza for breakfast, lunch or dinner but instead go to another hotel in the area as there are hundreds around the Pyramids. We booked last minute and had breakfast included so we ate here every morning.\n\nThe food varied little from day to day and consisted of bread, cake, eggs, fries, cheese and salad. I was wary of the salad given that water is not potable in Egypt and the salad is washed with this water. So my diet lacked a lot of fibre. There is little vegan or gluten-free options also with no information on ingredients and a lack of knowledge on dietary restrictions by the staff.\n\nThe view was unbeatable though, I mean look at that!",
      quickVerdict: '',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/giza/comfort/comfort_1.jpg', caption: 'Bread, eggs, chips, cucumber, various dips.'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/giza/comfort/comfort_2.jpg', caption: 'Aish Baladi (egyptian pita), eggs, sweet bread, fried potatoes, falafel, cheese' }
      ],
      ratings: { food: 2.5, drinks: 3, service: 2, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Comfort%20Sphinx%20%26%20Pyramids%20Inn%2C%20aboelhole%20st%2C%20Nazlet%20El-Semman%2C%20Al%20Haram%2C%20Egypt&maptype=roadmap',
      cuisine: 'Oriental',
      alexsTip: "Only book this place if there is no other option. Breakfast is better elsewhere.",
      dietary: {
        celiac: "Very limited gluten-free food, only vegetables, cheese and eggs. Little to none variation of food each day.",
        lactose: "Most food without dairy except the cheese.",
        vegetarian: "Almost everything is vegetarian.",
        vegan: "A good amount of the buffet was vegan, but ask about the cakes."
      },
      tags: ["Oriental", "Egyptian", "Buffet", "Hotel", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'rooftop',
      name: "Rooftop 7000",
      description: "A very expensive rooftop bar with a more European menu: pasta, fried chicken, burgers. I would not recommed if you want to try authentic Egyptian food. But it was suggested by our hotel and I can admit the food was good with big portions. We went twice because the view is just incredible. We paid european prices, so this is very expensive for Egypt. It was nice to at least have one sanitary restaurant off the street that has some variety of gluten-free food. ",
      quickVerdict: '',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/giza/rooftop/rooftop_1.jpg', caption: 'Chicken 7000.'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/giza/rooftop/rooftop_2.jpg', caption: 'Grilled chicken and fries' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/giza/rooftop/rooftop_3.jpg', caption: 'Chicken country' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/giza/rooftop/rooftop_4.jpg', caption: 'Cinnamon tea' }
      ],
      ratings: { food: 4, drinks: 4, service: 4, price: 3 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Rooftop%207000%2C%20Nazlet%20El-Semman%2C%20Al%20Haram%2C%20Egypt&maptype=roadmap',
      cuisine: 'Oriental / European',
      alexsTip: "Ask your hotel to reserve a table for you as it is very popular. Try get a table with a view.",
      dietary: {
        celiac: "A lot of pasta and fried food but take the grilled chicken, it is plentiful and tasty.",
        lactose: "No specific lactose-free food other than the vegan options.",
        vegetarian: "Some dishes without meat available but be careful with vegetables in Egypt.",
        vegan: "Some vegan dishes but again be careful of vegetables."
      },
      tags: ["Oriental", "Egyptian", "European", "Hotel", "lactose-free", "vegetarian", "vegan"]
    }
  ]
};
