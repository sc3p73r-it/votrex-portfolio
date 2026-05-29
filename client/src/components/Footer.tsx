import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { tokens } from "../theme/glassTheme";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid ${tokens.border}`,
        bgcolor: tokens.bgNavy,
        color: "#fff",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <ShieldOutlinedIcon sx={{ color: tokens.accentSecondary, fontSize: 22 }} />
            <Typography variant="body2" fontWeight={600}>
              Votrex Security Consulting
            </Typography>
          </Stack>
          <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.55)" }}>
            © {year} Votrex. All rights reserved.
          </Typography>
        </Stack>
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.1)" }} />
        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.45)", display: "block", maxWidth: 640, lineHeight: 1.7 }}>
          Votrex provides security assessment and advisory services. Findings and recommendations
          are based on point-in-time testing; no guarantee of future security posture is implied.
        </Typography>
      </Container>
    </Box>
  );
}
