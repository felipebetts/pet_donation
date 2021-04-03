import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles(() => ({
    root: {
      color: "#070707",
      backgroundColor: "#45ffb3",
      '&:hover': {
        backgroundColor: "#45ffb3",
      },
      font: "inherit",
      fontWeight: 700,
      margin: "0.3rem",
      width: "100px"
    },
    outlined: {
      color: "#45ffb3",
      backgroundColor: "inherit",
      '&:hover': {
        backgroundColor: "#33c588",
        color: "#070707",
        fontWeight: 600,
      },
      '&:active': {
        backgroundColor: "#45ffb3",
      },
      border: "solid 1px #45ffb3",
      fontWeight: 500,
    },
    fullWidth: {
        width: "100%"
    },
  }))(Button);

const CustomButton = ({ children, onClick, current , donate}) => {

    if (current) {
        return (
            <ColorButton size="large" variant="contained">{children}</ColorButton>
        )
    }

    if (donate) {
        return (
            <ColorButton size="large" fullWidth variant="contained">{children}</ColorButton>
        )
    }

    return (
        <ColorButton size="large" variant="outlined" onClick={onClick}>{children}</ColorButton>
    )
}

export default CustomButton