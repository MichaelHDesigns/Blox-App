import { FC, ReactNode } from 'react';

const ExplorerLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="explorer-layout">
      <header>Explorer Header</header>
      <main>{children}</main>
      <footer>Explorer Footer</footer>
    </div>
  );
};

export default ExplorerLayout;