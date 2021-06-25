import { useState } from "react";

function useToggle() {
  const [toggle, setToggle] = useState(false);

  const toggleElem = () => {
    setToggle((t) => !t);
  };

  return [toggle, toggleElem];
}

export default useToggle;
