import { createSlice } from "@reduxjs/toolkit"

import { IPlaygroundState } from "./types"

import { ARR_MAP_CODES } from "../constants"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
}

export const playgroundSlicer = createSlice({
  name: "playround",
  initialState,
  reducers: {
    setCurrentStep: state => {
      state.currentStep += 1
    },

    setSteps: state => {
      const randomKeys = Math.floor(Math.random() * ARR_MAP_CODES.length)
      state.steps.push({ currentValue: ARR_MAP_CODES[randomKeys] })
    },
    clearSteps: state => {
      state.steps = []
    },
  },
})

export const { setCurrentStep, setSteps, clearSteps } = playgroundSlicer.actions

export default playgroundSlicer.reducer
