import React, { useState } from 'react';
import Modal from './Modal';
import { Expenditure, ExpenditureType } from '../model/Expenditure';

const Expenditure: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Expenditure data adhering to the Expenditure model
  const expenditureData: { type: ExpenditureType; details: Expenditure[] }[] = [
    {
      type: 'credit',
      details: [
        {
          name: 'Flipkart Samsung Phone',
          amount: 3386,
          emiDuration: 6,
          start: { month: 'Oct', year: 2025 },
          end: { month: 'Mar', year: 2026 },
          type: 'credit',
        },
        {
          name: 'SSD',
          amount: 2250,
          emiDuration: 6,
          start: { month: 'Aug', year: 2025 },
          end: { month: 'Jan', year: 2026 },
          type: 'credit',
        },
        {
          name: 's4 ultra',
          amount: 6249,
          emiDuration: 12,
          start: { month: 'Aug', year: 2025 },
          end: { month: 'Jul', year: 2026 },
          type: 'credit',
        },
      ],
    },
    {
      type: 'autopay',
      details: [
        {
          name: 'Idfc loan',
          amount: 13575,
          emiDuration: 60,
          start: { month: 'Oct', year: 2023 },
          end: { month: 'Sep', year: 2027 },
          type: 'autopay',
        },
        {
          name: 'Hdfc loan',
          amount: 30000,
          emiDuration: 60,
          start: { month: 'Oct', year: 2023 },
          end: { month: 'Sep', year: 2027 },
          type: 'autopay',
        },
      ],
    },
    {
      type: 'regular',
      details: [
        {
          name: 'Rent',
          amount: 27500,
          emiDuration: 60,
          start: { month: 'Oct', year: 2025 },
          end: { month: 'Dec', year: 2030 },
          type: 'regular',
        },
        {
          name: 'Kavita',
          amount: 10000,
          emiDuration: 60,
          start: { month: 'Oct', year: 2025 },
          end: { month: 'Dec', year: 2030 },
          type: 'regular',
        },
        {
          name: 'Electricity/gas',
          amount: 1500,
          emiDuration: 60,
          start: { month: 'Oct', year: 2025 },
          end: { month: 'Dec', year: 2030 },
          type: 'regular',
        },
        {
          name: 'Food',
          amount: 10000,
          emiDuration: 60,
          start: { month: 'Oct', year: 2025 },
          end: { month: 'Dec', year: 2030 },
          type: 'regular',
        },
         {
          name: 'Petrol',
          amount: 500,
          emiDuration: 60,
          start: { month: 'Oct', year: 2025 },
          end: { month: 'Dec', year: 2030 },
          type: 'regular',
        },
      ],
    },
  ];

  // Define colors for each card type
  const cardColors: { [key in ExpenditureType]: string } = {
    credit: 'bg-primary', // Blue
    autopay: 'bg-success', // Green
    regular: 'bg-warning', // Yellow
  };

  return (
    <div>
      <h2>Expenditure</h2>
      <button className="btn btn-primary mb-4" onClick={() => setShowModal(true)}>
        Add Expenditure
      </button>

      <div className="row">
        {expenditureData.map((card, index) => (
          <div className="col-lg-12 mb-4" key={index}>
            <div className="card">
              <div className={`card-header text-white ${cardColors[card.type]}`}>
                {card.type.charAt(0).toUpperCase() + card.type.slice(1)} {/* Capitalize type */}
              </div>
              <div className="card-body">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Amount</th>
                      <th>Start</th>
                      <th>End</th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.details.map((detail, idx) => (
                      <tr key={idx}>
                        <td>{detail.name}</td>
                        <td> {detail.amount}</td>
                        <td>
                          {detail.start.month} {detail.start.year}
                        </td>
                        <td>
                          {detail.end.month} {detail.end.year !== 0 ? detail.end.year : ''}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Expenditure;