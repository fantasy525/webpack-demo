const handler = {
    get(target, key, receiver) {
        console.log('get', key)
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log('set', key, value)
        let res = Reflect.set(target, key, value, receiver)
        return res
    },
    deleteProperty(target, key) {
        console.log('deleteProperty', key)
        Reflect.deleteProperty(target, key)
    }
}

const isPro = process.env.NODE_ENV === 'production'? 'isPro' : 'isDev';
console.log('isPro',isPro)

const person = {
    name: 'jack',
    info: {
        age: 20
    }
}
let proxy = new Proxy(person, handler);







export {handler}