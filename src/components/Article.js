import React from "react";

function Artcile({ title, date="January 1, 1970", preview, key, minutes}) {
  
    function makeEmojiList(minutes) {
        const interval = minutes < 30 ? 5 : 10;
        const emoji = minutes < 30 ? "☕️" : "🍱";
      
        let emojis = "";
        for (let i = 0; i < minutes; i += interval) {
          emojis += emoji;
        }
      
        return emojis;
      }
      const emojis = makeEmojiList(minutes);
  
    return (
    <article key={key}>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview} {emojis} {minutes} min read</p>
      
    </article>
  );
}

export default Artcile;
