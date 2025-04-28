'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ShopDetailsPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return null;
};

export default ShopDetailsPage;
