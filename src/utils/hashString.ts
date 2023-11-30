import { createHash } from "crypto";

export default function hashString(input: string): string {
  // Normalize the input: remove leading and trailing spaces and convert to lowercase
  const normalizedInput = input.trim().toLowerCase();

  // Create a SHA256 hash of the normalized input
  const hash = createHash("sha256");
  hash.update(normalizedInput);
  return hash.digest("hex");
}

// Example usage
// const input = "John_Smith@gmail.com";
// const hashedOutput = hashString(input);
// console.log(`Normalized Input: ${input.trim().toLowerCase()}`);
// console.log(`SHA256 Hash: ${hashedOutput}`);
