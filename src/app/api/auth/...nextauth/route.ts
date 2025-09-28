import NextAuth from "next-auth"
import { authOptions } from "../../../../aut";

const handler = NextAuth(authOptions);


export { handler as GET, handler as POST }