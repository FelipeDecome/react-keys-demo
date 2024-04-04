import { ReactNode, createContext, useContext, useState } from "react";

interface GenerateKeyOnRenderContextType {
  generateKeyOnRender: boolean;
  setGenerateKeyOnRender: (value: boolean) => void;
  omitKey: boolean;
  setOmitKey: (value: boolean) => void;
}

export const GenerateKeyOnRenderContext = createContext<GenerateKeyOnRenderContextType | null>(null);

interface GenerateKeyOnRenderProviderProps {
  children: ReactNode;
}

export function GenerateKeyOnRenderProvider({ children }: GenerateKeyOnRenderProviderProps) {
  const [generateKeyOnRender, setGenerateKeyOnRender] = useState(true);
  const [omitKey, setOmitKey] = useState(false);

  return (
    <GenerateKeyOnRenderContext.Provider value={{
      generateKeyOnRender,
      setGenerateKeyOnRender,
      omitKey,
      setOmitKey,
    }}>
      {children}
    </GenerateKeyOnRenderContext.Provider>
  )
}

export function useGenerateKeyOnRender() {
  const context = useContext(GenerateKeyOnRenderContext);

  if (!context) {
    throw new Error('useGenerateKeyOnRender must be used within a GenerateKeyOnRenderProvider');
  }
  return context;
}
