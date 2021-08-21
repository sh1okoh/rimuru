"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsPropsForSocketIO = exports.cookieProps = void 0;
exports.cookieProps = Object.freeze({
    key: 'ExpressGeneratorTs',
    secret: process.env.COOKIE_SECRET,
    options: {
        httpOnly: true,
        signed: true,
        path: (process.env.COOKIE_PATH),
        maxAge: Number(process.env.COOKIE_EXP),
        domain: (process.env.COOKIE_DOMAIN),
        secure: (process.env.SECURE_COOKIE === 'true'),
    },
});
const corsPropsForSocketIO = () => {
    const origin = (() => {
        if (process.env.NODE_ENV === 'development') {
            return 'http://localhost:3001';
        }
        if (process.env.NODE_ENV === 'production') {
            return 'http://localhost:3001'; // TODO: produtionに直す
        }
        return 'hoge';
    })();
    return {
        origin,
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    };
};
exports.corsPropsForSocketIO = corsPropsForSocketIO;
