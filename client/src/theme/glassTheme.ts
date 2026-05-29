import { createTheme, alpha } from "@mui/material/styles";

const accent = "#1e40af";
const accentLight = "#2563eb";
const accentSecondary = "#3b82f6";
const bgWhite = "#ffffff";
const bgSoft = "#f8fafc";
const bgNavy = "#0f172a";
const border = "#e2e8f0";
const borderAccent = alpha(accent, 0.2);

export const tokens = {
  accent,
  accentLight,
  accentSecondary,
  bgWhite,
  bgSoft,
  bgNavy,
  border,
  borderAccent,
};

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: accentLight, light: accentSecondary, dark: accent },
    secondary: { main: accentSecondary },
    background: {
      default: bgWhite,
      paper: bgWhite,
    },
    text: {
      primary: "#0f172a",
      secondary: "#475569",
    },
    divider: border,
  },
  typography: {
    fontFamily: '"DM Sans", system-ui, sans-serif',
    h1: { fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.15, color: "#0f172a" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.2, color: "#0f172a" },
    h3: { fontWeight: 600, letterSpacing: "-0.01em", color: "#0f172a" },
    h4: { fontWeight: 600, color: "#0f172a" },
    h5: { fontWeight: 600, color: "#0f172a" },
    h6: { fontWeight: 600, color: "#0f172a" },
    subtitle1: { fontWeight: 500 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
    button: { textTransform: "none", fontWeight: 600 },
    overline: {
      fontFamily: '"JetBrains Mono", monospace',
      letterSpacing: "0.1em",
      fontWeight: 500,
      fontSize: "0.7rem",
    },
  },
  shape: { borderRadius: 6 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: bgWhite,
          minHeight: "100vh",
        },
        "::selection": {
          background: alpha(accentLight, 0.18),
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { color: "#0f172a" },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: "10px 20px",
          boxShadow: "none",
        },
        containedPrimary: {
          background: accentLight,
          "&:hover": {
            background: accent,
            boxShadow: "none",
          },
        },
        outlined: {
          borderColor: border,
          color: "#0f172a",
          "&:hover": {
            borderColor: accentLight,
            background: alpha(accentLight, 0.04),
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 500,
        },
        outlined: {
          borderColor: border,
          background: bgWhite,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 6,
            background: bgWhite,
            "& fieldset": { borderColor: border },
            "&:hover fieldset": { borderColor: alpha(accentLight, 0.5) },
            "&.Mui-focused fieldset": { borderColor: accentLight },
          },
        },
      },
    },
  },
});

// Backward-compatible alias
export const glass = tokens;
