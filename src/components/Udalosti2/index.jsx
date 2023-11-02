export const Udalosti2 = () => {
  return (
    <div>
      <h2>Události2</h2>
      <label>
        Jméno
        <input
          onChange={(event) => {
            console.log(event.target.value);
          }}
          type="text"
        />
      </label>
    </div>
  );
};
