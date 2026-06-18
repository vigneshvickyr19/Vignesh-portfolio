import { palette } from "./palette";
import { typography } from "./typography";
import { componentStyles } from "./components";

export const theme = {
  palette,
  typography,
  components: componentStyles,
};

export type ThemeConfig = typeof theme;

