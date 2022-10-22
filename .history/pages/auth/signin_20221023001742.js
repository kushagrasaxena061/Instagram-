import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

// Client_Id = 842323525479-8gsb3hj1oipevlqafntrlbo5m46drglg.apps.googleusercontent.com
// Client Secret = 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

export default function SignIn({ providers }) {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
