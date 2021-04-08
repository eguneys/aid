"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.form = exports.json = exports.xhrHeader = exports.defaultInit = void 0;
var jsonHeader = {
    Accept: 'application/vnd.chest.v1+json'
};
exports.defaultInit = {
    cache: 'no-cache',
    credentials: 'same-origin'
};
exports.xhrHeader = {
    'X-Requested-With': 'XMLHttpRequest'
};
var json = function (url, init) {
    if (init === void 0) { init = {}; }
    return fetch(url, __assign(__assign(__assign({}, exports.defaultInit), { headers: __assign(__assign({}, jsonHeader), exports.xhrHeader) }), init)).then(function (res) {
        if (res.ok)
            return res.json();
        throw res.json().then(function (_) {
            if (_.redirect) {
                chest.redirect(_.redirect);
            }
            return _;
        });
    });
};
exports.json = json;
var form = function (data) {
    var formData = new FormData();
    for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
        var k = _a[_i];
        formData.append(k, data[k]);
    }
    return formData;
};
exports.form = form;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGhyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3JjL3hoci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sVUFBVSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSwrQkFBK0I7Q0FDeEMsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFnQjtJQUN0QyxLQUFLLEVBQUUsVUFBVTtJQUNqQixXQUFXLEVBQUUsYUFBYTtDQUMzQixDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUc7SUFDdkIsa0JBQWtCLEVBQUUsZ0JBQWdCO0NBQ3JDLENBQUM7QUFFSyxJQUFNLElBQUksR0FBRyxVQUFDLEdBQVcsRUFBRSxJQUFzQjtJQUF0QixxQkFBQSxFQUFBLFNBQXNCO0lBQ3RELE9BQUEsS0FBSyxDQUFDLEdBQUcsaUNBQ0osbUJBQVcsS0FDZCxPQUFPLHdCQUNGLFVBQVUsR0FDVixpQkFBUyxNQUVYLElBQUksRUFDUCxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7UUFDVCxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQUUsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNyQixJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDNUI7WUFDRCxPQUFPLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBZkYsQ0FlRSxDQUFDO0FBaEJRLFFBQUEsSUFBSSxRQWdCWjtBQUdFLElBQU0sSUFBSSxHQUFHLFVBQUMsSUFBUztJQUM1QixJQUFNLFFBQVEsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLEtBQWdCLFVBQWlCLEVBQWpCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBakIsY0FBaUIsRUFBakIsSUFBaUI7UUFBNUIsSUFBTSxDQUFDLFNBQUE7UUFBdUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FBQTtJQUMvRCxPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDLENBQUE7QUFKWSxRQUFBLElBQUksUUFJaEIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBqc29uSGVhZGVyID0ge1xuICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuY2hlc3QudjEranNvbidcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0SW5pdDogUmVxdWVzdEluaXQgPSB7XG4gIGNhY2hlOiAnbm8tY2FjaGUnLFxuICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xufTtcblxuZXhwb3J0IGNvbnN0IHhockhlYWRlciA9IHtcbiAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG59O1xuXG5leHBvcnQgY29uc3QganNvbiA9ICh1cmw6IHN0cmluZywgaW5pdDogUmVxdWVzdEluaXQgPSB7fSk6IFByb21pc2U8YW55PiA9PlxuICBmZXRjaCh1cmwsIHtcbiAgICAuLi5kZWZhdWx0SW5pdCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAuLi5qc29uSGVhZGVyLFxuICAgICAgLi4ueGhySGVhZGVyXG4gICAgfSxcbiAgICAuLi5pbml0XG4gIH0pLnRoZW4ocmVzID0+IHtcbiAgICBpZiAocmVzLm9rKSByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB0aHJvdyByZXMuanNvbigpLnRoZW4oXyA9PiB7XG4gICAgICBpZiAoXy5yZWRpcmVjdCkge1xuICAgICAgICBjaGVzdC5yZWRpcmVjdChfLnJlZGlyZWN0KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBfO1xuICAgIH0pO1xuICB9KTtcbiAgICAgICAgXG5cbmV4cG9ydCBjb25zdCBmb3JtID0gKGRhdGE6IGFueSk6IEZvcm1EYXRhID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgZm9yIChjb25zdCBrIG9mIE9iamVjdC5rZXlzKGRhdGEpKSBmb3JtRGF0YS5hcHBlbmQoaywgZGF0YVtrXSk7XG4gIHJldHVybiBmb3JtRGF0YTtcbn1cbiJdfQ==