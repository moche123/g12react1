import { ReactElement } from "react";
import './wrapper.css';

export interface IWrapperProps {
    children: ReactElement;
}

const Wrapper = (props: IWrapperProps) => {
  return (
    <div className="wrapper">
        {props.children}
    </div>
  )
}

export default Wrapper