import React, { useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const LoginScreenReader = () => {
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    speak({ text: 'To login, speak' });
  }, [speak]);

  return null;
};

export default LoginScreenReader;