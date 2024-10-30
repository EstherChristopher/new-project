export type TodoItem = {
    id: number
    text: string
    completed: boolean
}

export type State = {
    state: TodoItem
    loading: boolean
    items: TodoItem[]
}

export const state = {
    loading: false,
    items: []
}