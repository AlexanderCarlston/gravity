/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/js/canvas.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module './utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const canvas = document.querySelector('canvas');
const c = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
if (canvas) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
let gravity = 1;
let friction = 0.9;
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});
addEventListener('resize', () => {
    if (!canvas) {
        return;
    }
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});
addEventListener('click', (event) => {
    init();
});
class Ball {
    constructor(x, y, radius, color, dy, dx) {
        Object.assign(this, ...arguments);
    }
    draw() {
        if (!c) {
            return;
        }
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }
    update() {
        if (!canvas) {
            return;
        }
        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * friction;
        }
        else {
            this.dy += gravity;
        }
        ;
        if (this.x + this.radius + this.dx > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}
let ballAray = [];
function init() {
    if (!canvas) {
        return;
    }
    ;
    ballAray = [];
    for (let i = 0; i < 150; i++) {
        let radius = (0, utils_1.randomIntFromRange)(8, 20);
        let x = (0, utils_1.randomIntFromRange)(radius, canvas.width - radius);
        let y = (0, utils_1.randomIntFromRange)(0, canvas.height - radius);
        let dx = (0, utils_1.randomIntFromRange)(-2, 2);
        let dy = (0, utils_1.randomIntFromRange)(-2, 2);
        ballAray.push(new Ball(x, y, radius, (0, utils_1.randomColor)(colors), 2, dx));
    }
}
function animate() {
    if (!c || !canvas) {
        return;
    }
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    ballAray.forEach((ball) => ball.update());
}
;
init();
animate();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSx1QkFBVyxFQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ25FO0FBQ0gsQ0FBQztBQUdELFNBQVMsT0FBTztJQUNkLElBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFBQyxPQUFNO0tBQUM7SUFDMUIscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRS9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBSSxFQUFFLENBQUM7QUFDUCxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYXZpdHkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ3Jhdml0eS8uL3NyYy9qcy9jYW52YXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IHJhbmRvbUludEZyb21SYW5nZSwgcmFuZG9tQ29sb3IgfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5jb25zdCBjID0gY2FudmFzPy5nZXRDb250ZXh0KCcyZCcpO1xuXG5pZihjYW52YXMpIHtcbiAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0OyAgXG59XG5cbmNvbnN0IG1vdXNlID0ge1xuICB4OiBpbm5lcldpZHRoIC8gMixcbiAgeTogaW5uZXJIZWlnaHQgLyAyXG59XG5cbmNvbnN0IGNvbG9ycyA9IFsnIzIxODVDNScsICcjN0VDRUZEJywgJyNGRkY2RTUnLCAnI0ZGN0Y2NiddO1xuXG5sZXQgZ3Jhdml0eSA9IDE7XG5sZXQgZnJpY3Rpb24gPSAwLjk7XG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gIG1vdXNlLnggPSBldmVudC5jbGllbnRYO1xuICBtb3VzZS55ID0gZXZlbnQuY2xpZW50WTtcbn0pXG5cbmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgaWYoIWNhbnZhcykge3JldHVybn1cbiAgY2FudmFzLndpZHRoID0gaW5uZXJXaWR0aDtcbiAgY2FudmFzLmhlaWdodCA9IGlubmVySGVpZ2h0O1xufSlcblxuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaW5pdCgpO1xufSk7XG5cbi8vIE9iamVjdHNcbmNsYXNzIEJhbGwge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgcmFkaXVzOiBudW1iZXI7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGR5OiBudW1iZXI7XG4gIGR4OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCBkeTogbnVtYmVyLCBkeDogbnVtYmVyKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCAuLi5hcmd1bWVudHMpXG4gIH1cblxuICBkcmF3KCkge1xuICAgIC8vIFRPRE86IFJlbW92ZSBhbGwgdGhlc2Ugc3R1cGlkIG51bGwgY2hlY2tzXG4gICAgaWYoIWMpIHtyZXR1cm59XG4gICAgYy5iZWdpblBhdGgoKTtcbiAgICBjLmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgYy5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGMuZmlsbCgpO1xuICAgIGMuc3Ryb2tlKCk7XG4gICAgYy5jbG9zZVBhdGgoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZighY2FudmFzKSB7cmV0dXJufVxuICAgIGlmICh0aGlzLnkgKyB0aGlzLnJhZGl1cyArIHRoaXMuZHkgPiBjYW52YXMuaGVpZ2h0KSB7XG4gICAgICB0aGlzLmR5ID0gLXRoaXMuZHkgKiBmcmljdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5keSArPSBncmF2aXR5O1xuICAgIH07XG5cbiAgICBpZiAodGhpcy54ICsgdGhpcy5yYWRpdXMgKyB0aGlzLmR4ID4gY2FudmFzLndpZHRoIHx8IHRoaXMueCAtIHRoaXMucmFkaXVzIDwgMCkge1xuICAgICAgdGhpcy5keCA9IC10aGlzLmR4O1xuICAgIH1cbiAgICB0aGlzLnggKz0gdGhpcy5keDtcbiAgICB0aGlzLnkgKz0gdGhpcy5keTtcbiAgICB0aGlzLmRyYXcoKTtcbiAgfVxufVxuXG4vLyBJbXBsZW1lbnRhdGlvblxubGV0IGJhbGxBcmF5OiBCYWxsW10gPSBbXTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgaWYoIWNhbnZhcykge3JldHVybn07XG4gIGJhbGxBcmF5ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTA7IGkrKykge1xuICAgIGxldCByYWRpdXMgPSByYW5kb21JbnRGcm9tUmFuZ2UoOCwgMjApO1xuICAgIGxldCB4ID0gcmFuZG9tSW50RnJvbVJhbmdlKHJhZGl1cywgY2FudmFzLndpZHRoIC0gcmFkaXVzKTtcbiAgICBsZXQgeSA9IHJhbmRvbUludEZyb21SYW5nZSgwLCBjYW52YXMuaGVpZ2h0IC0gcmFkaXVzKTtcbiAgICBsZXQgZHggPSByYW5kb21JbnRGcm9tUmFuZ2UoLTIsIDIpO1xuICAgIGxldCBkeSA9IHJhbmRvbUludEZyb21SYW5nZSgtMiwgMik7XG4gICAgYmFsbEFyYXkucHVzaChuZXcgQmFsbCh4LCB5LCByYWRpdXMsIHJhbmRvbUNvbG9yKGNvbG9ycyksIDIsIGR4KSk7XG4gIH1cbn1cblxuLy8gQW5pbWF0aW9uIExvb3BcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gIGlmKCFjIHx8ICFjYW52YXMpIHtyZXR1cm59XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICBiYWxsQXJheS5mb3JFYWNoKChiYWxsOiBCYWxsKSA9PiBiYWxsLnVwZGF0ZSgpKTtcbn07XG5cbmluaXQoKTtcbmFuaW1hdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=