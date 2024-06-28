import { FC, ReactNode } from 'react';

const DefiLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="defi-layout">
      <header>Defi Header</header>
      <main>{children}</main>
      <footer>Defi Footer</footer>
    </div>
  );
};

export default DefiLayout;