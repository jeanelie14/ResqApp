import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/authSlice';

export function useAuth() {
  const dispatch = useDispatch();

  const login = (email: string, password: string) => {
    dispatch(setUser({ email }));
  };

  return { login };
}