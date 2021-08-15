import { VFC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from './components/Layout'

const App: VFC = () => {
  return (
    <Router>
      <Layout>App</Layout>
    </Router>
  )
}

export default App
