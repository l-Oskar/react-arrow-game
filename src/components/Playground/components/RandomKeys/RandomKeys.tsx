// import styles from "./RandomKeys.module.css"
import { useAppSelector } from "../../../../app/hooks"
import { setSteps } from "../../store/slices"
import { IArrowMapCodes } from "../../types"
import { ARR_MAP_CODES, MAP_ARROW_CODES } from "../../constants"

export interface IRandomKeysProps {
  isTimerActive: boolean
}

const RandomKeys: React.FC<IRandomKeysProps> = props => {
  //const { isTimerActive } = props

  const state = useAppSelector(state => state.playground)

  return (
    <div>
      {state.steps.map((element, index) => (
        <span key={index}>
          {MAP_ARROW_CODES[element.currentValue as keyof IArrowMapCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomKeys
