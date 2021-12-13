import request from './request';
import { getRatesProps, loginProps, getStatusProps } from "./type";
import { domain } from "@/utils/config";

export function getRates(params: getRatesProps) {
  return request('/v1/buy/rates', {
    method: "post",
    headers: {
      Authorization: params.authorization,
    },
    data: params,
  })
}

export function buyCurrency(params: getRatesProps) {
  return request('/v1/buy', {
    method: "post",
    headers: {
      Authorization: params.authorization,
    },
    data: {
      cust_order_id: params.cust_order_id,
      from_currency: params.from_currency,
      amount: params.amount,
      to_crypto: params.to_crypto,
      channel_name: params.channel_name,
      address: params.address,
      return_url: params.return_url,
      domain,
    },
  })
}

export function getNonce(address: string) {
  return request({
    url: '/railone/user/token/nonce',
    method: 'post',
    data: {
      address,
    },
  });
}

export function submitLogin(data: loginProps) {
  return request({
    url: '/railone/user/token/login',
    method: 'post',
    data,
  });
}

export function getCardList() {
  return request({
    url: "/railone/user/card/card-list",
    method: "get"
  });
}

export function sendEmail(mail: string) {
  return request({
    url: '/railone/user/common/security/mail',
    method: 'post',
    data: {
      mail,
    },
  });
}

export function submitKycData(data: any) {
  return request({
    url: "/railone/user/kyc-1",
    method: "post",
    data
  });
}


//获取kyc基本信息
export function getKycProcess(id: string) {
  return request({
    url: '/railone/user/kyc-process',
    method: 'get',
    params: {
      card_type_id: id,
    },
  });
}

//获取kyc状态
export function getKycStatus(cardTypeId: string) {
  return request({
    url: "/railone/user/kyc-status",
    method: "get",
    params: {
      card_type_id: cardTypeId
    }
  });
}

export function submitKycAuth(data: any) {
  return request({
    url: "/railone/user/kyc-2",
    method: "post",
    data
  });
}

export function getCardChargeAddress(id: string) {
  return request({
    url: "/railone/user/card/address-info",
    method: "get",
    params: {
      card_type_id: id
    }
  });
}

export function getCardTypeInfo(cardTypeId: string) {
  return request({
    url: "/railone/user/card/card-detail",
    method: "get",
    params: {
      card_type_id: cardTypeId
    }
  });
}