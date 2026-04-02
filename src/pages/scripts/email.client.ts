import emailjs from "@emailjs/browser";
const { Notyf } = await import('notyf');

var notyf = new Notyf();

emailjs.init(import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY);

const form = document.getElementById(
  "contact-form"
) as HTMLFormElement | null;

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
        import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
        form
      );

      form.reset();
      notyf.success("Email enviado");
    } catch (err) {
      notyf.error("Erro ao enviar email");
    }
  });
}
