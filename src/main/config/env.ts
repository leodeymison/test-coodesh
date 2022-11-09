export default {
    PORT: typeof process.env.PORT === "string" ? 9000 : process.env.PORT || 9000
}