// const arr: Array<number> = [1, 2, 3, 4]

interface Users {
    id: number,
    name: string,
    age: number
}

const users: Array<Users> = [
    {id: 1, name: 'Vova', age: 21},
    {id: 2, name: 'Ivan', age: 22},
]

const users2: Users[] = [
    {id: 1, name: 'Vova', age: 21},
    {id: 2, name: 'Ivan', age: 22},
]