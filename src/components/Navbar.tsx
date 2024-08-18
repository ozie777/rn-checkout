import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center py-4 border-b-[1px]">
      <div className="flex px-5 items-center justify-between max-w-[1200px] w-full mx-auto">
        <div className="flex items-center space-x-4">
          <Image
            src="/logo.svg"
            alt="Request Network"
            width={100}
            height={200}
          />
        </div>
      </div>
    </nav>
  );
};
