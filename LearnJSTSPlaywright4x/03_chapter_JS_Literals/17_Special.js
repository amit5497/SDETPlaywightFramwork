// --------------------------------------------------------
// 5. SPECIAL NUMERIC VALUES
// --------------------------------------------------------

// Infinity
console.log("Infinity:", Infinity);           // Infinity
console.log("1 / 0:", 1 / 0);                 // Infinity
console.log("-1 / 0:", -1 / 0);               // -Infinity
console.log("typeof Infinity:", typeof Infinity); // "number"

// -Infinity
console.log("-Infinity:", -Infinity);

// NaN (Not a Number) - result of invalid math
console.log("NaN:", NaN);                     // NaN
console.log("0 / 0:", 0 / 0);                 // NaN
console.log("'hello' * 2:", "hello" * 2);     // NaN
console.log("typeof NaN:", typeof NaN);       // "number" (quirky!)