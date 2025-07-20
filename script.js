async function fetchPosts() {
  try {
    const response = await fetch("/api/notion");
    const data = await response.json();
    const container = document.querySelector(".grid");

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
  }
}

fetchPosts();
