var axios = require('axios')
var a=[];
var b={};
console.log(b.length)
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 为给定 ID 的 user 创建请求
// axios.get('http://localhost:8080/hellot/uu', {
//     params: {
//         name: 'zxw',
//         id: 111
//     }
// }).then(res => {
//     console.log(res.data)
// }).catch(err => {
//     console.log(err.data)
// })
// axios({
//     method: 'get',
//     params: {
//         name: 'zxw',
//         id: 111
//     },
//     url: 'http://localhost:8080/user/uu',
// }).then(
//     res => {
//         console.log(res.data)
//     }).catch(err => {
//     console.log(err.data)
// })
// axios.post('http://localhost:8080/user', {
//     params: {
//         id: 1111,
//         name: 'zxw'
//     }
//
// })
//     .then(
//         res => {
//             console.log(res.data);
//             console.log(res.status);
//             console.log(res.statusText);
//             console.log(res.headers);
//             console.log(res.config);
//         }
//     ).catch(
//     err => {
//         console.log(err.status)
//     }
// )