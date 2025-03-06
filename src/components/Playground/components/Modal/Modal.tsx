import cn from "classnames"
import { useAppDispatch } from "../../../../app/hooks"
import { clearSteps } from "../../store/slices"

import ResultMessage from "./ResultMessage"
import Button from "../../../UI/Button"
import TypographyHeader from "../../../UI/TypographyHeader"
import { Modal as MModal } from "@mui/material/"

import styles from "./Modal.module.css"
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
    <MModal open onClose={handleClose} className={styles.warapper}>
      <div
        className={cn(
          styles.container,
          isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess,
        )}
      >
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button className={styles.button} onClick={handleClose}>
          Start New Game
        </Button>
      </div>
    </MModal>
  )
}

export default Modal
