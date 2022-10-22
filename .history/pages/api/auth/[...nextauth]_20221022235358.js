import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";




export default NextAuth({
  providers: [    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  theme:{
    logo:"https://links.papareact.com/sq8",
    brandColor:"#F13287",
    colorSchem:"auto"
  },
});
