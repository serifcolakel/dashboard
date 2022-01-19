import Head from "next/head";

import Login from "./login";

export default function Home() {
  return (
    <div>
      <Head>
        <title>AKE Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://ake.com.tr/uploads/images/logo.png" />
      </Head>
      <Login />
    </div>
  );
}
