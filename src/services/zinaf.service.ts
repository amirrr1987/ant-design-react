import { useZinafHttp } from '@/http/zinaf.http';
import type { IResult } from '@/models/result.model';
import type { IZinaf } from '@/models/zinaf.model';
import {
  useMutation,
  useQueryClient,
  type UseMutationResult,
} from '@tanstack/react-query';

export const useZinafService = () => {
  const zinafHttp = useZinafHttp();
  const useGetZinafReport = (): UseMutationResult<
    IResult<IZinaf.GetZinafReport.Res>,
    Error,
    IZinaf.GetZinafReport.Req
  > => {
    const queryClient = useQueryClient();
    return useMutation({
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ['zinafReport'],
          refetchType: 'active',
        });
      },
      mutationFn: (data: IZinaf.GetZinafReport.Req) =>
        zinafHttp.getZinafReport(data),
    });
  };

  return {
    useGetZinafReport,
  };
};
