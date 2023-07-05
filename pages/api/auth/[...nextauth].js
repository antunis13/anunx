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
        const res = await axios.post('http://localhost:3000/api/auth/signin', credentials)

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
    jwt: true,
  },

  jwt: {
    secret: process.env.JWT_TOKEN,
  },
  pages: {
    signIn: '/auth/signin',
  },

}

export default NextAuth(authOptions)