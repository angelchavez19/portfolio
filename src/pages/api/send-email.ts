import type { APIRoute } from "astro";
import FormData from "form-data";
import Mailgun from "mailgun.js";

export const POST: APIRoute = async ({ params, request }) => {
  if (
    request.headers.get("Content-Type") !== "application/json" ||
    import.meta.env.EMAIL_API_KEY === undefined
  )
    return new Response(null, { status: 400 });

  const body = (await request.json()) as {
    name: string;
    email: string;
    message: string;
  };

  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: "api",
    key: import.meta.env.EMAIL_API_KEY,
  });

  mg.messages
    .create(import.meta.env.EMAIL_DOMAIN, {
      from: `Excited User <${import.meta.env.EMAIL_FROM}>`,
      to: [import.meta.env.MY_EMAIL],
      subject: `New Email FROM '${body.name}' (${body.email})`,
      text: body.message,
      html: `<p>${body.message}</p>`,
    })
    .then((msg) => console.log("Success:", msg))
    .catch((err) => console.log("Error:", err));

  return new Response(null, { status: 200 });
};
