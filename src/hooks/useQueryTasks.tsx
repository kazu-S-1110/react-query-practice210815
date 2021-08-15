import axios from 'axios'
import { useQuery } from 'react-query'
import { Task } from '../types/types'

const getTasks = async () => {
  const { data } = await axios.get<Task[]>(
    'https://restapi-django210814.herokuapp.com/api/tasks/'
  )
  return data
}

export const useQueryTasks = () => {
  //useQueryの定義方法。めっちゃ簡単。
  return useQuery<Task[], Error>({
    queryKey: 'tasks',
    queryFn: getTasks,
    cacheTime: 30000,
    staleTime: 30000,
  })
}
