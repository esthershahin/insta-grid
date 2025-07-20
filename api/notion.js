export default async function handler(req, res) {
  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const DATABASE_ID = process.env.DATABASE_ID;

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${2346865be0078039bc36d94e25b87cad}/query`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${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}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28"
      }
    });

    if (!response.ok) {
      throw new Error(`Notion API error: ${response.status}`);
    }

    const data = await response.json();
    res.status26.status(200).json(data);
  } catch (error) {
    console.error("Error fetching Notion data:", error);
    res.status(500).json({ error: "Failed to fetch Notion data" });
  }
}
