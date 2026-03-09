import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const proxyHandler = createMiddleware(routing);

export default proxyHandler;

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en)/:path*"],
};
