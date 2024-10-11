const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore Tokyo from this centrally located modern apartment, perfect for a city adventure.",
    image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Tokyo",
    country: "Japan",
  },


  {
    title: "Luxury Villa with Private Pool",
    description:
      "Enjoy the ultimate in luxury with a private pool and stunning views in this spacious villa.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Chic Apartment with City View",
    description:
      "Stay in style in this chic apartment offering stunning city views and modern amenities.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Paris",
    country: "France",
  },
  {
    title: "Rustic Cabin in the Woods",
    description:
      "Get away from it all in this rustic cabin nestled in the woods, perfect for nature lovers.",
    image: "https://images.pexels.com/photos/1102402/pexels-photo-1102402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 700,
    location: "Smoky Mountains",
    country: "United States",
  },
  {
    title: "Charming Bungalow by the Beach",
    description:
      "Stay steps away from the beach in this charming bungalow, ideal for a relaxing seaside holiday.",
    image: "https://images.pexels.com/photos/2566860/pexels-photo-2566860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1300,
    location: "Maui",
    country: "United States",
  },
  {
    title: "Exquisite Penthouse Suite",
    description:
      "Indulge in the exquisite luxury of this penthouse suite, complete with breathtaking city views.",
    image: "https://images.pexels.com/photos/2227787/pexels-photo-2227787.jpeg?auto=compress&cs=tinysrgb&w=400",
    price: 4200,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Idyllic Cottage in the Countryside",
    description:
      "Experience the peace and tranquility of the countryside in this idyllic cottage, perfect for a quiet retreat.",
    image: "https://images.pexels.com/photos/1591361/pexels-photo-1591361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 950,
    location: "Bavaria",
    country: "Germany",
  },
  {
    title: "Luxurious Desert Oasis",
    description:
      "Escape to a luxurious desert oasis with stunning views and top-notch amenities for a unique vacation experience.",
    image: "https://images.pexels.com/photos/5139608/pexels-photo-5139608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 3300,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Peaceful Cottage by the Lake",
    description:
      "Relax by the serene lake in this peaceful cottage, perfect for a quiet and restful getaway.",
    image: "https://images.pexels.com/photos/16638589/pexels-photo-16638589/free-photo-of-a-tropical-resort-in-summer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1100,
    location: "Lake District",
    country: "United Kingdom",
  },
  {
    title: "Contemporary Loft in the Heart of the City",
    description:
      "Stay in this contemporary loft in the heart of the city, perfect for exploring all the urban attractions.",
    image: "https://images.pexels.com/photos/1082326/pexels-photo-1082326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1900,
    location: "Toronto",
    country: "Canada",
  },
  {
    title: "Secluded Mountain Chalet",
    description:
      "Escape to this secluded mountain chalet, surrounded by stunning natural beauty for an unforgettable stay.",
    image: "https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 2500,
    location: "Rocky Mountains",
    country: "United States",
  },
  {
    title: "Beachfront Condo with Ocean Views",
    description:
      "Wake up to stunning ocean views in this beachfront condo, perfect for a relaxing seaside vacation.",
    image: "https://images.pexels.com/photos/4412189/pexels-photo-4412189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 1600,
    location: "Honolulu",
    country: "United States",
  },
  {
    title: "Charming Villa in the Vineyards",
    description:
      "Stay in this charming villa surrounded by vineyards, perfect for wine lovers and those seeking tranquility.",
    image: "https://images.pexels.com/photos/3698301/pexels-photo-3698301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 2100,
    location: "Napa Valley",
    country: "United States",
  },
 
    {
      title: "Cozy Cottage with Garden",
      description:
        "Enjoy a cozy stay in this charming cottage with a beautiful garden, perfect for a peaceful retreat.",
      image: "https://images.pexels.com/photos/625409/pexels-photo-625409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1200,
      location: "Gloucestershire",
      country: "United Kingdom",
    },
    {
      title: "Modern Apartment in Historic District",
      description:
        "Experience the charm of a historic district with the comfort of a modern apartment in this well-located property.",
      image: "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1800,
      location: "Rome",
      country: "Italy",
    },
    {
      title: "Stylish Loft with Rooftop Terrace",
      description:
        "Enjoy a stylish stay with a rooftop terrace offering panoramic views of the city in this contemporary loft.",
      image: "https://images.pexels.com/photos/462014/pexels-photo-462014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 3000,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Elegant Mansion with Private Gardens",
      description:
        "Experience opulence in this elegant mansion with beautifully manicured private gardens and luxurious amenities.",
      image: "https://images.pexels.com/photos/3424/vacation-holidays-hotel-architecture.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 6000,
      location: "Versailles",
      country: "France",
    },
    {
      title: "Historic Castle Stay",
      description:
        "Live like royalty in this historic castle with grand architecture and beautiful grounds.",
      image: "https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 8000,
      location: "Scotland",
      country: "United Kingdom",
    },
    {
      title: "Urban Oasis with Garden",
      description:
        "Relax in this urban oasis with a lush garden in the heart of the city, offering a peaceful retreat from the hustle and bustle.",
      image: "https://images.pexels.com/photos/20662268/pexels-photo-20662268/free-photo-of-view-of-the-beach-and-modern-hotels-in-puerto-vallarta-mexico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2400,
      location: "Berlin",
      country: "Germany",
    },
    {
      title: "Romantic Getaway in the Vineyard",
      description:
        "Enjoy a romantic escape in this cozy retreat set amidst the beauty of a vineyard.",
      image: "https://images.pexels.com/photos/15298798/pexels-photo-15298798/free-photo-of-aerial-view-of-a-tropical-resort-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1700,
      location: "Bordeaux",
      country: "France",
    },
    {
      title: "Sleek City Apartment",
      description:
        "Stay in a sleek city apartment with modern furnishings and a convenient location.",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2000,
      location: "Hong Kong",
      country: "China",
    },
    {
      title: "Luxurious Alpine Lodge",
      description:
        "Relax in style in this luxurious alpine lodge, offering breathtaking mountain views and top-tier amenities.",
      image: "https://images.pexels.com/photos/3653831/pexels-photo-3653831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 3500,
      location: "Swiss Alps",
      country: "Switzerland",
    },
    {
      title: "Spacious Loft with Art Collection",
      description:
        "Enjoy the unique experience of staying in a spacious loft adorned with an impressive art collection.",
      image: "https://images.pexels.com/photos/3965528/pexels-photo-3965528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2900,
      location: "Barcelona",
      country: "Spain",
    },
    {
      title: "Serene Mountain Retreat",
      description:
        "Find peace and serenity in this mountain retreat, perfect for unwinding and enjoying nature.",
      image: "https://images.pexels.com/photos/187815/pexels-photo-187815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2100,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Quaint Cabin in the Forest",
      description:
        "Escape to a quaint cabin nestled in the forest, perfect for a cozy and intimate retreat.",
      image: "https://images.pexels.com/photos/1287441/pexels-photo-1287441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 850,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Elegant Urban Loft",
      description:
        "Experience urban elegance in this sophisticated loft, complete with high-end finishes and a central location.",
      image: "https://images.pexels.com/photos/1320686/pexels-photo-1320686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 2700,
      location: "Los Angeles",
      country: "United States",
    }
  ];
  





  module.exports = { data: sampleListings };
 





