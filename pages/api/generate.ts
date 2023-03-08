export default async function handler(req: any, res: any) {
  const { prompt } = req.body;

  const payload = {
    model: "gpt-3.5-turbo",
    messages: [
      { "role": "system", "content": "You are a helpful assistant that help learning English." },
      { "role": "user", "content": prompt }
    ],
  };

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  const json = await response.json();
  res.status(200).json(json);
}