import cn from "classnames"
import {
  Typography as MTypography,
  TypographyProps as MTypographyProps,
} from "@mui/material"
import styles from "./TypographyText.module.css"

export interface ITypographyTextProps extends MTypographyProps {}

const TypographyText: React.FC<ITypographyTextProps> = props => {
  const { children, className } = props

  return (
    <MTypography {...props} className={cn(styles.text, className)}>
      {children}
    </MTypography>
  )
}

export default TypographyText
