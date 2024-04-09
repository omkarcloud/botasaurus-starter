
export const TaskStatus = {
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  FAILED: 'failed',
  ABORTED: 'aborted',
}



function isPending(task: any): boolean {
  return task.status === TaskStatus.PENDING
}

function isInProgress(task: any) {
  return task.status === TaskStatus.IN_PROGRESS
}
export function isDoing(task) {
  return (
    isInProgress(task) || isPending(task)
  )
}

export function filterIsDoingTasks(tasks: any[]) {
  return tasks.filter(isDoing)
}


export function filterIsPendingTasks(tasks: any[]) {
  return tasks.filter(isPending)
}

export function filterIsProgressTasks(tasks: any[]) {
  return tasks.filter(isInProgress)
}


export function filterAndMapAllTasks(tasks: any[]) {
  return tasks.filter(x=> x.is_all_task === true && isDoing(x) ).map(x=> ({id: x.id, result_count: x.result_count}))
}