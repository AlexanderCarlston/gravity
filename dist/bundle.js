/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/utils.ts":
/*!*************************!*\
  !*** ./src/ts/utils.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.distance = exports.randomColor = exports.randomIntFromRange = void 0;
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.randomIntFromRange = randomIntFromRange;
function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}
exports.randomColor = randomColor;
function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1;
    const yDist = y2 - y1;
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
exports.distance = distance;


/***/ })

/******/ 	});
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./src/ts/canvas.ts ***!
  \**************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __webpack_require__(/*! ./utils */ "./src/ts/utils.ts");
const canvas = document.querySelector('canvas');
const c = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
};
const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];
const gravity = 1;
const friction = 0.9;
if (canvas) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
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
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
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
    for (let i = 0; i < 50; i++) {
        let radius = (0, utils_1.randomIntFromRange)(8, 20);
        let x = (0, utils_1.randomIntFromRange)(radius, canvas.width - radius);
        let y = (0, utils_1.randomIntFromRange)(0, canvas.height - radius);
        let dx = (0, utils_1.randomIntFromRange)(-2, 2);
        let dy = (0, utils_1.randomIntFromRange)(-2, 2);
        ballAray.push(new Ball(x, y, radius, (0, utils_1.randomColor)(colors), dy, dx));
    }
}
function animate() {
    if (!c || !canvas) {
        return;
    }
    ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtRQUFDLE9BQU07S0FBQztJQUFBLENBQUM7SUFDM0IscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRS9DLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFVLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFBQSxDQUFDO0FBRUYsSUFBSSxFQUFFLENBQUM7QUFDUCxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyYXZpdHkvLi9zcmMvdHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vZ3Jhdml0eS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ncmF2aXR5Ly4vc3JjL3RzL2NhbnZhcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50RnJvbVJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21Db2xvcihjb2xvcnMpIHtcbiAgcmV0dXJuIGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlKHgxLCB5MSwgeDIsIHkyKSB7XG4gIGNvbnN0IHhEaXN0ID0geDIgLSB4MVxuICBjb25zdCB5RGlzdCA9IHkyIC0geTFcblxuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEaXN0LCAyKSArIE1hdGgucG93KHlEaXN0LCAyKSlcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyByYW5kb21JbnRGcm9tUmFuZ2UsIHJhbmRvbUNvbG9yIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuY29uc3QgYyA9IGNhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IG1vdXNlID0ge1xuICB4OiBpbm5lcldpZHRoIC8gMixcbiAgeTogaW5uZXJIZWlnaHQgLyAyXG59XG5jb25zdCBjb2xvcnMgPSBbJyMyMTg1QzUnLCAnIzdFQ0VGRCcsICcjRkZGNkU1JywgJyNGRjdGNjYnXTtcbmNvbnN0IGdyYXZpdHkgPSAxO1xuY29uc3QgZnJpY3Rpb24gPSAwLjk7XG5cbmlmKGNhbnZhcykge1xuICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7ICBcbn1cblxuLy8gRXZlbnQgTGlzdGVuZXJzXG5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgbW91c2UueCA9IGV2ZW50LmNsaWVudFg7XG4gIG1vdXNlLnkgPSBldmVudC5jbGllbnRZO1xufSlcblxuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBpZighY2FudmFzKSB7cmV0dXJufVxuICBjYW52YXMud2lkdGggPSBpbm5lcldpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG59KVxuXG5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpbml0KCk7XG59KTtcblxuY2xhc3MgQmFsbCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICByYWRpdXM6IG51bWJlcjtcbiAgY29sb3I6IHN0cmluZztcbiAgZHk6IG51bWJlcjtcbiAgZHg6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIGR5OiBudW1iZXIsIGR4OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4XG4gICAgdGhpcy55ID0geVxuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmR5ID0gZHk7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXNcbiAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIGFsbCB0aGVzZSBzdHVwaWQgbnVsbCBjaGVja3NcbiAgICBpZighYykge3JldHVybn1cbiAgICBjLmJlZ2luUGF0aCgpO1xuICAgIGMuYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBjLmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgYy5maWxsKCk7XG4gICAgYy5zdHJva2UoKTtcbiAgICBjLmNsb3NlUGF0aCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmKCFjYW52YXMpIHtyZXR1cm59XG4gICAgaWYgKHRoaXMueSArIHRoaXMucmFkaXVzICsgdGhpcy5keSA+IGNhbnZhcy5oZWlnaHQpIHtcbiAgICAgIHRoaXMuZHkgPSAtdGhpcy5keSAqIGZyaWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmR5ICs9IGdyYXZpdHk7XG4gICAgfTtcblxuICAgIGlmICh0aGlzLnggKyB0aGlzLnJhZGl1cyArIHRoaXMuZHggPiBjYW52YXMud2lkdGggfHwgdGhpcy54IC0gdGhpcy5yYWRpdXMgPCAwKSB7XG4gICAgICB0aGlzLmR4ID0gLXRoaXMuZHg7XG4gICAgfVxuICAgIHRoaXMueCArPSB0aGlzLmR4O1xuICAgIHRoaXMueSArPSB0aGlzLmR5O1xuICAgIHRoaXMuZHJhdygpO1xuICB9XG59XG5cbi8vIEltcGxlbWVudGF0aW9uXG5sZXQgYmFsbEFyYXk6IEJhbGxbXSA9IFtdO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBpZighY2FudmFzKSB7cmV0dXJufTtcbiAgYmFsbEFyYXkgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDUwOyBpKyspIHtcbiAgICBsZXQgcmFkaXVzID0gcmFuZG9tSW50RnJvbVJhbmdlKDgsIDIwKTtcbiAgICBsZXQgeCA9IHJhbmRvbUludEZyb21SYW5nZShyYWRpdXMsIGNhbnZhcy53aWR0aCAtIHJhZGl1cyk7XG4gICAgbGV0IHkgPSByYW5kb21JbnRGcm9tUmFuZ2UoMCwgY2FudmFzLmhlaWdodCAtIHJhZGl1cyk7XG4gICAgbGV0IGR4ID0gcmFuZG9tSW50RnJvbVJhbmdlKC0yLCAyKTtcbiAgICBsZXQgZHkgPSByYW5kb21JbnRGcm9tUmFuZ2UoLTIsIDIpO1xuICAgIGJhbGxBcmF5LnB1c2gobmV3IEJhbGwoeCwgeSwgcmFkaXVzLCByYW5kb21Db2xvcihjb2xvcnMpLCBkeSwgZHgpKTtcbiAgfVxufVxuXG4vLyBBbmltYXRpb24gTG9vcFxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgaWYoIWMgfHwgIWNhbnZhcykge3JldHVybn07XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgYy5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICBiYWxsQXJheS5mb3JFYWNoKChiYWxsOiBCYWxsKSA9PiBiYWxsLnVwZGF0ZSgpKTtcbn07XG5cbmluaXQoKTtcbmFuaW1hdGUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=