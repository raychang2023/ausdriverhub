import guide1 from "@/assets/guide-1.png"
import guide2 from "@/assets/guide-2.png"
import guide3 from "@/assets/guide-3.png"
import guide4 from "@/assets/guide-4.png"
import guide5 from "@/assets/guide-5.png"
import guide6 from "@/assets/guide-6.png"
import guide7 from "@/assets/guide-7.png"
import guide8 from "@/assets/guide-8.png"
import guide9 from "@/assets/guide-9.png"
import guide10 from "@/assets/guide-10.png"
import guide11 from "@/assets/guide-11.png"
import guide12 from "@/assets/guide-12.png"

export type GuideStep = {
  step: number
  title: string
  image: string
  tip?: string
}

export const guideSteps: GuideStep[] = [
  {
    step: 1,
    title: "House/Townhouse - Fully Fenced",
    image: guide1,
    tip: "Please check street names on maps to avoid wrong delivery. Houses with the same number but different street names can be very close.",
  },
  {
    step: 2,
    title: "House/Townhouse - Partially/Unfenced",
    image: guide2,
    tip: "If the front door area is not safe, the driver needs to contact the customer to confirm a safe location. If there is no safe location, the driver needs to perform a Problem Scan and bring the parcel back to DS.",
  },
  {
    step: 3,
    title: "House/Townhouse - No Security Gate",
    image: guide3,
  },
  {
    step: 4,
    title: "Apartment - Single Security Gate",
    image: guide4,
  },
  {
    step: 5,
    title: "Typical Unsafe Locations (1/3)",
    image: guide5,
    tip: "Do not place parcels in the following typical unsafe locations to avoid damage or loss.",
  },
  {
    step: 6,
    title: "Typical Unsafe Locations (2/3)",
    image: guide6,
    tip: "Typical unsafe locations.",
  },
  {
    step: 7,
    title: "Typical Unsafe Locations (3/3)",
    image: guide7,
    tip: "Typical unsafe locations.",
  },
  {
    step: 8,
    title: "Commonly Used Problem Reasons (1/2)",
    image: guide8,
    tip: "If a parcel fails to be delivered, we should immediately select the correct reason, upload proof photos, mark it as a problem parcel, and bring it back to DS the next day.",
  },
  {
    step: 9,
    title: "Commonly Used Problem Reasons (2/2)",
    image: guide9,
  },
  {
    step: 10,
    title: "Wrong Address",
    image: guide10,
    tip: "The following reason requires at least 1 or 2 photos.",
  },
  {
    step: 11,
    title: "Shop Closed",
    image: guide11,
    tip: "The following reason requires at least 1 or 2 photos.",
  },
  {
    step: 12,
    title: "No One at Home, Unsafe for ATL",
    image: guide12,
    tip: "The following reasons require at least 3 photos.",
  },
]
