import { useState, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import {
  setCurrentStep,
  setSteps,
  clearSteps,
  setUnsuccess,
} from "./store/slices"

import { INTERVAL_TIME, END_GAMECONDITIONS } from "./constants"

import Controls from "./components/Controls"
import RandomKeys from "./components/RandomKeys"
import KeyPressed from "./components/KeyPressed"
import Score from "./components/Score"
import Modal from "./components/Modal"
import Description from "./components/Description"

import styles from "./Playground.module.css"

const Playground: React.FC = () => {
  const state = useAppSelector(state => state.playground)
  const dispatch = useAppDispatch()

  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [isSuccessEndGame, setIsSuccessEndGame] = useState<boolean>(false)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(INTERVAL_TIME.normal)

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  const changeTimer = (time: number) => {
    setTimer(time)
  }

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setUnsuccess())
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, timer)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => {
      //dispatch(clearSteps())
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
  }, [isTimerActive, dispatch])

  useEffect(() => {
    const isSuccessful =
      state.totalSuccessful === END_GAMECONDITIONS.SUCCESS_COUNT
    const isUnsuccessful =
      state.totalUnsuccessful === END_GAMECONDITIONS.UNSUCCESS_COUNT

    isSuccessful && setIsSuccessEndGame(true)
    isUnsuccessful && setIsSuccessEndGame(false)

    if (isSuccessful || isUnsuccessful) {
      setIsShowModal(true)
      setIsTimerActive(false)
    } else {
      setIsShowModal(false)
    }
  }, [state.totalSuccessful, state.totalUnsuccessful])

  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <RandomKeys isTimerActive={isTimerActive} />
        <KeyPressed isTimerActive={isTimerActive} />
        <Score />
      </div>
      <div className={styles.column}>
        <Description />

        <Controls
          isTimerActive={isTimerActive}
          setIsTimerActive={setIsTimerActive}
          changeTimer={changeTimer}
          timer={timer}
        />
      </div>
      {isShowModal && (
        <Modal
          setIsShowModal={setIsShowModal}
          isSuccessEndGame={isSuccessEndGame}
        />
      )}
    </div>
  )
}

export default Playground
