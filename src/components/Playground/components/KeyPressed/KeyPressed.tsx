import { useEffect, useCallback } from "react"
import { useAppDispatch } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressedElement } from "./hooks"
import TypographyHeader from "../../../UI/TypographyHeader"
import TypographyText from "../../../UI/TypographyText"

import styles from "./KeyPressed.module.css"

export interface IKeyPressedProps {
  isTimerActive: boolean
  //
}

const KeyPressed: React.FC<IKeyPressedProps> = props => {
  const { isTimerActive } = props
  const keyPressedElement = useKeyPressedElement()
  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (MAP_ARROW_CODES.hasOwnProperty(e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [dispatch, isTimerActive],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <div className={styles.wrapper}>
      <TypographyHeader>Key Pressed</TypographyHeader>
      <TypographyText>
        Press the key corresponding to the key in "Random Keys"
      </TypographyText>
      <div className={styles.container}>
        <span className={styles.icon}>{keyPressedElement}</span>
      </div>
    </div>
  )
}

export default KeyPressed
