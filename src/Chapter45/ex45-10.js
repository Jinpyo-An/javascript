// const promise = new Promise((resolve,reject) => {
//     if (비동기 처리 성공) {
//         resolve('result');
//     } else {
//         reject('failure reason');
//     }
// });

const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject(new Error(xhr.status));
            }
        };
    });
};



