import { useAuth } from '../contexts/AuthContext';

export const authGuard = (Component) => {
  return (props) => {
    const { user } = useAuth();
    if (!user) return <Redirect href="/login" />;
    return <Component {...props} />;
  };
};