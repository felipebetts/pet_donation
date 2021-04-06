import { Input, withStyles, TextField as MuiTextField } from "@material-ui/core";
import { DonationForm, Flex } from "./Containers";

const CustomTextField = withStyles({
  root: {
    '& .MuiInput-input': {
      fontFamily: "Roboto Mono",
      color: "#45ffb3",
      borderBottomColor: '#45ffb3',
      fontSize: "2rem",
      textAlign: "center"
    },
    '& label.Mui-focused': {
      color: '#45ffb3',
    },
    '& .MuiInput-underline:before': {
      //   borderBottomColor: '#45ffb3',
      borderBottom: "#242424",
    },
    '& .MuiInput-underline:hover': {
      //   borderBottomColor: '#45ffb3',
      borderBottomColor: "#33c588",
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#45ffb3',
    },
    // '& .MuiOutlinedInput-root': {
    //   '& fieldset': {
    //     borderColor: 'red',
    //   },
    //   '&:hover fieldset': {
    //     borderColor: 'yellow',
    //   },
    //   '&.Mui-focused fieldset': {
    //     borderColor: 'green',
    //   },
    // },
  },
})(MuiTextField)

const TextField = ({ value, onChange, type }) => {
  return (
    <Flex>
      <DonationForm>
        <label style={{ fontSize: "1.3rem"}}>R$</label>
        <CustomTextField
          value={value}
          id="custom-text-field"
          onChange={e => onChange(e)}
          type={type}
          // label="Editar"
        />
      </DonationForm>
      <label htmlFor="custom-text-field" style={{ cursor: "pointer" }}>Editar</label>
    </Flex>
  )
}

export default TextField