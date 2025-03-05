import { createSlice } from "@reduxjs/toolkit"

import { IPlaygroundState } from "./types"

import { ARR_MAP_CODES } from "../constants"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  steps: [],
  totalSuccesful: 0,
  totalUnsuccesful: 0,
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
        succes: null,
      })
    },

    clearSteps: state => {
      state.steps = []
    },

    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]
        const isSucces = step.currentValue === action.payload

        if (step.enteredValue == null) {
          state.steps[state.currentStep - 1] = {
            ...step,
            enteredValue: action.payload,
            succes: isSucces,
          }
        }
        if (isSucces) {
          state.totalSuccesful += 1
        } else {
          state.totalUnsuccesful += 1
          state.totalSuccesful = 0
        }
      }
    },

    setUnsucces: state => {
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]

        if (step.enteredValue == null) {
          state.totalUnsuccesful += 1
          state.totalSuccesful = 0

          state.steps[state.currentStep - 1] = {
            ...step,
            succes: false,
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
  setUnsucces,
} = playgroundSlicer.actions

export default playgroundSlicer.reducer
