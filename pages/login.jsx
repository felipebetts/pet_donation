import { useState } from "react"
import CustomButton from "../components/Button"
import { Flex, Layout, LoginContainer, LoginFormContainer } from "../components/Containers"
import { H2, Parag } from "../components/Text"
import TextField from "../components/TextField"

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Login = () => {

    const [ddd, setDdd] = useState("")
    const [celular, setCelular] = useState("")


    return (
        <Layout>
            <LoginContainer>
                <H2>Acesse ou crie sua conta </H2>
                <Parag>Digite seu celular para entrar. Seus dados estão seguros e você não precisa de senha.</Parag>
                <Flex
                    margin="0px"
                    column
                >
                    <LoginFormContainer>
                        <TextField
                            variant="outlined"
                            label="DDD"
                            fieldWidth="62px"
                            type="number"
                            onChange={(e) => setDdd(+e.target.value)}
                            value={ddd}
                        />
                        <TextField
                            variant="outlined"
                            label="Celular"
                            fieldWidth="120px"
                            // fullWidth
                            type="number"
                            onChange={(e) => setCelular(+e.target.value)}
                            value={celular}
                        />
                    </LoginFormContainer>
                    <CustomButton donate>Receber código por SMS</CustomButton>
                    <CustomButton fullWidth><WhatsAppIcon style={{ marginRight: "8px"}} /> Receber código por Whatsapp</CustomButton>
                </Flex>
            </LoginContainer>
        </Layout>
    )
}

export default Login