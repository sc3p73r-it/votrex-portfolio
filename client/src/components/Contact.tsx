import { useState, type FormEvent } from "react";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendIcon from "@mui/icons-material/Send";
import { SectionHeader } from "./SectionHeader";
import { tokens } from "../theme/glassTheme";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 10 },
        bgcolor: tokens.bgSoft,
        borderTop: `1px solid ${tokens.border}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 5 }}>
            <SectionHeader
              label="Contact"
              title="Request a confidential consultation"
              description="Share your environment, timeline, and compliance requirements. We respond within one business day."
            />

            <Stack spacing={2.5} sx={{ mt: 1 }}>
              <Stack direction="row" spacing={2} alignItems="center">
                <EmailOutlinedIcon sx={{ color: "primary.main", fontSize: 20 }} />
                <Typography variant="body2">contact@votrex.security</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneOutlinedIcon sx={{ color: "primary.main", fontSize: 20 }} />
                <Typography variant="body2">+1 (555) 014-2099</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <LockOutlinedIcon sx={{ color: "primary.main", fontSize: 20, mt: 0.25 }} />
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                  All inquiries are handled under NDA upon request. We never share client
                  information or engagement details.
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                p: { xs: 3, md: 4 },
                bgcolor: "#fff",
                border: `1px solid ${tokens.border}`,
                borderRadius: 1,
              }}
            >
              {submitted ? (
                <Alert severity="success">
                  Thank you. This is a frontend-only demo—the form does not send data. In
                  production, wire this to your CRM or email API.
                </Alert>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required label="Full name" name="name" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth required label="Company" name="company" />
                    </Grid>
                    <Grid size={12}>
                      <TextField fullWidth required type="email" label="Work email" name="email" />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        select
                        SelectProps={{ native: true }}
                        label="Engagement type"
                        name="type"
                        defaultValue="pentest"
                      >
                        <option value="pentest">Penetration testing</option>
                        <option value="ir">Incident response</option>
                        <option value="compliance">Compliance program</option>
                        <option value="advisory">Security advisory</option>
                        <option value="other">Other</option>
                      </TextField>
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        required
                        multiline
                        rows={4}
                        label="Describe your requirements"
                        name="message"
                      />
                    </Grid>
                    <Grid size={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                      >
                        Submit inquiry
                      </Button>
                      <Typography variant="caption" color="text.secondary" sx={{ display: "block", mt: 1.5 }}>
                        By submitting, you agree to our confidentiality terms for initial discussions.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
