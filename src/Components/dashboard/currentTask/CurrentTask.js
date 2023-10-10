import React from 'react';
import './CurrentTask.scss'; // Import your CSS file for styling
import PaymentStepper from './paymentStages/PaymentStepper';
function CurrentTask({ arrivedOnTime, paymentStatuses }) {
  const paymentLabels = ['Payment 1', 'Payment 2', 'Payment 3']; // Labels for the payments

  return (
    <div className="current-task-card">
      <div className="circle-status">
        <div className={`circle ${arrivedOnTime ? 'green' : 'red'}`}></div>
      </div>
      <div className="task-content">
        <div className="task-title">Current Task</div>
        <div className="button-container">
          {/* Buttons */}
          <button className="task-button">Choice to continue</button>
          <button className="task-button">Details</button>
          <button className="task-button">Review of client</button>


          <button className="task-button">Choice to continue</button>
          <button className="task-button">Details</button>
          <button className="task-button">Review of handyman</button>
        </div>
      </div>
        <div className="payment-status">
        <PaymentStepper />
        </div>
    </div>
  );
}

export default CurrentTask;