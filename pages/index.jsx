import { Layout, Flex, LogoContainer, Logo, ButtonGroup } from "../components/Containers"
import { H1, H2, H3 } from "../components/Heading"
import Button from "../components/Button"
import { Favorite } from "@material-ui/icons";
import { useState } from "react";
// import { Button } from "@material-ui/core";

const Main = () => {

  
  const [currentValue, setCurrentValue] = useState(50)
  
  const renderGroupButton = () => {
    const donationValues = [2, 5, 10, 20, 50, 100]
    return (
      <ButtonGroup>
        { donationValues.map((v, i) => {
          if (v === currentValue) {
            return (
              <Button key={i} current onClick={() => handleClick(v)}>{`R$${v},00`}</Button>
            )
          } else {
            return (
              <Button key={i} onClick={() => handleClick(v)}>{`R$${v},00`}</Button>
            )
          }
        })}
      </ButtonGroup>
    )
  }

  const handleClick = (value) => {
    setCurrentValue(value)
  }

  return (
    <Layout>
      <Flex column>
        <H1>Bem vindo ao</H1>
        <LogoContainer>
          <Logo src="/Logo.png" alt="Logo" />
        </LogoContainer>
      </Flex>
      <Flex column>
        <H2>Ajude um Pet</H2>
        <Flex>
          { renderGroupButton() }
        </Flex>
        <p>Selecione um valor para doar.</p>
        <Flex margin="30px 0px 10px 0px">
          <Button donate>Doar R${currentValue},00</Button>
        </Flex>
        <Flex>
          <H3>Seu </H3><Favorite style={{ margin: "0rem 0.5rem" }} /><H3> faz a diferença.</H3>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Main