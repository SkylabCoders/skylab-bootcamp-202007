import React from 'react';
import { connect } from 'react-redux';
import './projectBudgetBoard.sass';
import Spinner from '../common/Spinner';

function ProjectBudgetBoard( { budget } ) {

  function generateClassName(index){
    let className = '';
    switch(index){
      case 0:
      case 1:
        className = 'tableCell__left';
        break;
      case 2:
        className = 'tableCell__center';
        break;
      case 3:
      case 4:
      case 5:
        className = 'tableCell__right';
        break;
      default:
        className = 'tableCell__default';
    }
    return className;
  }

  return (
    ( Object.keys(budget).length === 0 ) ? (<Spinner/>) : (
      <div className="project__budgetBoard">
        <table className='board__table'>
          <thead>
            <tr>
              {budget.data.headers.map((header, index)=>{
                return(<th key={`H0.${index}`} className={`${generateClassName(index)}`}>{header}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            {budget.data.entries.map((entry, rowIndex)=>{
              return(<tr key={rowIndex}>{entry.map((field, index)=>{
              return(<td key={`R${rowIndex}.${index}`} className={`${generateClassName(index)}`}>{field}</td>)
              })}</tr>)
            })}
          </tbody>
        </table>
      </div>
    )
  );
}

function mapStateToProps( state, { view } ){
  const selectedBudget = (Object.keys(state.project.data).length === 0) ? '' : ( view === '' ) ? { ...state.project.data[0] } : { ...state.project.data.filter(item=>item._id === view)[0] };
 
  function formatSelectedBudget(budget){
    console.log('ENTERING FORMATTING FUNCTION WITH ', budget, budget.data.entries);
    const currency = budget.currency;
    for (let entry of budget.data.entries){
      if(typeof(entry[4]) === 'number') {entry[4] = formatIntToCurrency(entry[4], currency)}
      if(typeof(entry[5]) === 'number') {entry[5] = formatIntToCurrency(entry[5], currency)}
    }
    console.log('EXITING FORMATTING FUNCTION WITH ', budget);
  }

  function formatIntToCurrency(currentNumber, currency){
    const newNumber = String((Number(currentNumber) / 100).toFixed(2));
    const numberWithThousandPoint = (newNumber.length >= 7) ? `${newNumber.slice(0,-6)}.${newNumber.slice(-6)}` : newNumber;
    currency = currency.toLowerCase();
    let newCurrency;
    switch(currency){
      case 'eur':
        newCurrency = '€';
        break;
      case 'gbp':
        newCurrency = '£';
        break;
      case 'usd':
        newCurrency = '$';
        break;
      case 'jpy':
      case 'cnh':
      case 'cny':
        newCurrency = '¥';
        break;
      case 'krw':
        newCurrency = '₩';
        break;
      case 'ils':
        newCurrency = '₪';
        break;
      case 'pgk':
        newCurrency = '₱';
        break;
      case 'rub':
        newCurrency = '₽';
        break;
      default:
        newCurrency = currency;
    }
    const newValue = `${numberWithThousandPoint} ${newCurrency.toUpperCase()}`;
    return newValue;
  }

  const formatedBudget =  (selectedBudget === '' && view === '') ? '' : formatSelectedBudget(selectedBudget);
  console.log('AQUI FORMAT', formatedBudget);

  return {
    budget: selectedBudget
  }
}

export default connect(mapStateToProps)(ProjectBudgetBoard);
