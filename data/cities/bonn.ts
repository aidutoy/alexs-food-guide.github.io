


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
      tags: ["Sushi", "Japanese", "Asian", "All-you-can-eat", "Dinner", "gluten-free", "lactose-free"],
      openingHours: [
          "Monday - Thursday: 17:00 - 22:00",
          "Friday - Saturday: 12:00 - 16:00, 16:00 - 23:30",
          "Sunday, holidays: 12:00 - 16:00, 16:00 - 22:00",
      ]
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
      description: "I have been going to Ha Long since it was called Ginger's. It is one of my favourite restaurants in Bonn because I love their mama mango. The portion sizes are huge and you will definitely leave the place full.\n\nI haven't tried the sushi, but I have seen many other tables ordering it too. I quite often order take away for pickup or delivery so don't be put off if there are no customers inside.",
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
      tags: ["Vietnamese", "Asian", "Curry", "Sushi", "Budget-friendly", "Takeaway", "gluten-free", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'nennillo',
      name: 'Nennillo',
      description: "The closest pizza to a true Napoli pizza you can find in Germany. I have been back many, many times and order takeout often. The pizzas are cooked in a traditional pizza oven so each pizza is cooked slighltly different, some more pale and some more burnt.\n\nIf you are not happy with the cook of you pizza you can always send it back as the service staff are very polite. There are two in Bonn, the main restaurant in Altstadt and one smaller one in Poppelsdorf that does gluten-free pizza with enough notice.",
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
      tags: ["Italian", "Pizza", "Aperol", "Budget-friendly", "Takeaway", "gluten-free", "vegetarian", "vegan"],
      openingHours: [
          "Everyday: 11:00 - 23:00"
      ]
    },
    {
      id: 'burgerwerk',
      name: 'Burgerwerk',
      description: "One of my favourite spots for burgers in Bonn is actually in Bonn-Beuel. Definitely worth a trip over the Kennedy bridge for these burgers. I have been at least three times and tried a few different burgers.\n\nThe burgers are cooked to your preference of medium or well-done. The special fries are not worth it, definitely stick to the regular or sweet potato fries.",
      quickVerdict: 'Amazing burgers cooked to medium or well-done.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_1.jpg', caption: 'Camembert burger with sweet potato fries'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_2.jpg', caption: 'Camembert burger' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_3.jpg', caption: 'Vierkaesehoch (four cheese high) with regular fries' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_4.jpg', caption: 'Vierkaesehoch (four cheese high)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_5.jpg', caption: 'Double smash burger with gluten-free bun' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_6.jpg', caption: 'Special fries - not worth it' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_7.jpg', caption: 'Menu'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgerwerk/burgerwerk_8.jpg', caption: 'Menu'}
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
      description: "A new experience for me is a completely vegan asian tapas restaurant serving sushi, pho, and 10 different ways to eat tofu. I encourage foodies to give it a try, as it is worth the visit. You don't usually have to book ahead but do if you are a big group.\n\nIf you do order sushi, be prepared with your camera as they make a show with some dry ice that excites the table. What I personally recommend are the raspberry & tofu, the soy on the run, and the vegan fish tartare.\n\nI don't recommend the sweet potato pancake because it is just sweet potato fries stuck together and it is really dense. I also found the sushi quite good, not as good as non-vegan sushi, unfortunately, but I hope they continue to reinvent themselves in the future.",
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
    },
    {
      id: 'hokkaido',
      name: 'Hokkaido Sushi & Grill',
      description: "Sushi is one of my favourite cuisines and I am always trying to find the best all you can eat sushi in the area. While Okinii has my favourite dishes, Hokkaido is cheaper and has more mango, which is a big plus for me. I recommend coming here if you have a big appetite and tighter budget. ",
      quickVerdict: 'Premium all-you-can-eat sushi without the high price tag. Worth the trip.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/hokkaido/hokkaido_1.jpg', caption: 'Tekka maki, shake maki, cream cheese roll, crab roll, sashimi salad'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/hokkaido/hokkaido_2.jpg', caption: 'Tekka maki, shake maki, cream cheese roll roll, sashimi salad, deep fried shrimp, fried cheese balls, shake nigiri' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/hokkaido/hokkaido_3.jpg', caption: 'Avocado maki, tekka maki, tuna roll, crab roll, cream cheese roll' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/hokkaido/hokkaido_4.jpg', caption: 'Sashimi salad, tako yaki, various sushi rolls and maki, yaki hireniku' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/hokkaido/hokkaido_5.jpg', caption: 'Sashimi salad)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/hokkaido/hokkaido_6.jpg', caption: 'Banana with honey and mango sauce' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/hokkaido/hokkaido_7.jpg', caption: 'Ice cream: mango, black sesame, and peach' }
      ],
      ratings: { food: 4, drinks: 4, service: 4, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Hokkaido%20Sushi%20%26%20Grill%20Restaurant%2C%20Drachenburgstra%C3%9Fe%2C%20Bonn-Bad%20Godesberg%2C%20Germany&maptype=roadmap',
      cuisine: 'Sushi',
      alexsTip: "The sashimi salad is absolute perfection in a bowl.",
      dietary: {
        celiac: "Limited options as a lot is fried or with non-gluten free soy sauce. There are only a couple sushi like the maki.",
        lactose: "Almost everything is lactose-free unless there is cream cheese in the roll.",
        vegetarian: "Some vegetarian sushi but limited, I recommend Mandala restaurant.",
        vegan: "Very limited vegan sushi but limited, I recommend Mandala restaurant."
      },
      websiteUrl: 'https://www.hokkaido-sushi-grill.de/',
      tags: ["Sushi", "Asian", "All-you-can-eat", "lactose-free"]
    },
    {
      id: 'cream_company',
      name: "Cream Company",
      description: "I highly recommend the classic eggs benedict, the heaven pancake, and the very berry waffle for a sugar rush. Large portion sizes that leave you feeling full or having to box the leftovers up to take home, which they are happy to do. ",
      quickVerdict: 'Perfect spot for large appetites for brunch no matter if you are looking for something sweet or savoury.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_1.jpg', caption: 'Classic eggs benedict'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_2.jpg', caption: 'Strawberry bueno waffle' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_3.jpg', caption: 'Classic eggs benedict' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_4.jpg', caption: 'Strawberry bueno' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_5.jpg', caption: 'Berrylicious french toast' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_6.jpg', caption: 'Classic french toast' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_7.jpg', caption: 'Classic eggs benedict' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_8.jpg', caption: 'Classic eggs benedict' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_9.jpg', caption: 'Avocado toast' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_10.jpg', caption: 'Heaven pancake' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cream_company/creamcompany_11.jpg', caption: 'Tropical only fans' },
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Cream%20Company%20Coffee%20%26%20Friends%2C%20Sterntorbr%C3%BCcke%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Brunch',
      alexsTip: "For savoury take the classic eggs benedict, no need to go more fancy. For sweets, take the pancakes if you have a big hunger.",
      dietary: {
        celiac: "The gluten-free options are really limited, so I do not recommend for coeliacs, too much toast, waffles or pancakes.",
        lactose: "No lactose-free cheese but toast without cheese, but limited lactose-free sweets as they use nutella and chocolate sauces. There is lactose-free milk for drinks.",
        vegetarian: "Vegetarian toast, porridge bowls, pancakes and waffles.",
        vegan: "A few vegan toasts, but ask about the waffles and pancakes because they are likely made with eggs and whole milk."
      },
      instagramUrl: 'https://www.instagram.com/creamcompany',
      tags: ["Cafe", "Cakes", "Coffee", "desserts", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'karawane',
      name: "Karawane",
      description: "Karawane is an interesting oriental restaurant that offers an all-you-can-eat oriental experience. The menu changes every two weeks, and you can check online to see what is currently available and what is planned next. Some dishes are repeated each time, so keep checking for the menu that fits you best.\n\nThere are 9 dishes, always one soup but the other 8 can vary. After you finish the first round, the waiter will come back and ask which dishes you would like to have again, but this time in a bigger portion. After you finish those three, you can get another three, and so on. Worth the trip to a quiet neighbourhood, maybe on the way back from Drachenfels. ",
      quickVerdict: 'A unique oriental experience unlike any other in Bonn.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/karawane/karawane_1.jpg', caption: 'All-you-can-eat'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/karawane/karawane_2.jpg', caption: 'Round 2' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/karawane/karawane_3.jpg', caption: 'Round 3' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/karawane/karawane_4.jpg', caption: 'Vegetarian all-you-can-eat' },
      ],
      ratings: { food: 4, drinks: 4, service: 4, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Karawane%2C%20Adrianstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Oriental',
      alexsTip: "Check out the buffet menu before and tie in a trip to Drachenfels.",
      dietary: {
        celiac: "As the menu varies it is hard to say but gluten is in a lot of dishes. I don't recommend the gamble.",
        lactose: "Menu varies but only one or two out of 9 dishes with dairy.",
        vegetarian: "Vegetarian and vegan buffet available at extra cost.",
        vegan: "Vegetarian and vegan buffet available at extra cost."
      },
      websiteUrl: 'https://www.karawane-oberkassel.de/index.html',
      tags: ["Oriental", "All-you-can-eat", "Egyptian", "Syrian", "Lebanese", "Moroccan", "Iranian", "Turkish", "Tunisian", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'ichiban',
      name: "Ichiban Noodlebar",
      description: "A great spot in Bonn for some cheap noodles and Japanese food. I can recommend ordering the Tonkatsu Set or the Kastu Curry Set as you get a lot of food cheap and I couldn't fault the taste.\n\nThe restaurant doesn't take any bookings so larger groups are more difficult to seat. I would recommend going early in the evening during the week to avoid disappointment. ",
      quickVerdict: 'Cheap curry sets and tasty ramen in the heart of Bonn.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ichiban/ichiban_1.jpg', caption: 'Katsu Curry Set'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ichiban/ichiban_2.jpg', caption: 'Tonkatsu' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ichiban/ichiban_3.jpg', caption: 'Ebi Tempura Udon' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ichiban/ichiban_4.jpg', caption: 'Gyoza and Korokke' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ichiban/ichiban_5.jpg', caption: 'Tofu Udon' }
      ],
      ratings: { food: 4, drinks: 4, service: 4, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Ichiban%20Noodlebar%2C%20Br%C3%BCdergasse%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Japanese',
      alexsTip: "Try the chicken katsu set, it's cheap and tasty.",
      dietary: {
        celiac: "Very limited, lots of fried chicken and wheat noodles",
        lactose: "Most sauces without lactose.",
        vegetarian: "Tofu is available but dishes centered around fried chicken.",
        vegan: "Most sauces without dairy and tofu is available."
      },
      websiteUrl: 'https://www.ichiban-noodlebar.de/',
      instagramUrl: 'https://www.instagram.com/ichibannoodlebar/?hl=en',
      
      tags: ["Japanese", "Curry", "Ramen", "Noodles", "Asian", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'mayras_wohnzimmer',
      name: "Mayra's Wohnzimmer Cafe",
      description: "A great cafe spot in Bonn-Beuel for some coffee and homemade cakes. The cosy decor makes you feel right at home where you can catch up with your friends. The place is usually crowded for brunch, especially on the weekend so if you are a larger group, consider booking ahead.\n\nI would recommend coming for coffee and cake rather than expecting a big brunch. The smaller portion sizes and limited variety on the menu are fine for small appetites or those without dietary requirements.\n\nThe staff know their allergens well and can offer at least one gluten-free cake and at least one vegan cake. When I was there, there was no gluten-free bread and the hollandaise sauce is not gluten-free, so I do not recommend for coeliacs.",
      quickVerdict: 'A cosy cafe with fresh baked cakes and drinks to keep you warm in Winter.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mayras_wohnzimmer/mayra_1.jpg', caption: 'Monsieur camembert'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mayras_wohnzimmer/mayra_2.jpg', caption: 'Strawberry iced matcha latte and chai latte' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mayras_wohnzimmer/mayra_3.jpg', caption: 'Sans Sebastian cheesecake' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mayras_wohnzimmer/mayra_4.jpg', caption: 'Gluten-free coconut cake, coco chanel, no thats not meat.' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mayras_wohnzimmer/mayra_5.jpg', caption: 'Sashimi salad)' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mayras_wohnzimmer/mayra_6.jpg', caption: 'Cappuccino' }
      ],
      ratings: { food: 3, drinks: 4, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Mayras%20Wohnzimmer%20Caf%C3%A9%2C%20Friedrich-Breuer-Stra%C3%9Fe%2C%20Bonn-Beuel%2C%20Germany&maptype=roadmap',
      cuisine: 'Cafe, Cakes',
      alexsTip: "Start with the Monsieur camembert but ask for more hollandaise sauce, pair with an iced-matcha strawberry latte and finish it off with the San Sebastian cheesecake, which is one of the best I have ever had.",
      dietary: {
        celiac: "No gluten-free bread, which is a big negative but they do offer at least one gluten-free cake per day. Last time was a coconut cake.",
        lactose: "Lactose-free milk available, no lactose-free cheese on the menu.",
        vegetarian: "Vegetarian sandwiches available and all cakes are vegetarian.",
        vegan: "Vegan sandwiches and cakes available."
      },
      websiteUrl: 'https://www.hokkaido-sushi-grill.de/',
      tags: ["Cafe", "Cakes", "Coffee", "Matcha latte", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'frittenwerk',
      name: "Frittenwerk",
      description: "Definitely a good spot for some loaded fries or 'poutine'. I was surprised by how filling the fries were after seeing the portion size, so don't be too disappointed. The price is a little on the expensive side so I wouldn't go back often but a nice treat when you want to try something different.\n\nI had the Tijuana street fries that are topped with tomatoes, avocado and sour cream. I can also recommend the BBQ pulled pork poutine. I do not recommend adding extra falafel on top as it is not worth the price\n\nYou can order at the screens and change the language so you don't need to speak German. Note the wait time for all orders when eating in is approx 30 minutes, so I wouldn' go if you are in a rush.",
      quickVerdict: 'The best loaded fries in Bonn, wait time is a bit long but worth it.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/frittenwerk/frittenwerk_1.jpg', caption: 'BBQ pulled pork poutine (left) and Tijuana street fries (right) with falafel'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/frittenwerk/frittenwerk_2.jpg', caption: 'Tijuana street fries with falafel' }
      ],
      ratings: { food: 4, drinks: 4, service: 3, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Frittenwerk%20Bonn%2C%20Sternstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
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
      tags: ["Fries", "Takeaway", "Street-food", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Monday - Thursday: 11:00 - 22:00",
          "Friday - Saturday: 11:00 - 23:00",
          "Sunday, Holidays: 11:30 - 21:00"
      ]
    },
    {
      id: 'burgermanfaktur',
      name: "Burgermanfaktur",
      description: "A great spot in Bonn for burgers that competes well with Bonanza burger and Burgerwerk. There are gluten-free buns and vegan burgers upon request if not on the menu already. The fries are like steakhouse fries which I prefer over normal skinny fries. ",
      quickVerdict: 'Juicy, high-quality burgers with thick steakhouse fries. Excellent gluten-free and vegan options available.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/burgermanfaktur/burgermanfaktur_1.jpg', caption: 'Der Tyropola'},
      images: [
        
      ],
      ratings: { food: 4, drinks: 4, service: 3, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Burgermanufaktur%20am%20Frankenbad%2C%20Vorgebirgsstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Burgers',
      alexsTip: "I would recommend to all cheese lovers, der tyropola, which is covered in melted cheese and bacon. A one of kind burger for me here in Bonn. You can choose to upgrade from 120g to 200g patty for only one euro more which is a good deal. ",
      dietary: {
        celiac: "There are gluten-free buns on the menu but I have not personally ordered one. Fries are gluten-free.",
        lactose: "No specific lactose-free cheese on the menu but burgers without cheese possible.",
        vegetarian: "Two vegan burgers on the menu.",
        vegan: "Two vegan burgers on the menu."
      },
      websiteUrl: 'https://www.burgermanufaktur-bonn.de/',
      instagramUrl: 'https://www.instagram.com/burgermanufaktur.bonn/?hl=en',
      tags: ["Burgers", "Fries", "gluten-free", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'pieme',
      name: "Pie Me",
      description: "If you ever fancied Australian pies, for whatever reason, then Pie Me is the place to go. I haven't heard Australia having good enough pies for it's own restaurant but here it is. It is a success amongst students for a quick lunch or for a casual get together.\n\nThe cafes are decent and the food is good. The pie and the mashed potato are tasty and there is quite some variety for the pie fillings. I found it hard to choose one. But, the salad is totally not worth it in my opinion. The iced matcha latte with strawberry is quite good even for someone who doesn't like matcha. ",
      quickVerdict: 'Authentic Australian savory pies served with mash. A hearty, quick, and affordable favorite.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/pie_me/pie_me_1.jpg', caption: 'Chicken curry pie menu with mango chutney'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/pie_me/pie_me_2.jpg', caption: 'Sweet potato salad bowl (top), chicken curry pie menu with mango chutney (bottom)'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/pie_me/pie_me_3.jpg', caption: 'Mac and cheese pie menu with cheese sauce'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/pie_me/pie_me_4.jpg', caption: 'Iced matcha latte with strawberry syrup'}
      ],
      ratings: { food: 3.5, drinks: 4, service: 4, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Pie%20Me%20Caf%C3%A9%20am%20Frankenbad%2C%20Vorgebirgsstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Pies',
      alexsTip: "Take the pie menu with mashed potatoes, but never the salad, it is overpriced.",
      dietary: {
        celiac: "Only salads, not suitable for coealiacs.",
        lactose: "vegan pies and pies without lactose but nothing specifically lactose-free",
        vegetarian: "Plenty vegetarian pies and mashed potatoes.",
        vegan: "Vegan pies and vegan mashed potatoes."
      },
      instagramUrl: 'https://www.instagram.com/piemecafe/',
      tags: ["Pies", "Australian", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'cosycorner',
      name: "Cosy Corner",
      description: "As a Brit, I do enjoy the occasional scone and a cuppa tea. While I can make them at home, it's great to have someone else do it. I can approve of their scones and builder's brew. I miss clotted cream a lot over here in Germany, so I have been a few times as a treat.\n\nThe cafes are decent and the food is good. The pie and the mashed potato are tasty and there is quite some variety for the pie fillings. I found it hard to choose one. But, the salad is totally not worth it in my opinion. The iced matcha latte with strawberry is quite good even for someone who doesn't like matcha. ",
      quickVerdict: 'A charming slice of Britain offering authentic scones, clotted cream, and builder\'s tea.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cosy_corner/cosy_corner_1.jpg', caption: 'Scones with clotted cream and jam, with a builders brew (tea with milk)'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cosy_corner/cosy_corner_2.jpg', caption: 'Scones'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/cosy_corner/cosy_corner_3.jpg', caption: 'Scones with clotted cream first and strawberry jam'}
      ],
      ratings: { food: 4, drinks: 5, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Pie%20Me%20Caf%C3%A9%20am%20Frankenbad%2C%20Vorgebirgsstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'British',
      alexsTip: "Take the builders brew and some scones with clotted cream for a proper british treat. I recommend the ploughmans sandwich if you prefer savoury food.",
      dietary: {
        celiac: "Very limited but gluten-free banana bread on Instagram.",
        lactose: "Scones are made with dairy but some sandwiches and vegan cakes available.",
        vegetarian: "Scones are vegetarian and there are vegetarian sandwiches.",
        vegan: "Limited options but there are vegan cakes daily."
      },
      websiteUrl: 'https://cosycorner1717.de/',
      instagramUrl: 'https://www.instagram.com/cosycorner1717/?hl=en',
      tags: ["British", "Tea", "Scones", "Cakes", "Sandwiches", "vegetarian", "vegan"]
    }, 
    {
      id: 'kaffeesaurus',
      name: "Kaffeesaurus",
      description: "A great spot for brunch with friends, or a quick coffee and cake near the central train station, or even an atmospheric place to study during the week. I would recommend coming here to try the chai and cakes.\n\nIn my experience the hollandaise sauce wasn't as good as in cream company but the Brontosaurus burger I had one time was really tasty. I think the prices are fair and the atmosphere is really nice, so overall a great cafe.",
      quickVerdict: 'A trendy, spacious spot near the station ideal for brunch or study. Delicious cakes and fair prices.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_1.jpg', caption: 'Brontosaurus burger'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_2.jpg', caption: 'Open toast sandwiches, Bennysaurus eggs (bottom right), Eggs any style with poached eggs, extra salmon on gluten free bread with a side of turkey bacon (mid left)'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_3.jpg', caption: 'Bennysaurus eggs'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_4.jpg', caption: 'Carrot cake'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_5.jpg', caption: 'Chai'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_6.jpg', caption: 'Chai'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_7.jpg', caption: 'Options on 25.05.2025 with two gluten free options and 5 vegan options'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/kaffeesaurus/kaffeesaurus_8.jpg', caption: 'Gluten-free brownies'}
      ],
      ratings: { food: 4, drinks: 5, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Kaffeesaurus%2C%20Am%20Hauptbahnhof%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Cafe',
      alexsTip: "Definitely order the chai, it tastes close to the real thing and even comes with a timer when to pour. The Brontosaurus burger is my favourite.",
      dietary: {
        celiac: "Some gluten free cakes, salads and gluten-free toast. Hollandaise sauce is not gluten-free.",
        lactose: "Lactose-free milk for coffee available.",
        vegetarian: "Plenty options for sandwiches, burgers, and cakes.",
        vegan: "Cakes, main dishes and milk alternatives for coffee."
      },
      websiteUrl: 'https://kaffeesaurus.com/',
      instagramUrl: 'https://www.instagram.com/kaffeesaurus/',
      tags: ["Cafe", "Burgers", "Cakes", "Sandwiches", "Coffee", "Tea", "Chai", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Monday - Friday: 08:00 - 21:00",
          "Saturday - Sunday: 09:00 - 21:00" 
      ]
    }, 
    {
      id: 'losteria',
      name: "L'osteria",
      description: "A good spot for a large appetite, the pizzas are so big they don't fit on a plate, and you will probably take some home. I definitely recommend coming to feed a family, or if you have a work event, because who doesn't like pizza and pasta?\n\nNow the pizza isn't as good as Napoli pizza, and they do have Hawaiian, but I am a fan regardless. You can even split the pizza in half and share with a friend, or just try two different toppings yourself, like I do. I would not recommend the pasta as the portion size is too small, and honestly, I don't think it is what they are known for.\n\nYou can find L'Osteria everywhere. There are many in Bonn and Cologne, but I will only link to the one I went to in Bonn for simplicity. I don't expect the menu or quality of food to change much between the different locations. The price is fair for what you get, just have a few Aperol spritz and try to finish your plate.",
      quickVerdict: 'Huge pizzas for a fair price, you will probably end up taking half home.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/losteria/losteria_1.jpg', caption: 'Various pizzas'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/losteria/losteria_2.jpg', caption: 'Half Hawaiian and BBQ chicken (spicy) pizza'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/losteria/losteria_4.jpg', caption: 'Quattro Formaggi pizza'},
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/losteria/losteria_3.jpg', caption: 'Pizza pane and bruschetta (top)'}
      ],
      ratings: { food: 4, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: "https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=L'Osteria%20Bonn%20In%20der%20S%C3%BCrst%2C%20In%20der%20S%C3%BCrst%2C%20Bonn%2C%20Germany&maptype=roadmap",
      cuisine: 'Italian',
      alexsTip: "Order half of your favourite pizza and half of something new to try.",
      dietary: {
        celiac: "No gluten-free pasta or pizza.",
        lactose: "No specific lactose-free cheese but parmesean can be lactose-free so check with the waiter.",
        vegetarian: "Plenty vegetarian pizza and pasta options.",
        vegan: "Vegan pizza and pasta available."
      },
      websiteUrl: 'https://losteria.net/de/',
      instagramUrl: 'https://www.instagram.com/losteria.de/?hl=en',
      tags: ["Italian", "Pizza", "Aperol", "Takeaway", "vegetarian", "vegan"]
    },
    {
      id: 'fritesbelgique',
      name: "Frites Belgique",
      description: "An easy and quick stop to get some good fries with tasty dips. Not too much to say but definitely try the peanut dipping sauce for something new. The dips change from time to time, but mayo, vegan mayo, and peanut sauce are the best.",
      quickVerdict: 'The best fries in Bonn. Fast, tasty, and great dips.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/fritesbelgique/frites_1.jpg', caption: 'Large fries with mayo and bacon mayo'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/fritesbelgique/frites_2.jpg', caption: 'Regular fries with peanut sauce' }
      ],
      ratings: { food: 5, drinks: 4, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Frites%20Belgique%2C%20Sternstra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Fries',
      alexsTip: "Large fries with the peanut sauce if on offer, and if not go for the mayo.",
      dietary: {
        celiac: "All fries are gluten-free.",
        lactose: "All fries are lactose-free and most dips are too.",
        vegetarian: "Fries cooked in plant based oil, only bacon mayo dip not vegetarian.",
        vegan: "Fries cooked in plant base oil, no animal fat, and there is vegan mayo."
      },
      websiteUrl: 'https://frites-belgique.com/',
      instagramUrl: 'https://www.instagram.com/fritesbelgique/',
      tags: ["Fries", "Takeaway", "Street-food", "gluten-free", "lactose-free", "vegetarian", "vegan"],
      openingHours: [
          "Monday - Saturday: 11:30 - 20:00",
          "Sunday: Closed"
      ]
    },
    {
      id: 'mam-mam',
      name: "Măm-Măm",
      description: "Măm-Măm was my introduction to Vietnamese food, and since then I consider it one of my favourite cuisines. I love coconut so I definitely recommend the Măm-Măm Signature Curry. Both the summer rolls and spring rolls are delicious starters as well. ",
      quickVerdict: 'Authentic Vietnamese food mixed with a German influence in one of the prettiest parts of Bonn.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mam-mam/mam-mam_1.jpg', caption: 'Duck breast in mango sauce with sweet potato mash'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mam-mam/mam-mam_2.jpg', caption: 'Vegan summer rolls with tofu and peanut sauce' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mam-mam/mam-mam_3.jpg', caption: 'Vegan spring rolls with vegetables' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mam-mam/mam-mam_4.jpg', caption: 'Vegan tofu in mango sauce' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/mam-mam/mam-mam_5.jpg', caption: 'Măm-Măm Signature Curry' }
      ],
      ratings: { food: 5, drinks: 5, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=M%C4%83m%20M%C4%83m%20Vietnamese%20Westlands%2C%20Mwanzi%20Rd%2C%20Nairobi%2C%20Kenya&maptype=roadmap',
      cuisine: 'Vietnamese',
      alexsTip: "Order the spring rolls to start and the signature curry, although come hungry.",
      dietary: {
        celiac: "Summer rolls and curries (ask about soy sauce).",
        lactose: "Curries are made from coconut milk.",
        vegetarian: "There are vegetarian spring and summer rolls as well as curries, all with tofu and vegetables.",
        vegan: "There are vegan spring and summer rolls as well as curries, all with tofu and vegetables."
      },
      websiteUrl: 'https://mam-mam-bonn.de/',
      instagramUrl: 'https://www.instagram.com/mammambonn/?hl=en',
      tags: ["Vietnamese", "Asian", "Curry", "gluten-free", "lactose-free", "vegetarian", "vegan"]
    },
    {
      id: 'ferdinando',
      name: "Ferdinando",
      description: "Big pizzas, tasty cornettos and decent coffee all for a low price. The cafe is Italian, but the pizza is not the traditional Napoli pizza, so don't expect too much. Still, I enjoyed it enough to go back many times since I studied across the street. I enjoyed the four cheese pizza the most, which definitely fills a big appetite.\n\nFor the Italians out there, please don't panic that there's Hawaiian pizza on the menu, we are in Germany after all!",
      quickVerdict: 'Large, affordable pizzas and tasty cornettos. Not traditional Napoli style but satisfies a big appetite.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ferdinandos/ferdinandos_1.jpg', caption: 'Duck breast in mango sauce with sweet potato mash'},
      images: [
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ferdinandos/ferdinandos_2.jpg', caption: 'Vegan summer rolls with tofu and peanut sauce' },
        { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/ferdinandos/ferdinandos_3.jpg', caption: 'Vegan spring rolls with vegetables' }
      ],
      ratings: { food: 3.5, drinks: 4, service: 5, price: 1 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Ferdinando%20Italian%20coffee%20%26%20bistro%2C%20Auf%20dem%20H%C3%BCgel%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Italian',
      alexsTip: "The opening hours are quite short and often closed, try going for lunch between classes.",
      dietary: {
        celiac: "Virtually no gluten-free alternatives. I do not recommend for coeliacs.",
        lactose: "Pizza and pasta without dairy available.",
        vegetarian: "Plenty vegetarian pizzas and pastas.",
        vegan: "Very limited options, would not recommend."
      },
      websiteUrl: 'https://www.lieferando.de/speisekarte/ferdinando-italian-coffee-bistro',
      instagramUrl: 'https://www.instagram.com/ferdinando.coffee.bistro/',
      tags: ["Italian", "Pizza", "ciabatta", "cakes", "coffee", "Takeaway", "lactose-free", "vegetarian", "vegan"]
    }
    ,
    {
      id: 'bonnanza',
      name: "Bonnanza Burger Factory",
      description: "Great burgers with Aberdeen Angus beef in the heart of Poppelsdorf. It is a shame they don't have gluten-free buns because it is an easy way to reach more people. This is one of my favourite burger places and I would recommend it to anyone. I would take the BBQ bacon burger every time with a side of fries. I would not recommend the coleslaw unless you prefer it dry. ",
      quickVerdict: 'Top-quality Aberdeen Angus burgers in the heart of Poppelsdorf. Try the BBQ bacon burger.',
      mainImage: { url: 'https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/bonnanza/bonnanza_1.jpg', caption: 'Duck breast in mango sauce with sweet potato mash'},
      images: [
        
      ],
      ratings: { food: 4, drinks: 4, service: 5, price: 2 },
      mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Bonnanza%20Burger%20Factory%2C%20Clemens-August-Stra%C3%9Fe%2C%20Bonn%2C%20Germany&maptype=roadmap',
      cuisine: 'Burgers',
      alexsTip: "Take the BBQ bacon burger with fries, you won't be disappointed.",
      dietary: {
        celiac: "No gluten-free buns, only fries.",
        lactose: "No lactose-free cheese available, burgers without cheese available.",
        vegetarian: "No vegetarian burgers listed on the menu. Salads available but not worth it.",
        vegan: "No vegan burgers listed on the menu, ask about fries. Salads available but not worth it."
      },
      websiteUrl: 'https://www.bonnanzaburger.de/',
      tags: ["Burgers", "Fries", "lactose-free"]
    }
  ],
};
