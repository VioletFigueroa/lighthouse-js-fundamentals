const calculateRectangleArea = (length, width) =>
  length < 0 || width < 0 ? undefined : length * width;
const calculateTriangleArea = (base, height) =>
  base < 0 || height < 0 ? undefined : (base * height) / 2;
const calculateCircleArea = (radius) =>
  radius < 0 ? undefined : radius ** 2 * Math.PI;