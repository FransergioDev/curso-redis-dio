import Mail from "../lib/Mail.js";

export default {
  key: "RegistrationMail",
  options: {
    delay: 5000,
    priority: 3,
  },
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Fransergio DIO <fransergio_test@test.dio.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá ${user.name}, seja bem-vindo a DIO.`,
    });
  },
};
