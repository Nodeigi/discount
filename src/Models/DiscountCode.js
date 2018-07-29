class DiscountCode {
  construct() {
    this.id = null;
    this.code = null;
    this.discount = 0;
  }

  priceAfterDiscount(originalPrice) {
    return Math.round(originalPrice * (100 - this.discount)) / 100;
  }
}

export default DiscountCode;