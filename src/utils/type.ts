export interface getRatesProps {
  [key: string]: any;
  authorization: string;
}
export interface getStatusProps {
  [key: string]: any;
}

export interface loginProps {
  [key: string]: any;
  address: string,
  invitation_code_ref: string,
  lang: number,
  signature: string,
}

export interface axiosResult {
  [key: string]: any;
  code?: number;
  msg?: string;
  result?: any;
}

export interface axiosError {
  stack?: string | undefined;
  msg?: string;
  code?: number;
}