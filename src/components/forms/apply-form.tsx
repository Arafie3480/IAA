"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { FormKind } from "@/lib/forms";
import { company, eliteProcess } from "@/lib/company";

type Field = {
  name: string;
  label: string;
  type?:
    | "text"
    | "email"
    | "tel"
    | "number"
    | "textarea"
    | "select"
    | "checkbox";
  placeholder?: string;
  hint?: string;
  options?: { value: string; label: string }[];
  required?: boolean;
};

const fieldsByKind: Record<FormKind, Field[]> = {
  elite: [
    { name: "fullName", label: "نام و نام خانوادگی", required: true },
    {
      name: "age",
      label: "سن",
      type: "number",
      required: true,
      hint: `بازه اصلی ${company.ageRange}.`,
    },
    {
      name: "ageException",
      label: "خارج از بازه سنی هستم و درخواست استثنا دارم",
      type: "checkbox",
      hint: "اگر سن شما ۱۰–۳۵ نیست، این گزینه را بزنید و در انگیزه دلیل را بنویسید.",
    },
    {
      name: "achievements",
      label: "دستاوردها",
      type: "textarea",
      required: true,
      placeholder: "چه چیزی ساخته‌اید، حل کرده‌اید یا تغییر داده‌اید؟",
    },
    {
      name: "motivation",
      label: "انگیزه پیوستن",
      type: "textarea",
      required: true,
    },
    {
      name: "goals",
      label: "اهداف آینده",
      type: "textarea",
      required: true,
    },
    {
      name: "difference",
      label: "چرا متفاوت‌ام",
      type: "textarea",
      required: true,
      placeholder: "نقطه تمایز شما چیست؟ معدل یا مدرک الزامی نیست.",
    },
    { name: "phone", label: "تلفن", type: "tel", required: true },
    { name: "email", label: "ایمیل", type: "email", required: true },
  ],
  company: [
    {
      name: "entityType",
      label: "نوع شخصیت",
      type: "select",
      required: true,
      options: [
        { value: "حقوقی", label: "حقوقی / شرکت" },
        { value: "حقیقی", label: "حقیقی / کسب‌وکار" },
      ],
    },
    {
      name: "intro",
      label: "معرفی سازمان",
      type: "textarea",
      required: true,
    },
    {
      name: "project",
      label: "شرح پروژه قابل‌واگذاری",
      type: "textarea",
      required: true,
      placeholder: "مشکل علمی یا فنی که می‌خواهید به متخصص IAA بسپارید",
    },
    {
      name: "budget",
      label: "پیشنهاد مالی",
      type: "textarea",
      required: true,
    },
    { name: "phone", label: "تلفن", type: "tel", required: true },
    { name: "email", label: "ایمیل", type: "email", required: true },
  ],
  mentor: [
    {
      name: "fullName",
      label: "مشخصات",
      required: true,
      placeholder: "نام، حوزه تخصص، سابقه",
    },
    {
      name: "motivation",
      label: "انگیزه هدایت تیم",
      type: "textarea",
      required: true,
    },
    {
      name: "achievements",
      label: "دستاوردها",
      type: "textarea",
      required: true,
    },
    { name: "phone", label: "تلفن", type: "tel", required: true },
    { name: "email", label: "ایمیل", type: "email", required: true },
  ],
  contact: [
    { name: "fullName", label: "نام", required: true },
    { name: "email", label: "ایمیل", type: "email", required: true },
    { name: "phone", label: "تلفن (اختیاری)", type: "tel" },
    {
      name: "message",
      label: "پیام",
      type: "textarea",
      required: true,
    },
  ],
};

const titles: Record<FormKind, string> = {
  elite: "ارسال اعلام آمادگی",
  company: "درخواست همکاری شرکتی",
  mentor: "اعلام آمادگی هدایت تیم",
  contact: "ارسال پیام",
};

type ApplyFormProps = {
  kind: FormKind;
};

