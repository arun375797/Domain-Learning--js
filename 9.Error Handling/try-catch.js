try {
  JSON.parse("{ invalid json }");
} catch (error) {
  console.error("Parsing failed:", error.message);
} finally {
  console.log("Cleanup resources if needed");
}

// Wrap only the smallest block necessary to catch specific issues.
