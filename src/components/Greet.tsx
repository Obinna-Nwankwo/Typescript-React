type GreetProps = {
  name: string;
  massageCount?: number;
  isLogging: boolean;
};

function Greet(props: GreetProps) {

    const { massageCount = 0 } = props;

  return (
    < >
      <h1>
        {props.isLogging
          ? `Welcome back ${props.name} you have ${props.massageCount} unread Massages`
          : "Welcome Guest"}
      </h1>
    </>
  );
}

export default Greet;
