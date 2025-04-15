export function addDefaultPath(url) {
  const path = window.location.pathname;
  const resultUrl = () => {
    if (url === "/") {
      return path.includes("VanillaJS_Practice") ? "" : "/";
    }

    return url;
  };

  path.includes("VanillaJS_Practice")
    ? (location.href = `/VanillaJS_Practice${resultUrl()}`)
    : (location.href = resultUrl());
}
