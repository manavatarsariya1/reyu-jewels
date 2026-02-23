const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full mx-auto px-6 md:px-12 lg:px-16">
      {children}
    </div>
  );
};

export default Container;