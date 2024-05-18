import { useQuery } from "@tanstack/react-query";
import { getUbikeInfo } from "../api";
import { getWeatherInfo } from "../api";

export const useUbikeInfo = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [],
    queryFn: getUbikeInfo,
  });
  return { data, isLoading, isSuccess };
};

export const useWeatherInfo = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: [],
    queryFn: getWeatherInfo,
  });
  return { data, isLoading, isSuccess };
};