import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("../src/lib/forms.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
});
const { validateForm } = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);

const fixtures = {
  elite: {
    fullName: "متقاضی آزمایشی",
    age: "25",
    achievements: "پروژه علمی",
    motivation: "همکاری علمی و توسعه توانمندی",
    goals: "رشد حرفه‌ای",
    difference: "تجربه اجرایی",
    phone: "09121234567",
    email: "test@example.com",
  },
  company: {
    entityType: "حقوقی",
    intro: "شرکت آزمایشی",
    project: "پروژه پژوهشی",
    budget: "توافقی",
    phone: "02188776655",
    email: "test@example.com",
  },
  mentor: {
    fullName: "راهنمای آزمایشی",
    motivation: "هدایت تیم",
    achievements: "پژوهش علمی",
    phone: "09121234567",
    email: "test@example.com",
  },
  contact: {
    fullName: "پیام آزمایشی",
    message: "سلام",
    email: "test@example.com",
  },
};

function validate(kind, overrides = {}) {
  const data = new FormData();
  for (const [name, value] of Object.entries({ ...fixtures[kind], ...overrides })) {
    if (value !== undefined) data.set(name, value);
  }
  return validateForm(kind, data);
}

function rejectsField(kind, overrides, field) {
  const result = validate(kind, overrides);
  assert.equal(result.ok, false);
  assert.ok(result.fieldErrors?.[field]);
}

for (const [kind, fixture] of Object.entries(fixtures)) {
  test(`${kind}: accepts complete request`, () => assert.equal(validate(kind).ok, true));

  for (const field of Object.keys(fixture)) {
    test(`${kind}: requires ${field}`, () =>
      rejectsField(kind, { [field]: undefined }, field),
    );
  }

  test(`${kind}: rejects invalid email`, () =>
    rejectsField(kind, { email: "invalid-address" }, "email"),
  );

  test(`${kind}: rejects whitespace-only required text`, () => {
    const field = kind === "company" ? "intro" : "fullName";
    rejectsField(kind, { [field]: "   " }, field);
  });

  test(`${kind}: rejects files in required text fields`, () => {
    const field = kind === "company" ? "intro" : "fullName";
    rejectsField(kind, { [field]: new File(["test"], "test.txt") }, field);
  });
}

for (const age of ["10", "35", "۲۵", "٢٥"]) {
  test(`elite: accepts age ${age}`, () => assert.equal(validate("elite", { age }).ok, true));
}

for (const age of ["4", "91", "25.5", "NaN", "Infinity", "0x19", "2e1"]) {
  test(`elite: rejects invalid age ${age}`, () => rejectsField("elite", { age }, "age"));
}

for (const age of ["5", "9", "36", "90"]) {
  test(`elite: age ${age} requires exception`, () =>
    rejectsField("elite", { age }, "ageException"),
  );

  test(`elite: age ${age} accepts justified exception`, () => {
    assert.equal(
      validate("elite", {
        age,
        ageException: "on",
        motivation:
          "با تجربه علمی و اجرایی خود می‌توانم در پیشبرد پروژه‌ها و رشد تیم نقش مؤثری داشته باشم.",
      }).ok,
      true,
    );
  });
}

test("elite: exception requires sufficient explanation", () =>
  rejectsField(
    "elite",
    { age: "40", ageException: "on", motivation: "کوتاه" },
    "motivation",
  ),
);

for (const phone of ["۰۹۱۲۱۲۳۴۵۶۷", "٠٩١٢١٢٣٤٥٦٧", "+98 (912) 123-4567"]) {
  test(`mentor: accepts phone ${phone}`, () =>
    assert.equal(validate("mentor", { phone }).ok, true),
  );
}

for (const phone of ["123", "abcdefgh09121234567", "1234567890123456"]) {
  test(`mentor: rejects phone ${phone}`, () =>
    rejectsField("mentor", { phone }, "phone"),
  );
}

test("contact: optional phone can be blank", () =>
  assert.equal(validate("contact", { phone: " " }).ok, true),
);
test("contact: validates supplied optional phone", () =>
  rejectsField("contact", { phone: "123" }, "phone"),
);
test("contact: rejects a file as optional phone", () =>
  rejectsField("contact", { phone: new File(["test"], "phone.txt") }, "phone"),
);
test("company: accepts individual business", () =>
  assert.equal(validate("company", { entityType: "حقیقی" }).ok, true),
);
test("company: rejects unsupported entity type", () =>
  rejectsField("company", { entityType: "unknown" }, "entityType"),
);
