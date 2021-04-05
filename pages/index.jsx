import { Layout, Flex } from "../components/Containers"
import { H2, H3 } from "../components/Heading"
import Header from "../components/Header"
import { Favorite } from "@material-ui/icons";
import GroupButton from "../components/DonationButtonGroup"
import TextField from "../components/TextField"

import { useState } from "react";
import Button from "../components/Button"
// import { Button } from "@material-ui/core";

const Main = () => {

  const [currentValue, setCurrentValue] = useState(50)


  const handleChange = e => {
    const currentInput = e.target.value
    setCurrentValue(currentInput)
  }

  return (
    <Layout>
      <Header />
      <Flex column>
        <Flex margin="auto">
          <H2>Selecione um valor para doar.</H2>
        </Flex>
        <TextField
          value={currentValue}
          onChange={(e) => handleChange(e)}
          type="number"
        />
        <Flex>
          <GroupButton
            value={currentValue}
            onClick={(e) => setCurrentValue(e)}
          />
        </Flex>
        {/* <p>Selecione um valor para doar.</p> */}
        <Flex margin="30px 0px 10px 0px">
          <Button donate>Doar</Button>
        </Flex>
        <Flex>
          <H3>Seu </H3><Favorite style={{ margin: "0rem 0.5rem" }} /><H3> faz a diferença.</H3>
        </Flex>
      </Flex>
    </Layout>
  )
}

export default Main