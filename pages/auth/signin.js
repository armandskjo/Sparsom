// pages/auth/signin.js
import { getCsrfToken } from "next-auth/react";

export default function SignIn({ csrfToken }) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#4e9cd9", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ backgroundColor: "white", padding: "40px", borderRadius: "12px", width: "100%", maxWidth: "400px", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}>
        <div style={{ textAlign: "center" }}>
          <img src="/favicon.ico" alt="Sparsom logo" style={{ width: 60, marginBottom: 10 }} />
          <h2 style={{ fontFamily: "sans-serif", marginBottom: 20 }}>Logg inn på Sparsom</h2>
        </div>
        <form method="post" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />

          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>E-post</label>
            <input name="email" type="email" required style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontWeight: "bold" }}>Passord</label>
            <input name="password" type="password" required style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }} />
          </div>

          <button type="submit" style={{ width: "100%", padding: "12px", backgroundColor: "#4e9cd9", color: "white", fontWeight: "bold", borderRadius: "6px", border: "none" }}>
            Logg inn
          </button>
        </form>
      </div>
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
