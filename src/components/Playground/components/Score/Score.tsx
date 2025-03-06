import { useAppSelector } from "../../../../app/hooks"
import TypographyHeader from "../../../UI/TypographyHeader"
import TypographyText from "../../../UI/TypographyText"
import Chip from "@mui/material/Chip"
import Stack from "@mui/material/Stack"

import styles from "./Score.module.css"

const Score: React.FC = () => {
  const state = useAppSelector(state => state.playground)

  return (
    <div>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>
        On error, the "Consecutive successful hits" value is reset to zero
      </TypographyText>
      <Stack direction="row" spacing={1}>
        <Chip
          className={styles.unsuccess}
          label={
            <>
              Failed:{" "}
              <span className={styles.counter}>{state.totalUnsuccessful}</span>
            </>
          }
          color="error"
          variant="outlined"
        />
        <Chip
          className={styles.success}
          label={
            <>
              Successful:{" "}
              <span className={styles.counter}>{state.totalSuccessful}</span>
            </>
          }
          color="success"
          variant="outlined"
        />
      </Stack>
    </div>
  )
}

export default Score
