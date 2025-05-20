import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state]; // Копируем массив
            if (action.payload === 'up') {
                return sortedState.sort((a, b) => a.name.localeCompare(b.name)); // Сортировка по имени (А-Я)
            } else if (action.payload === 'down') {
                return sortedState.sort((a, b) => b.name.localeCompare(a.name)); // Обратная сортировка (Я-А)
            }
            return state // need to fix
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload); // Фильтрация по возрасту >= payload / need to fix
        }
        default:
            return state
    }
}
