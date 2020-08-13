/**
 * 全局过滤器
 */

// 根据身份证号码判断男女
export const sexIdcardFilter = value => {
    if (!value) {
        return ''
    } else {
        let data = Number(value).substr(16, 1) % 2 === 1 ? '男' : '女'
        return data
    }
}

// 身份证号脱敏('331082199708094687' 转换成 '33108219********87') 第8位开始替换8个
export const IDcardHide = num => {
    let data = String(num).replace(/(\d{8})\d{8}(\d*)/, '$1********$2')
    return data
}

// 手机号脱敏('13912345678' 转换成 '139****5678') 第3位开始替换4个
export const telHide = phone => {
    console.log('----------',typeof phone);
    if (phone) {
        return String(phone).replace(/(\d{3})\d{4}(\d*)/, '$1****$2')
    }
}

//把数字格式化为两位小数
export const twoDecimals = number => {
    if (isNaN(number)) {
        return '0.00'
    } else {
        return parseFloat(number).toFixed(2)
    }
}
