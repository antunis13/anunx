import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/utils/lib/mongodb"
import dbConnect from "@/utils/lib/dbConnect"
import axios from 'axios'

export const authOptions = {

  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      async authorize(credentials) {
        await dbConnect()
        const res = await axios.post(`${process.env.APP_URL}/api/auth/signin `, credentials)

        const user = res.data

        if(user){
          return user
        } else {
          throw new Error('/auth/signin?i=1')
        }
      }
    })
  ],

  session: {
    strategy: "jwt",    
  },

  jwt: {
    secret: process.env.JWT_TOKEN,
  },
  pages: {
    signIn: '/auth/signin',
  },

  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
      }
      return Promise.resolve(token)
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      
      return session
    }
  }

}

export default NextAuth(authOptions)