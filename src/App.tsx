import Hello from '@/Hello'
import Layout from '@/Layout'
import { ReactComponent as Logo } from '@asset/logo-mark.svg'

const App = () => (
  <Layout className={['text-center', 'justify-center']}>
    <Hello name="human" />
    <Logo />
  </Layout>
)

export default App
