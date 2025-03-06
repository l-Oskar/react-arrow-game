import { useAppSelector } from "../../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../../constants"
import { IMapArrowCodes } from "../../../types"
import styles from "./RandomArrows.module.css"

const RandomArrows: React.FC = () => {
  const state = useAppSelector(state => state.playground)

  const getStylesRandomKeys = (element: IPlaygroundStepsState): string => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess
    }

    if (!element.success && element.success !== null) {
      return styles.iconUnsuccess
    }
    return styles.icon
  }

  return (
    <div>
      {state.steps.map(element => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
