import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import connect from "@/app/db/connect";
import User from "@/app/models/UserModel";
import bcrypt from "bcryptjs";
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: "705256653211-k73bih0ok9miju5kckp8fqj4epr6n3gk.apps.googleusercontent.com",
            clientSecret: "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",

        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const { email, password } = credentials;

                try {
                    await connect();
                    const user = await User.findOne({ email });
                    const userPass = await bcrypt.compare(password, user.password)

                    if (!user) {
                        return false;
                    }

                    if (!userPass) {
                        return false; // Return false if password does not match
                    }

                    return user;
                } catch (error) {
                    console.error("Error authorizing user:", error.message);
                    return false;
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/",

    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
