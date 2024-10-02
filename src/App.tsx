import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import John from "./components/John";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import IsLoggedIn from "./components/state/IsLoggedIn";



function App() {
  const PersonName = {
    first: "Official",
    last: "Nwankwo",
  };

  const nameList = [
    {
      first: "Obitect",
      last: "Nwankwo",
    },
    {
      first: "Tony",
      last: "Stark",
    },
    {
      first: "Steve",
      last: "Rogers",
    },
  ];
  return (
    <div className="h-full bg-gradient-to-tr text-3xl text-center font-bold p-20 space-y-8 hover:text-white hover:italic via-slate-100 hover:via-slate-500 from-slate-100">
      <Greet name="Official" isLogging={true} />
      <Person name={PersonName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Handles children text</Heading>
      <John>
        <Heading>This is header under john component John gose to school</Heading>
      </John>
      <Button handleClick={(event, id) => {
        console.log("am clicked", event, id)
      }} />
      <Input value='' handleChange={(event) => console.log(event)}/>
      <Container style={{border: '2px solid black', padding: '1rem'}} />
      <IsLoggedIn />
    </div>
  );
}

export default App;
