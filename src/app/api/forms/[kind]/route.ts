import { NextResponse } from "next/server";
import {
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

  return NextResponse.json({
    ok: true,
    delivery: "preview",
    message: "اطلاعات فرم معتبر است. این پیش‌نمایش است؛ درخواست ذخیره یا ایمیل نشده است. برای ارسال واقعی از ایمیل تماس استفاده کنید.",
  });
}
