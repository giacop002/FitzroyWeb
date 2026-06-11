export const shareStructure = {
  asOf: '2026-01-28',
  issuedAndOutstanding: 282_293_754,
  stockOptions: 24_325_000,
  warrants: 30_025_368,
  fullyDiluted: 336_644_122,
} as const;

export type ShareStructure = typeof shareStructure;
