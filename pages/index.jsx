import { Layout, Flex } from "../components/Containers"
import { H2, H3, Parag } from "../components/Text"
import Header from "../components/Header"
import { Favorite } from "@material-ui/icons";
import GroupButton from "../components/DonationButtonGroup"
import TextField from "../components/TextField"
import Carousel from "../components/Carousel"

import { useState } from "react";
import Button from "../components/Button"
// import { Button } from "@material-ui/core";

const Main = () => {

  const [currentValue, setCurrentValue] = useState(50)


  const handleChange = e => {
    const currentInput = +e.target.value
    setCurrentValue(currentInput)
  }

  return (
    <Layout>
      <Header />
      <Flex column>
        <Flex column>
          <H2>Selecione um valor para doar.</H2>
          <TextField
            value={currentValue}
            onChange={(e) => handleChange(e)}
            type="number"
          />
        </Flex>
        <Flex margin="10px 0px">
          <GroupButton
            value={currentValue}
            onClick={(e) => setCurrentValue(e)}
          />
        </Flex>
        {/* <p>Selecione um valor para doar.</p> */}
        <Flex margin="30px 0px 0px 0px">
          <Button donate>Doar</Button>
        </Flex>
        <Flex>
          <H3 secondary>Seu </H3><Favorite style={{ margin: "0rem 0.5rem", color: "#eee" }} /><H3 secondary> faz a diferença.</H3>
        </Flex>
      </Flex>
      <Flex>
        <Carousel />
      </Flex>
      <Flex margin="30px 0px" column>
        <H2>O que é o DOE AjudaPet?</H2>
        <Parag>Pessoas doando para Pets que precisam</Parag>
        <Parag>Pets que precisam sendo direcionados para receber tratamento</Parag>
        <Parag>Clínicas e Petshops associadas recebendo essas demandas</Parag>
      </Flex>
      {/* <Flex margin="30px 0px">
        <H2>INDICADORES</H2>
      </Flex> */}
    </Layout>
  )
}

export default Main