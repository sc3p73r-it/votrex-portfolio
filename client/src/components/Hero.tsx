import {
  Box,
  Button,
  Container,
  Divider,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { alpha } from "@mui/material/styles";
import { complianceBadges, trustStats, trustedBy } from "../data/content";
import { tokens } from "../theme/glassTheme";

export function Hero() {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, md: 8 },
        borderBottom: `1px solid ${tokens.border}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              <Typography
                variant="overline"
                color="primary"
                sx={{ display: "block" }}
              >
                Enterprise security consulting
              </Typography>

              <Typography
                variant="h1"
                sx={{ fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" } }}
              >
                Protect your organization with proven security expertise
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 540, lineHeight: 1.8 }}>
                Votrex helps security teams and leadership reduce real-world risk through
                penetration testing, compliance programs, and incident response—delivered by
                certified practitioners with transparent, actionable results.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href="#contact"
                  endIcon={<ArrowForwardIcon />}
                >
                  Schedule a consultation
                </Button>
                <Button variant="outlined" size="large" href="#services">
                  View services
                </Button>
              </Stack>

              <Stack direction="row" flexWrap="wrap" gap={2} sx={{ pt: 1 }}>
                {complianceBadges.map((badge) => (
                  <Stack key={badge} direction="row" spacing={0.75} alignItems="center">
                    <CheckCircleOutlineIcon sx={{ fontSize: 18, color: "primary.main" }} />
                    <Typography variant="body2" color="text.secondary">
                      {badge}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                border: `1px solid ${tokens.border}`,
                borderRadius: 1,
                overflow: "hidden",
                bgcolor: tokens.bgSoft,
              }}
            >
              <Box sx={{ px: 3, py: 2, bgcolor: tokens.bgNavy }}>
                <Typography variant="overline" sx={{ color: alpha("#fff", 0.7) }}>
                  At a glance
                </Typography>
              </Box>
              <Stack divider={<Divider />}>
                {trustStats.map((stat) => (
                  <Stack
                    key={stat.label}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                    sx={{ px: 3, py: 2.5 }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, color: "primary.main", fontSize: "1.35rem" }}
                    >
                      {stat.value}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 5, md: 7 }, pt: 4, borderTop: `1px solid ${tokens.border}` }}>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 2 }}>
            Trusted by organizations in regulated industries
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1.5}>
            {trustedBy.map((industry) => (
              <Typography
                key={industry}
                variant="body2"
                sx={{
                  px: 2,
                  py: 0.75,
                  border: `1px solid ${tokens.border}`,
                  borderRadius: 1,
                  color: "text.secondary",
                  fontWeight: 500,
                }}
              >
                {industry}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
