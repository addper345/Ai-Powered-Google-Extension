//   document.getElementById("ask").addEventListener("click", async () => {
//   const inputText = document.getElementById("input").value;
//   const output = document.getElementById("output");
//   output.textContent = "Thinking...";

//   try {
//     const res = await fetch("https://api.openai.com/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer YOUR_API_KEY_HERE",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         model: "gpt-4",
//         messages: [{ role: "user", content: inputText }]
//       })
//     });

//     const data = await res.json();
//     const advice = data.choices?.[0]?.message?.content;
//     output.textContent = advice || "No advice found.";
//   } catch (err) {
//     console.error(err);
//     output.textContent = "Error getting advice.";
//   }
// });

document.getElementById("ask").addEventListener("click", () => {
    const inputText = document.getElementById("input").value;
    const output = document.getElementById("output");
    output.textContent = "Thinking...";
    (async () => {
        chrome.runtime.sendMessage({
            input: inputText 
        }, (text) => {output.textContent = text});
    })();
    return true;
})
