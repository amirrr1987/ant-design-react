import { Api } from '@/config/api.config';
import { http } from '@/config/http.config';
import type { IResult } from '@/models/result.model';
import type { IZinaf } from '@/models/zinaf.model';

export const useZinafHttp = () => {
  const getZinafReport = async (
    reqBody: IZinaf.GetZinafReport.Req,
  ): Promise<IResult<IZinaf.GetZinafReport.Res>> => {
    const response = await http.post<IResult<IZinaf.GetZinafReport.Res>>(
      Api.Zinaf.V1.GetZinafReport,
      reqBody,
    );
    return response.data;
  };

  return { getZinafReport };
};
