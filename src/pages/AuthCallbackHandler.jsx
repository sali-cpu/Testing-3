import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AuthCallbackHandler = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error) {
      console.error("Auth error:", error);
      // Optionally redirect to an error page
      navigate("/"); // or /error
    } else if (code) {
      console.log("Received auth code:", code);
      // TODO: Exchange this code for a token with your backend or Firebase, etc.

      // Redirect user to homepage or dashboard after auth
      navigate("/");
    }
  }, [searchParams, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h2>Logging you in...</h2>
      <p>Please wait while we process your authentication.</p>
    </div>
  );
};

export default AuthCallbackHandler;
