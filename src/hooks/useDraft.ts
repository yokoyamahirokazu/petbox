import { IDraftResponse } from "@/types";
import { getDraftBlog } from "@/framework/draft";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

export const useDraft = () => {
  const router = useRouter();
  const [data, setData] = useState<IDraftResponse>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetcher = async () => {
    const query = router.query;
    const data = await getDraftBlog(
      query.id as string,
      query.draftKey as string
    );
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (router.isReady) {
      fetcher();
    }
  });

  return {
    data,
    isLoading,
  };
};
