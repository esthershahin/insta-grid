export default async function handler(req, res) {
  const NOTION_TOKEN = "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";
  const DATABASE_ID = "2346865be0078039bc36d94e25b87cad";

  const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${NOTION_TOKEN}`,
      "Content-Type": "application/json",
      "Notion-Version": "2022-06-28"
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
