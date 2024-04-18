import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import {QueryClient, QueryClientProvider} from "react-query";

function MyApp({ Component, pageProps }) {
    const queryClient = new QueryClient();
  return (
    <ThemeProvider attribute="class">
        <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
        </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
