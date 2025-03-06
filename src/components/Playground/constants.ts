import { IMapArrowCodes, IEndGameConditions } from "./types"
export const INTERVAL_TIME: number = 1000

export const MAP_ARROW_CODES: IMapArrowCodes = {
  ArrowUp: "⬆️",
  ArrowDown: "⬇️",
  ArrowLeft: "⬅️",
  ArrowRight: "➡️",
}

export const ARR_MAP_CODES = Object.keys(MAP_ARROW_CODES)

export const END_GAMECONDITIONS: IEndGameConditions = {
  SUCCESS_COUNT: 3,
  UNSUCCESS_COUNT: 3,
}
