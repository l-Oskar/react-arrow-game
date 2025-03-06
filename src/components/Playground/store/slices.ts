import { createSlice } from "@reduxjs/toolkit"

import { IPlaygroundState } from "./types"

import { ARR_MAP_CODES } from "../constants"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
  totalSuccessful: 0,
  totalUnsuccessful: 0,
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
      state.steps.push({
        step: state.currentStep,
        currentValue: ARR_MAP_CODES[randomKeys],
        enteredValue: null,
        success: null,
      })
    },

    clearSteps: () => initialState,

    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        const isSuccess = step.currentValue === action.payload

        if (step.enteredValue == null) {
          state.steps[state.currentStep - 1] = {
            ...step,
            enteredValue: action.payload,
            success: isSuccess,
          }
        }
        if (isSuccess) {
          state.totalSuccessful += 1
        } else {
          state.totalUnsuccessful += 1
          state.totalSuccessful = 0
        }
      }
    },

    setUnsuccess: state => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]

        if (step.enteredValue == null) {
          state.totalUnsuccessful += 1
          state.totalSuccessful = 0

          state.steps[state.currentStep - 1] = {
            ...step,
            success: false,
          }
        }
      }
    },
  },
})

export const {
  setCurrentStep,
  setSteps,
  clearSteps,
  setEnteredValue,
  setUnsuccess,
} = playgroundSlicer.actions

export default playgroundSlicer.reducer
