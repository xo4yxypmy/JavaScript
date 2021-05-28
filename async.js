const timeout = setTimeout(() => {
    console.log('After timeout');
}, 2500)

clearTimeout(timeout)

const interval = setInterval(() => {
    console.log('After interval');
}, 1000)

clearInterval(interval)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Something went wrong')
                // resolve()
        }, wait)
    })
    return promise
}

delay(2500)
    .then(() => {
        console.log('After 2.5 seconds');
    })
    .catch(err => console.error('Error:', err))
    .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

// getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(5000)
        const data = await getData()
        console.log('Data', data)
    } catch (e) {
        console.log(e)
    }
}
asyncExample()