import Image from "next/image";

export const Laoding = () => {
  return (
    <div className="h-dvh w-full flex gap-y-4 justify-center items-center ">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
