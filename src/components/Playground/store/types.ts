export interface IPlaygroundStepsState {
  step: number
  currentValue: string | null
  enteredValue: string | null
  succes: boolean | null
}

export interface IPlaygroundState {
  currentStep: number
  steps: IPlaygroundStepsState[]
  totalSuccesful: number
  totalUnsuccesful: number
}
