import React, { FC, useState } from "react";
import Button from "../Button/button";

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Button
        texte="+1"
        onClick={() => {
          //Il est important d'utiliser un callbakc pour metre a jour le stat,
          //car dans ce cas la l'utilisateur peux spam le bouton est le state
          //doit bien faire +1 ou -1 avec le nombre qui ce trouve dans le state a ce moment là
          setCounter((state) => state + 1);
        }}
      />
      {counter}
      <Button
        texte="-1"
        onClick={() => {
          //Il est important d'utiliser un callbakc pour metre a jour le stat,
          //car dans ce cas la l'utilisateur peux spam le bouton est le state
          //doit bien faire +1 ou -1 avec le nombre qui ce trouve dans le state a ce moment là
          setCounter((state) => state - 1);
        }}
      />
    </div>
  );
};
export default Counter;
