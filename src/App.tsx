import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import User from "./components/User";
import { useFetchApi } from "./CustomHooks/useFetchApi.hook";
import useLocalStorage from "./CustomHooks/useLocalStorage.hook";
import Wrapper from "./components/Wrapper";

function App() {
  //*OPERATIONS AND VARIABLES
  const age = 30;
  const [count, setCount] = useState(0);
  // const [characteres, setCharacteres] = useState([]);
  const [results] = useFetchApi("https://rickandmortyapi.com/api/character");

  const [count2, setCount2] = useLocalStorage("count", 0);
  const [count3, setCount3] = useLocalStorage("count3", 20);
  // const [wording,setWording] = useState('');
  let wording = <></>;
  // const generalValue = 20;

  if (count2 > 10) {
    wording = <h2>Es mayor a 10</h2>;
  } else {
    wording = <h3>Es menor a 10</h3>;
  }

  return (
    //*RENDERIZAR CONTENIDO
    <>
      <h1>Hello World</h1>
      <Counter count={count} setCount={setCount} />
      <User name="Charles" age={age} count={count} />
      NUMBER OF CHARACTERES == {results.length}
      <hr />
      <h4>Count - {count2}</h4>
      <button onClick={() => setCount2((prevCount: number) => prevCount + 1)}>
        Increment
      </button>
      <div className={count2 > 10 ? "text-blue" : "text-green"}>{wording}</div>
      <hr />
      <h4>Count3 - {count3}</h4>
      <button onClick={() => setCount3((prevCount: number) => prevCount - 1)}>
        Decrement
      </button>
      {count3 < 0 && <h2 className="text-red">Es menor a cero</h2>}
      <hr />
      <Wrapper>
        <h1>INSIDE WRAPPER</h1>
      </Wrapper>
      <hr />
      <Wrapper>
        <>
          <h1>INSIDE WRAPPER2</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            excepturi consequatur magni quibusdam consequuntur mollitia eos labore
            cum? Debitis quisquam velit beatae placeat corporis voluptatum maxime
            reiciendis molestiae commodi esse!
          </p>
        </>
      </Wrapper>
    </>
  );
}

export default App;
