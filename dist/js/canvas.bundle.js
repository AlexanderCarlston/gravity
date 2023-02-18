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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLHVCQUFXLEVBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDbkU7QUFDSCxDQUFDO0FBR0QsU0FBUyxPQUFPO0lBQ2QsSUFBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUFDLE9BQU07S0FBQztJQUMxQixxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFL0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDbEQsQ0FBQztBQUFBLENBQUM7QUFFRixJQUFJLEVBQUUsQ0FBQztBQUNQLE9BQU8sRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3Jhdml0eS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ncmF2aXR5Ly4vc3JjL2pzL2NhbnZhcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgcmFuZG9tSW50RnJvbVJhbmdlLCByYW5kb21Db2xvciB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbmNvbnN0IGMgPSBjYW52YXM/LmdldENvbnRleHQoJzJkJyk7XG5cbmlmKGNhbnZhcykge1xuICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7ICBcbn1cblxuY29uc3QgbW91c2UgPSB7XG4gIHg6IGlubmVyV2lkdGggLyAyLFxuICB5OiBpbm5lckhlaWdodCAvIDJcbn1cblxuY29uc3QgY29sb3JzID0gWycjMjE4NUM1JywgJyM3RUNFRkQnLCAnI0ZGRjZFNScsICcjRkY3RjY2J107XG5cbmxldCBncmF2aXR5ID0gMTtcbmxldCBmcmljdGlvbiA9IDAuOTtcblxuLy8gRXZlbnQgTGlzdGVuZXJzXG5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgbW91c2UueCA9IGV2ZW50LmNsaWVudFg7XG4gIG1vdXNlLnkgPSBldmVudC5jbGllbnRZO1xufSlcblxuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBpZighY2FudmFzKSB7cmV0dXJufVxuICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG59KVxuXG5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpbml0KCk7XG59KTtcblxuLy8gT2JqZWN0c1xuY2xhc3MgQmFsbCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgZHk6IG51bWJlcjtcbiAgZHg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGR5OiBudW1iZXIsIGR4OiBudW1iZXIpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIC4uLmFyZ3VtZW50cylcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIGFsbCB0aGVzZSBzdHVwaWQgbnVsbCBjaGVja3NcbiAgICBpZighYykge3JldHVybn1cbiAgICBjLmJlZ2luUGF0aCgpO1xuICAgIGMuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBjLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgYy5maWxsKCk7XG4gICAgYy5zdHJva2UoKTtcbiAgICBjLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmKCFjYW52YXMpIHtyZXR1cm59XG4gICAgaWYgKHRoaXMueSArIHRoaXMucmFkaXVzICsgdGhpcy5keSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMuZHkgPSAtdGhpcy5keSAqIGZyaWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR5ICs9IGdyYXZpdHk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnggKyB0aGlzLnJhZGl1cyArIHRoaXMuZHggPiBjYW52YXMud2lkdGggfHwgdGhpcy54IC0gdGhpcy5yYWRpdXMgPCAwKSB7XG4gICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XG4gICAgfVxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMueSArPSB0aGlzLmR5O1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG59XG5cbi8vIEltcGxlbWVudGF0aW9uXG5sZXQgYmFsbEFyYXk6IEJhbGxbXSA9IFtdO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpZighY2FudmFzKSB7cmV0dXJufTtcbiAgYmFsbEFyYXkgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XG4gICAgbGV0IHJhZGl1cyA9IHJhbmRvbUludEZyb21SYW5nZSg4LCAyMCk7XG4gICAgbGV0IHggPSByYW5kb21JbnRGcm9tUmFuZ2UocmFkaXVzLCBjYW52YXMud2lkdGggLSByYWRpdXMpO1xuICAgIGxldCB5ID0gcmFuZG9tSW50RnJvbVJhbmdlKDAsIGNhbnZhcy5oZWlnaHQgLSByYWRpdXMpO1xuICAgIGxldCBkeCA9IHJhbmRvbUludEZyb21SYW5nZSgtMiwgMik7XG4gICAgbGV0IGR5ID0gcmFuZG9tSW50RnJvbVJhbmdlKC0yLCAyKTtcbiAgICBiYWxsQXJheS5wdXNoKG5ldyBCYWxsKHgsIHksIHJhZGl1cywgcmFuZG9tQ29sb3IoY29sb3JzKSwgMiwgZHgpKTtcbiAgfVxufVxuXG4vLyBBbmltYXRpb24gTG9vcFxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgaWYoIWMgfHwgIWNhbnZhcykge3JldHVybn1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICBjLmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGJhbGxBcmF5LmZvckVhY2goKGJhbGw6IEJhbGwpID0+IGJhbGwudXBkYXRlKCkpO1xufTtcblxuaW5pdCgpO1xuYW5pbWF0ZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==