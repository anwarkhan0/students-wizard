// hooks/useRegisterUser.ts
import { useState } from 'react';

export function useRegisterUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registerUser = async (userData: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed.');
      }

      const data = await response.json();
      setLoading(false);
      return data;
    } catch (err: any) {
      setLoading(false);
      setError(err.message);
    }
  };

  return { registerUser, loading, error };
}