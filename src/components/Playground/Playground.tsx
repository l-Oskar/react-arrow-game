import { current } from "@reduxjs/toolkit"
import { useAppDispatch, useAppSelector } from "../../app/hooks"

import { setCurrentStep, setSteps, clearSteps } from "./store/slices"
import { useState, useEffect, useRef } from "react"

import { INTERVAL_TIME, ARR_MAP_CODES } from "./constants"

import Controls from "./components/Controls"
import RandomKeys from "./components/RandomKeys"

const Playground: React.FC = () => {
  const state = useAppSelector(state => state.playground)
  const dispatch = useAppDispatch()

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setCurrentStep())
        dispatch(setSteps())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }

    return () => {
      dispatch(clearSteps())
      clearInterval(refreshIntervalId.current as NodeJS.Timeout)
    }
  }, [isTimerActive, dispatch])

  return (
    <div>
      <h1>{state.currentStep}</h1>
      <button onClick={() => dispatch(setSteps())}>Change step</button>
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
    </div>
  )
}

export default Playground
