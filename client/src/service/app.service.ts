export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}
export const API = process.env.NODE_ENV === 'production' ?
'https://mernusers.herokuapp.com' : 'http://localhost:4201'
