import { VFC } from 'react'
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'
import { useHistory } from 'react-router'
import { useStateContext } from '../context/StateProvider'

export const ClassicalFetchB: VFC = () => {
  const history = useHistory()
  const { tasks } = useStateContext()
  console.log('classicalFetchBがレンダリングされました')
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="text-center font-bold mb-3">ClassicalFetchB</p>
      {tasks?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleLeftIcon
        onClick={() => history.push('/fetch-a')}
        className="h-5 w-5 mt-2 text-blue-500 cursor-pointer"
      />
      <p className="text-sm">fetch-A</p>
    </div>
  )
}
