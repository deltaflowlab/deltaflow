"use server";

import { google } from "googleapis";
import { contactFormSchema } from "@/lib/validations/contact";
import { z } from "zod";

export async function sendContactEmail(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    organization: formData.get("organization"),
    objective: formData.get("objective"),
    message: formData.get("message"),
  };

  try {
    const validatedData = contactFormSchema.parse(rawData);

    // Initialize Google Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Append to Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:F", // Assuming default Sheet1 and columns A-F
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Date
            validatedData.name,
            validatedData.email,
            validatedData.organization || "",
            validatedData.objective || "",
            validatedData.message,
          ],
        ],
      },
    });

    return { success: true, message: "Submission received successfully" };
  } catch (error) {
    console.error("Google Sheets API Error:", error);
    if (error instanceof z.ZodError) {
      return { success: false, errors: error.flatten().fieldErrors };
    }
    return { success: false, message: "Failed to save submission. Please try again." };
  }
}
