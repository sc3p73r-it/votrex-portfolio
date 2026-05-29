import { Box, Container, Grid2 as Grid, Stack, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { alpha } from "@mui/material/styles";
import { SectionHeader } from "./SectionHeader";
import { testimonials, trustPoints } from "../data/content";
import { tokens } from "../theme/glassTheme";

export function WhyVotrex() {
  return (
    <Box component="section" id="why-votrex" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          label="Why Votrex"
          title="Built for teams that need accountability"
          description="We operate like an extension of your security program—not a vendor that disappears after the report."
        />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack
              spacing={0}
              divider={<Box sx={{ borderBottom: `1px solid ${tokens.border}` }} />}
            >
              {trustPoints.map((point) => (
                <Box key={point.title} sx={{ py: 2.5 }}>
                  <Typography variant="subtitle1" gutterBottom sx={{ fontSize: "1rem" }}>
                    {point.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {point.body}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              {testimonials.map((t) => (
                <Box
                  key={t.name}
                  sx={{
                    p: 3,
                    border: `1px solid ${tokens.border}`,
                    borderRadius: 1,
                    bgcolor: tokens.bgSoft,
                  }}
                >
                  <FormatQuoteIcon sx={{ color: alpha(tokens.accentLight, 0.4), fontSize: 28, mb: 1 }} />
                  <Typography variant="body2" sx={{ lineHeight: 1.8, fontStyle: "italic", mb: 2 }}>
                    "{t.quote}"
                  </Typography>
                  <Typography variant="subtitle2">{t.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {t.role}, {t.company}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
