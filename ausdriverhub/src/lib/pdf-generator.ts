import jsPDF from "jspdf"
import { DAYS_OF_WEEK, DOCUMENT_TYPE_LABELS, type DriverDocument, type DriverRegistration } from "./supabase"

type RGB = [number, number, number]

const BRAND_BLUE: RGB = [26, 54, 93]
const BRAND_ORANGE: RGB = [234, 131, 3]
const LIGHT_GRAY: RGB = [245, 247, 250]
const MED_GRAY: RGB = [108, 117, 135]
const DARK_TEXT: RGB = [24, 35, 50]
const WHITE: RGB = [255, 255, 255]

function setFill(doc: jsPDF, rgb: RGB) {
  doc.setFillColor(rgb[0], rgb[1], rgb[2])
}

function setColor(doc: jsPDF, rgb: RGB) {
  doc.setTextColor(rgb[0], rgb[1], rgb[2])
}

async function imageUrlToBase64(url: string): Promise<string | null> {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onloadend = () => resolve(reader.result as string)
      reader.onerror = () => resolve(null)
      reader.readAsDataURL(blob)
    })
  } catch {
    return null
  }
}

function drawSectionHeader(doc: jsPDF, y: number, text: string): number {
  setFill(doc, BRAND_BLUE)
  doc.rect(14, y, 182, 7, "F")
  setColor(doc, WHITE)
  doc.setFontSize(8)
  doc.setFont("helvetica", "bold")
  doc.text(text, 18, y + 4.8)
  setColor(doc, DARK_TEXT)
  return y + 7
}

function drawField(doc: jsPDF, label: string, value: string, x: number, y: number, width: number): number {
  doc.setFontSize(7)
  doc.setFont("helvetica", "bold")
  setColor(doc, MED_GRAY)
  doc.text(label.toUpperCase(), x, y)
  doc.setFont("helvetica", "normal")
  setColor(doc, DARK_TEXT)
  doc.setFontSize(9)
  const lines = doc.splitTextToSize(value || "—", width - 4)
  doc.text(lines, x, y + 4.5)
  return y + 4.5 + lines.length * 4.5
}

