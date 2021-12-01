export const debounce = (func: () => void, ms: number) => {
    let timer: ReturnType<typeof setTimeout>
    return (...args: any[]) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
                func.apply(args)
            },
            ms
        )
    }
}

export const randomString = (length: number): string => {
    let result = ''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength))
    }
    return result
}
