import { Fragment, Suspense, lazy, FC, PropsWithChildren } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageLoader from "./components/ui/page-loader";
import ErrorBoundary from "./components/error-boundary";
import DashboardLayout from "./components/layouts/dashboard-layout";

const Home = lazy(() => import("./pages/home"));
const NotFound = lazy(() => import("./pages/not-found"));
const Revenue = lazy(() => import("./pages/revenue"));

interface RouteConfig {
  path: string;
  page: FC;
  layout?: FC<PropsWithChildren>;
  guard?: FC<PropsWithChildren>;
}

const routes: RouteConfig[] = [
  { path: "/", page: Home, layout: DashboardLayout },
  { path: "/*", page: NotFound, layout: DashboardLayout },
  { path: "/revenue", page: Revenue, layout: DashboardLayout },
];

export const router = createBrowserRouter(
  routes.map(
    ({
      path,
      layout: Layout = Fragment,
      page: Page,
      guard: Guard = Fragment,
    }) => ({
      path,
      element: (
        <Suspense fallback={<PageLoader />}>
          <ErrorBoundary>
            <Layout>
              <Guard>
                <Page />
              </Guard>
            </Layout>
          </ErrorBoundary>
        </Suspense>
      ),
    })
  )
);
