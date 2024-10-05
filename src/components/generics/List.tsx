type ListProps = {
  items: string[];
  handleClick: (value: string) => void;
};

export const List = ({ items, handleClick }: ListProps) => {
  return (
    <div>
      <h1>List Component</h1>

      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => handleClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
