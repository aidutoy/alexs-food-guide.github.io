import type { City } from '../../types';

export const cologne: City = {
  id: 'cologne',
  name: 'Cologne',
  image: 'https://picsum.photos/seed/cologne/800/600',
  restaurants: [
    {
      id: 'frueh-am-dom',
      name: 'Früh am Dom',
      description: 'A Cologne institution, this massive, multi-roomed beer hall serves its own Kölsch beer and hearty Rhineland specialties.',
      mainImage: { url: 'https://picsum.photos/seed/kolsch1/600/400', caption: 'The iconic exterior of Früh am Dom.' },
      images: [
          { url: 'https://picsum.photos/seed/kolsch2/800/600', caption: 'A traditional Kölsch service.' },
          { url: 'https://picsum.photos/seed/kolsch3/800/600', caption: 'Interior view of the bustling beer hall.' }
      ],
      ratings: { food: 4, ambiance: 5, service: 4, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.120241932336!2d6.955928315749301!3d50.94121697954598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf25a1b373059f%3A0x86f406566be16f4c!2sFr%C3%BCh%20am%20Dom!5e0!3m2!1sen!2sde!4v1684321098765',
      cuisine: 'German Brauhaus',
      alexsTip: "Don't just stick to one Kölsch! The waiters will keep bringing you fresh glasses until you put your coaster on top of your glass. Pace yourself!",
      dietary: {
        celiac: "Limited gluten-free options. The main dishes are traditional and often contain gluten. Best to ask staff.",
        lactose: "Many dishes contain dairy. Can accommodate on request.",
        vegan: "Very few vegan options. It's a traditional German brewhouse."
      },
      websiteUrl: 'https://www.frueh-am-dom.de/',
      instagramUrl: 'https://www.instagram.com/frueh_am_dom/'
    },
    {
      id: 'lommerzheim',
      name: 'Lommerzheim',
      description: 'An authentic, old-school pub in Deutz known for its delicious pork chops (Kotelett) and Päffgen Kölsch. A true local experience.',
      mainImage: { url: 'https://picsum.photos/seed/porkchop1/600/400', caption: 'The unassuming entrance to a local legend.' },
      images: [
        { url: 'https://picsum.photos/seed/porkchop2/800/600', caption: 'The famous, massive Kotelett (pork chop).' },
        { url: 'https://picsum.photos/seed/porkchop3/800/600', caption: 'Enjoying a fresh Päffgen Kölsch.' }
    ],
      ratings: { food: 5, ambiance: 3, service: 3, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2514.417855736633!2d6.971932315749103!3d50.93556997954518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf259f4a1324e7%3A0x2648a29a2a6b254a!2sLommerzheim!5e0!3m2!1sen!2sde!4v1684321234567',
      cuisine: 'German Pub Fare',
      alexsTip: "The pork chop (Kotelett) is legendary for a reason. It's huge and delicious. Come hungry and be prepared for a no-frills, authentic experience.",
      dietary: {
        celiac: "Focus is on meat and potatoes. Gluten-free is possible but limited. Cross-contamination could be a risk.",
        lactose: "Generally easy to avoid dairy.",
        vegan: "Not suitable for vegans."
      },
      websiteUrl: 'https://www.lommerzheim.koeln/'
    },
  ],
};