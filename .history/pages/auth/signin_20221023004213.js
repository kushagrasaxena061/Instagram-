import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "..//../components/Header.js"


export default function SignIn({ providers }) {
  return (
    <>
      <Header/>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className="p-3 bg-blue-500 rounded-lg text-whitee"onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
