 import './ExpenseDate.css';

const ExpenseDate=(props)=>{
    return (
    <div className='expense-date'> 
            <div className = 'expense-date__month'>{props.date.toLocaleString('en-US',{month:'long'})}</div>
            <div className='expense-date__year'>{props.date.toLocaleString('en-US',{day:'2-digit'})}</div> 
            <div className='expense-date__day'>{props.date.getFullYear()}</div>
        </div> 
        
        )

        //props is a single object with attributes- properites. date is a name of attribute ,and attribute is date ,which stands for parent props.date

};

export default ExpenseDate;

  // const month = props.date.toLocaleString('en-US',{month:'long'});
    // const day = props.date.toLocaleString('en-US',{day});
    // const year = props.date.getFullYear();