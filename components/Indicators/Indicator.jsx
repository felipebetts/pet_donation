import { Flex } from "../Containers"
import { SingleContainer } from "./styles"


const Indicator = ({Icon, amount, label}) => {
    return (
        <SingleContainer>
            { !Icon ? null : (
                <div style={{ margin: "10px" }}>
                    <Icon /> 
                </div>
            )}
            <span>{amount}</span>
            <span>{label}</span>
        </SingleContainer>
    )
}

export default Indicator