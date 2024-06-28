import { FC, ReactNode } from 'react';

const PortfolioLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="portfolio-layout">
      <header>Portfolio Header</header>
      <main>{children}</main>
      <footer>Portfolio Footer</footer>
    </div>
  );
};

export default PortfolioLayout;