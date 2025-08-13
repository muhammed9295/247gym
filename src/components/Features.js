import Image from 'next/image';

export default function Features() {
  return (
    <div className="bg-[#0F0E1E] rounded-[15px] p-4 md:p-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-gap">
        {/* Column 1 */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="flex-shrink-0">
            <Image
              src="/images/result.svg"
              alt="Result Icon"
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-sm md:text-base mb-1">Real Results</h3>
            <p className="text-gray-300 font-light text-xs leading-tight">
              Achieve tangible results through scientifically-backed workout programs.
            </p>
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="flex-shrink-0">
            <Image
              src="/images/time.svg"
              alt="Time Icon"
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-sm md:text-base mb-1">Flexible Schedule</h3>
            <p className="text-gray-300 font-light text-xs leading-tight">
              Train on your terms with a schedule that fits your lifestyle.
            </p>
          </div>
        </div>
        
        {/* Column 3 */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="flex-shrink-0">
            <Image
              src="/images/user.svg"
              alt="User Icon"
              width={30}
              height={30}
              className="w-6 h-6 md:w-8 md:h-8 lg:w-[30px] lg:h-[30px]"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-medium text-sm md:text-base mb-1">Professional Trainers</h3>
            <p className="text-gray-300 font-light text-xs leading-tight">
              Guidance from certified trainers who focus on your individual.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 