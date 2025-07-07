import React from 'react';

const Card = ({ title, description, imageUrl, buttonText, onButtonClick, footerText, children }) => {
  return (
    <div className="card h-100 shadow-sm border-0"> {/* h-100 for equal height cards in flex container */}
      {imageUrl && (
        <img src={imageUrl} className="card-img-top" alt={title || "Card image"} />
      )}
      <div className="card-body d-flex flex-column"> {/* Use flexbox for spacing */}
        {children} {/* This is where the service icon will be rendered */}
        {title && <h5 className="card-title text-primary mt-2 mb-2">{title}</h5>}
        {description && <p className="card-text text-secondary mb-3 flex-grow-1">{description}</p>} {/* flex-grow-1 makes description take available space */}
        {onButtonClick && buttonText && (
          <div className="mt-auto"> {/* Pushes button to the bottom */}
            <button onClick={onButtonClick} className="btn btn-outline-primary btn-sm w-100">
              {buttonText}
            </button>
          </div>
        )}
      </div>
      {footerText && (
        <div className="card-footer bg-light-subtle text-muted small py-2 px-3">
          {footerText}
        </div>
      )}
    </div>
  );
};

export default Card;