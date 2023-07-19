import { HelloProps } from './types'
import styles from './Hello.module.css'

const Hello = ({ name }: HelloProps) => (
  <div className={styles.Hello}>
    <h1>{`Hello ${name}`}</h1>
  </div>
)

export default Hello
