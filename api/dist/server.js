"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const constants_1 = require("./shared/constants");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const http_1 = __importDefault(require("http"));
const app = express_1.default();
const { BAD_REQUEST, UNAUTHORIZED, OK } = http_status_codes_1.default;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default(constants_1.cookieProps.secret));
let options = {};
if (process.env.NODE_ENV === 'development') {
    options = {
        origin: 'http://localhost:3001'
    };
    app.use(cors_1.default(options));
    app.use(morgan_1.default('dev'));
}
if (process.env.NODE_ENV === 'production') {
    options = {
        origin: 'http://localhost:3001' // TODO: production用にする
    };
    app.use(helmet_1.default());
}
app.use(cors_1.default(options));
app.listen(8080);
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: Object.assign({}, constants_1.corsPropsForSocketIO)
});
io.sockets.on('connect', (socket) => {
    console.log(socket);
});
exports.default = server;
