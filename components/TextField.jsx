import { Input, withStyles, TextField as MuiTextField } from "@material-ui/core";
import { DonationForm } from "./Containers";

const CustomTextField = withStyles({
    root: {
        '& .MuiInput-input': {
            fontFamily: "Roboto Mono",
            fontSize: "1.2rem",
            color: "#45ffb3",
            borderBottomColor: '#45ffb3',
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
        <DonationForm>
            <label>R$</label>
            <CustomTextField
            value={value}
            id="custom-text-field"
            onChange={e => onChange(e)}
            inputMode="numeric"
            type={type}
            />
        </DonationForm>
    )
}

export default TextField