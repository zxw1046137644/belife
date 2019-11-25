var axios = require('axios');
var md5 = require('js-md5')

function timeSamp() {
    const timesamp = parseInt((new Date()).getTime() / 1000);
    // console.log(timesamp)
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
//     console.log(str)
    // str = 'access_id-123--access_token-321--active_type-2--business_id-4--city-杭州市--lat-30.307533133810978--lng-120.10519047117164--location-1--need_product_type-0--page-1--product_type_id-1--timestamp-1574043348--'
    params.sign = md5(str);
    // console.log(params.sign);
    if (params.access_token !== undefined) {
        delete params.access_token;
    }


    return params;
}
function createInsert(length){
    '1564383842398D67D8', '', '', '', '38', '0','1', '1', '1', '1', '1', '舒芙蕾2人套餐', '198.00', '168.00', '4.40', '0.00', '0.0000',






    console.log('INSERT INTO `bargain`.`user_order` (`order_id`, `group_id`, `out_trade_rand`, `out_refund_no`,' +
        '`user_id`, `fake_user_id`, `active_type`, `group_type`, `group_master`, `shop_id`, `active_id`, `active_name`,' +
        '`price_origin`, `price_origin2`, `price_bargain`, `price_subsidy`, `commission`, `amount_actual`,' +
        '`vip_discount`, `status`, `convert_code`, `convert_at`, `convertible`, `convert_shop_id`, `audit_status`, `created_at`,' +
        '`payed_at`, `expired_at`, `del`, `prepay_id`, `transaction_id`) VALUES '+'('
        +'1564383842398D67D8'
        +', \'\', \'\', \'\', \'38\', \'0\',\'1\', \'1\', \'1\', \'1\', \'1\', \'舒芙蕾2人套餐\', \'198.00\', \'168.00\', \'4.40\', \'0.00\', \'0.0000\','
        +'\'163.60\', \'1.00\', \'3\', \'\', \'0\', \'3\',\'0\', \'1\', \'1564383842\', \'0\', \'0\', \'0\', \'\', \'\');'
    )


}


module.exports = {
    timeSamp,
    clearCacheKj,
    other,
    md,
    createInsert

}

