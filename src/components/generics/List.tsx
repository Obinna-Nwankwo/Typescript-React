


type ListProps<T> = {
  items: T[];
  handleClick: (value: T) => void;
};

export const List = <T extends {id: number}>({ items, handleClick }: ListProps<T>) => {
  return (
    <div>
      <h1>List Component</h1>

      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => handleClick(item)}>
            {item.toString()}
          </div>
        );
      })}
    </div>
  );
};
