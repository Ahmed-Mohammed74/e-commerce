import NextAuth from "next-auth"
import { autoOptions } from "../../../../aut"

const handler = NextAuth(autoOptions);


export { handler as GET, handler as POST }