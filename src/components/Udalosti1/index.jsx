export const Udalosti1 = () => {
  const handleClick = () => {
    alert('Kliknuto na tlačítko');
  };

  return (
    <div>
      <h2>Události 1</h2>
      <button onClick={handleClick}>Klikni</button>
    </div>
  );
};
