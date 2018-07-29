import DiscountCode from '../Models/DiscountCode';

class DiscountCodeService {

  async checkCode(code) {
    return new Promise((resolve, reject) => {
      const codes = {
        P1: 23.95,
        P3: 15.99,
        P4: 9.99
      };
      setTimeout(() => {
        if (codes[code] !== undefined) {
          const discountCode = new DiscountCode();
          discountCode.id = 1;
          discountCode.code = code;
          discountCode.discount = codes[code];
          resolve(discountCode);
        }
        resolve(null);
      }, Math.round(Math.random() * 600 + 200));
    });
  }
 
}

export default DiscountCodeService;