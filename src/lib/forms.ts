export type FormKind = "elite" | "company" | "mentor" | "contact";

export type FormResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

function required(value: FormDataEntryValue | null, label: string) {
  const v = typeof value === "string" ? value.trim() : "";
  if (!v) return { error: `${label} الزامی است.`, value: "" };
  return { error: null as string | null, value: v };
}

function email(value: string) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "ایمیل معتبر نیست.";
  }
  return null;
}

function normalizeDigits(value: string) {
  return value
    .replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 0x06f0))
    .replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 0x0660));
}

function phone(value: string) {
  const normalized = normalizeDigits(value);
  const digits = normalized.replace(/\D/g, "");
  if (!/^\+?[\d\s()-]+$/.test(normalized) || digits.length < 8 || digits.length > 15) {
    return "شماره تماس معتبر نیست.";
  }
  return null;
}

export function validateForm(kind: FormKind, data: FormData): FormResult {
  const fieldErrors: Record<string, string> = {};

  if (kind === "elite") {
    const fullName = required(data.get("fullName"), "نام و نام خانوادگی");
    if (fullName.error) fieldErrors.fullName = fullName.error;

    const ageValue = data.get("age");
    const ageRaw = typeof ageValue === "string" ? normalizeDigits(ageValue.trim()) : "";
    const age = Number(ageRaw);
    if (!/^\d+$/.test(ageRaw) || !Number.isInteger(age) || age < 5 || age > 90) {
      fieldErrors.age = "سن معتبر الزامی است.";
    } else if ((age < 10 || age > 35) && data.get("ageException") !== "on") {
      fieldErrors.ageException =
        "برای سن خارج از ۱۰–۳۵، تیک استثنا و توضیح در انگیزه الزامی است.";
    }

    const achievements = required(data.get("achievements"), "دستاوردها");
    if (achievements.error) fieldErrors.achievements = achievements.error;

    const motivation = required(data.get("motivation"), "انگیزه پیوستن");
    if (motivation.error) fieldErrors.motivation = motivation.error;
    else if (
      !Number.isNaN(age) &&
      (age < 10 || age > 35) &&
      motivation.value.length < 40
    ) {
      fieldErrors.motivation =
        "برای استثنای سنی، در انگیزه توضیح دهید چرا به تیم نیاز دارید.";
    }

    const goals = required(data.get("goals"), "اهداف آینده");
    if (goals.error) fieldErrors.goals = goals.error;

    const difference = required(data.get("difference"), "چرا متفاوت‌ام");
    if (difference.error) fieldErrors.difference = difference.error;

    const phoneVal = required(data.get("phone"), "تلفن");
    if (phoneVal.error) fieldErrors.phone = phoneVal.error;
    else {
      const err = phone(phoneVal.value);
      if (err) fieldErrors.phone = err;
    }

    const emailVal = required(data.get("email"), "ایمیل");
    if (emailVal.error) fieldErrors.email = emailVal.error;
    else {
      const err = email(emailVal.value);
      if (err) fieldErrors.email = err;
    }
  }

  if (kind === "company") {
    const entityType = required(data.get("entityType"), "نوع شخصیت");
    if (entityType.error) fieldErrors.entityType = entityType.error;
    else if (!["حقوقی", "حقیقی"].includes(entityType.value)) {
      fieldErrors.entityType = "نوع شخصیت معتبر نیست.";
    }

    const intro = required(data.get("intro"), "معرفی");
    if (intro.error) fieldErrors.intro = intro.error;

    const project = required(data.get("project"), "شرح پروژه");
    if (project.error) fieldErrors.project = project.error;

    const budget = required(data.get("budget"), "پیشنهاد مالی");
    if (budget.error) fieldErrors.budget = budget.error;

    const phoneVal = required(data.get("phone"), "تلفن");
    if (phoneVal.error) fieldErrors.phone = phoneVal.error;
    else {
      const err = phone(phoneVal.value);
      if (err) fieldErrors.phone = err;
    }

    const emailVal = required(data.get("email"), "ایمیل");
    if (emailVal.error) fieldErrors.email = emailVal.error;
    else {
      const err = email(emailVal.value);
      if (err) fieldErrors.email = err;
    }
  }

  if (kind === "mentor") {
    const fullName = required(data.get("fullName"), "مشخصات");
    if (fullName.error) fieldErrors.fullName = fullName.error;

    const motivation = required(data.get("motivation"), "انگیزه هدایت تیم");
    if (motivation.error) fieldErrors.motivation = motivation.error;

    const achievements = required(data.get("achievements"), "دستاوردها");
    if (achievements.error) fieldErrors.achievements = achievements.error;

    const phoneVal = required(data.get("phone"), "تلفن");
    if (phoneVal.error) fieldErrors.phone = phoneVal.error;
    else {
      const err = phone(phoneVal.value);
      if (err) fieldErrors.phone = err;
    }

    const emailVal = required(data.get("email"), "ایمیل");
    if (emailVal.error) fieldErrors.email = emailVal.error;
    else {
      const err = email(emailVal.value);
      if (err) fieldErrors.email = err;
    }
  }

  if (kind === "contact") {
    const fullName = required(data.get("fullName"), "نام");
    if (fullName.error) fieldErrors.fullName = fullName.error;

    const message = required(data.get("message"), "پیام");
    if (message.error) fieldErrors.message = message.error;

    const phoneValue = data.get("phone");
    if (phoneValue !== null && (typeof phoneValue !== "string" || phoneValue.trim())) {
      const phoneError = typeof phoneValue === "string" ? phone(phoneValue.trim()) : "شماره تماس معتبر نیست.";
      if (phoneError) fieldErrors.phone = phoneError;
    }

    const emailVal = required(data.get("email"), "ایمیل");
    if (emailVal.error) fieldErrors.email = emailVal.error;
    else {
      const err = email(emailVal.value);
      if (err) fieldErrors.email = err;
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: "لطفاً خطاهای فرم را برطرف کنید.",
      fieldErrors,
    };
  }

  const successByKind: Record<FormKind, string> = {
    elite:
      "اعلام آمادگی دریافت شد. مسیر تا مصاحبه مدیرعامل پس از بررسی اولیه ادامه پیدا می‌کند.",
    company:
      "درخواست همکاری دریافت شد. در صورت تأیید، به متخصص مرتبط در شبکه IAA وصل می‌شوید.",
    mentor: "اعلام آمادگی هدایت تیم دریافت شد. به‌زودی برای هماهنگی تماس می‌گیریم.",
    contact: "پیام دریافت شد. در اسرع وقت پاسخ می‌دهیم.",
  };

  return {
    ok: true,
    message: successByKind[kind],
  };
}
