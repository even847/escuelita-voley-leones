import type { ReactNode } from "react";

type FullscreenWrapperProps = {
  isFullscreen: boolean;
  children: ReactNode;
};

const FullscreenWrapper = ({
  isFullscreen,
  children,
}: FullscreenWrapperProps) => {
  return isFullscreen ? (
    <div className="fixed inset-0 z-50 bg-primary-900/90 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">{children}</div>
    </div>
  ) : (
    <div className="w-full max-w-5xl mx-auto">{children}</div>
  );
}

export default FullscreenWrapper;
