"use strict";
exports.__esModule = true;
function throttle(delay, cb) {
    var timer, lastExec = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var self = this;
        var elapsed = performance.now() - lastExec;
        function exec() {
            timer = undefined;
            lastExec = performance.now();
            cb.apply(self, args);
        }
        if (timer)
            clearTimeout(timer);
        if (elapsed > delay)
            exec();
        else
            timer = window.setTimeout(exec, delay - elapsed);
    };
}
exports["default"] = throttle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvdGhyb3R0bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUF3QixRQUFRLENBQUMsS0FBYSxFQUFFLEVBQTRCO0lBRTFFLElBQUksS0FBeUIsRUFDN0IsUUFBUSxHQUFHLENBQUMsQ0FBQztJQUViLE9BQU87UUFBb0IsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCx5QkFBYzs7UUFDdkMsSUFBTSxJQUFJLEdBQVEsSUFBSSxDQUFDO1FBQ3ZCLElBQU0sT0FBTyxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUM7UUFDN0MsU0FBUyxJQUFJO1lBQ1gsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUNsQixRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxJQUFJLEtBQUs7WUFBRSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFL0IsSUFBSSxPQUFPLEdBQUcsS0FBSztZQUFFLElBQUksRUFBRSxDQUFDOztZQUN2QixLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUMsQ0FBQTtBQUVILENBQUM7QUFwQkQsOEJBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGUoZGVsYXk6IG51bWJlciwgY2I6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCk6ICguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZCB7XG4gIFxuICBsZXQgdGltZXI6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGFzdEV4ZWMgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbih0aGlzOiBhbnksIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZjogYW55ID0gdGhpcztcbiAgICBjb25zdCBlbGFwc2VkID0gcGVyZm9ybWFuY2Uubm93KCkgLSBsYXN0RXhlYztcbiAgICBmdW5jdGlvbiBleGVjKCkge1xuICAgICAgdGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICBsYXN0RXhlYyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgY2IuYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgaWYgKGVsYXBzZWQgPiBkZWxheSkgZXhlYygpO1xuICAgIGVsc2UgdGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChleGVjLCBkZWxheSAtIGVsYXBzZWQpO1xuICB9XG5cbn1cbiJdfQ==