const doWorkPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
       // resolve([7,4,5])
        reject('Things went wrong!')

    }, 2000)
})

doWorkPromis.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
   console.log('Error', error)
})