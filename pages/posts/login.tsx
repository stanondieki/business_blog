import { useState } from "react";
import Link from "next/link";
import Head from "next/head";

export default function PassWord() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);

    setUsername("");
    setPassword("");
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <h1>LEE BUSINESS BLOG</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Username: <br />
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
          <br />
          <label>
            Password: <br />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>{" "}
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <h2>
        <Link href="/">Back Home</Link>
      </h2>
    </>
  );
}
