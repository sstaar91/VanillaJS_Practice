export function addDefaultPath(url) {
  const path = window.location.pathname;

  path.includes("VanillaJS_Practice") ? (location.href = `/VanillaJS_Practice${url}`) : (location.href = url);
}
