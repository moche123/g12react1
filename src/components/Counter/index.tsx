export interface ICounterProps {
  count: number ;
  setCount:  React.Dispatch<React.SetStateAction<number>>;
}

const Counter = (props: ICounterProps) => {
  // let count = 0;

  //* [VALUE,FN_MODIFIES_VALUE] = useState( INTIAL_VALUE )

  const increment = () => {
    props.setCount(props.count+1)
    
  }

  return (
    <>
        <div>{props.count}</div>
        <button onClick={increment}>click</button>
    </>
  )
}

export default Counter