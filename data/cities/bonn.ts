
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
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Okinii%20Bonn%2C%20Quantiusstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Japanese sushi',
      alexsTip: "The all-you-can-eat dinner during the week is far superior to the lunch menu. Try their chicken and mango roll, I can't get enough of it.",
      dietary: {
        celiac: "A few sushi options in the all-you-can-eat lunch menu, gluten-free soy sauce available.",
        lactose: "plenty of lactose-free sushi.",
        vegetarian: "Plenty of vegetarian sushi options available.",
        vegan: "vegetarian sushi are typically vegan unless with cream cheese."
      },
      websiteUrl: 'https://okinii.de/standorte-bu/bonn/',
      instagramUrl: 'https://www.instagram.com/okiniirestaurants/?hl=en',
      tags: ["Sushi", "Japanese", "Asian", "All-you-can-eat", "Dinner", "gluten-free", "lactose-free"]
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
        vegetarian: "Classic tapas like Patatas Bravas, Pimientos, Tortilla, and Manchego cheese.",
        vegan: "Very limited options due to the meat and fish in most food."
      },
      websiteUrl: 'https://tio-pepe-bonn.de/',
      instagramUrl: 'https://www.instagram.com/tiopepebonn/',
      tags: ["Tapas", "Spanish", "Sharing", "Wine", "Sangria", "Seafood", "gluten-free",  "lactose-free", "vegetarian", "vegan"]
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
        vegetarian: "Most dishes can be ordered with tofu or just vegetables.",
        vegan: "Every curry can be ordered with tofu, and there are vegan sushi on the menu."
      },
      websiteUrl: 'https://www.lieferando.de/speisekarte/ha-long-endenicher-strasse',
      tags: ["Vietnamese", "Asian", "Curry", "Sushi", "Budget-friendly", "Takeaway", "gluten-free", "vegetarian", "vegan"]
    },
    {
      id: 'nennillo',
      name: 'Nennillo',
      description: "The closest pizza to a true Napoli pizza you can find in Germany. I have been back many, many times and order takeout often. The pizzas are cooked in a traditional pizza oven so each pizza is cooked slighltly different, some more pale and some more burnt. If you are not happy with the cook of you pizza you can always send it back as the service staff are very polite. There are two in Bonn, the main restaurant in Altstadt and one smaller one in Poppelsdorf that does gluten-free pizza with enough notice.",
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
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Antica%20Pizzeria%20Nennillo%20-%20Bonn%2C%20Im%20Krausfeld%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Italian',
      alexsTip: "If you like it a bit spicy like me, then take the Rot und Böse (red and evil), and always have an Aperol Spritz. For dessert, share the nutella and pistachio pizza.",
      dietary: {
        celiac: "Notify the restaurant in Poppelsdorf, typically a day before but morning might be ok, that you wish for a gluten-free pizza so they warm the second pizza oven before your arrival. Note it costs 4.50 more, which is rather expensive.",
        lactose: "Cheese is not lactose-free but you can order pizza without cheese.",
        vegetarian: "Margherita, Funghi, and other vegetarian classics available.",
        vegan: "There are two vegan pizzas, la vegana arrabbiata and quattro vegani."
      },
      websiteUrl: 'https://www.nennillobonn.de/',
      instagramUrl: 'https://www.instagram.com/bonn_pizzerianennillo/?hl=en',
      tags: ["Italian", "Pizza", "Aperol", "Budget-friendly", "Takeaway", "gluten-free", "vegetarian", "vegan"]
    },
    {
      id: 'burgerwerk',
      name: 'Burgerwerk',
      description: "One of my favourite spots for burgers in Bonn is actually in Bonn-Beuel. Definitely worth a trip over the Kennedy bridge for these burgers. I have been at least three times and tried a few different burgers. The burgers are cooked to your preference of medium or well-done. The special fries are not worth it, definitely stick to the regular or sweet potato fries.",
      quickVerdict: 'Amazing burgers cooked to medium or well-done. ',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_1.jpg', caption: 'Camembert burger with sweet potato fries'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_2.jpg', caption: 'Camembert burger' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_3.jpg', caption: 'Vierkaesehoch (four cheese high) with regular fries' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_4.jpg', caption: 'Vierkaesehoch (four cheese high)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_5.jpg', caption: 'Double smash burger with gluten-free bun' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_6.jpg', caption: 'Special fries - not worth it' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_7.jpg', caption: 'Rot und Böse (bottom) and Bufalina (top)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_8.jpg', caption: 'Menu'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_9.jpg', caption: 'Menu'}
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Burgerwerk%2C%20Friedrich-Breuer-Stra%C3%9Fe%2C%20Bonn-Beuel%2C%20Germany&maptype=roadmap',
      cuisine: 'Burgers',
      alexsTip: "The camembert burger is my absolute favourite, take it medium rare with sweet potato fries.",
      dietary: {
        celiac: "Gluten-free bread for €1.90 extra is a good deal. The burgers are typically without gluten but check with the chef, the staff are knowledgeble on cross contamination.",
        lactose: "Cheese is not lactose-free but you can order burgers without cheese.",
        vegetarian: "Multiple vegetarian burger options, including Camembert and veggie patties.",
        vegan: "There is a whole list of vegan burgers."
      },
      websiteUrl: 'https://www.burgerwerk-bonn.de/',
      instagramUrl: 'https://www.instagram.com/burgerwerkbonn/?hl=en',
      tags: ["Burgers", "Fries", "gluten-free", "Vegan", "Vegetarian"]
    },
    {
      id: 'mandala',
      name: 'Mandala',
      description: "A new experience for me is a completely vegan asian tapas restaurant serving sushi, pho, and 10 different ways to eat tofu. I encourage foodies to give it a try, as it is worth the visit. You don't usually have to book ahead but do if you are a big group. If you do order sushi, be prepared with your camera as they make a show with some dry ice that excites the table. What I personally recommend are the raspberry & tofu, the soy on the run, and the vegan fish tartare. I don't recommend the sweet potato pancake because it is just sweet potato fries stuck together and it is really dense. I also found the sushi quite good, not as good as non-vegan sushi, unfortunately, but I hope they continue to reinvent themselves in the future.",
      quickVerdict: 'Unique vegan Asian tapas with theatrical dry ice presentation. A fun dining experience, especially for tofu lovers.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mandala/mandala_1.jpg', caption: 'Sweet potato pancake (bottom), soy on the run (right), mango roll (top right), buddha bowl (top), rainbow roll (left), raspbery and tofu (center)'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mandala/mandala_2.jpg', caption: 'Raspberry and Tofu' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mandala/mandala_4.jpg', caption: 'Pho' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mandala/mandala_5.jpg', caption: 'Pho, raspberry and tofu' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mandala/mandala_6.jpg', caption: 'Vegan fish tartare (center), rainbow roll (left), quinoa tartare (left)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mandala/mandala_7.jpg', caption: 'Sushi with dry ice - great to film' }
      ],
      ratings: { food: 4, drinks: 4, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Mandala%20Vegan%20Bonn%2C%20Quantiusstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Vegan Sushi',
      alexsTip: "I recommend going for lunch if you are a bit unsure, the menu is smaller but much cheaper than dinner. Definitely take the vietnamese coffee with condensed milk.",
      dietary: {
        celiac: "Limited options as everything is fried. There are only a couple sushi like the rainbow roll and also the pho.",
        lactose: "All vegan means no lactose!",
        vegetarian: "Everything is vegan.",
        vegan: "Everything is vegan"
      },
      websiteUrl: 'https://www.burgerwerk-bonn.de/',
      instagramUrl: 'https://www.instagram.com/mandala.vegan/?hl=en',
      tags: ["Tapas", "Sushi", "Asian", "Vietnamese", "Pho", "gluten-free", "lactose-free", "Vegan", "Vegetarian"]
    }
  ],
};
