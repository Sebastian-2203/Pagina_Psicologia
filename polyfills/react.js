const React = require('react');

function useEffectEvent(fn) {
  const ref = React.useRef(null);
  React.useInsertionEffect(() => {
    ref.current = fn;
  }, [fn]);
  return React.useCallback((...args) => {
    const f = ref.current;
    if (f) return f(...args);
  }, []);
}

module.exports = {
  ...React,
  useEffectEvent,
};
