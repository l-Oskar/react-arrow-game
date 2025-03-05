// import styles from "./RandomKeys.module.css"
import { useAppSelector } from "../../../../app/hooks"
import { IMapArrowCodes } from "../../types"
import { MAP_ARROW_CODES } from "../../constants"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = props => {
  //const { isTimerActive } = props

  const state = useAppSelector(state => state.playground)

  return (
    <div>
      {state.steps.map(element => (
        <span key={element.step}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomKeys
