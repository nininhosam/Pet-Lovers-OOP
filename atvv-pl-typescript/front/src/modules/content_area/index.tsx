const ContentArea = ({children, className}: {children: React.ReactNode, className?: String}) => {
    return (
      <div className={"flex items-center justify-center max-md:grid-flow-row pt-7 w-dvw " + className}>
        {children}
      </div>
    );
  }
export default ContentArea;