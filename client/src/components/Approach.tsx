import { Box, Container, Stack, Typography } from "@mui/material";
import { SectionHeader } from "./SectionHeader";
import { approachSteps } from "../data/content";
import { tokens } from "../theme/glassTheme";

export function Approach() {
  return (
    <Box
      component="section"
      id="approach"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: tokens.bgSoft,
        borderTop: `1px solid ${tokens.border}`,
        borderBottom: `1px solid ${tokens.border}`,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          label="Methodology"
          title="A disciplined engagement lifecycle"
          description="Every project follows the same transparent process—from scoping through retest—so stakeholders know exactly what to expect."
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
            gap: 0,
            position: "relative",
          }}
        >
          {approachSteps.map((item, index) => (
            <Stack
              key={item.step}
              spacing={1.5}
              sx={{
                px: { xs: 0, md: 2.5 },
                py: { xs: 3, md: 0 },
                borderLeft: {
                  xs: "none",
                  md: index > 0 ? `1px solid ${tokens.border}` : "none",
                },
                borderTop: {
                  xs: index > 0 ? `1px solid ${tokens.border}` : "none",
                  md: "none",
                },
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  color: "primary.main",
                  fontFamily: '"JetBrains Mono", monospace',
                }}
              >
                {item.step}
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                {item.body}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
