// Format numbers with Intl.NumberFormat:
// new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(1234.5);
// Compare to toFixed, toPrecision, Math.round for rounding behaviour.
// Beware of floating point issues: 0.1 + 0.2 !== 0.3.
