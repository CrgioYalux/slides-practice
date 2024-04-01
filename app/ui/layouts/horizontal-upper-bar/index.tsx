import SwitchThemeButton from "@/app/ui/components/switch-theme-button";
import { secondary } from "../../fonts";

export default function HorizontalUpperBar(): JSX.Element {
  return (
    <div className={`${secondary.className} h-10 flex w-full has-[:checked]:bg-gray-300 dark:has-[:checked]:bg-gray-800 relative`}>
      <label className="my-auto ml-auto mr-4" htmlFor="HamburgerMenu">
        <div className="flex flex-col gap-1 items-end cursor-pointer">
          <span className="block bg-black dark:bg-white w-5 h-0.5 rounded-full"></span>
          <span className="block bg-black dark:bg-white w-6 h-0.5 rounded-full"></span>
          <span className="block bg-black dark:bg-white w-5 h-0.5 rounded-full"></span>
        </div>
        <input
        className="peer hidden"
        type="checkbox"
        id="HamburgerMenu"
        />
        <div
        className="w-full p-2 hidden peer-checked:flex flex-col gap-2 justify-center rounded-b-3xl md:rounded-b-2xl bg-gray-300 dark:bg-gray-800 absolute right-0 top-full md:max-w-48"
        >
          <div className="px-4 py-2 flex bg-gray-500 text-gray-100 dark:text-gray-800 rounded-full">
            <button className="font-bold">English</button>
            <SwitchThemeButton className="ml-auto text-inherit dark:text-inherit" />
          </div>
          <ul className="px-2 w-full divide-y-2 divide-gray-400 dark:divide-gray-700">
            <li className="py-2 cursor-pointer">About</li>
            <li className="py-2">Experience</li>
            <li className="py-2">Contact</li>
          </ul>
        </div>
      </label>
    </div>
  );
}
