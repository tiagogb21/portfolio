import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div>Sidebar</div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
