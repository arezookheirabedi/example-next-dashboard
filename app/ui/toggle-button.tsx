'use client';

interface ToggleButtonProps  {
    isCrypto: boolean;
    setIsCrypto: React.Dispatch<React.SetStateAction<boolean>>;
  };
  
  export default function ToggleButton({ isCrypto, setIsCrypto }: ToggleButtonProps) {
    const toggleState = () => {
      setIsCrypto(!isCrypto); // Toggle between true and false
    };
  
    return (

        <div className="flex items-center  px-2 py-1 border-0 rounded-lg bg-gray-200">
              {/* Left side: ارز */}
              <button
                onClick={() => toggleState()}
                className={`px-6 py-2 border rounded-lg text-sm font-medium ${
                  !isCrypto
                    ? 'text-blue-600 bg-white '
                    : 'text-gray-500 bg-gray-200'
                }`}
              >
                ارز
              </button>
              
              {/* Right side: رمزارز */}
              <button
                onClick={() => toggleState()}
                className={`px-6 py-2 border rounded-lg text-sm font-medium ${
                  isCrypto
                    ? 'text-blue-600 bg-white '
                    : 'text-gray-500 bg-gray-200 '
                }`}
              >
                رمزارز
              </button>
            </div>
        
    );
  }
  