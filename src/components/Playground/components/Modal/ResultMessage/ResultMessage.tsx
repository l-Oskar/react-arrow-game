// import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: React.FC<IResultMessageProps> = props => {
  const { isSuccessEndGame } = props

  return isSuccessEndGame ? (
    <span>
      Congratulations! <br /> You Win!
      <br />
    </span>
  ) : (
    <span>
      My Regrets! <br /> You Lose!
      <br />
    </span>
  )
}

export default ResultMessage