export function ApplyForm({ kind }: ApplyFormProps) {
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setStatus("loading");
    setMessage("");
    setFieldErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`/api/forms/${kind}`, {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as {
        ok: boolean;
        message: string;
        fieldErrors?: Record<string, string>;
        delivery?: "preview";
      };

      if (!res.ok || !json.ok) {
        setStatus("error");
        setMessage(json.message || "ارسال ناموفق بود.");
        setFieldErrors(json.fieldErrors ?? {});
        const firstInvalidField = Object.keys(json.fieldErrors ?? {})[0];
        if (firstInvalidField) {
          const input = form.elements.namedItem(firstInvalidField);
          if (input instanceof HTMLElement) input.focus();
        }
        return;
      }

      setStatus("success");
      setMessage(json.message);
      if (json.delivery !== "preview") form.reset();
    } catch {
      setStatus("error");
      setMessage("خطای شبکه. دوباره تلاش کنید.");
    } finally {
      submitting.current = false;
    }
  }

  const fields = fieldsByKind[kind];

  return (
    <div className="w-full max-w-2xl">
      <p id={`${kind}-preview`} className="mb-6 rounded-md border border-[var(--border)] bg-[var(--gold-soft)] px-4 py-3 text-sm text-[var(--fg-muted)]">
        فرم پیش‌نمایش است و اطلاعات را ذخیره یا ایمیل نمی‌کند. برای ارسال درخواست یا رزومه، به{" "}
        <a href={`mailto:${company.email}`} className="text-[var(--accent)] underline" dir="ltr">
          {company.email}
        </a>{" "}
        ایمیل بزنید.
      </p>
      <form onSubmit={onSubmit} className="space-y-5" aria-busy={status === "loading"} aria-describedby={`${kind}-preview`} noValidate>
        {fields.map((field) => (
          <div key={field.name}>
            {field.type !== "checkbox" ? (
              <Label htmlFor={`${kind}-${field.name}`}>
                {field.label}
                {field.required ? (
                  <span className="ms-1 text-[var(--danger)]">*</span>
                ) : null}
              </Label>
            ) : null}

            {field.type === "checkbox" ? (
              <label className="mt-2 flex cursor-pointer items-start gap-3 text-sm text-[var(--fg-muted)]">
                <input
                  id={`${kind}-${field.name}`}
                  name={field.name}
                  type="checkbox"
                  className="mt-1 size-4 accent-[var(--accent)]"
                  aria-invalid={Boolean(fieldErrors[field.name])}
                  aria-describedby={`${kind}-${field.name}-help`}
                />
                <span>{field.label}</span>
              </label>
            ) : field.type === "textarea" ? (
              <Textarea
                id={`${kind}-${field.name}`}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                aria-invalid={Boolean(fieldErrors[field.name])}
                aria-describedby={`${kind}-${field.name}-help`}
              />
            ) : field.type === "select" ? (
              <select
                id={`${kind}-${field.name}`}
                name={field.name}
                required={field.required}
                aria-invalid={Boolean(fieldErrors[field.name])}
                aria-describedby={`${kind}-${field.name}-help`}
                className="flex h-11 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 text-sm text-[var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                defaultValue=""
              >
                <option value="" disabled>
                  انتخاب کنید
                </option>
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <Input
                id={`${kind}-${field.name}`}
                name={field.name}
                type={field.type ?? "text"}
                placeholder={field.placeholder}
                required={field.required}
                aria-invalid={Boolean(fieldErrors[field.name])}
                aria-describedby={`${kind}-${field.name}-help`}
                min={field.name === "age" ? 5 : undefined}
                max={field.name === "age" ? 90 : undefined}
                step={field.name === "age" ? 1 : undefined}
              />
            )}

            <div id={`${kind}-${field.name}-help`}>
              {field.hint ? (
                <p className="mt-1.5 text-xs text-[var(--fg-muted)]">{field.hint}</p>
              ) : null}
              {fieldErrors[field.name] ? (
                <p className="mt-1.5 text-xs text-[var(--danger)]" role="alert">
                  {fieldErrors[field.name]}
                </p>
              ) : null}
            </div>
          </div>
        ))}

        {kind === "company" ? (
          <p className="rounded-md border border-[var(--border)] bg-[var(--gold-soft)] px-4 py-3 text-sm text-[var(--fg-muted)]">
            در صورت تأیید درخواست، به متخصص مرتبط در شبکه IAA وصل می‌شوید.
          </p>
        ) : null}

        {kind === "elite" ? (
          <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-4">
            <p className="mb-3 text-sm font-medium text-[var(--fg)]">
              مسیر پس از ارسال
            </p>
            <ol className="space-y-2 text-sm text-[var(--fg-muted)]">
              {eliteProcess.map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="font-display text-[var(--accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ) : null}

        {status === "idle" && fields.length === 0 ? (
          <p className="text-sm text-[var(--fg-muted)]">فرمی برای نمایش نیست.</p>
        ) : null}

        {message ? (
          <p
            role="status"
            className={
              status === "success"
                ? "rounded-md border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-4 py-3 text-sm text-[var(--accent)]"
                : "rounded-md border border-[var(--danger)]/30 bg-[rgba(229,107,107,0.1)] px-4 py-3 text-sm text-[var(--danger)]"
            }
          >
            {message}
          </p>
        ) : null}

        <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
          {status === "loading" ? "در حال ارسال…" : titles[kind]}
        </Button>
      </form>
    </div>
  );
}
