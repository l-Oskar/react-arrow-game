import { useAppSelector } from "../../../../app/hooks"
import RandomArrows from "./RandomArrows"
import WelcomeText from "./WelcomeText"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = props => {
  const { isTimerActive } = props

  const state = useAppSelector(state => state.playground)

  return (
    <div>
      <h1>Random keys</h1>

      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default RandomKeys
