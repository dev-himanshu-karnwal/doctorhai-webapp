import type {
  DepartmentCategory,
  DoctorEntry,
  FeatureCard,
  HospitalEntry,
  WorkflowStep,
} from "../types/landing.types";

export const DUMMY_DEPARTMENTS: DepartmentCategory[] = [
  { id: "1", label: "General Physician" },
  { id: "2", label: "Cardiology" },
  { id: "3", label: "Pediatrics" },
  { id: "4", label: "Neurology" },
  { id: "5", label: "Orthopedics" },
  { id: "6", label: "Dermatology" },
];

export const DUMMY_TOP_HOSPITALS: HospitalEntry[] = [
  { id: "1", name: "Mayo Clinic", status: "busy" },
  { id: "2", name: "Cleveland Clinic", status: "open" },
];

export const DUMMY_TOP_DOCTORS: DoctorEntry[] = [
  {
    id: "1",
    name: "Dr. Emily Chan",
    specialty: "Cardiology",
    status: "available",
  },
  {
    id: "2",
    name: "Dr. Michael Rowe",
    specialty: "Neurosurgery",
    status: "busy",
  },
];

export const DUMMY_FEATURE_CARDS: FeatureCard[] = [
  {
    id: "1",
    title: "Tired of Waiting?",
    description:
      "70% of patients wait more than 45 minutes past their appointment time. Let us fix that.",
    icon: "clock",
  },
  {
    id: "2",
    title: "Crowded Rooms",
    description:
      "Nobody likes a packed lobby. Reduce congestion and keep everyone safe and happy.",
    icon: "people",
  },
  {
    id: "3",
    title: "Green means Go.",
    description:
      "A public-facing page for every department. Patients check status before leaving home.",
    icon: "status",
    highlight: "SIMPLE SOLUTION",
  },
];

export const DUMMY_LIVE_DOCTORS: DoctorEntry[] = [
  {
    id: "1",
    name: "Dr. Sarah Smith",
    specialty: "Cardiology",
    hospitalName: "City General Hospital",
    status: "available",
  },
  {
    id: "2",
    name: "Dr. James Chen",
    specialty: "Neurosurgeon",
    hospitalName: "St. Mary's Medical Center",
    status: "busy",
  },
  {
    id: "3",
    name: "Dr. Emily Davis",
    specialty: "Pediatrics",
    hospitalName: "Children's Hospital",
    status: "on-break",
  },
  {
    id: "4",
    name: "Dr. M. Thompson",
    specialty: "Orthopedics",
    hospitalName: "Westside Clinic",
    status: "available",
  },
];

export const DUMMY_WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: "1",
    stepNumber: 1,
    title: "Update Status",
    description:
      "Staff input their 'In Surgery', 'Available', or 'On Break'...",
    icon: "update",
  },
  {
    id: "2",
    stepNumber: 2,
    title: "Patient Checks",
    description:
      "Patients view the public-facing homepage. No appointments needed.",
    icon: "check",
  },
  {
    id: "3",
    stepNumber: 3,
    title: "Arrive Happy",
    description:
      "Patients know when the doctor is free. Wait times drop to <10mins.",
    icon: "arrive",
  },
];
