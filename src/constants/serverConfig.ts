export const serverConfig = {
  DEMO: { id: 0, value: "localhost", label: "Demo Data" },
  DEV: { id: 1, value: "https://irs.dev.demo.catena-x.net/irs/", label: "Development Environment" },
  INT: { id: 2, value: "https://irs.int.demo.catena-x.net/irs/", label: "Integration Environment" },
  PROD: { id: 3, value: "https://irs.int.demo.catena-x.net/irs/", label: "Production Environment" },
} as const;
