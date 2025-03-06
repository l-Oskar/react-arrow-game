import loader from "./img/loader.svg"
import styles from "./WelcomeText.module.css"
import stylesCommon from "../RandomKeys.module.css"

import TypographyText from "../../../../UI/TypographyText"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = props => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img src={loader} alt="loader" />
        </span>
      </div>
    )
  }
  return (
    <TypographyText>
      Press 'Play' to start game and wait first arrow to apear.
    </TypographyText>
  )
}

export default WelcomeText
