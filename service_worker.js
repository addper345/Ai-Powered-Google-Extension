chrome.runtime.onMessage.addListener((message,sender, sendResponse) => {
    (async () => {
        let response = await fetch("https://api.cohere.ai/v1/generate", {
            method: "POST",
            headers: {
            "Authorization": "Bearer 6CV3fQU5f2t0xs6zHyO1ggY3Q3sWg8pNYMeIQqxW",
            "content-type": "application/json"
            },
            body: JSON.stringify({
            prompt: "Summarize the document briefly and reccommend further avenues for research: " + message.input ,
            stream: false
            })
        });
        let data = await response.json();
        if (!response.ok) {
            console.error("Error:", response.status, response.statusText);
            sendResponse("Error" + response.status);
        } else {
            console.log(response.status + "\n" + response.statusText);
            console.log(data.generations?.[0]?.text);
            console.log(data);
            sendResponse(data?.generations?.[0]?.text);
        }

    })();
    return true;
});