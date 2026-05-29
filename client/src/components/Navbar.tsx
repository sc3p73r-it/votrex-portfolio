import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import { alpha } from "@mui/material/styles";
import { navLinks } from "../data/content";
import { tokens } from "../theme/glassTheme";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: alpha("#ffffff", 0.85),
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${tokens.border}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 0.5, minHeight: { xs: 64, md: 72 } }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: 1 }}>
              <ShieldOutlinedIcon sx={{ color: "primary.main", fontSize: 28 }} />
              <Typography
                variant="h6"
                component="a"
                href="#"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "text.primary",
                  textDecoration: "none",
                }}
              >
                Votrex
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, alignItems: "center" }}>
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  href={link.href}
                  color="inherit"
                  sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
                >
                  {link.label}
                </Button>
              ))}
              <Button variant="contained" color="primary" href="#contact" sx={{ ml: 1 }}>
                Get a consultation
              </Button>
            </Box>

            <IconButton
              sx={{ display: { md: "none" }, color: "text.primary" }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 280,
            height: "100%",
            background: alpha("#ffffff", 0.98),
            backdropFilter: "blur(20px)",
            p: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton href={link.href} onClick={() => setOpen(false)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding sx={{ mt: 2 }}>
              <Button fullWidth variant="contained" href="#contact" onClick={() => setOpen(false)}>
                Get a consultation
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
