import type { SvgIconComponent } from "@mui/icons-material";
import BugReportIcon from "@mui/icons-material/BugReport";
import GppGoodIcon from "@mui/icons-material/GppGood";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import PolicyIcon from "@mui/icons-material/Policy";
import CloudIcon from "@mui/icons-material/Cloud";
import PsychologyIcon from "@mui/icons-material/Psychology";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Why Votrex", href: "#why-votrex" },
  { label: "Contact", href: "#contact" },
] as const;

export interface Service {
  icon: SvgIconComponent;
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    icon: BugReportIcon,
    title: "Offensive Security",
    description:
      "Red team engagements, application and network penetration testing, and attack-path validation aligned to your threat model.",
    deliverables: ["Executive summary & technical report", "Retest validation included", "OWASP / PTES aligned"],
  },
  {
    icon: GppGoodIcon,
    title: "Security Architecture",
    description:
      "Zero-trust roadmaps, secure SDLC integration, and control design that scales with product velocity—not against it.",
    deliverables: ["Architecture review", "Control gap analysis", "Implementation roadmap"],
  },
  {
    icon: CrisisAlertIcon,
    title: "Incident Response",
    description:
      "Retainer-backed IR, tabletop exercises, and forensic readiness so your team moves with confidence under pressure.",
    deliverables: ["24/7 retainer option", "Playbook development", "Post-incident review"],
  },
  {
    icon: PolicyIcon,
    title: "Compliance & GRC",
    description:
      "SOC 2, ISO 27001, HIPAA, and PCI programs built on evidence—not checkbox theater—with auditor-ready artifacts.",
    deliverables: ["Readiness assessment", "Policy & control mapping", "Audit support"],
  },
  {
    icon: CloudIcon,
    title: "Cloud Security",
    description:
      "Multi-cloud posture reviews, Kubernetes hardening, and CSPM strategy for AWS, Azure, and GCP environments.",
    deliverables: ["CSPM review", "IAM & network analysis", "Hardening benchmarks"],
  },
  {
    icon: PsychologyIcon,
    title: "Security Advisory",
    description:
      "Fractional CISO support, board briefings, and M&A technical due diligence for leadership teams.",
    deliverables: ["Board-ready reporting", "Risk register ownership", "Vendor assessment"],
  },
];

export const approachSteps = [
  {
    step: "01",
    title: "Discover",
    body: "Map assets, stakeholders, and regulatory drivers. Scope aligns to business risk—not generic checklists.",
  },
  {
    step: "02",
    title: "Assess",
    body: "Hands-on testing and control validation with severity scoring tied to exploitability and business impact.",
  },
  {
    step: "03",
    title: "Remediate",
    body: "Prioritized fix plans your engineers can ship. We pair with your teams until critical findings are closed.",
  },
  {
    step: "04",
    title: "Sustain",
    body: "Metrics, retesting cadence, and program maturity so security gains compound quarter over quarter.",
  },
];

export const trustStats = [
  { value: "500+", label: "Engagements delivered" },
  { value: "98%", label: "Client retention" },
  { value: "12+", label: "Years experience" },
  { value: "<24h", label: "Initial response time" },
];

export const certifications = [
  "OSCP",
  "OSCE",
  "CISSP",
  "CISM",
  "CCSP",
  "GXPN",
  "CREST",
];

export const frameworks = ["SOC 2", "ISO 27001", "NIST CSF", "PCI DSS", "HIPAA", "MITRE ATT&CK"];

export const trustedBy = [
  "FinTech",
  "Healthcare",
  "SaaS",
  "Critical Infrastructure",
  "Legal",
  "E-commerce",
];

export const trustPoints = [
  {
    title: "Named consultants on every engagement",
    body: "The team you meet in the scoping call is the team on your network. No bait-and-switch subcontracting.",
  },
  {
    title: "Evidence-based reporting",
    body: "Findings include reproduction steps, risk context, and remediation guidance your engineers can act on immediately.",
  },
  {
    title: "Retest validation included",
    body: "We verify fixes before close-out so you can report resolved status to auditors and leadership with confidence.",
  },
  {
    title: "Confidential by default",
    body: "NDA-ready from first contact. Minimal data retention. Your scope and findings stay yours.",
  },
];

export const testimonials = [
  {
    quote:
      "Votrex delivered a pentest report our board actually understood—and our engineers could fix the same week. That combination is rare.",
    name: "Sarah Chen",
    role: "CISO",
    company: "Series C FinTech",
  },
  {
    quote:
      "Their IR retainer paid for itself in the first incident. Clear communication, fast containment, and a thorough post-mortem.",
    name: "Marcus Webb",
    role: "VP Engineering",
    company: "Healthcare SaaS",
  },
];

export const complianceBadges = [
  "NDA-ready",
  "SOC 2 aligned processes",
  "CREST member methodology",
  "Insured & bonded",
];
