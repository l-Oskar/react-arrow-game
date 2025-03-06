import Button from "../../../UI/Button"
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded"
import PauseRoundedIcon from "@mui/icons-material/PauseRounded"
import ButtonGroup from "@mui/material/ButtonGroup"
import { INTERVAL_TIME } from "../../constants"
import styles from "./Controls.module.css"
import { useState } from "react"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
  changeTimer: Function
  timer: number
}

const Controls: React.FC<IControlsProps> = props => {
  const { isTimerActive, setIsTimerActive, changeTimer, timer } = props

  return (
    <>
      <div>
        <Button
          endIcon={<PlayArrowRoundedIcon />}
          onClick={() => setIsTimerActive(true)}
          disabled={isTimerActive}
          className={styles.button}
        >
          Play
        </Button>
        <Button
          endIcon={<PauseRoundedIcon />}
          onClick={() => setIsTimerActive(false)}
          disabled={!isTimerActive}
          className={styles.button}
        >
          Pause
        </Button>
      </div>
      <br />
      <div>
        <ButtonGroup
          className={styles.group}
          variant="contained"
          aria-label="Basic button group"
        >
          <Button
            onClick={() => changeTimer(INTERVAL_TIME.easy)}
            className={styles.button}
            disabled={timer === INTERVAL_TIME.easy}
          >
            Easy
          </Button>
          <Button
            onClick={() => changeTimer(INTERVAL_TIME.normal)}
            className={styles.button}
            disabled={timer === INTERVAL_TIME.normal}
          >
            Normal
          </Button>
          <Button
            onClick={() => changeTimer(INTERVAL_TIME.hard)}
            className={styles.button}
            disabled={timer === INTERVAL_TIME.hard}
          >
            Hard
          </Button>
        </ButtonGroup>
      </div>
    </>
  )
}

export default Controls
