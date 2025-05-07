// pages/auth/signin.js
import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }) {
  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto", fontFamily: "sans-serif" }}>
      <h2>Logg inn på Sparsom</h2>
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <div>
          <label>Email</label><br />
          <input name="email" type="email" required />
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Passord</label><br />
          <input name="password" type="password" required />
        </div>
        <button type="submit" style={{ marginTop: "20px", padding: "10px", width: "100%" }}>
          Logg inn
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
