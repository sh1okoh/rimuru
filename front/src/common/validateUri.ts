export function validateUrl(url: string) {
  const parsed = new URL(url);
  // NOTE: To avoid javascript protocol URLs. cf: https://snyk.io/blog/10-react-security-best-practices
  return ['https:', 'http:'].includes(parsed.protocol);
}