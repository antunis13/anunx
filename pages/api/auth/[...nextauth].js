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
    secret: process.env.JWT_TOKEN
  },
  pages: {
    signIn: '/auth/signin',
  },

  callbacks: {
    async jwt({ token, user, session }) {
      if (user) {
        return{
          ...token,
          id: user.id,
        }
      }
      return token
    },
    async session({ session, token, user}){
      return{
        ...session,
        user: {
          ...session.user,
          id: token.id,
        }
      } 
    }
  }  
  
}

export default NextAuth(authOptions)