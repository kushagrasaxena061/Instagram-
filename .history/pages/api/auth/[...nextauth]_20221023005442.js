import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  /*
  theme:{
    logo:"https://links.papareact.com/sq8",
    brandColor:"#F13287",
    colorSchem:"auto"
  },
  */
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: { 
    async session({session,token,user}){
      session.user.username = session.user.name.split(' ').join('').toLowerCase
    }
  }
});
