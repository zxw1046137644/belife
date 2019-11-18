var axios = require('axios');
var md5 = require('js-md5')

function timeSamp() {
    const timesamp = parseInt((new Date()).getTime() / 1000);
    console.log(timesamp)
    return timesamp;
}

function clearCacheKj() {
    axios.get('https://t.ssl.jidianhuyu.com/bargain/api_user/z/clear').then(
        res => {
            console.log(res.data)
        }
    ).catch(
        err => {
            console.log(err.data)
        }
    )
}

function other(url, api, params) {
    axios.get(url + api, {
        params
    }).then(
        res => {
            console.log(res.data)
        }
    ).catch(
        err => {
            console.log(err.data)
        }
    )
}

function md(params) {
// 以下为加密算法，请严格执行（可将其封装）
    let arr = Object.keys(params).sort();
    // console.log(arr)
    let str = '';
    for (var i = 0; i < arr.length; i++) {
        str = str + arr[i] + '-' + params[arr[i]] + '--';
    }
// 此处为MD5加密（请使用对应语言的MD5加密方法）
    console.log(str)
    // str = 'access_id-123--access_token-321--active_type-2--business_id-4--city-杭州市--lat-30.307533133810978--lng-120.10519047117164--location-1--need_product_type-0--page-1--product_type_id-1--timestamp-1574043348--'
    params.sign = md5(str);
    console.log(params.sign);
    if (params.access_token !== undefined) {
        delete params.access_token;
    }


    return params;
}


module.exports = {
    timeSamp,
    clearCacheKj,
    other,
    md

}

