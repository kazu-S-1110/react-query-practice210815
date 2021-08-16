import { VFC } from 'react'
import { useHistory } from 'react-router-dom'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { useQueryClient } from 'react-query'
import { Task } from '../types/types'

export const ReactQueryB: VFC = () => {
  const history = useHistory()
  console.log('reactQueryBがレンダリングされました')
  const queryClient = useQueryClient() //useQueryClientで取得することが可能
  const data = queryClient.getQueryData<Task[]>('tasks') //querykeyでアクセスが可能

  return (
    <>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => history.push('/')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">react query A</p>
    </>
  )
}
