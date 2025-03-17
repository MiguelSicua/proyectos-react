import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import { Wrapper } from "./Styles/ServiceStyles";
import { Button } from "./Styles/Button";

const Services = () => {
    const { services } = useGlobalContext();
    //console.log(services);

    return (
        <Wrapper className="section">
            <h2 className="common-heading">Our Services</h2>
            <div className="container grid grid-three-column">
                {services && services.map((curElem) => {
                    const { id, name, image, description } = curElem;
                    return (
                        <div key={id} className="card">
                            <figure>
                                <img src={image} alt={name} />
                            </figure>
                            <div className="card-data">
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <NavLink to="service" style={{ textDecoration: "none" }}>
                                    <Button className="btn">Read More</Button>
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Wrapper>
    );
};
 
export default Services;