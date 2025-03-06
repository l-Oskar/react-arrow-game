import styles from "./ResultMessage.module.css"

import TypographyText from "../../../../UI/TypographyText"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = props => {
  const { isSuccessEndGame } = props

  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>
          Congratulations! <br /> You Win!
          <br />
        </TypographyText>
      ) : (
        <TypographyText className={styles.text}>
          My Regrets! <br /> You Lose!
          <br />
        </TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
