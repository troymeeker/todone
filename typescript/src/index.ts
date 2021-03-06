import {v4 as uuidV4} from "uuid"


type Task =  {
  id: string
  title:string
  completed: boolean
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>('#list')

const form = document.getElementById('new-task-form') as HTMLFormElement | null

const input = document.querySelector<HTMLInputElement>('#new-task-title')
const clear = document.querySelector<HTMLButtonElement>('#clear-all')


const tasks: Task[] = loadTasks()
tasks.forEach(addListItem)


form?.addEventListener("submit", e => {
 e.preventDefault()

  if ( input?.value == "" || input?.value == null) return

  const newTask:Task = {
    id: uuidV4(),
    title: input.value,
    completed:false,
    createdAt:new Date()
  }
  
  tasks.push(newTask)
  saveTasks()  

  addListItem(newTask)
  input.value = ""

})

function addListItem(task: Task){
  const item = document.createElement('li')
  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  // const removeItem = document.createElement('button')
  // removeItem.innerHTML = "X"
  // removeItem.setAttribute('id', 'remove-btn' )

  checkbox.addEventListener('change', () => {
   task.completed = checkbox.checked 
   saveTasks()  
   
  //  item.classList.toggle('complete')
   
  })
//   removeItem.addEventListener('click', () => {
  
//     const items = localStorage.getItem("TASKS")
//     const filtered = items?.filter((item: { id: number }) => item.id !== id)
//  localStorage.setItem('TASKS', JSON.stringify(filtered))

//   })
   checkbox.type = 'checkbox'
   checkbox.checked = task.completed
   label.append(checkbox, task.title)
   item.append(label)
   list?.append(item)

  // item.setAttribute('class', 'task-not-complete')
 
 
}

function saveTasks(){
  localStorage.setItem("TASKS", JSON.stringify(tasks))
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem("TASKS")
  if (taskJSON == null) return []

  return JSON.parse(taskJSON)
}



clear?.addEventListener('click', () => {
  localStorage.clear()
  location.reload()
  
})