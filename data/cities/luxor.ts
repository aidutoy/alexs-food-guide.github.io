

import type { City } from '../../types';

const newRestaurants = [
  { name: 'El Mesala Hotel', cuisine: 'Hotel Restaurant' },
  { name: 'New Nile Panorama', cuisine: 'Egyptian' },
  { name: 'Thebes Restaurant', cuisine: 'Egyptian' },
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `luxor-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/luxor-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/luxor-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/luxor-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 1 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115995.7347952472!2d32.6775691!3d25.6949313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144915cf57731991%3A0x653243e86c572242!2sLuxor%2C%20Luxor%20City%2C%20Luxor%2C%20Luxor%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sde!4v1684321098765',
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
        tags: [r.cuisine, "History", "Nile View"]
    }
});

export const luxor: City = {
  id: 'luxor',
  name: 'Luxor',
  image: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/luxor.jpg',
  coordinates: { lat: 25.6872, lon: 32.6396 },
  restaurants: [
    {
      id: 'elmesala',
      name: "El Mesala",
      description: "For two nights in Luxor we stayed at the beautiful El Mesala Hotel, I highly recommend this hotel for the views, the polite staff, the swimming pool, and the food. We arrived late morning after our flight and we had lunch straight after check in while taking in the view. I was much happier with the variety of food on the menu than in Giza and Cairo. The food was cheaper, as lunch was not included, and tastier. I finally felt that I was on holiday more than in Giza.\n\nThere were sufficient gluten-free and vegan options to consider so theres no need to worry about that. We had lots of tea and some beer is available if you want. We had some mojitos and watched the sunset later in the evening with some friends.\n\nThe hotel also offered a feluca (sailing boat) ride with a prepared dinner by the hotel. We went for €80 for four persons, a little cheaper the more you are. The food was the same as lunch but I did not complain as it was so good. You could choose anything off the menu but we decided for the kofta, chicken and some side salads and fries.\n\nWe went sailing for 2 hours at sunset, I think this was the highlight of my trip. If theres anything you take away from this food guide, its pay for dinner on the feluca at sunset. ",
      quickVerdict: 'Great value food with impeccable views. The sunset felucca dinner is the highlight of any trip to Luxor.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/elmesala/elmesala_7.jpg', caption: 'Chicken with fries, hummus.' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/elmesala/elmesala_1.jpg', caption: 'Lamb kofta with fries.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/elmesala/elmesala_2.jpg', caption: 'Lamb kofta with fries.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/elmesala/elmesala_4.jpg', caption: 'Sunrise breakfast with cheese, tomatoes, aubergine, yoghurt, banana and tea.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/elmesala/elmesala_5.jpg', caption: 'Omlette, falafel, and eish baladi.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/elmesala/elmesala_6.jpg', caption: 'Two lamb kofta and two chicken dishes with rice or fries, egyptian pita, hummus, and salad.'}        
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=El%20Mesala%20Hotel%2C%20west%20bank%D8%8C%20Al%20Qarna%20Road%2C%20Al%20Bairat%2C%20Al%20Qarna%2C%20Egypt&maptype=roadmap',
      cuisine: 'Egyptian',
      alexsTip: "Organise dinner at sunset on a velucca with the hotel, 10/10 experience.",
      dietary: {
        celiac: "There are a few foods with bread, but enough great food without. Like the kofta and chicken, but take with fries not rice as the rice has pasta in it.",
        lactose: "Nothing specifically lactose-free but options without dairy are easy to come by in breakfast, lunch, and dinner.",
        vegetarian: "A few options are without meat but the menu does base around meat. Breakfast is easily vegetarian.",
        vegan: "Vegan is a little more difficult as there are eggs and yoghurt for breakfast, meat for lunch and dinner, and always be cautious with washed vegetables."
      },
      tags: ["Oriental", "Egyptian", "Picnic", "Hotel", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'nilepanorama',
      name: "New Nile Panorama",
      description: "We organised a tour to the Valley of the kings, Colossi of Memnon, Hatshepsut Temple, Luxor Temple, and Karnak Temple on our second day in Luxor, which was incredible. I wouldn't recommend the fast paced tour guide but the sights were amazing. We stopped for lunch not far from our hotel on the west bank, the food was included in the tour but again the drinks were extra. Although only 1 euro for water and 2 for coca cola.\n\nThe restaurant was a buffet, so there was quite some variety and gluten-free options. Some vegan options also but mostly just the salad bar. I would say the food is tasty enough to come back without the tour but once was enough for us. We were sat inside due to the heat at midday but the view from outside of the temples and the felucas on the nile is amazing. ",
      quickVerdict: 'A solid buffet option with good variety for dietary needs, best enjoyed with a view of the Nile.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/nilepanorama/nilepanorama_1.jpg', caption: 'Vegetables, potatoes, chicken, koshari (rice) and some unknown sauce based food, alongside some hummus, aubergines and eish baladi' },
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/nilepanorama/nilepanorama_2.jpg', caption: 'Chocolate muffin, baklava, and angel hair' }      
      ],
      ratings: { food: 4, drinks: 4, service: 3, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=New%20Nile%20Panorama%20restaurant%D8%8C%20%D8%A7%D9%84%D9%85%D9%8A%D9%86%D8%A7%D8%A1%20%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D9%8A%D8%8C%20Al%20Qarnah%2C%20Al%20Qarna%2C%20Egypt&maptype=roadmap',
      cuisine: 'Egyptian',
      alexsTip: "If you can handle the heat, sit outside for a spectacular view of the temples and sailing feluccas.",
      dietary: {
        celiac: "All you can eat buffet has limited options but you still get a full meal.",
        lactose: "Almost all savoury foods without dairy but limited desserts.",
        vegetarian: "A significant amount of the buffet is vegetables so you will have plenty.",
        vegan: "As most of the vegetarian food is without dairy they are also vegan, but check with staff."
      },
      tags: ["Oriental", "Egyptian", "all-you-can-eat", "Hotel", "lactose-free", "vegetarian"]
    },
    {
      id: 'thebes',
      name: "Thebes Restaurant",
      description: "On the last night in Luxor we walked by the Nile and found a busy restaurant overlooking the Nile. We checked the menu and decided it was worth a try if it is so popular. I had a chicken burger and fries to get a little break from kofta and rice. I really recommend it. It was not expensive and a nice view. ",
      quickVerdict: 'A popular, lively spot overlooking the Nile. Great value and perfect if you need a break from traditional Egyptian dishes.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/luxor/thebes/thebes_1.jpg', caption: 'Kofta and fries (top), hummus (middle) and chicken burger (bottom)' },
      images: [
      ],
      ratings: { food: 5, drinks: 4, service: 4, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Thebes%20(Tebaa)%20Restaurant%2C%20Al%20Qarnah%2C%20Al%20Qarna%2C%20Egypt&maptype=roadmap',
      cuisine: 'Egyptian / International',
      alexsTip: "Come here for a break of the oriental food, a bit of home helps every now and then.",
      dietary: {
        celiac: "no gluten-free bread but options available like kofta and fries.",
        lactose: "No specific lactose-free food, but many options without dairy. Especially, egyptian food.",
        vegetarian: "Limited menu, be careful with uncooked vegetables.",
        vegan: "Limited menu, be careful with uncooked vegetables."
      },
      tags: ["Oriental", "Egyptian", "Burgers", "lactose-free"]
    }
  ]
};
