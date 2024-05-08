function ListBox({ items }) {
  return (
    <div>
      <ul>
        {items &&
          items.length > 0 &&
          items.map((item) => {
            return <li>{item.name}</li>;
          })}
      </ul>
    </div>
  );
}

export default ListBox;
