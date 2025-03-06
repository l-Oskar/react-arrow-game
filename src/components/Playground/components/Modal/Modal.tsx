// import styles from "./Modal.module.css"

import { useAppDispatch } from "../../../../app/hooks"
import { clearSteps } from "../../store/slices"

import ResultMessage from "./ResultMessage"

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = props => {
  const { setIsShowModal, isSuccessEndGame } = props
  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(clearSteps())
    setIsShowModal(false)
  }

  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <button onClick={handleClose}>Start New Game</button>
    </div>
  )
}

export default Modal
