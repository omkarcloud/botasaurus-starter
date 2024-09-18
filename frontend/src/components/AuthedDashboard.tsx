import Header from './starter/header';

export default function AuthedDashboard({ children, ...props }: any) {
  return (
    <>
      <Header {...props} />
      {children}
    </>
  )
}
