import { useState, MouseEvent, useRef } from "react";
import { RiEqualizerLine, RiArrowLeftSLine } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import Cursor from "./Cursor";
import { Checkbox } from "@nextui-org/react";
import { sorts } from "@/app/lib/data";

const Filters = () => {
  const [openModal, setOpenModal] = useState(false);
  const ref = useRef<HTMLButtonElement | null>(null!);

  const updateCursorPosition = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    let x = e.clientX;
    let y = e.clientY;
    let cursor = ref.current;

    if (cursor) {
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    }
  };

  return (
    <div className="px-7 py-5">
      <button
        onClick={() => setOpenModal(true)}
        className="flex gap-1 items-center hover:shadow-lg border rounded-md p-2"
      >
        <RiEqualizerLine className="text-xl" />
        <span>filters</span>
      </button>

      <section
        className={`grid place-items-center w-full h-screen transition   z-20 fixed top-0 left-0 ${
          openModal
            ? "scale-100 opacity-100 visible"
            : "scale-50 opacity-0 invisible"
        }`}
      >
        <div
          onMouseMove={updateCursorPosition}
          onClick={() => setOpenModal(false)}
          className="w-screen h-screen absolute group  -z-10 cursor-none  bg-black/50 backdrop-blur-sm "
        >
          <Cursor btnRef={ref} />
        </div>

        <form className="bg-white rounded w-[40rem] h-[30rem] py-3 px-4 flex gap-x-8 items-start">
          <ul className="space-y-3.5">
            <div className="flex items-center gap-x-4">
              <h3 className="font-semibold">sort</h3>
              <select name="" id="">
                <option value="desc">desc</option>
                <option value="asc">asc</option>
              </select>
            </div>
            {sorts.map((sort, i) => {
              return (
                <li key={i}>
                  {/* <Checkbox color="danger" icon={<BiPlus />}>
                    {sort}
                  </Checkbox> */}
                </li>
              );
            })}
          </ul>

          <ul>
            <h3 className="font-semibold">Ready in</h3>
            <li>
              {/* <Checkbox color="danger" icon={<BiPlus />} className="flex">
                <span>
                  <RiArrowLeftSLine />
                </span>
                10
              </Checkbox> */}
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
};
export default Filters;
