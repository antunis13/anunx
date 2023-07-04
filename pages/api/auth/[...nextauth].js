import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from 'axios'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/utils/lib/mongodb"
import dbConnect from "@/utils/lib/dbConnect"

export const authOptions = {

  adapter: MongoDBAdapter(clientPromise),
  providers: [
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