import { Background, Container, Form } from "./styles";


import { FiLock, FiMail } from 'react-icons/fi'

import Button  from "../../components/Button"
import Input  from "../../components/Input"



export function SingIn() {

    return(
        <Container>
            
              <Background/>
            <Form>

              <h1> Login </h1>

                <Input 
                    placeholder ="Login"
                    type = "text"
                    icon={FiMail}
                /> 
                 <Input 
                    placeholder ="Senha"
                    type = "password"
                    icon={FiLock}
                /> 
                <Button title="Entrar"/>
            </Form>


        </Container>
    );
}
