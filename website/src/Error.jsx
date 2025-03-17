import { Wrapper } from "./Styles/ErrorStyles";
import { Button } from "./Styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return <Wrapper>
      <img src="../images/error.svg" alt="error"/>
      <NavLink to="/">
      <Button className="btn">Go back</Button>
      </NavLink>
    </Wrapper>
}



export default Error
