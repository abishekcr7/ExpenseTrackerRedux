import './ExpenseDate.css'
function ExpenseDate(props) {
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const days = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.toLocaleString({year})

  // console.log(year)

  return (
    <div className="expense-date">
      <div className="expense-date__month">{props.month}</div>
      <div className="expense-date__year">{props.year}</div>
      <div className="expense-date__day">{props.day}</div>
    </div>
  );
}

export default ExpenseDate;