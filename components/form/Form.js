import React from 'react';
import FormField from './FormField';
import FormTextArea from './FormTextArea';

export default function Form() {
  return (
    <>
      <FormField
        label="姓名"
        id="name"
        type="text"
        placeholder="請輸入姓名"
        required={true} // 設置為必填
      />
      <FormField
        label="手機"
        id="phone"
        type="text"
        placeholder="請輸入手機號碼"
        required={true} // 設置為必填
      />
      <FormField
        label="電子郵件"
        id="email"
        type="email"
        placeholder="請輸入電子郵件"
        required={true} // 設置為必填
      />
      <FormField
        label="寄送地址"
        id="address"
        type="text"
        placeholder="請輸入寄送地址"
        required={true} // 設置為必填
      />
      <FormField
        label="收件人稱呼(選填)"
        id="address2"
        type="text"
        placeholder="請輸入收件人稱呼"
        required={false} // 不設置為必填
      />
      <FormTextArea
        label="訂單備註"
        id="note"
        placeholder="請輸入訂單備註"
      />
    </>
  );
}
