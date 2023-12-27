export interface IUserProps{
    name: string;
    age: number;
    count: number;
}


const User = (props:IUserProps) => {
  return ( 
    <>
        <h3>This is User: {props.name}</h3>
        <h3>And he has: {props.age}</h3>
        <h3>Cunter is: {props.count}</h3>
    </>
  )
}

export default User