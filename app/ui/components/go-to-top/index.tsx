import ChevronUp from "@/app/ui/components/icons/chevron-up";

export default function GoToTop() {
    return (
      <a 
      href="#"
      className="fixed bottom-4 left-1/2 translate-x-[-50%] translate-y-[-50%]">
        <ChevronUp 
        className="w-6 box-content p-1.5 border-4 bg-white text-black fill-current border-current rounded-full" 
        />
      </a>
    );
}
