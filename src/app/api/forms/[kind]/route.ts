import { NextResponse } from "next/server";
import {
  formDataToObject,
  validateForm,
  type FormKind,
} from "@/lib/forms";

const allowed: FormKind[] = ["elite", "company", "mentor", "contact"];

export async function POST(
  request: Request,
  context: { params: Promise<{ kind: string }> },
) {
  const { kind: raw } = await context.params;
  const kind = raw as FormKind;

  if (!allowed.includes(kind)) {
    return NextResponse.json(
      { ok: false, message: "مسیر فرم نامعتبر است." },
      { status: 404 },
    );
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, message: "بدنه درخواست نامعتبر است." },
      { status: 400 },
    );
  }

  const result = validateForm(kind, data);
  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }

  const payload = formDataToObject(data);
  // Mock email delivery for the prototype — no SMTP secrets required.
  console.info("[IAA form mock email]", {
    kind,
    to: "info@iaafuture.com",
    payload,
    at: new Date().toISOString(),
  });

  return NextResponse.json(result);
}
