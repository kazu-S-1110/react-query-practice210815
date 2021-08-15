import axios from 'axios'
import { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateProvider'

export const useClassicalFetch = () => {
  const { tasks, setTasks } = useStateContext()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)
      try {
        const res = await axios(
          'https://restapi-django210814.herokuapp.com/api/tasks/'
        )
        setTasks(res.data)
      } catch (error) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [setTasks])
  return { tasks, isLoading, isError }
}
