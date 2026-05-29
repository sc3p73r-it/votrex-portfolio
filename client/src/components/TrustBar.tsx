import { type ReactNode } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { certifications, frameworks } from "../data/content";
import { tokens } from "../theme/glassTheme";

export function TrustBar() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 5 },
        bgcolor: tokens.bgSoft,
        borderBottom: `1px solid ${tokens.border}`,
      }}
    >
      <Container maxWidth="lg">
        <GridLikeLayout>
          <Stack spacing={2}>
            <Typography variant="overline" color="primary">
              Credentials & standards
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 360, lineHeight: 1.7 }}>
              Our consultants maintain industry-recognized certifications and follow
              established frameworks for every assessment.
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {certifications.map((cert) => (
                <Typography
                  key={cert}
                  variant="caption"
                  sx={{
                    px: 1.5,
                    py: 0.5,
                    border: `1px solid ${tokens.border}`,
                    borderRadius: 0.5,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontWeight: 500,
                    bgcolor: "#fff",
                  }}
                >
                  {cert}
                </Typography>
              ))}
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Stack direction="row" spacing={1} alignItems="center">
              <VerifiedUserOutlinedIcon sx={{ color: "primary.main", fontSize: 20 }} />
              <Typography variant="subtitle2">Frameworks we align to</Typography>
            </Stack>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {frameworks.map((fw) => (
                <Typography
                  key={fw}
                  variant="body2"
                  sx={{
                    px: 2,
                    py: 1,
                    bgcolor: "#fff",
                    border: `1px solid ${tokens.border}`,
                    borderRadius: 0.5,
                    color: "text.secondary",
                    fontWeight: 500,
                  }}
                >
                  {fw}
                </Typography>
              ))}
            </Stack>
          </Stack>
        </GridLikeLayout>
      </Container>
    </Box>
  );
}

function GridLikeLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gap: { xs: 4, md: 6 },
        alignItems: "start",
      }}
    >
      {children}
    </Box>
  );
}
