import React from 'react';
import './styles.css'
import animals from '../../animals.json';

interface Props {
  clickImage: (imageId: number) => void
}

interface Animals {
  id: number,
  image: string,
  alt: string
}

function CardContainer({ clickImage }: Props) {



  let shuffleImgs = (array: Animals[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  return (

    <div className="row">
      {shuffleImgs(animals)}
      {animals.map(animal => (

        <div className="col s6 m4 l3 card-col" key={animal.id}>
          <div className="card hoverable">
            <div className="card-image">
              <img src={animal.image} alt={animal.alt} onClick={() => { clickImage(animal.id) }} />
            </div>
          </div>
        </div>
      ))}

    </div>

  );

}

export default CardContainer