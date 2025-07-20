async function fetchPosts() {
  try {
    const response = await fetch("/api/notion");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    const container = document.querySelector(".grid");

    if (!data.results || !data.results.length) {
      container.innerHTML = "<p>No posts found in Notion database.</p>";
      return;
    }

    data.results.forEach(page => {
      const title = page.properties.Name.title[0]?.plain_text || "No title";
      const imageObj = page.properties.Image.files?.[0];
      const imageUrl = imageObj?.file?.url || imageObj?.external?.url || "";

      if (imageUrl) {
        const item = document.createElement("div");
        item.className = "grid-item";
        item.innerHTML = `<img src="${imageUrl}" alt="${title}" />`;
        container.appendChild(item);
      }
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    document.querySelector(".grid").innerHTML = "<p>Failed to load posts. Please try again later.</p>";
  }
}

fetchPosts();
