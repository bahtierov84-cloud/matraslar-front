import React, { useState } from 'react';
import './add.css';
import { addressesData } from '../../assets/data'; 

const AddressesSection: React.FC = () => {
  // Aktiv profil indeksini saqlash uchun state (0 - birinchi filial)
  const [activeStep, setActiveStep] = useState<number>(0);

  // Tanlangan filial ma'lumotlarini olish
  const currentAddress = addressesData[activeStep];

  return (
    <section className="add">
      <div className="add__container">
        
        {/* Chap ustun: Matnli ma'lumotlar va Tugma */}
        <div className="add__col-text">
          <h2 className="add__title">{currentAddress.title}</h2>
          <h3 className="add__address">{currentAddress.address}</h3>
          <p className="add__landmark">{currentAddress.landmark}</p>
          
          <a 
            href={currentAddress.locationUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="add__btn"
          >
            <svg 
              className="add__icon" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            {currentAddress.buttonText}
          </a>
        </div>

        {/* O'ng ustun: Rasm va Progress-bar (Indikatorlar) */}
        <div className="add__col-media">
          {/* Rasm konteyneri */}
          <div className="add__img-wrapper">
            <img 
              src={currentAddress.image} 
              alt={currentAddress.title} 
              className="add__img" 
            />
          </div>

          {/* Indikator chiziqlari (Progress-bar) */}
          <div className="add__progress-bar">
            {addressesData.map((_, index: number) => (
              <div
                key={index}
                className={`add__progress-step ${
                  index === activeStep ? 'add__progress-step--active' : ''
                }`}
                onClick={() => setActiveStep(index)}
                style={{ cursor: 'pointer' }}
                title={`${index + 1}-filialga o'tish`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AddressesSection;