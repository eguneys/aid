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
    Accept: 'application/json'
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
        throw res.statusText;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieGhyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3JjL3hoci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sVUFBVSxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxrQkFBa0I7Q0FDM0IsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFnQjtJQUN0QyxLQUFLLEVBQUUsVUFBVTtJQUNqQixXQUFXLEVBQUUsYUFBYTtDQUMzQixDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUc7SUFDdkIsa0JBQWtCLEVBQUUsZ0JBQWdCO0NBQ3JDLENBQUM7QUFFSyxJQUFNLElBQUksR0FBRyxVQUFDLEdBQVcsRUFBRSxJQUFzQjtJQUF0QixxQkFBQSxFQUFBLFNBQXNCO0lBQ3RELE9BQUEsS0FBSyxDQUFDLEdBQUcsaUNBQ0osbUJBQVcsS0FDZCxPQUFPLHdCQUNGLFVBQVUsR0FDVixpQkFBUyxNQUVYLElBQUksRUFDUCxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7UUFDVCxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQUUsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztBQVZGLENBVUUsQ0FBQztBQVhRLFFBQUEsSUFBSSxRQVdaO0FBR0UsSUFBTSxJQUFJLEdBQUcsVUFBQyxJQUFTO0lBQzVCLElBQU0sUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUM7SUFDaEMsS0FBZ0IsVUFBaUIsRUFBakIsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFqQixjQUFpQixFQUFqQixJQUFpQjtRQUE1QixJQUFNLENBQUMsU0FBQTtRQUF1QixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUFBO0lBQy9ELE9BQU8sUUFBUSxDQUFDO0FBQ2xCLENBQUMsQ0FBQTtBQUpZLFFBQUEsSUFBSSxRQUloQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGpzb25IZWFkZXIgPSB7XG4gIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXG59O1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEluaXQ6IFJlcXVlc3RJbml0ID0ge1xuICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbn07XG5cbmV4cG9ydCBjb25zdCB4aHJIZWFkZXIgPSB7XG4gICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xufTtcblxuZXhwb3J0IGNvbnN0IGpzb24gPSAodXJsOiBzdHJpbmcsIGluaXQ6IFJlcXVlc3RJbml0ID0ge30pOiBQcm9taXNlPGFueT4gPT5cbiAgZmV0Y2godXJsLCB7XG4gICAgLi4uZGVmYXVsdEluaXQsXG4gICAgaGVhZGVyczoge1xuICAgICAgLi4uanNvbkhlYWRlcixcbiAgICAgIC4uLnhockhlYWRlclxuICAgIH0sXG4gICAgLi4uaW5pdFxuICB9KS50aGVuKHJlcyA9PiB7XG4gICAgaWYgKHJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgdGhyb3cgcmVzLnN0YXR1c1RleHQ7XG4gIH0pO1xuICAgICAgICBcblxuZXhwb3J0IGNvbnN0IGZvcm0gPSAoZGF0YTogYW55KTogRm9ybURhdGEgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXMoZGF0YSkpIGZvcm1EYXRhLmFwcGVuZChrLCBkYXRhW2tdKTtcbiAgcmV0dXJuIGZvcm1EYXRhO1xufVxuIl19