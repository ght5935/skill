

// 函数防抖(debounce)：触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间。

// 效果：如果短时间内大量触发同一事件，只会执行一次函数。

// 实现：既然前面都提到了计时，那实现的关键就在于setTimeout这个函数，由于还需要一个变量来保存计时，考虑维护全局纯净，可以借助闭包来实现：


/*
* fn [function] 需要防抖的函数
* delay [number] 毫秒，防抖期限值
*/
function debounce(fn, delay) {
    let timer = null //借助闭包
    return function () {
        // console.log(timer)
        if (timer) {
            clearTimeout(timer) //进入该分支语句，说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时 
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
        }, delay);
    }
}

function showTop() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}
window.onscroll = debounce(showTop, 1000)



// 效果：如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。

// 实现 这里借助setTimeout来做一个简单的实现，加上一个状态位valid来表示当前函数是否处于工作状态：

function throttle(fn, delay) {
    let timer = null;
    return function () {
        // 如果timer有值,代表之前调用过了
        if (!timer) {
            // 转化为异步调用，delay 时间过后再执行
            timer = setTimeout(() => {
                // 清空timer,让下一次调用能成功生效
                clearTimeout(timer)
                // 通过apply和that保证this的正确指向
                fn.apply(this, arguments);
            }, delay);
        }
    }
}

// 以下照旧
function showTop() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    console.log('滚动条位置：' + scrollTop);
}
window.onscroll = throttle(showTop, 1000)



