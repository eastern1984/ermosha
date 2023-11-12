import React, { useState } from "react";
import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import { bodyWrapper, breadcrumbWrapper, container } from "./styles";


import Link from "next/link";

import PublicHeader from "./PublicHeader";
import Sidebar from "./SidebarComp";
import Footer from "./Footer";

interface PrivateLayoutProps {
  title: string;
  children: any;
  menu: any;
  crumbs: any;
}

const PrivateLayout: React.FC<PrivateLayoutProps> = ({ children, title, menu, crumbs }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ minWidth: "320px", bgcolor: "#F8F8F8" }}>
      <PublicHeader isSidebar title={title} toggleOpen={() => setOpen(!open)} />
      <Sidebar
        menu={menu}
        open={open}
        onClose={() => setOpen(false)}
      />
      <Box component="main" sx={bodyWrapper}>
        <Container maxWidth="lg" sx={container}>
          <Breadcrumbs aria-label="breadcrumb" sx={breadcrumbWrapper}>
            <Link href={"/"}><Typography>Главная</Typography></Link>
            {crumbs?.map((v: any) => (
              <Link key={v.url} href={v.url}><Typography>{v.title}</Typography></Link>
            ))}
          </Breadcrumbs>
          {children}
        </Container>
      </Box>
      <Footer isSidebar />
    </Box>

  );
};

export default PrivateLayout;

/*export default function Layout({
  meta,
  results,
  totalUsers,
  username,
  clusterStillProvisioning,
  children
}: {
  meta: MetaProps;
  results: ResultProps[];
  totalUsers: number;
  username?: string;
  clusterStillProvisioning?: boolean;
  children: ReactNode;
}) {
  const router = useRouter();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (router.isFallback) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-black">
        <LoadingDots color="white" />
      </div>
    );
  }

  // You should remove this once your MongoDB Cluster is fully provisioned
  if (clusterStillProvisioning) {
    return <ClusterProvisioning />;
  }

  return (
    <div className="w-full mx-auto h-screen flex overflow-hidden bg-black">
      <Meta props={meta} />
      <Toast username={username} />
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        results={results}
        totalUsers={totalUsers}
      />

      <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
  
            <Navbar setSidebarOpen={setSidebarOpen} />

            {children}
          </main>
          <div className="hidden md:order-first h-screen md:flex md:flex-col">
            <Directory results={results} totalUsers={totalUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
*/