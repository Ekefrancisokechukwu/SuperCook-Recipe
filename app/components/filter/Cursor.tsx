import { MouseEvent } from "react";
import { RxCross2 } from "react-icons/rx";

type Props = {
  btnRef: React.LegacyRef<HTMLButtonElement>;
};

const Cursor = ({ btnRef }: Props) => {
  return (
    <button
      ref={btnRef}
      className="text-3xl text-white opacity-0 group-hover:opacity-100   -translate-x-1/2 -translate-y-1/2 pointer-events-none absolute "
    >
      <RxCross2 />
    </button>
  );
};
export default Cursor;
