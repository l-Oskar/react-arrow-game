// import styles from "./WelcomeText.module.css"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = props => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return <span>Loading...</span>
  }
  return <span>Press 'Play' to start game and wait first arrow to apear.</span>
}

export default WelcomeText
