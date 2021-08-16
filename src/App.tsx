import { VFC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { Layout } from './components/Layout'
import { MainContext } from './components/MainContext'
import { ReactQueryA } from './components/ReactQueryA'
import { ReactQueryB } from './components/ReactQueryB'
import { StateProvider } from './context/StateProvider'

//ここで設定するqueryClientは全てのコンポーネントに反映される
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App: VFC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <StateProvider>
          <Layout>
            <Switch>
              <Route exact path="/">
                <ReactQueryA />
              </Route>
              <Route exact path="/query-b">
                <ReactQueryB />
              </Route>
              <Route exact path="/fetch-a">
                <ClassicalFetchA />
              </Route>
              <Route exact path="/fetch-b">
                <ClassicalFetchB />
              </Route>
              <Route exact path="/main-context">
                <MainContext />
              </Route>
            </Switch>
          </Layout>
        </StateProvider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
