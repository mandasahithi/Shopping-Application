import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalPopup = ({ show, onClose }) => {
  return (
    <>
      {show && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content p-4 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                {/* Logo SVG */}
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 20l-6-6h12l-6 6zM2 8l8-8 8 8-8 8-8-8z" />
                  </svg>
                  <h2 className="text-xl font-bold">My Logo</h2>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={onClose}
                >
                  {/* SVG for Cross Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="text-center">
                <p className="text-gray-600">
                  This is a beautiful modal with Tailwind + Bootstrap!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPopup;
