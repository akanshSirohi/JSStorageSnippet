const storage = (key, value = null) => {
  if (value !== null) {
    if (typeof value === "object") {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    }
  } else {
    let x = null;
    try {
      x = window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
    if (x !== null) {
      try {
        return JSON.parse(x);
      } catch (e) {
        return x;
      }
    }
  }
};
