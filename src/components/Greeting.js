import { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      <p>{changedText ? 'Changed!' : `It's good to see you!`}</p>
      <button onClick={changeTextHandler}>Change text!</button>
    </div>
  );
};

export default Greeting;
