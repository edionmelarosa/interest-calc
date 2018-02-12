class compoundController {
    constructor() {
      this.name = 'compound';
      this.preq = '12';
    }

  reset(form) {
    this.principal = '';
    this.rate = '';
    this.year = '';
    this.preq = '12';
  }

  submit(form) {

    if (!form.$valid) {
      return false;
    }

    let proccessedData = [];
    let principal = parseFloat(this.principal);
    let rate = parseInt(this.rate);
    let year = parseInt(this.year);
    let preq = parseInt(this.preq);
    let totalInterest = (principal * Math.pow(1 + (rate / (100 * preq)), preq * year));

    for (let index = 1; index <= year; index++) {

      let interestPerYear = (principal * Math.pow(1 + (rate / (100 * preq)), preq * index));
      let data = {
        year: index,
        interest: interestPerYear,
        total: (principal + interestPerYear)
      };

      proccessedData.push(data);
    }

    this.results = {
      interests: proccessedData,
      totals: {
        totalInterest: totalInterest - principal,
        totalAmount: totalInterest
      }
    }
  }
  }

  export default compoundController;