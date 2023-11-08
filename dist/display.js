"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dis = (element) => {
    if ((element === null || element === void 0 ? void 0 : element.style.display) === "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
};
exports.default = dis;
