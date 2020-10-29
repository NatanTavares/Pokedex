export const breakpoints = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 1880
};

export const size = {
  xs: `${breakpoints.xs}px`,
  sm: `${breakpoints.sm}px`,
  md: `${breakpoints.md}px`,
  lg: `${breakpoints.lg}px`,
  xl: `${breakpoints.xl}px`,
  xxl: `${breakpoints.xxl}px`,
}

export const devices = {
  xs: `(min_width${size.xs})`,
  sm: `(min_width${size.sm})`,
  md: `(min_width${size.md})`,
  lg: `(min_width${size.lg})`,
  xl: `(min_width${size.xl})`,
  xxl: `(min_width${size.xxl})`,
}
