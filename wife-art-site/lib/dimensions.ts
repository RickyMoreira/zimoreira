export function getDimensions(dimensions: string): { wide: number; tall: number } {
  const match = dimensions.match(/(\d+(?:\.\d+)?)\s*[×x]\s*(\d+(?:\.\d+)?)/);
  if (!match) return { wide: 24, tall: 30 };
  const a = parseFloat(match[1]);
  const b = parseFloat(match[2]);
  return { wide: Math.max(a, b), tall: Math.min(a, b) };
}
