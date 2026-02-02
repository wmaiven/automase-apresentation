import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white p-6">
          <h1 className="text-4xl font-display font-bold text-[#00D4FF] mb-4">Oops! Algo deu errado.</h1>
          <p className="text-gray-400 mb-8 text-center max-w-md">
            Parece que tivemos um problema técnico. Por favor, tente recarregar a página.
          </p>
          <div className="bg-[#1A1A1A] p-4 rounded-lg border border-red-500/30 mb-8 max-w-2xl overflow-auto w-full">
            <code className="text-red-400 font-mono text-sm">
              {this.state.error?.message}
            </code>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-gradient-to-r from-[#00D4FF] to-[#7B2FFF] rounded-full font-bold text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.5)] transition-all duration-300"
          >
            Recarregar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
