interface AboutTabsContainerProps {
  children: React.ReactNode
}

export default function AboutTabsContainer ({children}: AboutTabsContainerProps){
    return (
      <div className="flex flex-col lg:flex-row">
        {children}
      </div>
    );
};