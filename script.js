function toggleChat() {
  let chatBox = document.getElementById("chatContainer");
  if (chatBox.style.display === "none" || chatBox.style.display === "") {
    chatBox.style.display = "block"; // Show chatbot
  } else {
    chatBox.style.display = "none"; // Hide chatbot
  }
}
const slider = document.getElementById("slider");
document.querySelector(".scroll-btn.left").addEventListener("click", () => {
  slider.scrollBy({ left: -300, behavior: "smooth" });
});
document.querySelector(".scroll-btn.right").addEventListener("click", () => {
  slider.scrollBy({ left: 300, behavior: "smooth" });
});
// script.js  

// script.js
fetch("http://localhost:5000/news")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector(".news-grid");
    container.innerHTML = "";

    if (data.articles && data.articles.length > 0) {
      data.articles.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `
          <img src="${item.urlToImage || 'https://via.placeholder.com/400x200'}" alt="News Image">
          <div class="news-content">
            <h3>${item.title}</h3>
            <p class="news-date">${new Date(item.publishedAt).toLocaleDateString()}</p>
            <p>${item.description || ''}</p>
            <a href="${item.url}" class="read-more" target="_blank">Read More</a>
          </div>
        `;
        container.appendChild(card);
      });
    } else {
      container.innerHTML = "<p>No news found.</p>";
    }
  })
  .catch((err) => console.error("Error fetching news:", err));
