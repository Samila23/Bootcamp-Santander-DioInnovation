async function resolvePromise(){
    const myPromise = new Promise ((resolve, reject) => {
        window.setTimeout(() => {
            resolve('resolvida');
        },3000);
    });
    const resolved = await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + 'e agora acabou!')
    .catch((err) => console.log(err.message));

    return resolved;
}

console.log(resolvePromise);