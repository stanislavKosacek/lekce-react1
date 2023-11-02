import { useState } from 'react';

export const Auto = ({ znacka, model }) => {
  const [stavNadrze, nastavStavNadrze] = useState('plná'); // ['plná', () => {}]

  return (
    <div className="auto">
      <h2>Moje auto</h2>
      <p>Značka: {znacka}</p>
      <p>Model: {model}</p>
      <p>Stav nádrže: {stavNadrze}</p>
      <button
        onClick={() => {
          nastavStavNadrze('prázná');
        }}
      >
        Vyprázdnit nádrž
      </button>
    </div>
  );
};
