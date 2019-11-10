import React from 'react';

interface Props {
  score: number,
  topScore: number
}

function Score({ score, topScore }: Props) {

  return (
    <>
      <div className="row">
        <div className="col s6 m3 offset-m3 center">
          <h5>Score: {score}</h5>
        </div>
        <div className="col s6 m3 center">
          <h5>Top Score: {topScore}</h5>
        </div>
        
      </div>
    </>
  );

};


export default Score;