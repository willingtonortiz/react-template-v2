import process from "process";

// TODO: Compare with APP code

export const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === "development";
