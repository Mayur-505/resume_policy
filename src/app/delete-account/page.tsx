import Link from "next/link";

export const metadata = {
  title: "Delete Your Account | AI Resume",
  description: "How to permanently delete your AI Resume account and data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-slate-700">
      <h1 className="text-3xl font-bold text-slate-900">Delete Your AI Resume Account</h1>
      <p className="mt-4">
        You can permanently delete your AI Resume account and the data linked to it at any time.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">Option 1: Inside the app</h2>
      <ol className="mt-3 list-decimal space-y-1 pl-6">
        <li>Open the AI Resume app and sign in.</li>
        <li>Go to the Profile tab.</li>
        <li>Tap <strong>Delete Account</strong> and confirm.</li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">Option 2: By email</h2>
      <p className="mt-3">
        Email <a className="text-indigo-600 underline" href="mailto:info@greewebsolutions.com?subject=Delete%20my%20AI%20Resume%20account">info@greewebsolutions.com</a>{" "}
        from the address registered on your account with the subject &quot;Delete my AI Resume account&quot;.
        We will delete your account within 30 days and confirm by email.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">What gets deleted</h2>
      <ul className="mt-3 list-disc space-y-1 pl-6">
        <li>Your account profile (name, email, password hash).</li>
        <li>All resumes and the career data inside them.</li>
        <li>Your job tracker entries and any pending verification codes.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-slate-900">Subscriptions</h2>
      <p className="mt-3">
        Deleting your account does not cancel a Google Play subscription. Cancel it in Google Play &gt; Payments &amp;
        subscriptions to avoid future charges. Purchase records held by Google are governed by Google&apos;s policies.
      </p>

      <p className="mt-10 text-sm">
        See also our <Link className="text-indigo-600 underline" href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </main>
  );
}
