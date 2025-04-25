'use client';

const Header = () => {
  return (
    <header className="header-nav">
      <div className="header-container">
        <div className="header-content">
          <div className="header-actions">
            {/* Settings Icon */}
            <button className="header-gear-btn">
              <img src="/icons/settings.svg" alt="Settings" width={20} height={20} />
            </button>
          </div>
          <div className="header-avatar">
            <img
              src="/images/avatar.jpg"
              alt="User"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 40 40\"><rect width=\"40\" height=\"40\" fill=\"%23f3f4f6\"/><text x=\"50%\" y=\"50%\" font-family=\"Arial\" font-size=\"16\" fill=\"%236b7280\" dominant-baseline=\"middle\" text-anchor=\"middle\">U</text></svg>';
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;