export async function generateDriverPDF(
  registration: DriverRegistration,
  documents: DriverDocument[],
): Promise<Blob> {
  const doc = new jsPDF({ format: "a4", unit: "mm" })
  const pageWidth = 210
  const margin = 14

  setFill(doc, BRAND_BLUE)
  doc.rect(0, 0, pageWidth, 30, "F")

  setFill(doc, BRAND_ORANGE)
  doc.rect(0, 30, pageWidth, 2.5, "F")

  setColor(doc, WHITE)
  doc.setFontSize(18)
  doc.setFont("helvetica", "bold")
  doc.text("AusDriverHub", margin, 14)

  doc.setFontSize(9)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(200, 215, 235)
  doc.text("Driver Onboarding Registration", margin, 21)

  doc.setFontSize(7.5)
  doc.setTextColor(200, 215, 235)
  const submittedDate = new Date(registration.created_at).toLocaleDateString("en-AU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
  doc.text(`Submitted: ${submittedDate}`, pageWidth - margin - doc.getTextWidth(`Submitted: ${submittedDate}`), 21)

  doc.setFontSize(7)
  setColor(doc, MED_GRAY)
  doc.text(`ID: ${registration.id}`, margin, 27.5)

  let y = 38

  y = drawSectionHeader(doc, y, "DRIVER INFORMATION") + 4

  setFill(doc, LIGHT_GRAY)
  doc.roundedRect(margin, y - 2, 182, 36, 2, 2, "F")

  const col1X = margin + 4
  const col2X = margin + 96

  drawField(doc, "Full Name", registration.fullname, col1X, y, 85)
  drawField(doc, "Phone Number", registration.phone, col2X, y, 85)

  y += 15
  drawField(doc, "City / Region", registration.city, col1X, y, 85)
  drawField(doc, "Residential Address", registration.address, col2X, y, 85)

  y += 22

  y = drawSectionHeader(doc, y, "AVAILABILITY") + 4

  setFill(doc, LIGHT_GRAY)
  doc.roundedRect(margin, y - 2, 182, 18, 2, 2, "F")

  const dayBoxW = 24
  const dayBoxH = 10
  const startX = margin + 4
  const dayY = y + 1.5

  DAYS_OF_WEEK.forEach((day, i) => {
    const boxX = startX + i * (dayBoxW + 1.5)
    const isAvailable = registration.availabledays.includes(day)
    if (isAvailable) {
      setFill(doc, BRAND_BLUE)
    } else {
      doc.setFillColor(220, 225, 235)
    }
    doc.roundedRect(boxX, dayY, dayBoxW, dayBoxH, 1.5, 1.5, "F")
    doc.setFontSize(7)
    doc.setFont("helvetica", "bold")
    setColor(doc, isAvailable ? WHITE : MED_GRAY)
    const abbr = day.slice(0, 3)
    doc.text(abbr, boxX + dayBoxW / 2 - doc.getTextWidth(abbr) / 2, dayY + 6.5)
  })

  y += 24

  const license = documents.find((d) => d.documenttype === "license")
  const passport = documents.find((d) => d.documenttype === "passport")
  const vehicles = documents.filter((d) => d.documenttype === "vehicle")
  const idDocs = [license, passport].filter(Boolean) as DriverDocument[]

  const remainingHeight = 283 - y
  const hasVehicles = vehicles.length > 0
  const hasIdDocs = idDocs.length > 0

  let idDocHeight = 0
  let vehicleHeight = 0

  if (hasIdDocs && hasVehicles) {
    idDocHeight = Math.min(55, remainingHeight * 0.55)
    vehicleHeight = remainingHeight - idDocHeight - (hasIdDocs ? 14 : 0) - 14
  } else if (hasIdDocs) {
    idDocHeight = Math.min(65, remainingHeight - 12)
  } else if (hasVehicles) {
    vehicleHeight = remainingHeight - 12
  }

  if (hasIdDocs) {
    y = drawSectionHeader(doc, y, "IDENTITY DOCUMENTS") + 4
    const docW = 85
    const imgH = idDocHeight - 10

    for (let i = 0; i < idDocs.length; i++) {
      const docItem = idDocs[i]
      const docX = margin + i * (docW + 7)

      setFill(doc, LIGHT_GRAY)
      doc.roundedRect(docX, y - 2, docW, idDocHeight, 2, 2, "F")

      doc.setFontSize(7)
      doc.setFont("helvetica", "bold")
      setColor(doc, MED_GRAY)
      doc.text(DOCUMENT_TYPE_LABELS[docItem.documenttype]?.toUpperCase() || "", docX + 3, y + 2.5)

      const imageData = await imageUrlToBase64(docItem.fileurl)
      if (imageData) {
        try {
          doc.addImage(imageData, "JPEG", docX + 3, y + 5, docW - 6, imgH)
        } catch {
          doc.setFontSize(7)
          setColor(doc, MED_GRAY)
          doc.text("Image not available", docX + 3, y + idDocHeight / 2)
        }
      } else {
        doc.setFontSize(7)
        setColor(doc, MED_GRAY)
        doc.text("Image not available", docX + 3, y + idDocHeight / 2)
      }
    }
    y += idDocHeight + 6
  }

  if (hasVehicles) {
    y = drawSectionHeader(doc, y, "VEHICLE PHOTOS") + 4

    const cols = Math.min(3, vehicles.length)
    const vW = (182 - (cols - 1) * 3) / cols
    const rows = Math.ceil(vehicles.length / cols)
    const vH = Math.max(10, (vehicleHeight - (rows - 1) * 4 - rows * 7) / rows)

    for (let i = 0; i < vehicles.length; i++) {
      const col = i % cols
      const row = Math.floor(i / cols)
      const vX = margin + col * (vW + 3)
      const vY = y + row * (vH + 11)

      setFill(doc, LIGHT_GRAY)
      doc.roundedRect(vX, vY - 2, vW, vH + 8, 2, 2, "F")

      const imageData = await imageUrlToBase64(vehicles[i].fileurl)
      if (imageData) {
        try {
          doc.addImage(imageData, "JPEG", vX + 2, vY, vW - 4, vH)
        } catch {
          doc.setFontSize(7)
          setColor(doc, MED_GRAY)
          doc.text("Photo unavailable", vX + 4, vY + vH / 2)
        }
      } else {
        doc.setFontSize(7)
        setColor(doc, MED_GRAY)
        doc.text("Photo unavailable", vX + 4, vY + vH / 2)
      }

      doc.setFontSize(6)
      doc.setFont("helvetica", "normal")
      setColor(doc, MED_GRAY)
      doc.text(`Vehicle Photo ${i + 1}`, vX + 2, vY + vH + 4.5)
    }
  }

  setFill(doc, BRAND_BLUE)
  doc.rect(0, 287, pageWidth, 10, "F")
  doc.setFontSize(7)
  doc.setFont("helvetica", "normal")
  doc.setTextColor(200, 215, 235)
  doc.text("AusDriverHub — Confidential Driver Registration Document", margin, 293)
  doc.text("Page 1 of 1", pageWidth - margin - 18, 293)

  return doc.output("blob")
}
