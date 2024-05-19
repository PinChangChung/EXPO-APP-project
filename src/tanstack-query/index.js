import { useQuery } from "@tanstack/react-query";
import { getUbikeInfo } from "../api";
import { getWeatherInfo } from "../api";

export const useUbikeInfo = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["TODO", 1],
    queryFn: getUbikeInfo,
  });
  return { data, isLoading, isSuccess };
};

export const useWeatherInfo = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["TODO", 2],
    queryFn: getWeatherInfo,
  });
  return { data, isLoading, isSuccess, isError };
};