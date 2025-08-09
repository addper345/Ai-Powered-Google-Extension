

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
});