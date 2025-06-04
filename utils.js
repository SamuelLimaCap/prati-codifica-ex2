function msleep(n) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
}

const utils = {
  msleep: msleep,
};

export default utils;

