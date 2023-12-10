import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback404?: React.ReactNode;
}

function ErrorBoundary({ children, fallback404 }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const errorHandler = (error: Event | string, info?: ErrorEvent | undefined) => {
      setHasError(true);

      if (typeof error === 'string' && error.includes('404')) {
        setIs404(true);
      }

      // Puedes registrar el error, enviarlo a un servicio de seguimiento de errores, etc.
      console.error('Error caught by ErrorBoundary:', error, info);
    };

    // Agrega un event listener para capturar errores durante la fase de burbujeo.
    window.addEventListener('error', errorHandler);

    // Elimina el event listener al desmontar el componente.
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    if (is404 && fallback404) {
      return <>{fallback404}</>;
    }

    // Puedes personalizar el mensaje de error que se muestra al usuario para otros errores
    return <h1>Something went wrong. Please try again later.</h1>;
  }

  return <>{children}</>;
}

export default ErrorBoundary;
