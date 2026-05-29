import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { SectionHeader } from "./SectionHeader";
import { services } from "../data/content";

export function Services() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          label="Services"
          title="Comprehensive security services"
          description="Structured engagements with clear deliverables, executive reporting, and engineering-ready remediation guidance."
        />

        <Stack divider={<Divider />}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Box
                key={service.title}
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "240px 1fr" },
                  gap: { xs: 2, md: 4 },
                  py: { xs: 3, md: 4 },
                }}
              >
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Icon sx={{ color: "primary.main", fontSize: 22, mt: 0.25 }} />
                  <Typography variant="h6" sx={{ fontSize: "1.05rem" }}>
                    {service.title}
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                    {service.description}
                  </Typography>
                  <Stack spacing={0.75}>
                    <Typography variant="caption" color="text.secondary" fontWeight={600}>
                      Deliverables
                    </Typography>
                    {service.deliverables.map((item) => (
                      <Stack key={item} direction="row" spacing={1} alignItems="flex-start">
                        <CheckIcon sx={{ fontSize: 16, color: "primary.main", mt: 0.25 }} />
                        <Typography variant="body2" color="text.secondary">
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </Box>
  );
}
