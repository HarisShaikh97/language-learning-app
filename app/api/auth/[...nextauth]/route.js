import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import connect from "@/app/db/connect"
import User from "@/app/models/user.model"
import bcrypt from "bcryptjs"
export const authOptions = {
	providers: [
		GoogleProvider({
			clientId:
				"876954833842-10d81kd89mu57pdr03fsd66cetvanhdp.apps.googleusercontent.com",
			clientSecret: "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"
		}),
		CredentialsProvider({
			name: "credentials",
			credentials: {},
			async authorize(credentials) {
				const { email, password } = credentials

				try {
					await connect()
					const user = await User.findOne({ email })
					const userPass = await bcrypt.compare(
						password,
						user.password
					)

					if (!user) {
						return false
					}

					if (!userPass) {
						return false // Return false if password does not match
					}

					return user
				} catch (error) {
					console.error("Error authorizing user:", error.message)
					return false
				}
			}
		})
	],
	session: {
		strategy: "jwt"
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/"
	}
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
