import React from 'react';

interface Props {
  feedback: string
}

function Message({ feedback }: Props) {

  return (
    <>
      <div className="row">
        <h1 className="title col s12 center">Animal Memory Game</h1>
        <h4 className="col s12 center">{feedback}</h4>
      </div>
    </>
  );

};


export default Message;