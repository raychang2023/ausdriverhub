export default function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
      <div className="flex items-start gap-3">
        <span className="text-amber-500 text-lg mt-0.5">⚠️</span>
        <div>
          <p className="text-sm text-amber-800">
            <strong>Important Notice:</strong> The content on this page is for general information only. 
            Australian visa policies and requirements are subject to change at any time. 
            Always refer to the{" "}
            <a
              href="https://immi.homeaffairs.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-amber-900 font-medium"
            >
              official Department of Home Affairs website
            </a>{" "}
            for the most current and accurate information.
          </p>
        </div>
      </div>
    </div>
  );
}
