import { Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { tokens } from "../theme/glassTheme";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  dark = false,
}: SectionHeaderProps) {
  return (
    <Stack
      spacing={1.5}
      sx={{
        mb: { xs: 4, md: 5 },
        maxWidth: align === "center" ? 640 : 560,
        mx: align === "center" ? "auto" : 0,
        textAlign: align,
      }}
    >
      <Typography
        variant="overline"
        sx={{ color: dark ? tokens.accentSecondary : "primary.main" }}
      >
        {label}
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "1.75rem", md: "2.25rem" },
          color: dark ? "#fff" : "text.primary",
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body1"
          sx={{ color: dark ? alpha("#fff", 0.75) : "text.secondary", lineHeight: 1.75 }}
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
}
