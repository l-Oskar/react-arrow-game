import cn from "classnames"
import { Button as MButton, ButtonProps as MButtonProps } from "@mui/material"
import styles from "./Button.module.css"

export interface IButtonProps extends MButtonProps {
  //
}

const Button: React.FC<IButtonProps> = props => {
  const { children, className } = props

  return (
    <MButton
      variant="contained"
      size="small"
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MButton>
  )
}

export default Button
