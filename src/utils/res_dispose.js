/*
 * @LastEditors: Mark
 * @Description: none
 * @Author: Mark
 * @Date: 2019-05-05 11:53:31
 * @LastEditTime: 2019-05-17 14:46:34
 */
export const res_dispose = (data) => {
  switch (data.code) {
    case 'error':
      console.error(data.message);
      break;

    default:
      console.info(data.message);
      break;
  }
  return data;
};
