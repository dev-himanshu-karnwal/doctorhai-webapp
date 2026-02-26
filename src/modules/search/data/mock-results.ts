import { SearchResult } from "../types/search.types";

export const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    type: "doctor",
    data: {
      id: "1",
      name: "Dr. Emily Chen",
      specialty: "Cardiologist",
      experience: 12,
      rating: 4.9,
      reviewsCount: 200,
      location: "Heart Center, West Wing",
      status: "available",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=200&h=200",
    },
  },
  {
    type: "clinic",
    data: {
      id: "2",
      name: "Mayo Clinic",
      type: "General Hospital",
      hours: "24/7 Open",
      doctorsCount: 5,
      doctorsSpecialty: "Doctors",
      waitTime: "15m",
      status: "available",
    },
  },
  {
    type: "doctor",
    data: {
      id: "3",
      name: "Dr. James Chen",
      specialty: "Cardiologist",
      experience: 8,
      location: "St. Mary's Medical Center",
      status: "busy",
      statusDetail: "Busy (Surgery)",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200",
    },
  },
  {
    type: "doctor",
    data: {
      id: "4",
      name: "Dr. Sarah Smith",
      specialty: "Cardiology Chief",
      experience: 15,
      location: "City General Hospital",
      status: "available",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200",
    },
  },
  {
    type: "clinic",
    data: {
      id: "5",
      name: "Cleveland Clinic",
      type: "Specialty Center",
      hours: "8am - 8pm",
      doctorsCount: 2,
      doctorsSpecialty: "Cardiologists",
      waitTime: "45m",
      status: "live",
    },
  },
  {
    type: "doctor",
    data: {
      id: "6",
      name: "Dr. Michael Ross",
      specialty: "Interventional Cardio",
      experience: 10,
      location: "Cleveland Clinic",
      status: "on-break",
      statusDetail: "On Break",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=200&h=200",
    },
  },
  {
    type: "doctor",
    data: {
      id: "7",
      name: "Dr. Linda Kim",
      specialty: "Pediatric Cardiology",
      experience: 7,
      location: "Children's Hospital",
      status: "available",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200&h=200",
    },
  },
  {
    type: "cta",
  },
];
