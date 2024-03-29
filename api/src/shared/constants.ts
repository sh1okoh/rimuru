export const cookieProps = Object.freeze({
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

export const corsPropsForSocketIO = (() => {
  const origin: string = (() => {
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
  }
})();