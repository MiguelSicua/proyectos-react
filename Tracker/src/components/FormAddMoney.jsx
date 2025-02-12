import { useState } from "react";
import styled from 'styled-components';



export const Input = styled.input`
      background: #a4a4c4;
      font-size: lem;
      margin: lem;
      width: 80px;
      height: 25px;
      padding: 6px 10px;
      border: 2px solid #09f;
      border-radius: 5px;
      text-decoration: line-through;
      transition: all .2s ease;

      &:hover {
        background: #09f;
      }
    `;


const FormAddMoney = ({setCount, setIsValid}) => {

    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const handleForm = e => {
        e.preventDefault();
        if (input === "" || Number(input) < 0) {
            setError(true);
            return;
        }
        setError(false);
        setCount(Number(input));
        setIsValid(true);
        //console.log(input);
    }

    return (
        <div className="form-add-money">
            <form onSubmit={handleForm}>
                <p>Agregar Presupuesto</p>
                <input type="number" placeholder="300$" onChange={e => setInput(e.target.value)}/>
                <Input type="submit" value="Agregar" />
            </form>
            { error ? <p className={styled.button}>Presupuesto invalido</p> : null}
        </div>
        
    );
}

export default FormAddMoney;