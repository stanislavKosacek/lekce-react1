import { useState } from 'react';
export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? 'Sryj' : 'Zobraz'} menu
      </button>
      {isOpen ? (
        <nav>
          <ul>
            <li>
              <a href="#">Domů</a>
            </li>
            <li>
              <a href="#">O nás</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
};
