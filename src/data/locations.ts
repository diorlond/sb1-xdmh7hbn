export interface Location {
  id: string;
  name: string;
  description: string;
  image: string;
  highlights: string[];
  companions: Companion[];
  venues: string[];
  transport: string;
}

export interface Companion {
  id: string;
  name: string;
  age: number;
  description: string;
  image: string;
  languages: string[];
  specialties: string[];
}

export const londonLocations: Location[] = [
  {
    id: 'mayfair',
    name: 'Mayfair',
    description: 'The epitome of London elegance, Mayfair represents the pinnacle of sophisticated living with its exclusive boutiques, world-class restaurants, and prestigious addresses. This historic district combines traditional British charm with contemporary luxury, making it the perfect setting for discerning companionship services.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Exclusive shopping on Bond Street and Mount Street',
      'World-renowned restaurants and private members\' clubs',
      'Historic architecture and garden squares',
      'Central location with easy access to all London attractions',
      'Prestigious hotels including The Dorchester and Claridge\'s'
    ],
    companions: [
      {
        id: 'sophia-m',
        name: 'Sophia',
        age: 26,
        description: 'Sophisticated and cultured, Sophia brings intelligence and elegance to every engagement. With a background in art history and fluency in multiple languages.',
        image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'French', 'Italian'],
        specialties: ['Cultural Events', 'Business Dinners', 'Art Gallery Tours']
      },
      {
        id: 'victoria-m',
        name: 'Victoria',
        age: 28,
        description: 'An accomplished professional with extensive international experience. Victoria excels in both business and social settings with her natural charm and sophistication.',
        image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'Spanish', 'German'],
        specialties: ['Executive Companion', 'Travel Companion', 'Social Events']
      },
      {
        id: 'isabella-m',
        name: 'Isabella',
        age: 24,
        description: 'Young, vibrant, and intellectually stimulating, Isabella combines beauty with intelligence. Her background in psychology makes her an exceptional conversationalist.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'Portuguese', 'French'],
        specialties: ['Intimate Conversation', 'Cultural Exploration', 'Fine Dining']
      }
    ],
    venues: [
      'The Dorchester Hotel',
      'Sketch Restaurant',
      'Annabel\'s Private Members\' Club',
      'The Connaught Bar',
      'Burlington Arcade'
    ],
    transport: 'Green Park, Bond Street, and Marble Arch stations provide excellent connectivity throughout London.'
  },
  {
    id: 'kensington',
    name: 'Kensington',
    description: 'Royal Kensington combines cultural richness with residential elegance, home to world-famous museums, beautiful parks, and sophisticated dining. This area offers the perfect blend of intellectual stimulation and refined companionship opportunities.',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Royal Albert Hall and Imperial College',
      'Victoria and Albert Museum, Natural History Museum',
      'Hyde Park and Kensington Gardens',
      'High-end shopping on Kensington High Street',
      'Beautiful Victorian architecture and garden squares'
    ],
    companions: [
      {
        id: 'charlotte-k',
        name: 'Charlotte',
        age: 27,
        description: 'An accomplished musician and cultural enthusiast, Charlotte brings artistic flair and intellectual depth to every encounter. Her passion for the arts is infectious.',
        image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'Russian', 'Italian'],
        specialties: ['Concert Companion', 'Museum Tours', 'Classical Music']
      },
      {
        id: 'amelia-k',
        name: 'Amelia',
        age: 25,
        description: 'Well-traveled and culturally aware, Amelia combines youthful energy with sophisticated understanding. Her background in international relations makes her fascinating company.',
        image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'Mandarin', 'French'],
        specialties: ['International Cuisine', 'Travel Stories', 'Politics & Culture']
      }
    ],
    venues: [
      'Royal Albert Hall',
      'Victoria and Albert Museum',
      'The Natural History Museum',
      'Hyde Park Corner',
      'Kensington Palace'
    ],
    transport: 'South Kensington, High Street Kensington, and Knightsbridge stations offer excellent access.'
  },
  {
    id: 'chelsea',
    name: 'Chelsea',
    description: 'Fashionable Chelsea epitomizes London chic with its trendy boutiques, stylish restaurants, and affluent atmosphere. The Kings Road and surrounding areas provide the perfect backdrop for sophisticated companionship experiences.',
    image: 'https://images.pexels.com/photos/1537086/pexels-photo-1537086.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Famous Kings Road shopping and dining',
      'Chelsea Football Club and Stamford Bridge',
      'Beautiful riverside walks along the Thames',
      'Trendy bars and exclusive restaurants',
      'Saatchi Gallery and contemporary art scene'
    ],
    companions: [
      {
        id: 'olivia-c',
        name: 'Olivia',
        age: 23,
        description: 'Fashion-forward and socially connected, Olivia knows all the best spots in Chelsea. Her vibrant personality and style make her the perfect companion for trendy venues.',
        image: 'https://images.pexels.com/photos/1181624/pexels-photo-1181624.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'Spanish'],
        specialties: ['Fashion Events', 'Trendy Venues', 'Shopping Companion']
      },
      {
        id: 'emma-c',
        name: 'Emma',
        age: 29,
        description: 'Sophisticated and well-connected in London\'s social scene, Emma combines professional success with personal charm. Her network opens doors to exclusive experiences.',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'French', 'German'],
        specialties: ['Exclusive Events', 'Fine Dining', 'Art Galleries']
      }
    ],
    venues: [
      'The Bluebird Restaurant',
      'Saatchi Gallery',
      'The Chelsea Physic Garden',
      'Cadogan Hall',
      'Peter Jones Department Store'
    ],
    transport: 'Sloane Square and South Kensington stations provide convenient access to Chelsea.'
  },
  {
    id: 'canary-wharf',
    name: 'Canary Wharf',
    description: 'London\'s modern financial district, Canary Wharf represents contemporary business sophistication with its impressive skyscrapers, upscale dining, and professional atmosphere. Ideal for business-focused companionship services.',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Modern financial district with impressive architecture',
      'High-end restaurants and bars with city views',
      'Excellent shopping at Canary Wharf Shopping Centre',
      'Professional networking opportunities',
      'Easy transport links via DLR and Underground'
    ],
    companions: [
      {
        id: 'alexandra-cw',
        name: 'Alexandra',
        age: 30,
        description: 'Business-savvy and professionally accomplished, Alexandra understands the corporate world and excels as a business companion. Her MBA and international experience are invaluable.',
        image: 'https://images.pexels.com/photos/1181698/pexels-photo-1181698.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'Mandarin', 'Japanese'],
        specialties: ['Business Dinners', 'Corporate Events', 'Executive Companion']
      },
      {
        id: 'natasha-cw',
        name: 'Natasha',
        age: 26,
        description: 'International and sophisticated, Natasha brings global perspective and business acumen to every engagement. Her finance background makes her perfect for the City.',
        image: 'https://images.pexels.com/photos/1239277/pexels-photo-1239277.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'Russian', 'French'],
        specialties: ['Financial Discussions', 'International Business', 'Networking Events']
      }
    ],
    venues: [
      'Plateau Restaurant',
      'The Gun Public House',
      'Museum of London Docklands',
      'Canary Wharf Shopping Centre',
      'One Canada Square'
    ],
    transport: 'Canary Wharf station (DLR and Jubilee Line) provides excellent connectivity across London.'
  },
  {
    id: 'covent-garden',
    name: 'Covent Garden',
    description: 'Vibrant Covent Garden combines entertainment, culture, and dining in the heart of London. With its historic market, world-class theaters, and lively atmosphere, it\'s perfect for cultural and entertainment-focused companionship.',
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Historic Covent Garden Market and street performers',
      'West End theaters and entertainment venues',
      'Excellent restaurants and trendy bars',
      'Royal Opera House and cultural attractions',
      'Central location with easy access to all London areas'
    ],
    companions: [
      {
        id: 'sophie-cg',
        name: 'Sophie',
        age: 24,
        description: 'Theatrical and artistic, Sophie brings creative energy and cultural knowledge to every encounter. Her drama background makes her captivating company for entertainment venues.',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'French'],
        specialties: ['Theater Companion', 'Cultural Events', 'Artistic Discussions']
      },
      {
        id: 'jessica-cg',
        name: 'Jessica',
        age: 27,
        description: 'Vivacious and entertaining, Jessica knows how to make every moment special. Her background in hospitality ensures exceptional service and memorable experiences.',
        image: 'https://images.pexels.com/photos/1181682/pexels-photo-1181682.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'Italian', 'Spanish'],
        specialties: ['Entertainment', 'Fine Dining', 'Social Events']
      }
    ],
    venues: [
      'Royal Opera House',
      'Covent Garden Market',
      'The Ivy Restaurant',
      'Neal\'s Yard',
      'London Transport Museum'
    ],
    transport: 'Covent Garden station (Piccadilly Line) places you at the heart of London\'s entertainment district.'
  },
  {
    id: 'shoreditch',
    name: 'Shoreditch',
    description: 'Creative and trendy Shoreditch represents London\'s alternative culture with its street art, innovative restaurants, and vibrant nightlife. Perfect for clients seeking contemporary, artistic companionship experiences.',
    image: 'https://images.pexels.com/photos/1571493/pexels-photo-1571493.jpeg?auto=compress&cs=tinysrgb&w=1200',
    highlights: [
      'Vibrant street art and creative culture',
      'Trendy bars, clubs, and alternative venues',
      'Innovative restaurants and pop-up experiences',
      'Brick Lane markets and vintage shopping',
      'Young, creative professional community'
    ],
    companions: [
      {
        id: 'ruby-s',
        name: 'Ruby',
        age: 22,
        description: 'Artistic and alternative, Ruby embodies Shoreditch\'s creative spirit. Her knowledge of the local art scene and underground culture makes her an exciting companion.',
        image: 'https://images.pexels.com/photos/1181661/pexels-photo-1181661.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'German'],
        specialties: ['Art Scene', 'Alternative Venues', 'Creative Culture']
      },
      {
        id: 'lily-s',
        name: 'Lily',
        age: 25,
        description: 'Fashion designer and creative professional, Lily brings artistic flair and trendy style to every encounter. Her connections in the creative industry offer unique experiences.',
        image: 'https://images.pexels.com/photos/1239276/pexels-photo-1239276.jpeg?auto=compress&cs=tinysrgb&w=600',
        languages: ['English', 'French', 'Dutch'],
        specialties: ['Fashion Industry', 'Design Events', 'Creative Networking']
      }
    ],
    venues: [
      'Dishoom Restaurant',
      'The Old Blue Last',
      'Brick Lane Market',
      'Boxpark Shoreditch',
      'Rich Mix Cultural Centre'
    ],
    transport: 'Liverpool Street and Shoreditch High Street stations provide easy access to this creative district.'
  }
];

export const getLocation = (id: string): Location | undefined => {
  return londonLocations.find(location => location.id === id);
};