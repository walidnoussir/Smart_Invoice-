import { BadgeDollarSign } from "lucide-react";

function Logo() {
  return (
    <div className="flex gap-2 py-1 px-2">
      <BadgeDollarSign className="bg-blue-500 text-white rounded-md" />
      <p className="text-slate-50 font-bold">Invooisely</p>
    </div>
  );
}

export default Logo;
