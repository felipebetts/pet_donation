import { Layout, LoginContainer, Flex } from "../components/Containers"
import { SingleContainer } from "../components/Indicators/styles"
import { H2, Parag } from "../components/Text"
import Image from "next/image"

const Thanks = () => {
    return (
        <Layout>
            <LoginContainer>
                <H2>Obrigado pela sua doação!</H2>
                <Parag>A doação de R$50,00 para o AjudaPet foi confirmada. A sua contribuição ajuda muito os pets!</Parag>
                <Image
                    src="/images/pequena.jpg"
                    height={250}
                    width={250}
                />
                <Parag>Convide agora seus amigos! Quanto mais amigos você chama, mais animais são ajudados.</Parag>
            </LoginContainer>
        </Layout>
    )
}

export default Thanks