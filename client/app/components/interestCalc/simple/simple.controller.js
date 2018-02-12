import ResultController from '../result/result.controller';

class simpleController {
      constructor() {
          this.name = 'simple';
          this.results = [];
          this.formSubmitted = false;
      }

      reset(form) {
        this.principal = '';
        this.rate = '';
        this.year = '';
        this.formSubmitted = false;
      }

      submit(form) {

        if ( ! form.$valid ) {
          return false;
        }

        let proccessedData = [];
        let principal = parseFloat(this.principal);
        let rate = parseInt(this.rate);
        let year = parseInt(this.year);
        let totalInterest = principal * (rate / 100) * year;

        for (let index = 1; index <= year; index++) {

          let interestPerYear = principal * (rate / 100) * index;
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
            totalInterest: totalInterest,
            totalAmount: (principal + totalInterest)
          }
        }

        this.formSubmitted = false;
      }

  }

  export default simpleController;