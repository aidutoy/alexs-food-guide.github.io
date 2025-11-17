
import type { City } from '../../types';

const newRestaurants = [
  { name: 'Okinii', cuisine: 'Japanese' },
  { name: 'Tio Pepe', cuisine: 'Spanish' },
  { name: 'Ha Long', cuisine: 'Vietnamese' },
  { name: 'Nennilo', cuisine: 'Italian' },
  { name: 'Burgerwerk', cuisine: 'Burgers' },
  { name: 'Mandala', cuisine: 'Indian' },
  { name: 'Hokkaido Sushi and Grill', cuisine: 'Japanese' },
  { name: 'Cream Company', cuisine: 'Desserts' },
  { name: 'Karawane', cuisine: 'Middle Eastern' },
  { name: 'Ichiban Noodle Bar', cuisine: 'Japanese' },
  { name: 'Burgermanfaktur', cuisine: 'Burgers' },
  { name: "Mayra's Wohnzimmer", cuisine: 'Cafe' },
  { name: 'Cosy Corner', cuisine: 'Cafe' },
  { name: 'Kaffeesaurus', cuisine: 'Cafe' },
  { name: 'Frittenwerk', cuisine: 'Fries' },
  { name: "L'Osteria", cuisine: 'Italian' },
  { name: 'Frites Belgique', cuisine: 'Belgian' },
  { name: 'Mam-mam', cuisine: 'To be updated' },
  { name: 'Ferdinando Italian Coffee & Bistro', cuisine: 'Italian' },
  { name: 'Pho', cuisine: 'Vietnamese' },
  { name: 'Pie Me', cuisine: 'Pies' },
  { name: 'Bonanza Burger', cuisine: 'Burgers' },
  { name: 'Cafe Nova', cuisine: 'Cafe' },
  { name: 'LaRoc Espressobar', cuisine: 'Cafe' }
];

const placeholderRestaurants = newRestaurants.map(r => {
    const id = r.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
        id: `bonn-${id}`,
        name: r.name,
        description: 'A delightful culinary experience waiting for your personal touch. Please update this description with your own review and details.',
        mainImage: { url: `https://picsum.photos/seed/bonn-${id}-1/600/400`, caption: 'Update with an enticing photo of the restaurant.' },
        images: [
            { url: `https://picsum.photos/seed/bonn-${id}-2/800/600`, caption: 'A delicious dish.' },
            { url: `https://picsum.photos/seed/bonn-${id}-3/800/600`, caption: 'The restaurant interior.' }
        ],
        ratings: { food: 0, drinks: 0, service: 0, price: 1 },
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80783.56157259178!2d7.022066220268551!3d50.73438137885308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479808e4a0624387%3A0x42120468b6e87dc0!2sBonn!5e0!3m2!1sen!2sde!4v1684321345678',
        cuisine: r.cuisine,
        alexsTip: "Add your personal tip here!",
        dietary: {
            celiac: "Please update dietary information.",
            lactose: "Please update dietary information.",
            vegan: "Please update dietary information."
        },
        websiteUrl: '#',
        instagramUrl: '#'
    }
});


export const bonn: City = {
  id: 'bonn',
  name: 'Bonn',
  image: 'https://picsum.photos/seed/bonn/800/600',
  restaurants: [
    {
      id: 'brauhaus-boennsch',
      name: 'Bönnsch',
      description: 'A traditional brewery pub in the heart of Bonn, famous for its home-brewed, unfiltered beer and classic German dishes.',
      mainImage: { url: 'https://picsum.photos/seed/bonnbeer1/600/400', caption: 'Serving the unique Bönnsch beer.' },
      images: [
        { url: 'https://picsum.photos/seed/bonnbeer2/800/600', caption: 'A hearty German meal at Bönnsch.' },
        { url: 'https://picsum.photos/seed/bonnbeer3/800/600', caption: 'The cozy, traditional interior.' }
      ],
      ratings: { food: 4, drinks: 4, service: 4, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.492576182107!2d7.0970223157424!3d50.73507097951568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bee1a23e5a2b2b%3A0x75f78bf8748348b!2sB%C3%B6nnsch!5e0!3m2!1sen!2sde!4v1684321345678',
      cuisine: 'German Brewery',
      alexsTip: "Try their unique Bönnsch beer, which is served in a special glass. It's a local specialty you won't find everywhere.",
      dietary: {
        celiac: "Some gluten-free options available, but it's best to inform the staff about your dietary needs.",
        lactose: "Can be accommodated upon request.",
        vegan: "Limited vegan options, primarily salads."
      },
      websiteUrl: 'http://www.boennsch.de/',
      instagramUrl: 'https://www.instagram.com/brauhaus_boennsch/'
    },
     {
      id: 'kaspars',
      name: 'Kaspars',
      description: 'Modern German cuisine with a focus on regional ingredients, served in a stylish and elegant setting.',
      mainImage: { url: 'https://picsum.photos/seed/modern1/600/400', caption: 'An example of the beautifully plated dishes.' },
      images: [
        { url: 'https://picsum.photos/seed/modern2/800/600', caption: 'Elegant dining room at Kaspars.' },
        { url: 'https://picsum.photos/seed/modern3/800/600', caption: 'A creative dessert.' },
        { url: 'https://picsum.photos/seed/modern4/800/600', caption: 'Close-up on a meticulously prepared main course.' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 3 },
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.63001804975!2d7.10183181574229!3d50.73273997951543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bee173330f1623%3A0x864f1d440b8a3e79!2sKaspars%20Restaurant!5e0!3m2!1sen!2sde!4v1684321456789',
      cuisine: 'Modern German',
      alexsTip: "Perfect for a special occasion. Opt for the tasting menu to get a full sense of the chef's creativity and skill.",
      dietary: {
        celiac: "Excellent accommodation for gluten-free diets. Inform them when booking.",
        lactose: "The kitchen is very flexible with dairy-free requests.",
        vegan: "Vegan tasting menu available on request, a real treat!"
      },
      websiteUrl: 'https://kaspars-restaurant.de/',
      instagramUrl: 'https://www.instagram.com/kaspars_restaurant/'
    },
    ...placeholderRestaurants
  ],
};