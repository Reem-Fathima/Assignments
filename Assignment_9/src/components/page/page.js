import React, { useState } from 'react';
import './page.css'

const TouristDestinations = () => {
  const [destinations] = useState([
    { name: 'Maldives', 
    rating: 4,
    details: 'The Maldives, officially known as the Republic of Maldives, is an independent island country situated in the north-central Indian Ocean. It comprises a chain of approximately 1,200 small coral islands and sandbanks, with around 200 of these islands being inhabited. ',
    image:'https://www.shutterstock.com/image-photo/maldives-paradise-scenery-tropical-aerial-260nw-1901686090.jpg' 
  },
    { name: 'France',
     rating: 3,
    details: 'France is one of the oldest nations on Earth and the most ethnically diverse country in Europe. These deep and broad influences have made France a world leader throughout history in nearly all aspects of culture, including cuisine, wine-making, politics, philosophy, music, art, film, fashion, literature, and sports.',
    image:'https://www.state.gov/wp-content/uploads/2023/07/shutterstock_667548661v2.jpg'   
  },
    { name: 'Dubai', 
    rating: 5, 
    details: 'Dubai is located on the eastern coast of the Arabian Peninsula in the southwest corner of the Arabian Gulf. Dubai is the second largest emirate in the United Arab Emirates (UAE) sharing borders with Abu Dhabi in the south, Sharjah in the northeast, and the Sultanate of Oman in the southeast',
    image:'https://img.etimg.com/thumb/width-640,height-480,imgsize-104894,resizemode-75,msid-105355936/news/international/uae/dubai-and-the-uae-a-global-wealth-nexus.jpg',   
  },
    { name: 'China',
    rating: 3, 
    details: 'China is situated in eastern Asia on the western shore of the Pacific Ocean, with an area of 9.6 million square kilometers. Chinas continental coastline extends for about 18,000 kilometers, and its vast sea surface is studded with more than 5,000 islands, of which Taiwan and Hainan are the largest.', 
    image:'https://www.state.gov/wp-content/uploads/2019/04/China-2107x1406-1.jpg'  
  },
    { name: 'Japan',
    rating: 4.5, 
    details: 'Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! Japans nearest mainland neighbors are the Siberian region of Russia in the north and Korea and China farther south.' ,
    image:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/97/39/7f/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_f31158e4bb953d28a308'
  }
  ]);

  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleDestinationClick = (index) => {
    setSelectedDestination(index === selectedDestination ? null : index);
  };

  return (
    <div>
      <h2>Tourist Destinations</h2>
      
      <ul>
        {destinations.map((destination, index) => (
          <li key={index} onClick={() => handleDestinationClick(index)}>
            <span style={{ cursor: 'pointer' }}>{destination.name}</span>
            {selectedDestination === index && (
              <div class="list">
                <p>Rating: {destination.rating}</p>
                <p>{destination.details}</p>
                <img style={{width:'300px'}} src={destination.image}></img>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TouristDestinations;
