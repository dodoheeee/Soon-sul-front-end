const nullFn = () => {};
const useConsole = process.env.NODE_ENV !== "production";

export const Console = {
  log: useConsole ? console.log : nullFn,
  error: useConsole ? console.error : nullFn,
  warn: useConsole ? console.warn : nullFn,
  info: useConsole ? console.info : nullFn,
};
