import { useAppSelector } from "../../../../app/hooks"
import { IMapArrowCodes } from "../../types"
import { MAP_ARROW_CODES } from "../../constants"

export const useKeyPressedElement = (): string => {
  const state = useAppSelector(state => state.playground)

  if (state.steps.length) {
    const enteredValue = state.steps[state.currentStep - 1].enteredValue

    if (enteredValue) {
      return MAP_ARROW_CODES[enteredValue as keyof IMapArrowCodes]
    }
  }
  return "⏳"
}
