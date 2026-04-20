import Link from "next/link";
import { Visa } from "@/data/types";

export default function VisaCard({ visa }: { visa: Visa }) {
  return (
    <Link href={visa.path} className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200">
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-700 font-bold text-lg">
          {visa.code}
        </span>
        <div>
          <h3 className="font-semibold text-gray-900">{visa.shortName}</h3>
          <p className="text-xs text-gray-500">{visa.code} Visa</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-4">{visa.description}</p>
      <div className="flex flex-wrap gap-2">
        {visa.features.map((f) => (
          <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {f}
          </span>
        ))}
      </div>
    </Link>
  );
}
