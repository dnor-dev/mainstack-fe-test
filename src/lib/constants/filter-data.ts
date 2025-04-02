export const times = [
  {
    label: "Today",
    value: "today",
    dateRange: {
      from: new Date().toISOString().split("T")[0],
      to: new Date().toISOString().split("T")[0],
    },
  },
  {
    label: "Last 7 days",
    value: "last7",
    dateRange: {
      from: new Date(new Date().setDate(new Date().getDate() - 7))
        .toISOString()
        .split("T")[0],
      to: new Date().toISOString().split("T")[0],
    },
  },
  {
    label: "This month",
    value: "last30",
    dateRange: {
      from: new Date(new Date().setDate(new Date().getDate() - 30))
        .toISOString()
        .split("T")[0],
      to: new Date().toISOString().split("T")[0],
    },
  },
  {
    label: "Last 3 months",
    value: "last90",
    dateRange: {
      from: new Date(new Date().setDate(new Date().getDate() - 90))
        .toISOString()
        .split("T")[0],
      to: new Date().toISOString().split("T")[0],
    },
  },
];
