import cn from "classnames"
import {
  Typography as MTypography,
  TypographyProps as MTypographyProps,
} from "@mui/material"
import styles from "./TypographyHeader.module.css"

export interface ITypographyHeaderProps extends MTypographyProps {
  //
}

const TypographyHeader: React.FC<ITypographyHeaderProps> = props => {
  const { children, className } = props

  return (
    <MTypography variant="h3" {...props} className={cn(styles.text, className)}>
      {children}
    </MTypography>
  )
}

export default TypographyHeader
