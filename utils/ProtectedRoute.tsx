import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedRoute = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        router.push("/LoginPage");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default ProtectedRoute;
