// path is taken from the assets/img/ directory
export const getImgUrl: (path: string) => string = (path: string) =>
  // for some reason only a relative path works - ~/, @/, and ./ don't work
  new URL(`../assets/img/${path}`, import.meta.url).href
