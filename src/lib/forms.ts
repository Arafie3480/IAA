export type FormKind = "elite" | "company" | "mentor" | "contact";

export type FormResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: Record<string, string> };

function required(value: FormDataEntryValue | null, label: string) {
  const v = String(value ?? "").trim();
  if (!v) return { error: `${label} الزامی است.`, value: "" };
  return { error: null as string | null, value: v };
}

function email(value: string) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return "ایمیل معتبر نیست.";
  }
  return null;
}

function phone(value: string) {
  const digits = value.replace(/[^\d۰-۹]/g, "");
  if (digits.length < 8) return "شماره تماس معتبر نیست.";
  return null;
}

export function validateForm(kind: FormKind, data: FormData): FormResult {
  const fieldErrors: Record<string, string> = {};

  if (kind === "elite") {
    const fullName = required(data.get("fullName"), "نام و نام خانوادگی");
    if (fullName.error) fieldErrors.fullName = fullName.error;

    const ageRaw = String(data.get("age") ?? "").trim();
    const age = Number(ageRaw);
    if (!ageRaw || Number.isNaN(age) || age < 5 || age > 90) {
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

  return {
    ok: true,
    message: "درخواست شما دریافت شد. به‌زودی با شما تماس می‌گیریم.",
  };
}

export function formDataToObject(data: FormData) {
  const out: Record<string, string> = {};
  data.forEach((value, key) => {
    if (typeof value === "string") out[key] = value;
    else out[key] = value.name;
  });
  return out;
}
