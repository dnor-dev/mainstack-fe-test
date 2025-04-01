import { getUser } from "../api/user.api";
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/lib/constants/keys";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: [QueryKeys.GET_USER_PROFILE],
    queryFn: getUser,
    retry: 1,
    staleTime: 0,
  });

  return { isLoading, user: user?.data };
};
