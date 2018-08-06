var toStr = Object.prototype.toString;

export const each = (arr, fn, ctx = null) => {

    var isObject = arr !== null && typeof arr === 'object';
    var isArray = toStr.call(arr) === '[object Array]';

    if (isObject) {
        for (var i in arr) {
            if (arr.hasOwnProperty(i)) {
                let item = arr[i];
                fn.call(ctx, item, i);
            }
        }
        return;
    }

    if (!isArray) return;

    for (var i = 0, len = arr.length; i < len; i++) {
        let item = arr[i];
        fn.call(ctx, arr[i], i);
    }
}