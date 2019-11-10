import React from 'react';
import Message from '../Message';
import Score from '../Score';

interface Props {
  score: number,
  topScore: number,
  feedback: string
}

function Header({ score, topScore, feedback }: Props) {

  return (
    <>
      <Message feedback={feedback}/>
      <Score score={score} topScore={topScore}/>
    </>
  );

}


export default Header